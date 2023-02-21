import React, { ComponentProps } from 'react'
import { Field } from 'react-final-form'

import { FieldValidator } from 'final-form'

import Utils from 'Services/Utils'

import Input from './Input'

type Props = ComponentProps<typeof Input> & {
  name: string
  defaultValue?: string
  checkErrorIfDirty?: boolean
  displayError?: boolean
  validate?: FieldValidator<string>
}

function InputField({
  checkErrorIfDirty,
  displayError,
  name,
  validate,
  caption,
  defaultValue,
  ...rest
}: Props) {
  return (
    <Field<string> defaultValue={defaultValue} name={name} validate={validate}>
      {({ input: { value, onChange: handleChange }, meta }) => {
        const { hasError, error } = Utils.Form.hasError(meta, checkErrorIfDirty)

        return (
          <Input
            {...rest}
            caption={(displayError && error) || caption}
            danger={hasError}
            value={value}
            onChange={handleChange}
          />
        )
      }}
    </Field>
  )
}

InputField.defaultProps = {
  displayError: true,
} as Props

export default InputField
