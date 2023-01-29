import React from 'react'

import { Modal } from 'Components/UI'

type Props = {
  isOpen?: boolean
  onClose: () => void
}
function ObjectsOnMapModal({ isOpen, onClose }: Props) {
  return <Modal isOpen={isOpen} title="Objects on the map" onClose={onClose} />
}

export default ObjectsOnMapModal
