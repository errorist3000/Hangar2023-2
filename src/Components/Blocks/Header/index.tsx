import React, { useEffect, useState } from 'react'
import Collapse from 'react-css-collapse'

import { List } from 'phosphor-react'

import Logo from 'Components/Blocks/Logo'
import NavBar, { Kind } from 'Components/Blocks/NavBar'
import { View } from 'Components/UI'

import {
  BarContainer,
  BurgerButton,
  Container,
  Content,
  MobileMenuContainer,
} from './styles'

const SCROLL_EDGE = 72

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > SCROLL_EDGE) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    document.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <Container>
      <View.Desktop>
        <BarContainer shrink={isScrolled}>
          <Content>
            <Logo />
            <NavBar />
          </Content>
        </BarContainer>
      </View.Desktop>
      <View.Tablet>
        <BarContainer shrink={isScrolled}>
          <Content>
            <Logo />
            <BurgerButton
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <List size={32} />
            </BurgerButton>
          </Content>
        </BarContainer>
        <MobileMenuContainer>
          <Collapse isOpen={isMobileMenuOpen}>
            <NavBar kind={Kind.Mobile} />
          </Collapse>
        </MobileMenuContainer>
      </View.Tablet>
    </Container>
  )
}

export default Header
