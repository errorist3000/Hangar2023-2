import React from 'react'
import PropTypes from 'prop-types'

import { useQuery } from '@apollo/client'
import { ClientOnly, Modal, Text } from 'Components/UI'
import { MapPin, X } from 'phosphor-react'
import projectQuery from 'Services/DatoCMS/Queries/project.graphql'

import noop from 'lodash/noop'

import { Header, StyledButton } from './styles'

function ProjectGallery({ isOpen, projectId, onClose }) {
  const { data } = useQuery(projectQuery, {
    variables: { id: { in: projectId } },
    skip: !projectId,
  })

  const projectData = data?.project

  return (
    <ClientOnly>
      <Modal isCustom isOpen={isOpen} onClose={onClose}>
        <Header>
          <StyledButton onClick={onClose}>
            <MapPin size={24} />
          </StyledButton>
          <Text inverse subHeader1>
            {projectData?.title}
          </Text>
          <StyledButton>
            <X size={24} />
          </StyledButton>
        </Header>
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
