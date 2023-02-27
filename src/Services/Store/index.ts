import { persistState as persistor } from '@storeon/localstorage'
import { createStoreon } from 'storeon'
import { storeonDevtools } from 'storeon/devtools'

import { LOCAL_STORAGE } from 'Constants/ids'
import { KEY_I18N, KEY_POLICY_ACCEPTED } from 'Constants/store'

import Utils from 'Services/Utils'

import {
  I18N_DEFAULTS,
  i18nModule,
  POLICY_DEFAULTS,
  policyModule,
} from './Modules'

export const STORE_CLEAR = 'clear'

export function createStore() {
  const modules = [
    i18nModule,
    policyModule,
    persistor([KEY_I18N, KEY_POLICY_ACCEPTED], { key: LOCAL_STORAGE.STORE }),

    process.env.NEXT_PUBLIC_NODE_ENV !== 'production' && storeonDevtools,
  ]

  // @ts-ignore
  const store = createStoreon(modules)

  Utils.Shared.setStore(store)

  // @ts-ignore
  store.on(STORE_CLEAR, state => ({
    ...state,
    [KEY_I18N]: I18N_DEFAULTS,
    [KEY_POLICY_ACCEPTED]: POLICY_DEFAULTS,
  }))

  return store
}
