import React from 'react'
import PageBanner from './_components/PageBanner'
import WhoWeAre from './_components/WhoWeAre'
import TeamInfo from './_components/TeamInfo'
import VisionMission from './_components/VisionMission'
import OurCulturedValues from './_components/OurCulturedValues'
import RoadMap from './_components/RoadMap'

function page() {
  return (
    <>
        <PageBanner />
        <WhoWeAre />
        <TeamInfo />
        <VisionMission />
        <OurCulturedValues />
        <RoadMap />
    </>
  )
}

export default page