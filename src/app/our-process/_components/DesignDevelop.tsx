import React from 'react'
import TopSteps from './TopSteps'

// images
import iconOne from '@/src/assets/images/requirement.svg'
import iconTwo from '@/src/assets/images/defination.svg'
import iconThree from '@/src/assets/images/research.svg'
import iconFour from '@/src/assets/images/prototyping.svg'
import iconOneWhite from '@/src/assets/images/white-requirement.svg'
import iconTwoWhite from '@/src/assets/images/white-defination.svg'
import iconThreeWhite from '@/src/assets/images/white-research.svg'
import iconFourWhite from '@/src/assets/images/white-prototyping.svg'
import StepInfoCard from './StepInfoCard'

function DesignDevelop() {
  const firstStepData = [
    {colsreverses:'order-1',stepNumber:'01',stepIcon:iconOne,title:'Requirement',stepDes:'Identify consumption trends and anomalies instantly',preColor:'text-[rgba(75,85,99,0.6)]',titleColor:'text-[#222325]'},
    {colsreverses:'order-2',stepNumber:'02',stepIcon:iconTwo,title:'PRD Definition',stepDes:'Identify consumption trends and anomalies instantly',preColor:'text-[rgba(75,85,99,0.6)]',titleColor:'text-[#222325]'},
    {colsreverses:'order-3',stepNumber:'03',stepIcon:iconThree,title:'Components Research',stepDes:'Identify consumption trends and anomalies instantly',preColor:'text-[rgba(75,85,99,0.6)]',titleColor:'text-[#222325]'},
    {colsreverses:'order-4',stepNumber:'04',stepIcon:iconFour,title:'Functional Prototyping',stepDes:'Identify consumption trends and anomalies instantly',preColor:'text-[rgba(75,85,99,0.6)]',titleColor:'text-[#222325]'},
  ]
  
  const midStepData = [
    {colsreverses:'md:order-4',stepNumber:'05',stepIcon:iconFour,title:'High Fidelity HW, PCD and FW',stepDes:'Identify consumption trends and anomalies instantly',preColor:'text-[rgba(75,85,99,0.6)]',titleColor:'text-[#222325]'},
    {colsreverses:'md:order-3',stepNumber:'06',stepIcon:iconThree,title:'High Fidelity Prototyping',stepDes:'Identify consumption trends and anomalies instantly',preColor:'text-[rgba(75,85,99,0.6)]',titleColor:'text-[#222325]'},
    {colsreverses:'md:order-2',stepNumber:'07',stepIcon:iconTwo,title:'Acceptance Testing',stepDes:'Identify consumption trends and anomalies instantly',preColor:'text-[rgba(75,85,99,0.6)]',titleColor:'text-[#222325]'},
    {colsreverses:'md:order-1',stepNumber:'08',stepIcon:iconOne,title:'Compliance Documentation',stepDes:'Identify consumption trends and anomalies instantly',preColor:'text-[rgba(75,85,99,0.6)]',titleColor:'text-[#222325]'},
  ]
  
  const firstStepDataDark = [
    {colsreverses:'order-1',stepNumber:'01',stepIcon:iconOneWhite,title:'DFX (Manufacture/ Assembly)',stepDes:'Identify consumption trends and anomalies instantly',preColor:'text-[rgba(255,255,255,0.8)]',titleColor:'text-[#ffffff]'},
    {colsreverses:'order-2',stepNumber:'02',stepIcon:iconTwoWhite,title:'Production Tooling & Setup',stepDes:'Identify consumption trends and anomalies instantly',preColor:'text-[rgba(255,255,255,0.8)]',titleColor:'text-[#ffffff]'},
    {colsreverses:'order-3',stepNumber:'03',stepIcon:iconThreeWhite,title:'Sourcing & Kitting',stepDes:'Identify consumption trends and anomalies instantly',preColor:'text-[rgba(255,255,255,0.8)]',titleColor:'text-[#ffffff]'},
    {colsreverses:'order-4',stepNumber:'04',stepIcon:iconFourWhite,title:'PCB Assembly & Testing',stepDes:'Identify consumption trends and anomalies instantly',preColor:'text-[rgba(255,255,255,0.8)]',titleColor:'text-[#ffffff]'},
  ]
  
  const midStepDataDark = [
    {colsreverses:'md:order-3',stepNumber:'05',stepIcon:iconFourWhite,title:'Serialisation, Packing & Shipping',stepDes:'Identify consumption trends and anomalies instantly',preColor:'text-[rgba(255,255,255,0.8)]',titleColor:'text-[#ffffff]'},
    {colsreverses:'md:order-2',stepNumber:'06',stepIcon:iconThreeWhite,title:'Firmware Flashing',stepDes:'Identify consumption trends and anomalies instantly',preColor:'text-[rgba(255,255,255,0.8)]',titleColor:'text-[#ffffff]'},
    {colsreverses:'md:order-1',stepNumber:'07',stepIcon:iconTwoWhite,title:'Automated End-of-Line Testing',stepDes:'Identify consumption trends and anomalies instantly',preColor:'text-[rgba(255,255,255,0.8)]',titleColor:'text-[#ffffff]'},
  ]

  const infoStepData = [
    {bgCard:'from-[#E7F1FF] to-[#ffffff] bg-gradient-to-r',tagColor:'text-[#3284FF]', titleColor:'text-[#222325]', cardTag:'Design and Development',cardTitle:'Our Partners',
      cardListPoints:[
        {pointText:'OEM Application Engineers', pointColor:'#4B5563'},
        {pointText:'EMI/EMC Test Labs', pointColor:'#4B5563'},
        {pointText:'Simulation Partners', pointColor:'#4B5563'},
        {pointText:'Tooling Design', pointColor:'#4B5563'},
        {pointText:'Independent Consultation', pointColor:'#4B5563'},
        {pointText:'Certifying Bodies', pointColor:'#4B5563'},
        {pointText:'Independent Consultation', pointColor:'#4B5563'},
        {pointText:'Others', pointColor:'#4B5563'},
      ]
    }
  ]
  
  const infoStepDataDark = [
    {bgCard:'from-[#3C699F] to-[rgba(0,60,70,0)] bg-gradient-to-r',tagColor:'text-[#35CBE9]', titleColor:'text-[#FFFFFF]', cardTag:'Design and Development',cardTitle:'Our Partners',
      cardListPoints:[
        {pointText:'OEM Application Engineers',pointColor:'text-white'},
        {pointText:'EMI/EMC Test Labs',pointColor:'text-white'},
        {pointText:'Simulation Partners',pointColor:'text-white'},
        {pointText:'Tooling Design',pointColor:'text-white'},
        {pointText:'Independent Consultation',pointColor:'text-white'},
        {pointText:'Certifying Bodies',pointColor:'text-white'},
        {pointText:'Independent Consultation',pointColor:'text-white'},
        {pointText:'Others',pointColor:'text-white'},
      ]
    }
  ]

  return (
    <>
        <section>
            <div className="w-full overflow-hidden 2xl:pb-[100px] xl:pb-[75px] lg:pb-[66px] md:pb-[45px] pb-[50px]">
                <div className="flex justify-center">
                    <span className="bg-[rgba(53,99,233,0.2)] 2xl:rounded-[16px] xl:rounded-[13.85px] md:rounded-[12.1px] rounded-[7.48px] text-[#3563E9] font-semibold 2xl:text-[20px] xl:text-[15px] md:text-[13.33px] text-[15.24px] 2xl:px-[24px] xl:px-[18px] px-[16px] 2xl:h-[52px] xl:h-[39px] md:h-[35px] h-[40.29px] flex items-center justify-center">Roadmap</span>
                </div>
                <h2 className="text-center 2xl:mt-[20px] mt-[15px] 2xl:text-[36px] xl:text-[27px] md:text-[24px] text-[22.45px] font-bold text-black">Design and Development</h2>

                <div className='min-[1420px]:max-w-[1366px] min-[1085px]:max-w-[1024px] min-[992px]:max-w-[910px] max-[991px]:max-w-[calc(100%_-_40px)] mx-auto'>
                  <div className='2xl:pt-[60px] xl:pt-[40px] pt-[30px] grid md:grid-cols-4 grid-cols-1 2xl:gap-[32px] xl:gap-[24px] md:gap-[21px]'>
                    <TopSteps firstStepData={firstStepData}/>
                  </div>
                  <div className='2xl:py-[72px] xl:py-[54px] md:py-[48px] py-[40px]'>
                    <StepInfoCard infoStepData={infoStepData} />
                  </div>
                  <div className='grid md:grid-cols-4 grid-cols-1 2xl:gap-[32px] xl:gap-[24px] md:gap-[21px] grid-flow-col md:flex-col-reverse'>
                    <TopSteps firstStepData={midStepData}/>
                  </div>
                </div>

                <div className='bg-[#051731] 2xl:mt-[100px] xl:mt-[75px] lg:mt-[66px] md:mt-[45px] mt-[50px] 2xl:pt-[148px] xl:pt-[111px] md:pt-[98px] pt-[60px] 2xl:pb-[100px] xl:pb-[75px] lg:pt-[66px] md:pb-[45px] pb-[50px]'>
                  <div className='min-[1420px]:max-w-[1366px] min-[1085px]:max-w-[1024px] min-[992px]:max-w-[910px] max-[991px]:max-w-[calc(100%_-_40px)] mx-auto'>
                    <div className='2xl:pt-[60px] xl:pt-[40px] pt-[30px] grid md:grid-cols-4 grid-cols-1 2xl:gap-[32px] xl:gap-[24px] md:gap-[21px]'>
                      <TopSteps firstStepData={firstStepDataDark}/>
                    </div>
                    <div className='2xl:py-[72px] xl:py-[54px] md:py-[48px] py-[40px]'>
                      <StepInfoCard infoStepData={infoStepDataDark} />
                    </div>
                    <div className='flex 2xl:gap-[32px] xl:gap-[24px] md:gap-[21px] justify-center [&>div]:w-[25%]'>
                      <TopSteps firstStepData={midStepDataDark}/>
                    </div>
                  </div>
                </div>
                
            </div>
        </section>
    </>
  )
}

export default DesignDevelop