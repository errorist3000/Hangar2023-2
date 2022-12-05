import PropTypes from 'prop-types'

import styled, { css } from 'styled-components'
import flexbox from '@styled-system/flexbox'
import layout from '@styled-system/layout'
import { margin, padding } from '@styled-system/space'

const fullWidthCss = ({ fullWidth }) =>
  fullWidth &&
  css`
    width: 100%;
  `

const fullHeightCss = ({ fullHeight }) =>
  fullHeight &&
  css`
    height: 100%;
  `

const centerCss = ({ center }) =>
  center &&
  css`
    align-items: center;
  `

const spaceBetweenCss = ({ spaceBetween }) =>
  spaceBetween &&
  css`
    justify-content: space-between;
  `

const justifyCenterCss = ({ justifyCenter }) =>
  justifyCenter &&
  css`
    justify-content: center;
  `

const gapCss = ({ gap }) =>
  gap &&
  css`
    gap: ${gap}px;
  `

const Flex = styled.div`
  display: flex;

  ${flexbox}
  ${layout}
  ${margin}
  ${padding}
  
  ${gapCss}
  
  ${centerCss}
  ${fullHeightCss}
  ${fullWidthCss}
  ${spaceBetweenCss}
  ${justifyCenterCss}
`

export const Column = styled(Flex)`
  flex-direction: column;
`

export const Row = styled(Flex)``

const sizeProps = PropTypes.oneOfType([PropTypes.number, PropTypes.string])

const DEFAULT_PROPS = {
  center: undefined,
  fullHeight: undefined,
  fullWidth: undefined,
  gap: undefined,
  grow: undefined,
  justifyCenter: undefined,
  maxWidth: undefined,
  spaceBetween: undefined,
  width: undefined,
}

const PROP_TYPES = {
  center: PropTypes.bool,
  fullHeight: PropTypes.bool,
  fullWidth: PropTypes.bool,
  gap: PropTypes.number,
  grow: PropTypes.bool,
  justifyCenter: PropTypes.bool,
  maxWidth: sizeProps,
  spaceBetween: PropTypes.bool,
  width: sizeProps,
}

Row.defaultProps = DEFAULT_PROPS
Row.propTypes = PROP_TYPES

Column.defaultProps = DEFAULT_PROPS
Column.propTypes = PROP_TYPES
