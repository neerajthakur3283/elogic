import React from 'react'
import PageBanner from './_components/PageBanner'
import ServiceOverview from './_components/ServiceOverview'
import OurCulturedValues from './_components/ExampleApplications'

function page() {
  return (
    <>
        <PageBanner />
        <ServiceOverview />
        <OurCulturedValues />
    </>
  )
}

export default page