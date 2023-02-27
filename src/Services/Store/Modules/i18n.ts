import { StoreonModule } from 'storeon'

import isEqual from 'lodash/isEqual'

import { Language } from 'Constants/ids'
import { DEFAULT_STATES, KEY_I18N } from 'Constants/store'

const KEY = KEY_I18N

interface StateValues {
  locale?: Language
}

interface State {
  [KEY]: StateValues
}

interface Events {
  'i18n/set': StateValues
}

export const I18N_DEFAULTS = {
  locale: Language.Ru,
}

const i18nState: StoreonModule<State, Events> = store => {
  store.on('@init', () => ({ [KEY]: DEFAULT_STATES.KEY_I18N }))

  store.on('i18n/set', (state, variables) => {
    const nextI18n = { ...state[KEY], ...variables }

    if (isEqual(nextI18n, state[KEY])) return null

    // i18n.locale = nextI18n.locale

    return { [KEY]: nextI18n }
  })
}

export default i18nState
export { type Events, type State }
