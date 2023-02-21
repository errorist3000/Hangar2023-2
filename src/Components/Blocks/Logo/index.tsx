import React from 'react'

import { useRouter } from 'next/router'

import { logoFull } from 'Assets/Svg'

import { LANDING_SECTION_ID } from 'Constants/ids'
import { ROOT } from 'Constants/routes'

import Utils from 'Services/Utils'

import { ContainerButton, ContainerLink, LogoFull } from './styles'

function Logo() {
  const location = useRouter()

  return location.pathname === ROOT ? (
    <ContainerButton
      onClick={() => Utils.Scroll.pageScroll(LANDING_SECTION_ID.hero)}
    >
      <LogoFull>{logoFull()}</LogoFull>
    </ContainerButton>
  ) : (
    <ContainerLink href={ROOT}>
      <LogoFull>{logoFull()}</LogoFull>
    </ContainerLink>
  )
}

export default Logo
