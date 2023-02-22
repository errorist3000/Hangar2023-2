import React, { ComponentProps, ReactNode, useMemo } from 'react'
import { Props as ReactSelectProps } from 'react-select-five'

import { WidthProps } from 'styled-system'

import { Caption, Label } from 'Components/UI/Forms/ControlElements'

import * as Components from './Components'
import { SizeProps, StyledSelect, Wrapper, WrapperProps } from './styles'
import { CustomSelectProps, OptionType } from './types'

type OptionsType = OptionType[]
type ValueType = OptionType | OptionsType

export type Props = WidthProps &
  WrapperProps &
  SizeProps &
  CustomSelectProps &
  ComponentProps<typeof StyledSelect> & {
    allowCreateWhileLoading?: boolean
    async?: boolean
    cacheOptions?: boolean
    caption?: string
    components?: any
    creatable?: boolean
    createOptionPosition?: 'first' | 'last'
    danger?: boolean
    defaultOptions?: boolean
    disabled?: boolean
    formatCreateLabel?: (input: string) => void
    formatOptionLabel?: ReactSelectProps<any>['formatOptionLabel']
    isLoading?: boolean
    isMulti?: boolean
    isSearchable?: boolean
    isValidNewOption?: (inputValue: string) => boolean
    label?: ReactNode
    loadOptions?: (
      inputValue: string,
      callback: (options: OptionType[]) => void,
    ) => Promise<OptionType[]> | void
    menuIsOpen?: boolean
    options?: OptionType[]
    placeholder?: string
    required?: boolean
    scrollToOption?: OptionType
    success?: boolean
    value?: ValueType
    withPortal?: boolean
    onInputChange?: (newValue: string) => void
  }

function Select({
  allowCreateWhileLoading,
  async,
  caption,
  components,
  creatable,
  createOptionPosition,
  danger,
  disabled,
  formatCreateLabel,
  formatOptionLabel,
  isLoading,
  isMulti,
  isSearchable,
  isValidNewOption,
  label,
  menuIsOpen,
  options,
  placeholder,
  required,
  scrollToOption,
  styles,
  success,
  value,
  width,
  withPortal,
  ...rest
}: Props) {
  const customStyles = useMemo(() => {
    return withPortal
      ? {
          ...(styles ?? {}),
          menuPortal: (base: any) => ({
            ...base,
            zIndex: 9999,
          }),
        }
      : styles
  }, [styles, withPortal])

  return (
    <Wrapper {...rest} width={width}>
      <Label disabled={disabled} required={required} text={label} />

      <StyledSelect
        {...rest}
        allowCreateWhileLoading={allowCreateWhileLoading}
        async={async}
        components={{ ...Components, ...components }}
        creatable={creatable}
        createOptionPosition={createOptionPosition}
        danger={danger}
        formatCreateLabel={formatCreateLabel}
        formatOptionLabel={formatOptionLabel}
        isDisabled={disabled}
        isLoading={isLoading}
        isMulti={isMulti}
        isSearchable={isSearchable}
        isValidNewOption={isValidNewOption}
        menuIsOpen={menuIsOpen}
        menuPortalTarget={withPortal ? document.body : undefined}
        options={options}
        placeholder={placeholder}
        scrollToOption={scrollToOption}
        styles={customStyles}
        value={value}
        width={width}
      />

      <Caption
        danger={danger}
        disabled={disabled}
        success={success}
        text={caption}
      />
    </Wrapper>
  )
}

Select.defaultProps = {
  async: false,
  components: null,
  creatable: false,
  withPortal: false,
  disabled: false,
  options: [],
} as Props

export default Select
