import styled from 'styled-components'
import themeGet from '@styled-system/theme-get'

import Link from 'next/link'

export const Container = styled(Link)`
  height: 100%;
  width: 152px;
`

export const LogoFull = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;

  > svg {
    .logo-full_svg__first {
      fill: ${themeGet('colors.text.inverse')};
    }
    .logo-full_svg__second {
      fill: ${themeGet('colors.primary')};
    }
  }
`
