import styled, { css } from 'styled-components'
import themeGet from '@styled-system/theme-get'

import Link from 'next/link'

const containerCss = css`
  height: 100%;
  width: 152px;
`

export const ContainerButton = styled.button`
  ${containerCss}
`

export const ContainerLink = styled(Link)`
  ${containerCss}
`

export const LogoFull = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;

  > svg {
    .logo-full_svg__first {
      fill: ${themeGet('colors.text.inverse')};
    }
    .logo-full_svg__second {
      fill: ${themeGet('colors.primary')};
    }
  }
`
