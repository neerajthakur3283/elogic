import React from 'react'
import YouAreCard from './YouAreCard'

// images
import imgOne from '@/src/assets/images/you-are-one.jpg'

function YouAre() {
    const youCardView = [
        {cardImg:imgOne,cardTitle:<>A manufacturing plan <br/>factory/unit</>, cardLink:'', linkText:'Learn More',cardPara:'We can communicate with a wide range of OEM equipment, PLCs, HMIs and sensors with rich protocol integrations and deploy tailor-made applications on both edge and cloud'},
        {cardImg:imgOne,cardTitle:<>An EPC, O&M, SI, automation<br/>specialist</>, cardLink:'', linkText:'Learn More',cardPara:'We can communicate with a wide range of OEM equipment, PLCs, HMIs and sensors with rich protocol integrations and deploy tailor-made applications on both edge and cloud'},
        {cardImg:imgOne,cardTitle:<>An OEM of industrial machinery,<br/>plant, instrumentation, other<br/>equipment</>, cardLink:'', linkText:'Learn More',cardPara:'We can communicate with a wide range of OEM equipment, PLCs, HMIs and sensors with rich protocol integrations and deploy tailor-made applications on both edge and cloud'},
    ]
  return (
    <>
        <section>
            <div className='relative bg-[url("../images/you-are-bg.png")] md:bg-black bg-[#05152F] 2xl:py-[100px] xl:py-[75px] lg:py-[66px] md:py-[45px] py-[50px] after:absolute after:top-0 after:left-0 after:right-0 after:h-[242px] after:bg-gradient-to-b after:from-[#05152F] after:to-[rgba(5,21,47,0)] 2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px]'>
                <div className='relative z-[1]'>
                    <div className='text-center'>
                        <h2 className='text-white 2xl:text-[62px] xl:text-[47px] lg:text-[41px] text-[24px] font-bold capitalize'>You are</h2>
                        <div className='2xl:pt-[40px] xl:pt-[30px] md:pt-[26px] pt-[20px] mx-auto text-white font-medium leading-snug w-full 2xl:max-w-[1270px] xl:max-w-[578px] lg:max-w-[514px] md:max-w-[420px] 2xl:text-[24px] xl:text-[18px] text-base opacity-[0.8]'>
                        We can communicate with a wide range of OEM equipment, PLCs, HMIs and sensors with rich protocol integrations and deploy tailor-made applications on both edge and cloud
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-3 2xl:pt-[80px] xl:pt-[60px] lg:pt-[53px] md:pt-[45px] pt-[40px] 2xl:gap-[30px] xl:gap-[22px] md:xl:gap-[20px] gap-[15.81px]'>
                        <YouAreCard youCardView={youCardView}/>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default YouAre