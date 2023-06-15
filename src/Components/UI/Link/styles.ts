import styled, { css } from 'styled-components'
import { mapToTheme } from 'styled-map'
import { flexbox, layout, space } from 'styled-system'
import { themeGet } from '@styled-system/theme-get'

import Link, { LinkProps } from 'next/link'

type DisplayProps = {
  secondary?: boolean
  success?: boolean
  info?: boolean
  danger?: boolean
  isDisabled?: boolean
  large?: boolean
  small?: boolean
}

type CustomLinkProps = DisplayProps & {
  to?: string
}

type CustomNavLinkProps = DisplayProps

const secondaryCss = ({ secondary }: CustomLinkProps) =>
  secondary &&
  css`
    color: ${themeGet('colors.link.secondary.color')};

    &:hover {
      color: ${themeGet('colors.link.secondary.colorHover')};
    }

    &:focus,
    :active {
      color: ${themeGet('colors.link.secondary.colorFocus')};
    }
  `

const successCss = ({ success }: CustomLinkProps) =>
  success &&
  css`
    color: ${themeGet('colors.link.success.color')};

    &:hover {
      color: ${themeGet('colors.link.success.colorHover')};
    }

    &:focus,
    :active {
      color: ${themeGet('colors.link.success.colorFocus')};
    }
  `

const infoCss = ({ info }: CustomLinkProps) =>
  info &&
  css`
    color: ${themeGet('colors.link.info.color')};

    &:hover {
      color: ${themeGet('colors.link.info.colorHover')};
    }

    &:focus,
    :active {
      color: ${themeGet('colors.link.info.colorFocus')};
    }
  `

const dangerCss = ({ danger }: CustomLinkProps) =>
  danger &&
  css`
    color: ${themeGet('colors.link.danger.color')};

    &:hover {
      color: ${themeGet('colors.link.danger.colorHover')};
    }

    &:focus,
    :active {
      color: ${themeGet('colors.link.danger.colorFocus')};
    }
  `

const isDisabledCss = ({ isDisabled }: CustomLinkProps) =>
  isDisabled &&
  css`
    pointer-events: none;
    color: ${themeGet('colors.link.colorDisabled')};
    cursor: default;

    &:hover {
      color: ${themeGet('colors.link.colorDisabled')};
    }
  `

const linkCss = css`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;

  font-weight: ${themeGet('fontWeight.1')};
  font-size: ${mapToTheme('link.fontSize')}px;
  line-height: ${mapToTheme('link.lineHeight')};
  gap: ${themeGet('space.2')}px;

  color: ${themeGet('colors.link.primary.color')};

  &:hover {
    color: ${themeGet('colors.link.primary.colorHover')};
  }

  &:focus,
  :active {
    color: ${themeGet('colors.link.primary.colorFocus')};
  }

  & > svg {
    flex-shrink: 0;
    height: ${mapToTheme('link.iconSize')}px;
    width: ${mapToTheme('link.iconSize')}px;
  }

  ${flexbox}
  ${layout}
  ${space}

  ${dangerCss}
  ${infoCss}
  ${secondaryCss}
  ${successCss}
  ${isDisabledCss}
`

export const StyledNavLink = styled(Link)<LinkProps & CustomNavLinkProps>`
  ${linkCss}
`

export const StyledExternalLink = styled.a<CustomLinkProps>`
  ${linkCss}
`
