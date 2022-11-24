import PropTypes from 'prop-types'

import styled, { css } from 'styled-components'
import { margin } from '@styled-system/space'
import themeGet from '@styled-system/theme-get'
import typography from '@styled-system/typography'

const h1Css = ({ h1 }) =>
  h1 &&
  css`
    font-size: ${themeGet('fontSizes.9')}px;
    letter-spacing: -0.4em;
    font-weight: 700;
    line-height: 110%;
  `

const h2Css = ({ h2 }) =>
  h2 &&
  css`
    font-size: ${themeGet('fontSizes.8')}px;
    letter-spacing: -0.04em;
    font-weight: 700;
    line-height: 120%;
  `

const h3Css = ({ h3 }) =>
  h3 &&
  css`
    font-size: ${themeGet('fontSizes.7')}px;
    letter-spacing: -0.04em;
    font-weight: 700;
    line-height: 130%;
  `

const h4Css = ({ h4 }) =>
  h4 &&
  css`
    font-size: ${themeGet('fontSizes.6')}px;
    letter-spacing: -0.04em;
    font-weight: 700;
    line-height: 143%;
  `

const action1Css = ({ action1 }) =>
  action1 &&
  css`
    font-size: ${themeGet('fontSizes.5')}px;
    font-weight: 600;
    line-height: 150%;
  `

const action2Css = ({ action2 }) =>
  action2 &&
  css`
    font-size: ${themeGet('fontSizes.4')}px;
    font-weight: 600;
    line-height: 156%;
  `

const action3Css = ({ action3 }) =>
  action3 &&
  css`
    font-size: ${themeGet('fontSizes.3')}px;
    font-weight: 600;
    line-height: 165%;
  `

const action4Css = ({ action4 }) =>
  action4 &&
  css`
    font-size: ${themeGet('fontSizes.2')}px;
    font-weight: 600;
    line-height: 175%;
  `

const action5Css = ({ action5 }) =>
  action5 &&
  css`
    font-size: ${themeGet('fontSizes.1')}px;
    font-weight: 600;
    line-height: 180%;
  `

const body1Css = ({ body1 }) =>
  body1 &&
  css`
    font-size: ${themeGet('fontSizes.5')}px;
    font-weight: 400;
    line-height: 150%;
  `

const body2Css = ({ body2 }) =>
  body2 &&
  css`
    font-size: ${themeGet('fontSizes.4')}px;
    font-weight: 400;
    line-height: 156%;
  `

const body3Css = ({ body3 }) =>
  body3 &&
  css`
    font-size: ${themeGet('fontSizes.3')}px;
    font-weight: 400;
    line-height: 165%;
  `

const body4Css = ({ body4 }) =>
  body4 &&
  css`
    font-size: ${themeGet('fontSizes.2')}px;
    font-weight: 400;
    line-height: 175%;
  `

const body5Css = ({ body5 }) =>
  body5 &&
  css`
    font-size: ${themeGet('fontSizes.1')}px;
    font-weight: 400;
    line-height: 180%;
  `

const caption1Css = ({ caption1 }) =>
  caption1 &&
  css`
    font-size: ${themeGet('fontSizes.4')}px;
    font-weight: 500;
    line-height: 156%;
  `

const caption2Css = ({ caption2 }) =>
  caption2 &&
  css`
    font-size: ${themeGet('fontSizes.3')}px;
    font-weight: 500;
    line-height: 165%;
  `

const caption3Css = ({ caption3 }) =>
  caption3 &&
  css`
    font-size: ${themeGet('fontSizes.2')}px;
    font-weight: 500;
    line-height: 175%;
  `

const caption4Css = ({ caption4 }) =>
  caption4 &&
  css`
    font-size: ${themeGet('fontSizes.1')}px;
    font-weight: 500;
    line-height: 180%;
  `

const caption5Css = ({ caption5 }) =>
  caption5 &&
  css`
    font-size: ${themeGet('fontSizes.0')}px;
    font-weight: 500;
    line-height: 190%;
  `
const display1Css = ({ display1 }) =>
  display1 &&
  css`
    font-size: ${themeGet('fontSizes.8')}px;
    font-weight: 500;
    line-height: 120%;
  `
const display2Css = ({ display2 }) =>
  display2 &&
  css`
    font-size: ${themeGet('fontSizes.1')}px;
    font-weight: 500;
    line-height: 150%;
  `

const subHeader1Css = ({ subHeader1 }) =>
  subHeader1 &&
  css`
    font-size: ${themeGet('fontSizes.6')}px;
    font-weight: 600;
    line-height: 143%;
  `

const subHeader2Css = ({ subHeader2 }) =>
  subHeader2 &&
  css`
    font-size: ${themeGet('fontSizes.5')}px;
    font-weight: 600;
    line-height: 150%;
  `

const subHeader3Css = ({ subHeader3 }) =>
  subHeader3 &&
  css`
    font-size: ${themeGet('fontSizes.4')}px;
    font-weight: 600;
    line-height: 156%;
  `

const subHeader4Css = ({ subHeader4 }) =>
  subHeader4 &&
  css`
    font-size: ${themeGet('fontSizes.3')}px;
    font-weight: 600;
    line-height: 165%;
  `
const bodyCss = ({ body }) =>
  body &&
  css`
    color: ${themeGet('colors.text.body')};
  `

const headingCss = ({ heading }) =>
  heading &&
  css`
    color: ${themeGet('colors.text.heading')};
  `
const inverseCss = ({ inverse }) =>
  inverse &&
  css`
    color: ${themeGet('colors.text.inverse')};
  `

const primaryCss = ({ primary }) =>
  primary &&
  css`
    color: ${themeGet('colors.primary')};
  `

const mutedCss = ({ muted }) =>
  muted &&
  css`
    color: ${themeGet('colors.text.muted')};
  `

const inMutedCss = ({ inMuted }) =>
  inMuted &&
  css`
    color: ${themeGet('colors.text.inMuted')};
  `

const Text = styled.p`
  margin: 0;

  ${h1Css}
  ${h2Css}
  ${h3Css}
  ${h4Css}
  
  ${action1Css}
  ${action2Css}
  ${action3Css}
  ${action4Css}
  ${action5Css}

  ${subHeader1Css}
  ${subHeader2Css}
  ${subHeader3Css}
  ${subHeader4Css}
  
  ${body1Css}
  ${body2Css}
  ${body3Css}
  ${body4Css}
  ${body5Css}
  
  ${caption1Css}
  ${caption2Css}
  ${caption3Css}
  ${caption4Css}
  ${caption5Css}

  ${display1Css}
  ${display2Css}
  
  ${primaryCss}
  ${bodyCss}
  ${headingCss}
  ${inverseCss}
  ${inMutedCss}
  ${mutedCss}

  ${margin}
  ${typography}
`

Text.defaultProps = {
  action1: undefined,
  action2: undefined,
  action3: undefined,
  action4: undefined,
  action5: undefined,
  body1: undefined,
  body2: undefined,
  body3: undefined,
  body4: undefined,
  body: undefined,
  caption1: undefined,
  caption2: undefined,
  caption3: undefined,
  caption4: undefined,
  caption5: undefined,
  display1: undefined,
  display2: undefined,
  h1: undefined,
  h2: undefined,
  h3: undefined,
  h4: undefined,
  heading: undefined,
  inverse: undefined,
  inMuted: undefined,
  muted: undefined,
  primary: undefined,
  subHeader1: undefined,
  subHeader2: undefined,
  subHeader3: undefined,
  subHeader4: undefined,
}

Text.propTypes = {
  action1: PropTypes.bool,
  action2: PropTypes.bool,
  action3: PropTypes.bool,
  action4: PropTypes.bool,
  action5: PropTypes.bool,
  body: PropTypes.bool,
  body1: PropTypes.bool,
  body2: PropTypes.bool,
  body3: PropTypes.bool,
  body4: PropTypes.bool,
  body5: PropTypes.bool,
  caption1: PropTypes.bool,
  caption2: PropTypes.bool,
  caption3: PropTypes.bool,
  caption4: PropTypes.bool,
  caption5: PropTypes.bool,
  display1: PropTypes.bool,
  display2: PropTypes.bool,
  fontSize: PropTypes.number,
  fontWight: PropTypes.number,
  h1: PropTypes.bool,
  h2: PropTypes.bool,
  h3: PropTypes.bool,
  h4: PropTypes.bool,
  heading: PropTypes.bool,
  inMuted: PropTypes.bool,
  inverse: PropTypes.bool,
  letterSpacing: PropTypes.number,
  lineHeight: PropTypes.number,
  muted: PropTypes.bool,
  primary: PropTypes.bool,
  subHeader1: PropTypes.bool,
  subHeader2: PropTypes.bool,
  subHeader3: PropTypes.bool,
  subHeader4: PropTypes.bool,
}

export default Text
