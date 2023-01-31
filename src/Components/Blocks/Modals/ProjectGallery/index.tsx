import React, { useState } from 'react'

import { CaretLeft, CaretRight, MapPin, X } from 'phosphor-react'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Image, Modal, Text } from 'Components/UI'

import {
  Header,
  MapHolder,
  NavigationButton,
  StyledButton,
  SwiperHolder,
} from './styles'

import 'swiper/swiper.min.css'

type Props = {
  isOpen?: boolean
  project?: DatoSchema.ProjectRecord
  onClose: () => void
}
function ProjectGallery({ isOpen, project, onClose }: Props) {
  const [isMap, setIsMap] = useState(false)

  if (!project) return null

  return (
    <Modal isCustom isOpen={isOpen} onClose={onClose}>
      <Header>
        <StyledButton onClick={() => setIsMap(true)}>
          {!isMap && <MapPin size={24} />}
        </StyledButton>
        <Text inverse subHeader1>
          {project.title}
        </Text>
        <StyledButton onClick={isMap ? () => setIsMap(false) : onClose}>
          <X size={24} />
        </StyledButton>
      </Header>

      {isMap ? (
        <MapHolder>Map</MapHolder>
      ) : (
        <SwiperHolder>
          <Swiper
            grabCursor
            loop
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{
              bulletActiveClass: 'swiper-pagination-bullet-active',
              bulletClass: 'swiper-pagination-bullet',
            }}
          >
            {project.imageSet?.map(item => (
              <SwiperSlide key={item.id}>
                <Image cover data={item} />
              </SwiperSlide>
            ))}
          </Swiper>

          <NavigationButton className="swiper-button-prev">
            <CaretLeft size={80} />
          </NavigationButton>
          <NavigationButton className="swiper-button-next">
            <CaretRight size={80} />
          </NavigationButton>
        </SwiperHolder>
      )}
    </Modal>
  )
}

export default ProjectGallery
