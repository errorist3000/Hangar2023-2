import React, { useMemo } from 'react'
import Highlight from 'react-highlight'

import { useQuery } from '@apollo/client'

import { Button, Loader, Text } from 'Components/UI'

import { usePolicy } from 'Hooks'

import policyQuery from 'Services/DatoCMS/Queries/policy.graphql'

import { Container } from './styles'

function PrivacyPolicy() {
  const { data: privacyPolicyData, loading } =
    useQuery<DatoQueryData<'privacyPolicy'>>(policyQuery)

  const { setPolicy, isAccepted } = usePolicy()

  const data = privacyPolicyData?.privacyPolicy

  const text = useMemo(() => {
    if (!data) return null

    return data.body
  }, [data])

  if (loading) return <Loader />

  return (
    <Container>
      <Text as={'h2'} center h3 heading mb={5}>
        {data?.title}
      </Text>
      <Highlight innerHTML>{text}</Highlight>
      <Button disabled={isAccepted} mt={5} onClick={() => setPolicy(true)}>
        Принимаю
      </Button>
    </Container>
  )
}

export default PrivacyPolicy
