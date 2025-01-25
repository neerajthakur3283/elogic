import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';
import { GrFormNextLink } from "react-icons/gr";

interface YouCardView {
    cardImg: string | StaticImageData
    cardTitle: string
    cardLink: string
    linkText: string
    cardPara: string
}

interface YouAreCardProps {
  youCardView: YouCardView[];
}

const YouAreCard: React.FC<YouAreCardProps> = ({ youCardView }) => {
  return (
    <>
      {youCardView.map((data, index) => (
        <div key={index} className="bg-[#1C2845] 2xl:py-50px] xl:py-[37px] md:py-[33px] py-[32px] min-[1760px]:px-[65px] 2xl:px-[45px] xl:px-[42px] lg:px-[25px] px-[42px] max-[575px]:px-[25px] 2xl:rounded-[25px] xl:rounded-[18.75px] md:rounded-[16.67px] rounded-[16.26px] 2xl:[&>.card-title]:first-of-type:max-w-[401px] xl:[&>.card-title]:first-of-type:max-w-[301px] md:[&>.card-title]:first-of-type:max-w-[267px] transition-all duration-500 hover:bg-white group hover:text-black text-white group">
          <div className='relative overflow-hidden'>
            <div className='2xl:w-[176px] xl:w-[132px] md:w-[118px] w-[115px] rounded-[600px] overflow-hidden transition-all duration-500 group-hover:w-full 2xl:h-[110px] xl:h-[82px] h-[73px] group-hover:[&>img]:w-full'>
              <Image className='transition-all duration-500' src={data.cardImg} alt='' />
            </div>
            <div className='card-title font-semibold min-[1760px]:text-[27px] 2xl:text-[22px] xl:text-[21px] md:text-[16.67px] text-[18.21px] 2xl:pt-[61px] 2xl:pb-[116px] xl:pt-[45px] xl:pb-[115px] md:pt-[41px] lg:pb-[98px] pt-[40px] pb-[76px] max-[575px]:pb-[135px] transition-all group-hover:w-full duration-500'>
              <h3 className='2xl:h-[121px] xl:h-[91px] md:h-[81px]'>{data.cardTitle}</h3>
            </div>
            <div className='absolute left-0 -bottom-[200px] w-full 2xl:text-[18px] xl:text-[13.5px] md:text-[12px] group-hover:bottom-0 z-[1] transition-all duration-500'>
              {data.cardPara}
            </div>
            <div className='transition-all duration-500 group-hover:opacity-0 group-hover:-z-[1]'>
              <Link href={data.cardLink} className='flex items-center 2xl:text-[18.59px] xl:text-[13.95px] md:text-[12.4px] text-[12.09px]'>{data.linkText} <GrFormNextLink className='ms-2 xl:text-[29px] xl:text-xl text-xl' /></Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default YouAreCard;
