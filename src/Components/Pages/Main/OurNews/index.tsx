import React from 'react'
import { useTranslation } from 'react-i18next'

import { DateTime } from 'luxon'
import { Calendar } from 'phosphor-react'
import { Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Column, Image, Row, Text } from 'Components/UI'

import { DATO_DATE_FORMAT } from 'Constants/datoCms'
import { LANDING_SECTION_ID } from 'Constants/ids'

import { Card, Container, Content } from './styles'

function getPrettyDate(date: string) {
  return DateTime.fromFormat(date, DATO_DATE_FORMAT).toFormat('dd.MM.yyyy')
}

type Props = {
  data: DatoSchema.NoveltyRecord[]
}

function OurNews({ data }: Props) {
  const { t } = useTranslation('translation', {
    keyPrefix: 'pages.main.ourNews',
  })

  return (
    <Container>
      <Content id={LANDING_SECTION_ID.news}>
        <Text h3 heading mb={3}>
          {t('header')}
        </Text>
        <Text body caption1 mb={10}>
          {t('subHeader')}
        </Text>

        <Swiper
          grabCursor
          modules={[Scrollbar]}
          scrollbar
          slidesPerView={3}
          spaceBetween={20}
        >
          {data.map(slide => (
            <SwiperSlide key={slide.id}>
              <Card>
                {/* @ts-ignore */}
                <Image data={slide.image} />
                <Column fullHeight px={3} py={2}>
                  <Text heading mb={2} subHeader3>
                    {slide.title}
                  </Text>
                  <Row mb={4}>
                    <Calendar />
                    <Text caption2 ml={1} muted>
                      {getPrettyDate(slide.date)}
                    </Text>
                  </Row>
                  <Column fullHeight spaceBetween>
                    <Text body body3 mb={3}>
                      {slide.description}
                    </Text>
                    <Text body caption1>
                      {slide.size}
                    </Text>
                  </Column>
                </Column>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Content>
    </Container>
  )
}

export default OurNews
