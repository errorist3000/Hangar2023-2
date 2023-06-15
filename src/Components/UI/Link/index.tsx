import React from 'react'

import { StyledExternalLink, StyledNavLink } from 'Components/UI/Link/styles'

type Props = {
  children?: React.ReactNode
  danger?: boolean
  disabled?: boolean
  href?: string
  info?: boolean
  isExternal?: boolean
  large?: boolean
  secondary?: boolean
  small?: boolean
  success?: boolean
  to?: URL
}

function Link({
  children,
  danger,
  disabled,
  info,
  href,
  isExternal,
  large,
  secondary,
  small,
  success,
  to,
  ...rest
}: Props) {
  return href ? (
    <StyledExternalLink
      {...rest}
      danger={danger}
      href={href}
      info={info}
      isDisabled={disabled}
      large={large}
      secondary={secondary}
      small={small}
      success={success}
      target="_blank"
    >
      {children}
    </StyledExternalLink>
  ) : (
    <StyledNavLink
      {...rest}
      danger={danger}
      href={to ?? '/'}
      info={info}
      isDisabled={disabled}
      large={large}
      secondary={secondary}
      small={small}
      success={success}
      target={isExternal ? '_blank' : '_self'}
    >
      {children}
    </StyledNavLink>
  )
}

export default Link
