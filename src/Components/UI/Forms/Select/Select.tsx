import React, { ComponentProps, ReactNode, useMemo } from 'react'
import { Props as ReactSelectProps } from 'react-select-five'

import { WidthProps } from 'styled-system'

import Text from 'Components/UI/Text'

import * as Components from './Components'
import {
  Caption,
  SizeProps,
  StyledSelect,
  Wrapper,
  WrapperProps,
} from './styles'
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
    label?: ReactNode
    menuIsOpen?: boolean
    options?: OptionType[]
    placeholder?: string
    required?: boolean
    scrollToOption?: OptionType
    withPortal?: boolean
    loadOptions?: (
      inputValue: string,
      callback: (options: OptionType[]) => void,
    ) => Promise<OptionType[]> | void
    isValidNewOption?: (inputValue: string) => boolean
    value?: ValueType
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
      {label && (
        <Text mb={2} subHeader5>
          {label} {required && '*'}
        </Text>
      )}

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
      {caption && danger && <Caption mt={2}>{caption}</Caption>}
    </Wrapper>
  )
}

Select.defaultProps = {
  async: false,
  components: null,
  creatable: false,
  withPortal: false,
  disabled: false,
  width: 1,
  options: [],
} as Props

export default Select
