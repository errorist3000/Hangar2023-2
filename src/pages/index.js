import React from 'react'

import { LandingLayout } from 'Components/Layouts'
import { Contacts, Statistics, Steps, WhySelectUs } from 'Components/Pages/Main'

function Main() {
  return (
    <LandingLayout>
      <Steps />
      <WhySelectUs />
      <Statistics />
      <Contacts />
    </LandingLayout>
  )
}

export default Main
