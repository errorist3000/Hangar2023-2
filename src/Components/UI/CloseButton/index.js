import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import themeGet from '@styled-system/theme-get'

import { X } from 'phosphor-react'

const Container = styled.button`
  cursor: pointer;
  color: ${themeGet('colors.text.muted')};

  &:hover {
    color: ${themeGet('colors.text.heading')};
  }
`

function CloseButton({ onClick }) {
  return (
    <Container onClick={onClick}>
      <X size={24} weight="bold" />
    </Container>
  )
}

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default CloseButton
