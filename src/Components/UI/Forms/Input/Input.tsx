import React, { forwardRef, ReactNode, Ref, useCallback, useState } from 'react'

import { Eye, EyeSlash } from 'phosphor-react'

import Loader from 'Components/UI/Loader'
import Text from 'Components/UI/Text'

import {
  Container,
  ContainerProps,
  PasswordIconWrapper,
  StyledInput,
  StyledInputProps,
  Wrapper,
  WrapperProps,
} from './styles'

type Props = ContainerProps &
  StyledInputProps &
  WrapperProps & {
    value?: string | number
    defaultValue?: string | number
    required?: boolean
    disabled?: boolean
    optional?: boolean
    label?: ReactNode
    caption?: string
    placeholder?: string
    maxLength?: number
    min?: number
    max?: number
    readOnly?: boolean
    isLoading?: boolean
    renderBeforeElement?: () => React.ReactNode
    renderAfterElement?: (disabled: boolean) => React.ReactNode
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    type?: React.HTMLProps<HTMLInputElement>['type']
    onBlur?: (event: React.FocusEvent<HTMLElement>) => void
    onFocus?: (event: React.FocusEvent<HTMLElement>) => void
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  }

function Input(
  {
    caption,
    required,
    label,
    placeholder,
    renderAfterElement,
    renderBeforeElement,
    success,
    danger,
    disabled,
    isMulti,
    cols,
    rows,
    resize,
    type,
    small,
    min,
    max,
    large,
    defaultValue,
    value,
    mask,
    showMask,
    maxLength,
    readOnly,
    isLoading,
    onChange,
    onBlur,
    onFocus,
    onKeyDown,
    ...rest
  }: Props,
  ref?: Ref<HTMLInputElement>,
) {
  const [isActive, setIsActive] = useState(false)
  const [shownPassword, setShownPassword] = useState(false)

  const handleBlur = useCallback<React.FocusEventHandler<HTMLInputElement>>(
    event => {
      setIsActive(false)
      onBlur?.(event)
    },
    [setIsActive, onBlur],
  )

  const handleFocus = useCallback<React.FocusEventHandler<HTMLInputElement>>(
    event => {
      setIsActive(true)
      onFocus?.(event)
    },
    [setIsActive, onFocus],
  )

  return (
    <Wrapper {...rest} large={large} small={small}>
      {label && (
        <Text heading subHeader5>
          {label} {required && '*'}
        </Text>
      )}

      <Container
        active={isActive}
        danger={danger}
        disabled={disabled}
        large={large}
        small={small}
        success={success}
      >
        {renderBeforeElement && <>{renderBeforeElement()}</>}

        <StyledInput
          cols={cols}
          defaultValue={defaultValue}
          disabled={disabled}
          isMulti={isMulti}
          mask={mask}
          max={max}
          maxLength={maxLength}
          min={min}
          placeholder={placeholder}
          readOnly={readOnly}
          ref={ref}
          required={required}
          resize={resize}
          rows={rows}
          showMask={showMask}
          type={type === 'password' && shownPassword ? 'text' : type}
          value={value}
          onBlur={handleBlur}
          onChange={onChange}
          onFocus={handleFocus}
          onKeyDown={onKeyDown}
        />

        {renderAfterElement && <>{renderAfterElement(!!disabled)}</>}
        {type === 'password' && (
          <PasswordIconWrapper onClick={() => setShownPassword(!shownPassword)}>
            {shownPassword ? <EyeSlash /> : <Eye />}
          </PasswordIconWrapper>
        )}

        {isLoading && <Loader />}
      </Container>

      <Text caption5>{caption}</Text>
    </Wrapper>
  )
}

export default forwardRef(Input)
