'use client'
import { motion } from "framer-motion";
import Image from 'next/image'
import React from 'react'

// images
import teamImg from '@/src/assets/images/team-frame.jpg'

function TeamInfo() {
  return (
    <>
        <section>
            <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3}}
            className='bg-[#051731] 2xl:py-[120px] xl:py-[90px] lg:py-[85px] md:py-[66px] py-[45px] 2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px] 2xl:my-[100px] xl:my-[75px] lg:my-[66px] md:my-[45px] my-[50px]'>
                <div className='flex items-center justify-between 2xl:gap-[165px] xl:gap-[105px] lg:gap-[80px] md:gap-[50px] gap-[35px] lg:flex-nowrap flex-wrap'>
                    <div className='rounded-full 2xl:w-[540px] xl:w-[480px] lg:w-[420px] max-[1023px]:max-w-[440px] overflow-hidden mx-auto'>
                        <Image src={teamImg} alt='' />
                    </div>
                    <div className='2xl:w-[calc(100%_-_540px)] xl:w-[calc(100%_-_480px)] lg:w-[calc(100%_-_420px)] text-white font-semibold 2xl:text-[40px] xl:text-[32px] lg:text-[23px] md:text-[20px] lg:text-start text-center'>
                    Our talented team is committed to pushing boundaries, delivering innovative infrastructure solutions, and supporting clients with unparalleled expertise.
                    </div>
                </div>
            </motion.div>
        </section>
    </>
  )
}

export default TeamInfo