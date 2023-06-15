import React from 'react'
import PropTypes from 'prop-types'

import Popover from 'Components/UI/Popover'

import { ContentWrapper } from './styles'

const DEFAULT_DELAY = [500, 0]

function Tooltip({ children, content, ...rest }) {
  return (
    <Popover
      content={<ContentWrapper>{content}</ContentWrapper>}
      delay={DEFAULT_DELAY}
      withArrow
      {...rest}
    >
      {children}
    </Popover>
  )
}

Tooltip.defaultProps = {
  children: null,
  content: null,
}

Tooltip.propTypes = {
  children: PropTypes.node,
  content: PropTypes.node,
}

export default Tooltip
