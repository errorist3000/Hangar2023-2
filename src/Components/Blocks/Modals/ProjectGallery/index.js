import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { useQuery } from '@apollo/client'
import { ClientOnly, Image, Loader, Modal, Text } from 'Components/UI'
import { CaretLeft, CaretRight, MapPin, X } from 'phosphor-react'
import projectQuery from 'Services/DatoCMS/Queries/project.graphql'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import noop from 'lodash/noop'

import {
  Header,
  MapHolder,
  NavigationButton,
  StyledButton,
  SwiperHolder,
} from './styles'

import 'swiper/swiper.min.css'

function ProjectGallery({ isOpen, projectId, onClose }) {
  const [isMap, setIsMap] = useState(false)

  const { data, loading } = useQuery(projectQuery, {
    variables: { id: { in: projectId } },
    skip: !projectId,
  })

  const projectData = data?.project

  console.log(isMap)

  return (
    <ClientOnly>
      <Modal isCustom isOpen={isOpen}>
        <Header relative={loading}>
          <StyledButton onClick={() => setIsMap(true)}>
            {!isMap && <MapPin size={24} />}
          </StyledButton>
          <Text inverse subHeader1>
            {projectData?.title}
          </Text>
          <StyledButton onClick={isMap ? () => setIsMap(false) : onClose}>
            <X size={24} />
          </StyledButton>
        </Header>

        {isMap ? (
          <MapHolder>Map</MapHolder>
        ) : (
          <SwiperHolder low={loading}>
            {loading ? (
              <Loader />
            ) : (
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
                {projectData?.imageSet?.map(item => (
                  <SwiperSlide key={item.id}>
                    <Image cover data={item} />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
            <NavigationButton className="swiper-button-prev">
              <CaretLeft size={80} />
            </NavigationButton>
            <NavigationButton className="swiper-button-next">
              <CaretRight size={80} />
            </NavigationButton>
          </SwiperHolder>
        )}
      </Modal>
    </ClientOnly>
  )
}

ProjectGallery.defaultProps = {
  isOpen: false,
  projectId: null,
  onClose: noop,
}

ProjectGallery.propTypes = {
  isOpen: PropTypes.bool,
  projectId: PropTypes.string,
  onClose: PropTypes.func,
}

export default ProjectGallery
