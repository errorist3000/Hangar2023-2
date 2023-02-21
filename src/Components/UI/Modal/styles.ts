import Modal from 'react-modal'

import styled from 'styled-components'
import { border, layout } from 'styled-system'
import { themeGet } from '@styled-system/theme-get'

export const StyledModal = styled(Modal).attrs({
  borderRadius: [0, 0, 0, 12],
  width: [1, 1, 1, 'unset'],
})`
  display: flex;
  flex-direction: column;
  background-color: ${themeGet('colors.bg.default')};
  box-shadow: ${themeGet('shadow.large')};
  position: relative;

  ${border}
  ${layout}
`
