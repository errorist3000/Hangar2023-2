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

import client from 'Services/DatoCMS/client'
import allNoveltiesQuery from 'Services/DatoCMS/Queries/allNovelties.graphql'
import homePageQuery from 'Services/DatoCMS/Queries/homePage.graphql'
import landingFooterQuery from 'Services/DatoCMS/Queries/landingFooter.graphql'
import projectsQuery from 'Services/DatoCMS/Queries/projects.graphql'

export async function getStaticProps() {
  const { data: pageData } = await client.query({
    query: homePageQuery,
  })

  const { data: projectsData } = await client.query({
    query: projectsQuery,
  })

  const { data: allNoveltiesData } = await client.query({
    query: allNoveltiesQuery,
  })

  const { data: footerData } = await client.query({
    query: landingFooterQuery,
  })

  return { props: { pageData, allNoveltiesData, footerData, projectsData } }
}

type Props = {
  pageData: DatoQueryData<'homePage'>
  footerData: DatoQueryData<'landingFooter'>
  allNoveltiesData: DatoQueryData<'allNovelties'>
  projectsData: DatoQueryData<'allProjects'>
}

function Main({ pageData, projectsData, allNoveltiesData, footerData }: Props) {
  return (
    <LandingLayout footerData={footerData?.landingFooter}>
      <Hero data={pageData?.homePage?.heroSection} />
      <Steps data={pageData?.homePage?.stepSection} />
      <Gallery
        data={pageData?.homePage?.galleryProjects}
        projects={projectsData?.allProjects}
      />
      <WhySelectUs data={pageData?.homePage?.whySelectUsSection} />
      <Statistics data={pageData?.homePage?.statisticSection} />
      <OurNews data={allNoveltiesData?.allNovelties} />
      <Contacts />
    </LandingLayout>
  )
}

export default Main
