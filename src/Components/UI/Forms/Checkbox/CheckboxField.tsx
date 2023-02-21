import React from 'react'
import { Field } from 'react-final-form'

import Utils from 'Services/Utils'

import Checkbox from './Checkbox'

interface Props extends React.ComponentProps<typeof Checkbox> {
  name: string
  validate?: (value?: boolean) => string | undefined
}

function CheckboxField({ name, validate, ...rest }: Props) {
  return (
    <Field name={name} type="checkbox" validate={validate}>
      {({ input, meta }) => {
        const { hasError, error } = Utils.Form.hasError(meta)

        return <Checkbox {...input} {...rest} danger={hasError} error={error} />
      }}
    </Field>
  )
}

export default CheckboxField
