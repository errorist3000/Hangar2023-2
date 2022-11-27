import React from 'react'
import { useTranslation } from 'react-i18next'

import { statisticsBgImage } from 'Assets/Images'
import { Text } from 'Components/UI'
import { Factory, HourglassHigh, HouseLine, UsersThree } from 'phosphor-react'

import { Card, Container, Content, IconHolder, StyledImage } from './styles'

function Statistics() {
  const { t } = useTranslation('translation', {
    keyPrefix: 'pages.main.statistics',
  })

  const CARDS = [
    {
      icon: <HourglassHigh />,
      title: 15,
      text: t('s1text'),
    },
    {
      icon: <Factory />,
      title: 10,
      text: t('s2text'),
    },
    {
      icon: <HouseLine />,
      title: 12,
      text: t('s3text'),
    },
    {
      icon: <UsersThree />,
      title: 20,
      text: t('s4text'),
    },
  ]

  return (
    <Container>
      <StyledImage src={statisticsBgImage.src} />
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
