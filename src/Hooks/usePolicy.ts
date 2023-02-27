import { useCallback } from 'react'

import { useStoreon } from 'storeon/react'

import { KEY_POLICY_ACCEPTED } from 'Constants/store'

import { Events, State } from 'Services/Store/Modules/policy'

function usePolicy() {
  const { [KEY_POLICY_ACCEPTED]: isAccepted, dispatch } = useStoreon<
    State,
    Events
  >(KEY_POLICY_ACCEPTED)

  const setPolicy = useCallback(
    (accepted: boolean) => {
      dispatch('policy/set', accepted)
    },
    [dispatch],
  )

  return { setPolicy, isAccepted }
}

export default usePolicy
