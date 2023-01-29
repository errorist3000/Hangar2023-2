import React from 'react'
import { ReactI18NextChild } from 'react-i18next'

import CloseButton from 'Components/UI/CloseButton'
import Delimiter from 'Components/UI/Delimiter'
import { Row } from 'Components/UI/Flex'
import Text from 'Components/UI/Text'

import { StyledModal } from './styles'

type Props = {
  children?: ReactI18NextChild
  isCustom?: boolean
  isOpen?: boolean
  title?: string
  onClose: () => void
}

function Modal({ isCustom, isOpen, title, children, onClose }: Props) {
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

export default Modal
