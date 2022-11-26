import React from 'react'
import { useTranslation } from 'react-i18next'

import { mockGalleryPreviewImage } from 'Assets/Images'
import { Button, Text } from 'Components/UI'
import { LANDING_SECTION_ID } from 'Constants/ids'
import { MapPin } from 'phosphor-react'

import {
  CaptionHolder,
  Card,
  CardHolder,
  CardsHolder,
  Container,
  Content,
  StyledImage,
} from './styles'

const ICON_WEIGHT = 'bold'

function Gallery() {
  const { t } = useTranslation('translation', {
    keyPrefix: 'pages.main.gallery',
  })

  const CARDS = [
    {
      image: mockGalleryPreviewImage,
      text: t('s1text'),
      subtext: t('s2text'),
    },
    {
      image: mockGalleryPreviewImage,
      text: t('s1text'),
      subtext: t('s2text'),
    },
    {
      image: mockGalleryPreviewImage,
      text: t('s1text'),
      subtext: t('s2text'),
    },
    {
      image: mockGalleryPreviewImage,
      text: t('s1text'),
      subtext: t('s2text'),
    },
    {
      image: mockGalleryPreviewImage,
      text: t('s1text'),
      subtext: t('s2text'),
    },
    {
      image: mockGalleryPreviewImage,
      text: t('s1text'),
      subtext: t('s2text'),
    },
    {
      image: mockGalleryPreviewImage,
      text: t('s1text'),
      subtext: t('s2text'),
    },
    {
      image: mockGalleryPreviewImage,
      text: t('s1text'),
      subtext: t('s2text'),
    },
    {
      image: mockGalleryPreviewImage,
      text: t('s1text'),
      subtext: t('s2text'),
    },
    {
      image: mockGalleryPreviewImage,
      text: t('s1text'),
      subtext: t('s2text'),
    },
  ]

  return (
    <Container>
      <Content id={LANDING_SECTION_ID.gallery}>
        <Text h3 heading mb={3}>
          {t('title')}
        </Text>
        <Text body caption1 mb={2}>
          {t('1subTitle')}
        </Text>
        <Text body caption1 mb={10}>
          {t('2subTitle')}
        </Text>
        <Button big tertiary>
          <MapPin weight={ICON_WEIGHT} />
          Объекты на карте
        </Button>
        <CardsHolder>
          {CARDS.map(card => (
            <CardHolder key={card.subtext}>
              <Card>
                <StyledImage alt={card.image.alt} src={card.image.src} />
                <CaptionHolder>
                  <Text heading mb={2} subHeader3>
                    {card.text}
                  </Text>
                  <Text caption3 muted>
                    {card.subtext}
                  </Text>
                </CaptionHolder>
              </Card>
            </CardHolder>
          ))}
        </CardsHolder>
        <Button big>Показать все</Button>
      </Content>
    </Container>
  )
}

export default Gallery
