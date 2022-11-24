import styled from 'styled-components'
import themeGet from '@styled-system/theme-get'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-self: flex-start;
  width: 100%;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding-top: 80px;
  padding-bottom: 80px;
  width: 100%;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: start;
  padding-top: 10px;

  background-color: ${themeGet('colors.bg.primary')};
  svg {
    width: 24px;
    height: 24px;
    color: ${themeGet('colors.text.muted')};
  }
`
