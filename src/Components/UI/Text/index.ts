import styled, { css } from 'styled-components'
import {
  color,
  ColorProps,
  layout,
  LayoutProps,
  margin,
  MarginProps,
  typography,
  TypographyProps,
} from 'styled-system'
import { themeGet } from '@styled-system/theme-get'

type CustomColorProps = {
  body?: boolean
  heading?: boolean
  inverse?: boolean
  muteInverse?: boolean
  mute?: boolean
  primary?: boolean
  danger?: boolean
  success?: boolean
}

type CustomTypographyProps = {
  action1?: boolean
  action2?: boolean
  action3?: boolean
  action4?: boolean
  action5?: boolean
  body1?: boolean
  body2?: boolean
  body3?: boolean
  body4?: boolean
  body5?: boolean
  caption1?: boolean
  caption2?: boolean
  caption3?: boolean
  caption4?: boolean
  caption5?: boolean
  display1?: boolean
  display2?: boolean
  h1?: boolean
  h2?: boolean
  h3?: boolean
  h4?: boolean
  subHeader1?: boolean
  subHeader2?: boolean
  subHeader3?: boolean
  subHeader4?: boolean
  subHeader5?: boolean
}

type CustomGeneralProps = { preLine?: boolean }

type Props = CustomColorProps &
  CustomTypographyProps &
  CustomGeneralProps &
  ColorProps &
  LayoutProps &
  MarginProps &
  TypographyProps

const h1Css = ({ h1 }: CustomTypographyProps) =>
  h1 &&
  css`
    font-size: ${themeGet('fontSizes.9')}px;
    letter-spacing: -0.04em;
    font-weight: 700;
    line-height: 110%;
  `

const h2Css = ({ h2 }: CustomTypographyProps) =>
  h2 &&
  css`
    font-size: ${themeGet('fontSizes.8')}px;
    letter-spacing: -0.04em;
    font-weight: 700;
    line-height: 120%;
  `

const h3Css = ({ h3 }: CustomTypographyProps) =>
  h3 &&
  css`
    font-size: ${themeGet('fontSizes.7')}px;
    letter-spacing: -0.04em;
    font-weight: 700;
    line-height: 130%;
  `

const h4Css = ({ h4 }: CustomTypographyProps) =>
  h4 &&
  css`
    font-size: ${themeGet('fontSizes.6')}px;
    letter-spacing: -0.04em;
    font-weight: 700;
    line-height: 143%;
  `

const action1Css = ({ action1 }: CustomTypographyProps) =>
  action1 &&
  css`
    font-size: ${themeGet('fontSizes.5')}px;
    font-weight: 600;
    line-height: 150%;
  `

const action2Css = ({ action2 }: CustomTypographyProps) =>
  action2 &&
  css`
    font-size: ${themeGet('fontSizes.4')}px;
    font-weight: 600;
    line-height: 156%;
  `

const action3Css = ({ action3 }: CustomTypographyProps) =>
  action3 &&
  css`
    font-size: ${themeGet('fontSizes.3')}px;
    font-weight: 600;
    line-height: 165%;
  `

const action4Css = ({ action4 }: CustomTypographyProps) =>
  action4 &&
  css`
    font-size: ${themeGet('fontSizes.2')}px;
    font-weight: 600;
    line-height: 175%;
  `

const action5Css = ({ action5 }: CustomTypographyProps) =>
  action5 &&
  css`
    font-size: ${themeGet('fontSizes.1')}px;
    font-weight: 600;
    line-height: 180%;
  `

const body1Css = ({ body1 }: CustomTypographyProps) =>
  body1 &&
  css`
    font-size: ${themeGet('fontSizes.5')}px;
    font-weight: 400;
    line-height: 150%;
  `

const body2Css = ({ body2 }: CustomTypographyProps) =>
  body2 &&
  css`
    font-size: ${themeGet('fontSizes.4')}px;
    font-weight: 400;
    line-height: 156%;
  `

const body3Css = ({ body3 }: CustomTypographyProps) =>
  body3 &&
  css`
    font-size: ${themeGet('fontSizes.3')}px;
    font-weight: 400;
    line-height: 165%;
  `

const body4Css = ({ body4 }: CustomTypographyProps) =>
  body4 &&
  css`
    font-size: ${themeGet('fontSizes.2')}px;
    font-weight: 400;
    line-height: 175%;
  `

const body5Css = ({ body5 }: CustomTypographyProps) =>
  body5 &&
  css`
    font-size: ${themeGet('fontSizes.1')}px;
    font-weight: 400;
    line-height: 180%;
  `

const caption1Css = ({ caption1 }: CustomTypographyProps) =>
  caption1 &&
  css`
    font-size: ${themeGet('fontSizes.4')}px;
    font-weight: 500;
    line-height: 156%;
  `

const caption2Css = ({ caption2 }: CustomTypographyProps) =>
  caption2 &&
  css`
    font-size: ${themeGet('fontSizes.3')}px;
    font-weight: 500;
    line-height: 165%;
  `

const caption3Css = ({ caption3 }: CustomTypographyProps) =>
  caption3 &&
  css`
    font-size: ${themeGet('fontSizes.2')}px;
    font-weight: 500;
    line-height: 175%;
  `

const caption4Css = ({ caption4 }: CustomTypographyProps) =>
  caption4 &&
  css`
    font-size: ${themeGet('fontSizes.1')}px;
    font-weight: 500;
    line-height: 180%;
  `

const caption5Css = ({ caption5 }: CustomTypographyProps) =>
  caption5 &&
  css`
    font-size: ${themeGet('fontSizes.0')}px;
    font-weight: 500;
    line-height: 190%;
  `
const display1Css = ({ display1 }: CustomTypographyProps) =>
  display1 &&
  css`
    font-size: ${themeGet('fontSizes.8')}px;
    font-weight: 500;
    line-height: 120%;
  `
const display2Css = ({ display2 }: CustomTypographyProps) =>
  display2 &&
  css`
    font-size: ${themeGet('fontSizes.1')}px;
    font-weight: 500;
    line-height: 150%;
  `

const subHeader1Css = ({ subHeader1 }: CustomTypographyProps) =>
  subHeader1 &&
  css`
    font-size: ${themeGet('fontSizes.6')}px;
    font-weight: 600;
    line-height: 143%;
  `

const subHeader2Css = ({ subHeader2 }: CustomTypographyProps) =>
  subHeader2 &&
  css`
    font-size: ${themeGet('fontSizes.5')}px;
    font-weight: 600;
    line-height: 150%;
  `

const subHeader3Css = ({ subHeader3 }: CustomTypographyProps) =>
  subHeader3 &&
  css`
    font-size: ${themeGet('fontSizes.4')}px;
    font-weight: 600;
    line-height: 156%;
  `

const subHeader4Css = ({ subHeader4 }: CustomTypographyProps) =>
  subHeader4 &&
  css`
    font-size: ${themeGet('fontSizes.3')}px;
    font-weight: 600;
    line-height: 165%;
  `

const subHeader5Css = ({ subHeader5 }: CustomTypographyProps) =>
  subHeader5 &&
  css`
    font-size: ${themeGet('fontSizes.2')}px;
    font-weight: 600;
    line-height: 180%;
  `

const bodyCss = ({ body }: CustomColorProps) =>
  body &&
  css`
    color: ${themeGet('colors.text.body')};
  `

const headingCss = ({ heading }: CustomColorProps) =>
  heading &&
  css`
    color: ${themeGet('colors.text.heading')};
  `
const inverseCss = ({ inverse }: CustomColorProps) =>
  inverse &&
  css`
    color: ${themeGet('colors.text.inverse')};
  `

const primaryCss = ({ primary }: CustomColorProps) =>
  primary &&
  css`
    color: ${themeGet('colors.primary')};
  `

const muteCss = ({ mute }: CustomColorProps) =>
  mute &&
  css`
    color: ${themeGet('colors.text.mute')};
  `

const muteInverseCss = ({ muteInverse }: CustomColorProps) =>
  muteInverse &&
  css`
    color: ${themeGet('colors.text.muteInverse')};
  `

const dangerCss = ({ danger }: CustomColorProps) =>
  danger &&
  css`
    color: ${themeGet('colors.text.danger')};
  `

const successCss = ({ success }: CustomColorProps) =>
  success &&
  css`
    color: ${themeGet('colors.text.success')};
  `

const preLineCss = ({ preLine }: CustomGeneralProps) =>
  preLine &&
  css`
    white-space: pre-line;
  `

const Text = styled.p<Props>`
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
  ${subHeader5Css}
  
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
  
  ${bodyCss}
  ${dangerCss}
  ${headingCss}
  ${inverseCss}
  ${muteCss}
  ${muteInverseCss}
  ${primaryCss}
  ${successCss}
  
  ${preLineCss}

  ${color}
  ${layout}
  ${margin}
  ${typography}
`

export default Text
