import React, { ComponentProps, FC } from 'react'
import { Field } from 'react-final-form'

import Range from 'Components/UI/Forms/Range/Range'

type Props = ComponentProps<typeof Range> & {
  name: string
}

const RangeField: FC<Props> = ({ name, ...rest }) => (
  <Field name={name}>{({ input }) => <Range {...input} {...rest} />}</Field>
)

export default RangeField
