import Image from 'next/image'
import React from 'react'

// images
import topologyImg from '@/src/assets/images/topology.svg'

function IndustryTopology() {
  return (
    <>
        <section>
            <div className='2xl:py-[100px] xl:py-[75px] lg:py-[66px] py-[100px] 2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px]'>
                <div className='2xl:pb-[70px] xl:pb-[52px] lg:pb-[45px] pb-[40px]'>
                    <h2 className='text-center text-black 2xl:text-[47px] xl:text-[35px] lg:text-[31px] text-[24px] font-bold'>Industrial IoT Topology</h2>
                    <div className='text-[#4B5563] leading-[1.5] 2xl:pt-[30px] xl:pt-[22px] pt-[20px] text-center mx-auto 2xl:max-w-[1015px] 2xl:text-[24px] xl:max-w-[760.5px] xl:text-[18px] lg:max-w-[676px] text-base'>
                        <p>We can communicate with a wide range of OEM equipment, PLCs, HMIs and sensors with rich protocol integrations and deploy tailor-made applications
                        on both edge and cloud</p>
                    </div>
                </div>
                <div className='flex justify-center 2xl:pt-[50px] xl:pt-[38px] lg:pt-[35px]'>
                    <Image className='w-full' src={topologyImg} alt='' />
                </div>
            </div>
        </section>
    </>
  )
}

export default IndustryTopology