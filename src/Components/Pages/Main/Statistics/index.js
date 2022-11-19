import React from 'react'

import { Text } from 'Components/UI'
import { Factory, HourglassHigh, HouseLine, UsersThree } from 'phosphor-react'

import { Card, Container, Content, IconHolder } from './styles'

const CARDS = [
  {
    icon: <HourglassHigh />,
    title: '15',
    text: 'Лет на рынке',
  },
  {
    icon: <Factory />,
    title: '3',
    text: 'Фабрики',
  },
  {
    icon: <HouseLine />,
    title: '42',
    text: 'Сдано объектов',
  },
  {
    icon: <UsersThree />,
    title: '25',
    text: 'Сотрудников',
  },
]

function Statistics() {
  return (
    <Container>
      <Content>
        {CARDS.map(card => (
          <Card key={card.text}>
            <IconHolder>{card.icon}</IconHolder>
            <Text display1 heading mb={1}>
              {card.title}
            </Text>
            <Text body subHeader3>
              {card.text}
            </Text>
          </Card>
        ))}
      </Content>
    </Container>
  )
}

export default Statistics
