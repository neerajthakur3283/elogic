import React from 'react'
import PageBanner from './_components/PageBanner'
import PlatformFeatures from './_components/PlatformFeatures'
import CostControlAllocation from './_components/CostControlAllocation'
import SmartFaultDetection from './SmartFaultDetection'
import ComplianceReporting from './_components/ComplianceReporting'
import Hardware from './_components/Hardware'

function page() {
  return (
    <>
        <PageBanner/>
        <PlatformFeatures/>
        <CostControlAllocation/>
        <SmartFaultDetection/>
        <ComplianceReporting/>
        <Hardware/>
    </>
  )
}

export default page