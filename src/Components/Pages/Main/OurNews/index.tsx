import React, { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { DateTime } from 'luxon'
import { Calendar } from 'phosphor-react'
import { Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Column, Image, Row, Text } from 'Components/UI'

import { DATO_DATE_FORMAT } from 'Constants/datoCms'
import { LANDING_SECTION_ID } from 'Constants/ids'

import { useWindowWidth } from 'Hooks'

import { Card, Container, Content, SwiperHolder } from './styles'

const BREAKPOINT = { ONE: 540, TWO: 960 }

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

  const [width, setWidth] = useState(0)

  const slidesPerView = useMemo(() => {
    if (width < BREAKPOINT.ONE) return 1
    if (width < BREAKPOINT.TWO) return 2
    return 3
  }, [width])

  useWindowWidth({ onWidthChange: setWidth })

  return (
    <Container>
      <Content id={LANDING_SECTION_ID.news}>
        <Text h3 heading mb={3}>
          {t('header')}
        </Text>
        <Text body caption1 mb={10}>
          {t('subHeader')}
        </Text>

        <SwiperHolder>
          <Swiper
            grabCursor
            modules={[Scrollbar]}
            scrollbar
            slidesPerView={slidesPerView}
            // slidesPerView="auto"
            spaceBetween={20}
          >
            {data.map(slide => (
              <SwiperSlide key={slide.id}>
                <Card>
                  <Image data={slide.image} />
                  <Column fullHeight px={3} py={2}>
                    <Text heading mb={2} subHeader3>
                      {slide.title}
                    </Text>
                    <Row mb={4}>
                      <Calendar />
                      <Text caption2 ml={1} mute>
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
        </SwiperHolder>
      </Content>
    </Container>
  )
}

export default OurNews
