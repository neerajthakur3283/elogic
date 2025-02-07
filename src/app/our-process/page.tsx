import React from 'react'
import PageBanner from './_components/PageBanner'
import VisionMission from './_components/VisionMission'
import OurCulturedValues from './_components/OurCulturedValues'
import RoadMap from './_components/RoadMap'
import Approach from './_components/Approach'
import Slider from './OurProcessSlider'

function page() {
  return (
    <>
        <PageBanner />
        <Approach />
        <Slider />
        {/* <VisionMission />
        <OurCulturedValues />
        <RoadMap /> */}
    </>
  )
}

export default page