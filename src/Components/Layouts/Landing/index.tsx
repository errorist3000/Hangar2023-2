import React from 'react'
import { ReactI18NextChild } from 'react-i18next'

import { Footer, Header } from 'Components/Blocks'
import { Loader } from 'Components/UI'

import { Container } from './styles'

type Props = {
  children: ReactI18NextChild
  footerData?: DatoSchema.LandingFooterRecord
}
function LandingLayout({ footerData, children }: Props) {
  if (!footerData) {
    return <Loader />
  }

  return (
    <Container>
      <Header />
      {children}
      <Footer data={footerData} />
    </Container>
  )
}

export default LandingLayout
