import React from 'react'
import PropTypes from 'prop-types'

import { Modal } from 'Components/UI'

import noop from 'lodash/noop'

function ObjectsOnMapModal({ isOpen, onClose }) {
  return <Modal isOpen={isOpen} title="Objects on the map" onClose={onClose} />
}

ObjectsOnMapModal.defaultProps = {
  isOpen: false,
  onClose: noop,
}

ObjectsOnMapModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
}

export default ObjectsOnMapModal
