import React, { ComponentProps } from 'react'
import { Field } from 'react-final-form'

import Radio from './Radio'

interface Props extends ComponentProps<typeof Radio> {
  name: string
  value: string
}

function RadioField({ name, value, ...rest }: Props) {
  return (
    <Field name={name} type="radio" value={value}>
      {({ input }) => <Radio {...rest} {...input} />}
    </Field>
  )
}

export default RadioField
