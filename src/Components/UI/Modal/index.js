import React from 'react'
import PropTypes from 'prop-types'

import CloseButton from 'Components/UI/CloseButton'
import Delimiter from 'Components/UI/Delimiter'
import { Row } from 'Components/UI/Flex'
import Text from 'Components/UI/Text'

import noop from 'lodash/noop'

import { StyledModal } from './styles'

function Modal({ isCustom, isOpen, title, children, onClose }) {
  return (
    <StyledModal isOpen={isOpen} onRequestClose={onClose}>
      {!isCustom && (
        <>
          <Row center p={5} spaceBetween>
            <Text heading subHeader2>
              {title}
            </Text>
            <CloseButton onClick={onClose} />
          </Row>
          <Delimiter />
        </>
      )}
      {children}
    </StyledModal>
  )
}

Modal.defaultProps = {
  children: null,
  isCustom: false,
  isOpen: false,
  title: '',
  onClose: noop,
}

Modal.propTypes = {
  children: PropTypes.node,
  isCustom: PropTypes.bool,
  isOpen: PropTypes.bool,
  title: PropTypes.string,
  onClose: PropTypes.func,
}

export default Modal
