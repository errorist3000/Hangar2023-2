import React from 'react'
import PropTypes from 'prop-types'

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
import client from 'Services/DatoCMS/client'
import homePageQuery from 'Services/DatoCMS/Queries/homePage.graphql'

export async function getStaticProps() {
  const { data } = await client.query({
    query: homePageQuery,
  })

  return { props: { data } }
}

function Main({ data }) {
  return (
    <LandingLayout>
      <Hero />
      <Steps data={data?.homePage?.stepSection} />
      <Gallery />
      <WhySelectUs />
      <Statistics />
      <OurNews />
      <Contacts />
    </LandingLayout>
  )
}

Main.defaultProps = {
  data: {},
}

Main.propTypes = {
  data: PropTypes.object,
}

export default Main
