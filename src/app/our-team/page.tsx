import React from 'react'
import PageBanner from './_components/PageBanner'
import TeamInfo from './_components/TeamInfo'
import TeamMembers from './_components/TeamMembers'

function page() {
  return (
    <>
        <PageBanner/>
        <TeamInfo />
        <TeamMembers />
    </>
  )
}

export default page