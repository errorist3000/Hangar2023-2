import React from 'react'
import PropTypes from 'prop-types'

import { MagnifyingGlass } from 'phosphor-react'

import noop from 'lodash/noop'

import { Input } from 'Components/UI/Forms/Input'

type Props = {
  clearable?: boolean
  disabled?: boolean
  isLoading?: boolean
  label?: string
  placeholder?: string
  value?: string | number
  width?: number
  onBlur?: () => void
  onChange?: () => void
  onClear?: () => void
  onFocus?: () => void
  onKeyDown?: () => void
}

function SearchInput({
  disabled,
  isLoading,
  label,
  placeholder,
  value,
  width,
  onClear,
  onChange,
  onBlur,
  onFocus,
  onKeyDown,
  ...rest
}: Props) {
  return (
    <Input
      {...rest}
      clearable
      disabled={disabled}
      isLoading={isLoading}
      label={label}
      placeholder={placeholder}
      renderBeforeElement={() => <MagnifyingGlass weight={'bold'} />}
      value={value}
      width={width}
      onBlur={onBlur}
      onChange={onChange}
      onClear={onClear}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
    />
  )
}

SearchInput.defaultProps = {
  disabled: undefined,
  isLoading: undefined,
  label: undefined,
  placeholder: undefined,
  value: undefined,
  width: undefined,
  onBlur: noop,
  onChange: noop,
  onClear: noop,
  onFocus: noop,
  onKeyDown: noop,
}

SearchInput.propTypes = {
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  label: PropTypes.node,
  placeholder: PropTypes.string,
  value: PropTypes.string || PropTypes.number,
  width: PropTypes.number,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onClear: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
}

export default SearchInput
