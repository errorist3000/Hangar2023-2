import React from 'react'

import { PrivacyPolicyBlock } from 'Components/Blocks/Legal'
import { Modal } from 'Components/UI'

type Props = {
  isOpen?: boolean
  onClose: () => void
}
function PrivacyPolicyModal({ isOpen, onClose }: Props) {
  return (
    <Modal isCustom isOpen={isOpen} minWidth={460} onClose={onClose}>
      <PrivacyPolicyBlock onClose={onClose} />
    </Modal>
  )
}

export default PrivacyPolicyModal
