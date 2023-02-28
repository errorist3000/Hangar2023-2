import React, { useCallback, useMemo, useState } from 'react'

import { useRouter } from 'next/router'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import orderBy from 'lodash/orderBy'

import { ContactUsModal } from 'Components/Blocks'
import { Button, Column, Image, Text } from 'Components/UI'

import { LandingPageSectionIds } from 'Constants/ids'
import { CALCULATOR } from 'Constants/routes'

import { ButtonHolder, Container, Content, PictureOverlay } from './styles'

import 'swiper/swiper.min.css'

type Props = {
  data?: DatoSchema.HeroRecord[]
}
function Hero({ data }: Props) {
  const router = useRouter()

  const [isContactUsModalOpen, setIsContactUsModalOpen] = useState(false)

  const sortedDataByOrder = useMemo(() => orderBy(data, 'order', 'asc'), [data])

  const handleCalculatorClick = useCallback(() => {
    router.push(CALCULATOR).then()
  }, [router])

  return (
    <Container id={LandingPageSectionIds.Hero}>
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
                  <Button
                    big
                    outline
                    width={192}
                    onClick={() => setIsContactUsModalOpen(true)}
                  >
                    Запрос
                  </Button>
                  <Button big width={192} onClick={handleCalculatorClick}>
                    Калькулятор
                  </Button>
                </ButtonHolder>
              </Column>
            </Content>
          </SwiperSlide>
        ))}
      </Swiper>

      {isContactUsModalOpen && (
        <ContactUsModal
          isOpen={isContactUsModalOpen}
          onClose={() => setIsContactUsModalOpen(false)}
        />
      )}
    </Container>
  )
}

export default Hero
