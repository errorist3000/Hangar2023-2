import Modal from 'react-modal'

import styled from 'styled-components'
import themeGet from '@styled-system/theme-get'

export const StyledModal = styled(Modal)`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  background-color: ${themeGet('colors.bg.default')};
  box-shadow: ${themeGet('shadow.large')};
  position: relative;
`
