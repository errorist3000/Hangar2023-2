import React, { useCallback, useState } from 'react'
import { Form, FormRenderProps } from 'react-final-form'

import DialogControls from 'Components/Blocks/DialogControls'
import { PrivacyPolicyModal } from 'Components/Blocks/Modals'
import {
  ButtonText,
  CheckboxField,
  Column,
  InputField,
  Text,
} from 'Components/UI'

import { CONTACT_US_URL_PHP } from 'Constants/ids'

import { usePolicy } from 'Hooks'

enum Fields {
  Name = 'name',
  Email = 'email',
  Phone = 'phone',
  Description = 'description',
  isPolicyAccepted = 'isPolicyAccepted',
}

type Props = {
  onClose: () => void
}

function ContactUsForm({ onClose }: Props) {
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false)

  const { setPolicy, isAccepted } = usePolicy()

  const initialValues = {
    [Fields.isPolicyAccepted]: isAccepted,
  }

  const submit = useCallback(
    async (values: Record<string, any>) => {
      try {
        const post = JSON.stringify(values)

        const request = new XMLHttpRequest()
        request.open('POST', CONTACT_US_URL_PHP, true)
        request.setRequestHeader('Content-type', 'application/json')
        request.send(post)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)
      }

      onClose?.()
    },
    [onClose],
  )

  const renderForm = useCallback(
    ({ handleSubmit, values }: FormRenderProps) => (
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

          <CheckboxField
            label={
              <>
                <Text as={'span'}>Я просчитал </Text>
                <ButtonText
                  as={'span'}
                  small
                  onClick={() => setIsPrivacyPolicyOpen(true)}
                >
                  Политику конфиденцияльности
                </ButtonText>
                <Text as={'span'}> и согласен</Text>
              </>
            }
            name={Fields.isPolicyAccepted}
            onChange={() => setPolicy(!values?.[Fields.isPolicyAccepted])}
          />
        </Column>

        <DialogControls
          cancelText={'Отмена'}
          confirmText={'Отправить'}
          disabled={!values?.[Fields.isPolicyAccepted]}
          onCancel={onClose}
          onConfirm={handleSubmit}
        />
      </>
    ),
    [onClose, setPolicy],
  )

  return (
    <>
      <Form
        initialValues={initialValues}
        render={renderForm}
        onSubmit={submit}
      />
      <PrivacyPolicyModal
        isOpen={isPrivacyPolicyOpen}
        onClose={() => setIsPrivacyPolicyOpen(false)}
      />
    </>
  )
}

export default ContactUsForm
