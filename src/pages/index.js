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
import landingFooterQuery from 'Services/DatoCMS/Queries/landingFooter.graphql'

export async function getStaticProps() {
  const { data } = await client.query({
    query: homePageQuery,
  })

  const { data: footerData } = await client.query({
    query: landingFooterQuery,
  })

  return { props: { data, footerData } }
}

function Main({ data, footerData }) {
  return (
    <LandingLayout footerData={footerData?.landingFooter}>
      <Hero />
      <Steps data={data?.homePage?.stepSection} />
      <Gallery data={data?.homePage?.galleryProjects} />
      <WhySelectUs data={data?.homePage?.whySelectUsSection} />
      <Statistics data={data?.homePage?.statisticSection} />
      <OurNews data={data?.homePage?.ourNewsSection} />
      <Contacts />
    </LandingLayout>
  )
}

Main.defaultProps = {
  data: {},
  footerData: {},
}

Main.propTypes = {
  data: PropTypes.object,
  footerData: PropTypes.object,
}

export default Main
