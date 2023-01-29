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
import allNoveltiesQuery from 'Services/DatoCMS/Queries/allNovelties.graphql'
import homePageQuery from 'Services/DatoCMS/Queries/homePage.graphql'
import landingFooterQuery from 'Services/DatoCMS/Queries/landingFooter.graphql'

export async function getStaticProps() {
  const { data: pageData } = await client.query({
    query: homePageQuery,
  })

  const { data: allNoveltiesData } = await client.query({
    query: allNoveltiesQuery,
  })

  const { data: footerData } = await client.query({
    query: landingFooterQuery,
  })

  return { props: { pageData, allNoveltiesData, footerData } }
}

function Main({ pageData, allNoveltiesData, footerData }) {
  return (
    <LandingLayout footerData={footerData?.landingFooter}>
      <Hero data={pageData?.homePage?.heroSection} />
      <Steps data={pageData?.homePage?.stepSection} />
      <Gallery data={pageData?.homePage?.galleryProjects} />
      <WhySelectUs data={pageData?.homePage?.whySelectUsSection} />
      <Statistics data={pageData?.homePage?.statisticSection} />
      <OurNews data={allNoveltiesData?.allNovelties} />
      <Contacts />
    </LandingLayout>
  )
}

Main.defaultProps = {
  allNoveltiesData: {},
  footerData: {},
  pageData: {},
}

Main.propTypes = {
  allNoveltiesData: PropTypes.object,
  footerData: PropTypes.object,
  pageData: PropTypes.object,
}

export default Main
