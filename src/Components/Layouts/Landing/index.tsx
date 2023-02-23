import React from 'react'
import { ReactI18NextChild } from 'react-i18next'

import Head from 'next/head'

import { Footer, Header } from 'Components/Blocks'
import { Loader } from 'Components/UI'

import { APP_NAME } from 'Constants/ids'

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
    <>
      <Head>
        <title>{APP_NAME}</title>
      </Head>
      <Container>
        <Header />
        {children}
        <Footer data={footerData} />
      </Container>
    </>
  )
}

export default LandingLayout
