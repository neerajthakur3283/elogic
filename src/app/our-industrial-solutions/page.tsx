import Link from 'next/link'
import React from 'react'
import CardApps from './CardApps';
import PageBanner from './PageBanner';
import YouAre from './_components/YouAre';

function page() {
  return (
    <>      
      <PageBanner />
      <CardApps />
      <YouAre />
    </>
  )
}

export default page