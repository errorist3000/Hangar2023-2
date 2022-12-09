import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import { Button, Column, Image, Row, Text } from 'Components/UI'
import { LANDING_SECTION_ID } from 'Constants/ids'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { orderBy } from 'lodash/collection'

import { Container, Content, PictureOverlay } from './styles'

import 'swiper/swiper.min.css'

function Hero({ data }) {
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
                <Row gap={32} justifyCenter>
                  <Button big outline width={192}>
                    Запрос
                  </Button>
                  <Button big width={192}>
                    Калькулятор
                  </Button>
                </Row>
              </Column>
            </Content>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}

Hero.defaultProps = {
  data: [],
}

Hero.propTypes = {
  data: PropTypes.array,
}

export default Hero
