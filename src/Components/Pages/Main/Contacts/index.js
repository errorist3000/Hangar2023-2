import React from 'react'
import { useTranslation } from 'react-i18next'

import { Column, Row, Text } from 'Components/UI'
import { LANDING_SECTION_ID } from 'Constants/ids'
import { EnvelopeSimple, PhoneCall } from 'phosphor-react'

import { Card, Container, Content, IconHolder } from './styles'

function Contacts() {
  const { t } = useTranslation('translation', {
    keyPrefix: 'pages.main.contacts',
  })
  const CARDS = [
    {
      icon: <PhoneCall />,
      title: t('s1title'),
      text: t('s1text'),
    },
    {
      icon: <EnvelopeSimple />,
      title: t('s2title'),
      text: t('s2text'),
    },
  ]
  return (
    <Container>
      <Content id={LANDING_SECTION_ID.contacts}>
        <Column>
          <Text h3 heading mb={9}>
            {t('header')}
          </Text>
          <Row gap={200} justifyCenter>
            {CARDS.map(card => (
              <Card key={card.text}>
                <IconHolder mb={1}>{card.icon}</IconHolder>
                <Text fontSize={6} heading mb={6} subHeader1>
                  {card.title}
                </Text>
                <Text action1 body>
                  {card.text}
                </Text>
              </Card>
            ))}
          </Row>
        </Column>
      </Content>
    </Container>
  )
}

export default Contacts
