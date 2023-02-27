import React from 'react'

import { PrivacyPolicyBlock } from 'Components/Blocks/Legal'
import { Modal } from 'Components/UI'

type Props = {
  isOpen?: boolean
  onClose: () => void
}
function PrivacyPolicyModal({ isOpen, onClose }: Props) {
  return (
    <Modal
      isOpen={isOpen}
      minWidth={460}
      title={'Свяжитесь с нами'}
      onClose={onClose}
    >
      <PrivacyPolicyBlock />
    </Modal>
  )
}

export default PrivacyPolicyModal
