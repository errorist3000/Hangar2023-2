import { StoreonModule } from 'storeon'

import { DEFAULT_STATES, KEY_POLICY_ACCEPTED } from 'Constants/store'

const KEY = KEY_POLICY_ACCEPTED

interface State {
  [KEY]: boolean
}

interface Events {
  'policy/set': boolean
}

export const POLICY_DEFAULTS = {
  accepted: false,
}

const PolicyState: StoreonModule<State, Events> = store => {
  store.on('@init', () => ({ [KEY]: DEFAULT_STATES.KEY_POLICY_ACCEPTED }))

  store.on('policy/set', (state, value) => {
    return { [KEY]: value }
  })
}

export default PolicyState
export { type Events, type State }
