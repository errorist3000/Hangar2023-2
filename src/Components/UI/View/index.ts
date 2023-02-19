import styled, { css } from 'styled-components'
import {
  FlexboxProps,
  layout,
  margin,
  MarginProps,
  padding,
  PaddingProps,
} from 'styled-system'

export type Props = MarginProps & PaddingProps & FlexboxProps

const generalCss = css`
  display: block;

  ${margin};
  ${padding};
  ${layout};
`

const Desktop = styled.div.attrs({
  display: ['none', 'none', 'none', 'block'],
})`
  ${generalCss}
`

const Tablet = styled.div.attrs({
  display: ['block', 'block', 'block', 'none'],
})`
  ${generalCss}
`

const Mobile = styled.div.attrs({
  display: ['block', 'block', 'none'],
})`
  ${generalCss}
`

const View = {
  Desktop,
  Tablet,
  Mobile,
}

export default View
