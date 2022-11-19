import React from 'react'

import { LandingLayout } from 'Components/Layouts'
import {
  Contacts,
  Footer,
  Statistics,
  Steps,
  WhySelectUs,
} from 'Components/Pages/Main'

function Main() {
  return (
    <LandingLayout>
      <Steps />
      <WhySelectUs />
      <Statistics />
      <Contacts />
      <Footer />
    </LandingLayout>
  )
}

export default Main
