import React from 'react'
import { useTranslation } from 'react-i18next'

import { Text } from 'Components/UI'
import { DesktopTower, Factory, Handshake, HouseLine } from 'phosphor-react'

import { Card, Container, Content, IconHolder } from './styles'

const ICON_WEIGHT = 'regular'

function Steps() {
  const { t } = useTranslation('translation', { keyPrefix: 'pages.main.steps' })

  const cards = [
    {
      title: t('s1title'),
      text: t('s1text'),
      icon: <DesktopTower weight={ICON_WEIGHT} />,
    },
    {
      title: t('s2title'),
      text: t('s2text'),
      icon: <Factory weight={ICON_WEIGHT} />,
    },
    {
      icon: <HouseLine weight={ICON_WEIGHT} />,
    },
    {
      icon: <Handshake weight={ICON_WEIGHT} />,
    },
  ]

  return (
    <Container>
      <Content>
        {cards.map(card => (
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
