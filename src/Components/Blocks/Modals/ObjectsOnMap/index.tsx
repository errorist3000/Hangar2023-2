import React from 'react'

import { X } from 'phosphor-react'

import Map from 'Components/Blocks/Map'
import { Modal, Text } from 'Components/UI'

import { Header, MapHolder, StyledButton } from './styles'

type Props = {
  isOpen?: boolean
  projects?: DatoSchema.ProjectRecord[]
  title?: string | null
  onClose: () => void
}
function ObjectsOnMapModal({ isOpen, projects, title, onClose }: Props) {
  return (
    <Modal isCustom isOpen={isOpen} onClose={onClose}>
      <Header>
        <div />
        <Text inverse subHeader1>
          {title}
        </Text>
        <StyledButton onClick={onClose}>
          <X size={24} />
        </StyledButton>
      </Header>

      <MapHolder>
        <Map projects={projects} zoom={7} />
      </MapHolder>
    </Modal>
  )
}

export default ObjectsOnMapModal
