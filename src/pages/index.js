import React from 'react'

import { LandingLayout } from 'Components/Layouts'
import {
  Contacts,
  Gallery,
  Hero,
  OurNews,
  Statistics,
  Steps,
  WhySelectUs,
} from 'Components/Pages/Main'

function Main() {
  return (
    <LandingLayout>
      <Hero />
      <Steps />
      <Gallery />
      <WhySelectUs />
      <Statistics />
      <OurNews />
      <Contacts />
    </LandingLayout>
  )
}

export default Main
