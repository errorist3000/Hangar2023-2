import React from 'react'

import { Text } from 'Components/UI'
import { DesktopTower, Factory, Handshake, HouseLine } from 'phosphor-react'

import { Card, Container, Content, IconHolder } from './styles'

const ICON_WEIGHT = 'regular'

const CARDS = [
  {
    title: 'Проектирование',
    text: 'Быстро и эффективно спроектируем здание удовлетворяющее Вашим требованиям',
    icon: <DesktopTower weight={ICON_WEIGHT} />,
  },
  {
    title: 'Изготовление',
    text: 'Качественное производство продукции - наша главная цель. Изготовление каркасов и ограждений',
    icon: <Factory weight={ICON_WEIGHT} />,
  },
  {
    title: 'Монтаж',
    text: 'Комплексный подход к проектированию и производству - это высокие скорость и качество при монтаже',
    icon: <HouseLine weight={ICON_WEIGHT} />,
  },
  {
    title: 'Цены',
    text: 'Наш подход к формированию цены, надеемся, Вас приятно удивит. Попробуйте наш калькулятор или оставьте заявку',
    icon: <Handshake weight={ICON_WEIGHT} />,
  },
]

function Steps() {
  return (
    <Container>
      <Content>
        {CARDS.map(card => (
          <Card key={card.title}>
            <IconHolder mb={5}>{card.icon}</IconHolder>
            <Text heading mb={2} subHeader2>
              {card.title}
            </Text>
            <Text body body4>
              {card.text}
            </Text>
          </Card>
        ))}
      </Content>
    </Container>
  )
}

export default Steps
