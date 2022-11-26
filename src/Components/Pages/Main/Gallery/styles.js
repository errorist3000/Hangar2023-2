import styled from 'styled-components'
import themeGet from '@styled-system/theme-get'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-self: flex-start;
  width: 100%;
  background-color: ${themeGet('colors.bg.primary')};
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding-top: 80px;
  width: 100%;

  button {
    border-radius: 0;
  }
`
export const CardsHolder = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`

export const CardHolder = styled.div`
  position: relative;
  height: 320px;
  width: 20vw;
`

export const Card = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
  position: absolute;
  width: 100%;
  bottom: 0;
  transition: all ${themeGet('transitionTime.long')};

  p {
    transition: opacity ${themeGet('transitionTime.long')} ease-in;
    opacity: 0;
  }

  &:hover {
    z-index: 1;
    box-shadow: ${themeGet('shadow.large')};

    img {
      filter: grayscale(0);
    }

    div {
      height: 96px;
    }

    p {
      opacity: 1;
    }
  }
`

export const StyledImage = styled.img`
  width: 100%;
  height: 320px;
  object-fit: cover;
  filter: grayscale(100%);
  transition: all ${themeGet('transitionTime.long')};
`
export const CaptionHolder = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  height: 0;
  transition: height ${themeGet('transitionTime.long')};
  background-color: ${themeGet('colors.bg.default')};
`
