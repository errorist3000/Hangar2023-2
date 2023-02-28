import React from 'react'

import { LandingLayout } from 'Components/Layouts'

import client from 'Services/DatoCMS/client'
import landingFooterQuery from 'Services/DatoCMS/Queries/landingFooter.graphql'

export async function getStaticProps() {
  const { data: footerData } = await client.query({
    query: landingFooterQuery,
  })

  return { props: { footerData } }
}

type Props = {
  footerData: DatoQueryData<'landingFooter'>
}

function CalculatorPage({ footerData }: Props) {
  return (
    <LandingLayout footerData={footerData?.landingFooter}>
      Calculator
    </LandingLayout>
  )
}

export default CalculatorPage
