import Link from 'next/link'
import React from 'react'
import CardApps from './CardApps';
import PageBanner from './PageBanner';
import YouAre from './_components/YouAre';
import Industries from './_components/Industries';
import HardwareEcosystem from './_components/HardwareEcosystem';

function page() {
  return (
    <>      
      <PageBanner />
      <CardApps />
      <Industries />
      <YouAre />
      <HardwareEcosystem />
    </>
  )
}

export default page