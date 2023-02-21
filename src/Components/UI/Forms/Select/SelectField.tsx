import React, { ComponentProps } from 'react'
import { Field } from 'react-final-form'

import Utils from 'Services/Utils'

import Select from './Select'

type Props = ComponentProps<typeof Select> & {
  name: string
  checkErrorIfDirty?: boolean
  displayError?: boolean
  initialValue?: any
  format?: any
  parse?: any
  validateFields?: string[]
}

function SelectField({
  checkErrorIfDirty,
  displayError,
  name,
  caption,
  initialValue,
  format,
  parse,
  validateFields,
  ...rest
}: Props) {
  return (
    <Field
      format={format}
      initialValue={initialValue}
      name={name}
      parse={parse}
      validateFields={validateFields}
    >
      {({ input, meta }) => {
        const { hasError, error } = Utils.Form.hasError(meta, checkErrorIfDirty)

        return (
          <Select
            {...input}
            {...rest}
            caption={(displayError && error) || caption}
            danger={hasError}
          />
        )
      }}
    </Field>
  )
}

SelectField.defaultProps = {
  displayError: true,
} as Props

export default SelectField
