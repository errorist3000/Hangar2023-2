import React from 'react'

import { Button, Column, Delimiter, Row } from 'Components/UI'

type Props = {
  cancelText?: string
  confirmText: string
  disabled?: boolean
  onCancel?: () => void
  onConfirm: () => void
}

function ContactUsForm({
  cancelText,
  confirmText,
  disabled,
  onCancel,
  onConfirm,
}: Props) {
  return (
    <Column gap={4}>
      <Delimiter />
      <Row fullWidth gap={3} justifyCenter mb={4} px={5}>
        <Button secondary width={1} onClick={onCancel}>
          {cancelText}
        </Button>
        <Button disabled={disabled} width={1} onClick={onConfirm}>
          {confirmText}
        </Button>
      </Row>
    </Column>
  )
}

export default ContactUsForm
