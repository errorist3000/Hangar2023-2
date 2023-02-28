import React, { useEffect } from 'react'
import { ReactI18NextChild } from 'react-i18next'

import CloseButton from 'Components/UI/CloseButton'
import Delimiter from 'Components/UI/Delimiter'
import { Row } from 'Components/UI/Flex'
import Text from 'Components/UI/Text'

import { StyledModal, WrapperCustom } from './styles'

type Props = {
  children?: ReactI18NextChild
  isCustom?: boolean
  isOpen?: boolean
  minWidth?: number | number[]
  title?: string
  onClose: () => void
}

function Modal({
  isCustom,
  isOpen = false,
  title,
  minWidth = 460,
  children,
  onClose,
}: Props) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <StyledModal ariaHideApp={false} isOpen={isOpen} onRequestClose={onClose}>
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
      {/* @ts-ignore */}

      <WrapperCustom minWidth={minWidth}>{children}</WrapperCustom>
    </StyledModal>
  )
}

export default Modal
