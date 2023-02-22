import React from 'react'

import { ContactUsForm } from 'Components/Blocks/Forms'
import { Modal } from 'Components/UI'

type Props = {
  isOpen?: boolean
  onClose: () => void
}
function ContactUsModal({ isOpen, onClose }: Props) {
  return (
    <Modal
      isOpen={isOpen}
      minWidth={460}
      title={'Свяжитесь с нами'}
      onClose={onClose}
    >
      <ContactUsForm onClose={onClose} />
    </Modal>
  )
}

export default ContactUsModal
