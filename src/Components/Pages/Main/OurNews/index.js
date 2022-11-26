import React from 'react'
import { useTranslation } from 'react-i18next'

import { OurNewsPrewiewImage, partnershipImage } from 'Assets/Images'
import { Column, Image, Row, Text } from 'Components/UI'
import { LANDING_SECTION_ID } from 'Constants/ids'
import { Calendar } from 'phosphor-react'

import { Card, Container, Content } from './styles'

function OurNews() {
  const { t } = useTranslation('translation', {
    keyPrefix: 'pages.main.ourNews',
  })

  const CARDS = [
    {
      image: OurNewsPrewiewImage,
      title: 'ТЕПЛЫЙ АНГАР ДЛЯ ХРАНЕНИЯ ТЕХНИКИ',
      date: '25.06.1975',
      text: 'Сдали заказчику ангар из сендвич-панелей PIR в деревне назарово, Истринского р-на, МО',
      subText: 'Размеры - 18 × 48 × 5 метров',
    },
    {
      image: OurNewsPrewiewImage,
      title: 'ТЕПЛЫЙ АНГАР ДЛЯ ХРАНЕНИЯ ТЕХНИКИ',
      date: '25.06.1975',
      text: 'Сдали заказчику ангар из сендвич-панелей PIR в деревне назарово, Истринского р-на, МО',
      subText:
        'Размеры - 18 × 48 × 5 метров vxfvdfvdf dfvdfvdfv fvdfvdfvdfv dfdfvdfdfv',
    },
    {
      image: OurNewsPrewiewImage,
      title: 'ТЕПЛЫЙ АНГАР ДЛЯ ХРАНЕНИЯ ТЕХНИКИ',
      date: '25.06.1975',
      text: 'Сдали заказчику ангар из сендвич-панелей PIR в деревне назарово, Истринского р-на, МО',
      subText: 'Размеры - 18 × 48 × 5 метров',
    },
  ]

  return (
    <Container>
      <Content id={LANDING_SECTION_ID.news}>
        <Text h3 heading mb={3}>
          {t('header')}
        </Text>
        <Text body caption1 mb={10}>
          {t('subHeader')}
        </Text>
        <Row gap={20}>
          {CARDS.map(card => (
            <Card key={card.subtext}>
              <Image alt={partnershipImage.alt} src={card.image.src} />
              <Column fullHeight px={3} py={2}>
                <Text heading mb={2} subHeader3>
                  {card.title}
                </Text>
                <Row mb={4}>
                  <Calendar />
                  <Text caption2 muted>
                    {card.date}
                  </Text>
                </Row>
                <Column fullHeight spaceBetween>
                  <Text body body3 mb={3}>
                    {card.text}
                  </Text>
                  <Text body caption1>
                    {card.subText}
                  </Text>
                </Column>
              </Column>
            </Card>
          ))}
        </Row>
      </Content>
    </Container>
  )
}

export default OurNews
