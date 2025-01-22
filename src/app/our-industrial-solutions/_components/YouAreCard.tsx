import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';
import { GrFormNextLink } from "react-icons/gr";

interface YouCardView {
    cardImg: string | StaticImageData
    cardTitle: string
    cardLink: string
    linkText: string
}

interface YouAreCardProps {
  youCardView: YouCardView[];
}

const YouAreCard: React.FC<YouAreCardProps> = ({ youCardView }) => {
  return (
    <>
      {youCardView.map((data, index) => (
        <div key={index} className="bg-[#1C2845] 2xl:py-50px] xl:py-[37px] md:py-[33px] py-[32px] 2xl:px-[65px] xl:px-[50px] md:px-[43px] px-[42px] 2xl:rounded-[25px] xl:rounded-[18.75px] md:rounded-[16.67px] rounded-[16.26px] 2xl:[&>.card-title]:first-of-type:max-w-[401px] xl:[&>.card-title]:first-of-type:max-w-[301px] md:[&>.card-title]:first-of-type:max-w-[267px] duration-500 transition-all hover:scale-105">
          <div className='2xl:w-[176px] xl:w-[132px] md:w-[118px] w-[115px] rounded-[600px] overflow-hidden'>
            <Image src={data.cardImg} alt='' />
          </div>
          <div className='card-title font-semibold text-white 2xl:text-[28px] xl:text-[21px] md:text-[18.67px] text-[18.21px] 2xl:pt-[61px] 2xl:pb-[116px] xl:pt-[45px] xl:pb-[87px] md:pt-[41px] md:pb-[78px] pt-[40px] pb-[76px] 2xl:max-w-[417px] xl:max-w-[313px] md:max-w-[278px]'>
            <h3 className='2xl:h-[121px] xl:h-[91px] md:h-[81px]'>{data.cardTitle}</h3>
          </div>
          <div>
            <Link href={data.cardLink} className='flex items-center 2xl:text-[18.59px] xl:text-[13.95px] md:text-[12.4px] text-[12.09px] text-white'>{data.linkText} <GrFormNextLink className='ms-2 xl:text-[29px] xl:text-xl text-xl' /></Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default YouAreCard;
