import Modal from 'react-modal'

import styled from 'styled-components'
import { border, layout } from 'styled-system'
import { themeGet } from '@styled-system/theme-get'

export const StyledModal = styled(Modal).attrs({
  borderRadius: [0, 0, 0, 6],
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

export const WrapperCustom = styled.div.attrs<{ minWidth?: number | number[] }>(
  props => ({
    minWidth: ['unset', 'unset', props.minWidth],
    maxWidth: ['100%', '100%', '95vw'],
    maxHeight: ['95vh'],
  }),
)`
  display: flex;
  flex-direction: column;

  ${layout}
`
