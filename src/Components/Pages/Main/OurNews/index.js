import React from 'react'
import { useTranslation } from 'react-i18next'

import { OurNewsPrewiewImage, partnershipImage } from 'Assets/Images'
import { Column, Image, Row, Text } from 'Components/UI'
import { LANDING_SECTION_ID } from 'Constants/ids'
import { Calendar } from 'phosphor-react'

import { Card, Container, Content, ImageHolder } from './styles'

function OurNews() {
  const { t } = useTranslation('translation', {
    keyPrefix: 'pages.main.ourNews',
  })

  const CARDS = [
    {
      image: OurNewsPrewiewImage,
      title: t('s1title'),
      subTitle: t('s1subTitle'),
      text: t('s1text'),
      subText: t('s1subText'),
    },
    {
      image: OurNewsPrewiewImage,
      title: t('s2title'),
      subTitle: t('s2subTitle'),
      text: t('s2text'),
      subText: t('s2subText'),
    },
    {
      image: OurNewsPrewiewImage,
      title: t('s3title'),
      subTitle: t('s3subTitle'),
      text: t('s3text'),
      subText: t('s3subText'),
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
              <ImageHolder>
                <Image alt={partnershipImage.alt} src={card.image.src} />
              </ImageHolder>
              <Column px={3} py={2}>
                <Text heading mb={1} subHeader3>
                  {card.title}
                </Text>
                <Row>
                  <Calendar />
                  <Text caption2 mb={4} muted>
                    {card.subTitle}
                  </Text>
                </Row>
                <Text body body3 mb={3}>
                  {card.text}
                </Text>
                <Text body caption1>
                  {card.subText}
                </Text>
              </Column>
            </Card>
          ))}
        </Row>
      </Content>
    </Container>
  )
}

export default OurNews
