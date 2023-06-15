import React from 'react'
import { Field } from 'react-final-form'

import Text from 'Components/UI/Text'

import Utils from 'Services/Utils'

import Switch from './Switch'

type Props = {
  checkErrorIfDirty?: boolean
  disabled?: boolean
  displayError?: boolean
  input?: any
  label?: string | React.ReactNode
  name: string
}

function SwitchField({
  checkErrorIfDirty,
  displayError,
  input,
  label,
  name,
  disabled,
  ...rest
}: Props) {
  return (
    <Field name={name} type="checkbox">
      {({ input: { checked, onChange: handleChange }, meta }) => {
        const { hasError, error } = Utils.Form.hasError(meta, checkErrorIfDirty)

        return (
          <>
            <Switch
              {...rest}
              {...input}
              checked={checked}
              disabled={disabled}
              error={error}
              hasError={hasError}
              label={label}
              onChange={handleChange}
            />
            {displayError && hasError && (
              <Text danger mt={1}>
                {error}
              </Text>
            )}
          </>
        )
      }}
    </Field>
  )
}

export default SwitchField
