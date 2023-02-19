import React, { useMemo } from 'react'

import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import orderBy from 'lodash/orderBy'

import { Button, Column, Image, Text } from 'Components/UI'

import { LANDING_SECTION_ID } from 'Constants/ids'

import { ButtonHolder, Container, Content, PictureOverlay } from './styles'

import 'swiper/swiper.min.css'

type Props = {
  data?: DatoSchema.HeroRecord[]
}
function Hero({ data }: Props) {
  const sortedDataByOrder = useMemo(() => orderBy(data, 'order', 'asc'), [data])

  return (
    <Container id={LANDING_SECTION_ID.hero}>
      <Swiper
        autoplay={{
          delay: 5000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        loop
        modules={[Autoplay]}
        speed={2000}
      >
        {sortedDataByOrder.map(slide => (
          <SwiperSlide key={slide.order}>
            <Image data={slide.image} />
            <PictureOverlay />
            <Content>
              <Column>
                <Text h2 inverse mb={10}>
                  {slide.title}
                </Text>
                <Text action1 inverse mb={6}>
                  {slide.subtitle}
                </Text>
                <Text action1 inverse mb={14}>
                  {slide.text}
                </Text>
                <ButtonHolder>
                  <Button big outline width={192}>
                    Запрос
                  </Button>
                  <Button big width={192}>
                    Калькулятор
                  </Button>
                </ButtonHolder>
              </Column>
            </Content>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}

export default Hero
