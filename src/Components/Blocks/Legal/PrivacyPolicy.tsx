import React, { useCallback, useMemo } from 'react'
import Highlight from 'react-highlight'

import { useQuery } from '@apollo/client'

import { Button, Loader, Row, Text } from 'Components/UI'
import CloseButton from 'Components/UI/CloseButton'

import { usePolicy } from 'Hooks'

import policyQuery from 'Services/DatoCMS/Queries/policy.graphql'

import { Container } from './styles'

type Props = {
  onClose?: () => void
}

function PrivacyPolicy({ onClose }: Props) {
  const { data: privacyPolicyData, loading } =
    useQuery<DatoQueryData<'privacyPolicy'>>(policyQuery)

  const { setPolicy, isAccepted } = usePolicy()

  const data = privacyPolicyData?.privacyPolicy

  const text = useMemo(() => {
    if (!data) return null

    return data.body
  }, [data])

  const handleAcceptClick = useCallback(() => {
    setPolicy(true)
    onClose?.()
  }, [onClose, setPolicy])

  if (loading) return <Loader />

  return (
    <Container>
      <Row fullWidth justifyEnd>
        <CloseButton onClick={onClose} />
      </Row>
      <Text as={'h2'} center h3 heading mb={5}>
        {data?.title}
      </Text>
      <Highlight innerHTML>{text}</Highlight>
      <Row>
        <Button disabled={isAccepted} mt={5} onClick={handleAcceptClick}>
          Принимаю
        </Button>
      </Row>
    </Container>
  )
}

export default PrivacyPolicy
