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

const spaceBetweenCss = ({ spaceBetween }) =>
  spaceBetween &&
  css`
    justify-content: space-between;
  `

const Flex = styled.div`
  display: flex;

  ${flexbox}
  ${layout}
  ${margin}
  ${padding}
  
  ${fullWidthCss}
  ${spaceBetweenCss}
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
