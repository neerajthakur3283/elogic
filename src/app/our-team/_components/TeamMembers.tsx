'use client'
import { motion } from "framer-motion";
import React from 'react'
import TeamMemberCard from './TeamMemberCard'

// images
import userOne from '@/src/assets/images/prfile-1.jpg'
import userTwo from '@/src/assets/images/prfile-2.jpg'
import userThree from '@/src/assets/images/prfile-3.jpg'
import userFour from '@/src/assets/images/prfile-4.jpg'
import userFive from '@/src/assets/images/prfile-5.jpg'
import userSix from '@/src/assets/images/prfile-6.jpg'
import userSeven from '@/src/assets/images/prfile-7.jpg'
import userEight from '@/src/assets/images/prfile-8.jpg'
import userNine from '@/src/assets/images/prfile-9.jpg'
import userTen from '@/src/assets/images/prfile-10.jpg'
import userEleven from '@/src/assets/images/prfile-11.jpg'
import userTwelve from '@/src/assets/images/prfile-12.jpg'

function TeamMembers() {
    const memberData = [
        {profileImg:userOne,profileName:'Chris Smedley',desination:'Chief Executive Officer',linkedinLink:'#'},
        {profileImg:userTwo,profileName:'Chris Smedley',desination:'Chief Executive Officer',linkedinLink:'#'},
        {profileImg:userThree,profileName:'Chris Smedley',desination:'Chief Executive Officer',linkedinLink:'#'},
        {profileImg:userFour,profileName:'Chris Smedley',desination:'Chief Executive Officer',linkedinLink:'#'},
        {profileImg:userFive,profileName:'Chris Smedley',desination:'Chief Executive Officer',linkedinLink:'#'},
        {profileImg:userSix,profileName:'Chris Smedley',desination:'Chief Executive Officer',linkedinLink:'#'},
        {profileImg:userSeven,profileName:'Chris Smedley',desination:'Chief Executive Officer',linkedinLink:'#'},
        {profileImg:userEight,profileName:'Chris Smedley',desination:'Chief Executive Officer',linkedinLink:'#'},
        {profileImg:userNine,profileName:'Chris Smedley',desination:'Chief Executive Officer',linkedinLink:'#'},
        {profileImg:userTen,profileName:'Chris Smedley',desination:'Chief Executive Officer',linkedinLink:'#'},
        {profileImg:userEleven,profileName:'Chris Smedley',desination:'Chief Executive Officer',linkedinLink:'#'},
        {profileImg:userTwelve,profileName:'Chris Smedley',desination:'Chief Executive Officer',linkedinLink:'#'},
    ]
    return (
    <>
        <section>
            <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3}}
            className='bg-[#EEF1F5] 2xl:pt-[100px] xl:pt-[75px] lg:pt-[66px] md:pt-[45px] pt-[50px] md:pb-0 pb-12 2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px]'>
                <div className='container mx-auto min-[1470px]:max-w-[1417.98px]'>
                    <div className='flex justify-center'>
                        <h2 className="text-black leading-[1] 2xl:text-[61.77px] xl:text-[46.33px] md:text-[41.18px] text-[24px] font-bold">Meet The Team</h2>
                    </div>
                    <div className='2xl:pt-[80px] xl:pt-[60px] md:pt-[53px] pt-[40px] grid lg:grid-cols-3 sm:grid-cols-2 2xl:gap-[60px] xl:gap-[50px] lg:gap-[40px] md:gap-[30px] gap-[24px]'>
                        <TeamMemberCard memberData={memberData} />
                    </div>
                </div>
            </motion.div>
        </section>
    </>
  )
}

export default TeamMembers