import React from 'react'

import { Column, Row, Text } from 'Components/UI'
import { EnvelopeSimple, PhoneCall } from 'phosphor-react'

import { Card, Container, Content, IconHolder } from './styles'

const CARDS = [
  {
    icon: <PhoneCall />,
    title: 'Позвоните нам',
    text: '+7(495)103-47-18 +7(495)103-47-18 +7(495)103-47-18',
  },
  {
    icon: <EnvelopeSimple />,
    title: 'Напишите нам',
    text: 'post@angarpro.com market@angarpro.com progect@angarpro.com',
  },
]

function Contacts() {
  return (
    <Container>
      <Content>
        <Column>
          <Text h3 heading mb={9}>
            КАК С НАМИ СВЯЗАТЬСЯ
          </Text>
          <Row>
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
