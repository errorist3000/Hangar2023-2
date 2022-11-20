import React, { useEffect, useState } from 'react'

import Logo from 'Components/Blocks/Logo'
import NavBar from 'Components/Blocks/NavBar'

import { Container, Content } from './styles'

const SCROLL_EDGE = 72

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

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

  console.log(isScrolled)

  return (
    <Container shrink={isScrolled}>
      <Content>
        <Logo />
        <NavBar />
      </Content>
    </Container>
  )
}

export default Header
