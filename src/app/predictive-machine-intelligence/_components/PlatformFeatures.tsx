
'use client'
import { motion } from "framer-motion";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdArrowOutward } from 'react-icons/md'

// images
import fiverrImg from '@/src/assets/images/fiverr-pro.png'
import iconOne from '@/src/assets/images/increase.svg'
import AnalysticCard from './AnalysticCard'

function PlatformFeatures() {
    const featuresCardData = [
        { icon: iconOne, title: 'Key Machine Metrics', description: 'Track vital machine parameters including vibration, temperature, and pressure' },
        { icon: iconOne, title: 'Live Equipment Tracking', description: 'Monitor equipment performance patterns in real-time' },
        { icon: iconOne, title: 'Quick Anomaly Detection', description: 'Detect anomalies and deviations instantly' },
        { icon: iconOne, title: 'Health Dashboards', description: 'Access comprehensive health dashboards for all assets' },
    ]
    return (
        <>
            <section>
                <div className='2xl:py-[100px] xl:py-[75px] lg:py-[66px] md:py-[45px] py-[50px] 2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px]'>
                    <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3}}
                    className="flex justify-between items-start md:flex-nowrap flex-wrap md:gap-y-0 gap-y-[20px]">
                        <div className="text-black">
                            <h2 className="leading-[1] 2xl:text-[61.77px] xl:text-[46.33px] md:text-[41.18px] text-[24px] font-bold">
                                Platform features
                            </h2>
                        </div>
                        <div className="text-[#4B5563] font-medium leading-snug w-full 2xl:max-w-[771.19px] xl:max-w-[578px] lg:max-w-[514px] md:max-w-[420px] 2xl:text-[24px] xl:text-[18px] text-base">
                            Use captured machine parameters to build intelligent maintenance strategies with our condition monitoring platform. Get real-time health insights, predictive maintenance alerts, and automated diagnostics to optimize equipment performance and prevent costly downtime.
                            <div className="2xl:pt-[40px] xl:pt-[30px] md:pt-[26px] pt-[20px]">
                                <Link className="bg-[#3563E9] text-white px-[2] w-full 2xl:max-w-[275px] xl:max-w-[209px] md:max-w-[175.44px] max-w-[195px] 2xl:h-[52px] xl:h-[39px] md:h-[35px] h-[40.29px] flex justify-center items-center py-[2px] 2xl:text-[20px] xl:text-[15px] md:text-[13.33px] text-[15.24px] md:font-bold font-semibold rounded-[16px] capitalize duration-500 hover:bg-black hover:text-white hover:scale-110"
                                    href="/contact-us">Schedule a demo <MdArrowOutward className="ms-2.5" /></Link>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3}}
                    className='2xl:mt-[80px] xl:mt-[60px] md:mt-[53px] mt-[40px] bg-[#EEF1F5] 2xl:rounded-[12px] xl:rounded-[8.4px] md:rounded-[7.74px] rounded-[8px]'>

                        <div className='2xl:ps-[100px] xl:ps-[76px] lg:ps-[67px] md:ps-[45px] 2xl:pe-[95px] xl:pe-[70px] lg:pe-[25px] md:pe-[50px] 2xl:py-[95px] xl:py-[76px] md:py-[53px] p-[20px] flex items-center justify-between max-[1023px]:flex-col-reverse lg:flex-nowrap flex-wrap'>
                            <div className='2xl:w-[762.5px] xl:w-[571.87px] lg:w-[508.33px] w-full'>
                                <h2 className='font-semibold 2xl:text-[36px] xl:text-[27px] md:text-[24px] text-[22.45px] lg:flex hidden'>Real-Time Condition Monitoring</h2>
                                <div className='grid md:grid-cols-2 2xl:pt-[50px] xl:pt-[40px] pt-[33.33px] 2xl:gap-[40px] xl:gap-[30px] gap-[26.67px]'>
                                    <AnalysticCard featuresCardData={featuresCardData} />
                                </div>
                                <div className="2xl:pt-[60px] xl:pt-[40px] pt-[30px]">
                                    <Link className="bg-[#3563E9] text-white px-[2] w-full 2xl:max-w-[275px] xl:max-w-[209px] md:max-w-[175.44px] max-w-[195px] 2xl:h-[52px] xl:h-[39px] md:h-[35px] h-[40.29px] flex justify-center items-center py-[2px] 2xl:text-[20px] xl:text-[15px] md:text-[13.33px] text-[15.24px] md:font-bold font-semibold rounded-[16px] capitalize duration-500 hover:bg-black hover:text-white hover:scale-110"
                                        href="/contact-us">Schedule a demo <MdArrowOutward className="ms-2.5" /></Link>
                                </div>
                            </div>
                            <div className='2xl:w-[calc(100%_-_762.5px)] xl:w-[calc(100%_-_571.87px)] lg:w-[calc(100%_-_508.33px)] w-full'>
                                <div className='lg:hidden flex mb-[30px]'>
                                    <h2 className='font-semibold text-[24px]'>Real-Time Condition Monitoring</h2>
                                </div>
                                <Image className='2xl:ms-auto' src={fiverrImg} alt='' />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </section>
        </>
    )
}

export default PlatformFeatures