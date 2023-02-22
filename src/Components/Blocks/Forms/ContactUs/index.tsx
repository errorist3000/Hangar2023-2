import React, { useCallback } from 'react'
import { Form, FormRenderProps } from 'react-final-form'

import DialogControls from 'Components/Blocks/DialogControls'
import { Column, InputField } from 'Components/UI'

enum Fields {
  Name = 'name',
  Email = 'email',
  Phone = 'phone',
  Description = 'description',
}

type Props = {
  onClose: () => void
}

function ContactUsForm({ onClose }: Props) {
  const submit = useCallback(
    (values: Record<string, any>) => {
      onClose?.()
    },
    [onClose],
  )

  const renderForm = useCallback(
    ({ handleSubmit }: FormRenderProps) => (
      <>
        <Column gap={3} m={5}>
          <InputField
            label={'Имя'}
            name={Fields.Name}
            placeholder={'Как к Вам можно обратиться'}
            required
          />
          <InputField
            label={'Почта'}
            name={Fields.Email}
            placeholder={'Ваша электонная почта'}
            required
          />
          <InputField
            label={'Телефон'}
            name={Fields.Phone}
            placeholder={'Ваш телефон'}
          />
          <InputField
            isMulti
            label={'Дополнительно'}
            name={Fields.Description}
            placeholder={'Если возможно, уточните нам задачу'}
            rows={6}
          />
        </Column>

        <DialogControls
          cancelText={'Отмена'}
          confirmText={'Отправить'}
          onCancel={onClose}
          onConfirm={handleSubmit}
        />
      </>
    ),
    [onClose],
  )

  return <Form render={renderForm} onSubmit={submit} />
}

export default ContactUsForm
