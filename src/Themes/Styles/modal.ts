import { css } from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

export default css`
  .ReactModal__Overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${themeGet('colors.bg.secondary')}88 !important;
    z-index: ${themeGet('zIndexes.modal')};
  }
`
