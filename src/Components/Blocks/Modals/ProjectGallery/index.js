import React from 'react'
import PropTypes from 'prop-types'

import { useQuery } from '@apollo/client'
import { ClientOnly, Modal } from 'Components/UI'
import projectQuery from 'Services/DatoCMS/Queries/project.graphql'

import noop from 'lodash/noop'

function ProjectGallery({ isOpen, projectId, onClose }) {
  const { data } = useQuery(projectQuery, {
    variables: { id: { in: projectId } },
    skip: !projectId,
  })

  const projectData = data?.project

  console.log(projectData)

  return (
    <ClientOnly>
      <Modal isCustom isOpen={isOpen} onClose={onClose}>
        {projectData?.title}
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
