import React, { forwardRef, ReactNode, Ref, useCallback, useState } from 'react'

import { Eye, EyeSlash } from 'phosphor-react'

import { Caption, Label } from 'Components/UI/Forms/ControlElements'
import Loader from 'Components/UI/Loader'

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
    caption?: string
    danger?: boolean
    defaultValue?: string | number
    disabled?: boolean
    isLoading?: boolean
    label?: ReactNode
    max?: number
    maxLength?: number
    min?: number
    optional?: boolean
    placeholder?: string
    readOnly?: boolean
    renderAfterElement?: (disabled: boolean) => React.ReactNode
    renderBeforeElement?: () => React.ReactNode
    required?: boolean
    success?: boolean
    type?: React.HTMLProps<HTMLInputElement>['type']
    value?: string | number
    onBlur?: (event: React.FocusEvent<HTMLElement>) => void
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    onFocus?: (event: React.FocusEvent<HTMLElement>) => void
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  }

function Input(
  {
    caption,
    cols,
    danger,
    defaultValue,
    disabled,
    isLoading,
    isMulti,
    label,
    large,
    mask,
    max,
    maxLength,
    min,
    placeholder,
    readOnly,
    renderAfterElement,
    renderBeforeElement,
    required,
    resize,
    rows,
    showMask,
    small,
    success,
    type,
    value,
    onBlur,
    onChange,
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
      <Label disabled={disabled} required={required} text={label} />

      <Container
        active={isActive}
        disabled={disabled}
        large={large}
        small={small}
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

      <Caption
        danger={danger}
        disabled={disabled}
        success={success}
        text={caption}
      />
    </Wrapper>
  )
}

export default forwardRef(Input)
