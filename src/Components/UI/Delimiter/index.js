import React from 'react'
import PropTypes from 'prop-types'

import styled, { css } from 'styled-components'
import themeGet from '@styled-system/theme-get'

const itemVerticalCss = ({ vertical }) =>
  vertical &&
  css`
    width: 1px;
    height: 100%;
  `

export const Item = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${themeGet('colors.border.secondary')};

  ${itemVerticalCss}
`

function Delimiter({ vertical }) {
  return <Item vertical={vertical} />
}

Delimiter.defaultProps = {
  vertical: false,
}

Delimiter.propTypes = {
  vertical: PropTypes.bool,
}

export default Delimiter
