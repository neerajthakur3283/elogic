'use client'
import { motion } from "framer-motion";
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { MdArrowOutward } from 'react-icons/md'
import CostControlCard from './CostControlCard'

// images
import palletizer from '@/src/assets/images/palletizer.png'
import iconOne from '@/src/assets/images/increase.svg'

function CostControlAllocation() {
  const costControlCardData = [
    { icon: iconOne, title: 'Real-Time Machine Status', description: 'Monitor detailed machine status in real-time' },
    { icon: iconOne, title: 'Uptime and Downtime Tracking', description: 'Track uptime, downtime, and operational states' },
    { icon: iconOne, title: 'Performance Visualisation', description: 'Visualize production performance across multiple shifts' },
    { icon: iconOne, title: 'Machine Availability Patterns', description: 'Identify patterns in machine availability and performance' },
  ]
  return (
    <>
      <section>
        <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3}}
        className='bg-[#051731] 2xl:py-[67px] xl:py-[50.33px] md:py-[44px] py-[50px] 2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px]'>
          <div className='flex items-center justify-between lg:flex-nowrap flex-wrap xl:gap-0 md:gap-5'>
            <div className='2xl:w-[calc(100%_-_762.5px)] xl:w-[calc(100%_-_571.87px)] lg:w-[calc(100%_-_508.33px)] w-full min-[1850px]:pe-[79.5px] max-[1535px]:pe-[35px] max-[1199px]:pe-0'>
              <div className='lg:hidden flex mb-[30px]'>
                <h2 className='font-semibold text-[24px] text-white'>Production Timeline Analysis</h2>
              </div>
              <Image src={palletizer} alt='' />
            </div>
            <div className='2xl:w-[762.5px] xl:w-[571.87px] lg:w-[508.33px] w-full text-white'>
              <h2 className='font-semibold 2xl:text-[36px] xl:text-[27px] md:text-[24px] text-[22.45px] lg:flex hidden'>Production Timeline Analysis</h2>
              <div className='grid md:grid-cols-2 2xl:pt-[50px] xl:pt-[40px] pt-[33.33px] 2xl:gap-[40px] xl:gap-[30px] gap-[26.67px]'>
                <CostControlCard costControlCardData={costControlCardData} />
              </div>
              <div className="2xl:pt-[60px] xl:pt-[40px] pt-[30px]">
                <Link className="bg-[#3563E9] text-white px-[2] w-full 2xl:max-w-[275px] xl:max-w-[209px] md:max-w-[175.44px] max-w-[195px] 2xl:h-[52px] xl:h-[39px] md:h-[35px] h-[40.29px] flex justify-center items-center py-[2px] 2xl:text-[20px] xl:text-[15px] md:text-[13.33px] text-[15.24px] md:font-bold font-semibold rounded-[16px] capitalize duration-500 hover:bg-black hover:text-white hover:scale-110"
                  href="/contact-us">Schedule a demo <MdArrowOutward className="ms-2.5" /></Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  )
}

export default CostControlAllocation