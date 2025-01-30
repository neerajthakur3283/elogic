"use client";
import Image from "next/image";
import { TbHexagonFilled } from "react-icons/tb";

// images
import firstMap from '@/src/assets/images/roadmap-img-2021.jpg'
import dottedLine from '@/src/assets/images/roadmap-line.svg'

const RoadMap = () => {
  const timelineData = [
    {
      year: "2021",
      description: "Incorporated in India & the U.S.",
      image: firstMap,
    },
    {
      year: "2022",
      description:
        "First end-to-end Export projects delivered in industrial controls & instrumentation",
      image: firstMap,
    },
    {
      year: "2023",
      description:
        "First consumer electronics project moved to high-volume export production",
      image: firstMap,
    },
    {
      year: "2024",
      description:
        "In-house IoT gateways developed & deployed in field",
      image: firstMap,
    },
    {
      year: "2024",
      description: "Industrial IoT cloud platform launched",
      image: firstMap,
    },
    {
      year: "Heading here",
      description:
        "5+ clients and their customers' assets  onboarded onto our cloud platform",
      image: firstMap,
    },
  ];

  return (
    <>
        <section>
            <div className="w-full overflow-hidden">
                <div className="flex justify-center">
                    <span className="bg-[rgba(53,99,233,0.2)] 2xl:rounded-[16px] xl:rounded-[13.85px] md:rounded-[12.1px] rounded-[7.48px] text-[#3563E9] font-semibold 2xl:text-[20px] xl:text-[15px] md:text-[13.33px] text-[15.24px] 2xl:px-[24px] xl:px-[18px] px-[16px] 2xl:h-[52px] xl:h-[39px] md:h-[35px] h-[40.29px] flex items-center justify-center">Roadmap</span>
                </div>
                <h2 className="text-center 2xl:mt-[20px] mt-[15px] 2xl:text-[36px] xl:text-[27px] md:text-[24px] text-[22.45px] font-bold text-black">Our Journey</h2>
                <div className="2xl:mt-[60px] xl:mt-[40px] mt-[30px] min-[1770px]:max-w-[1333px] mx-auto relative 2xl:pt-[145px] [&_.step-card:nth-child(1)>.step-dot]:-left-[151px] [&_.step-card:nth-child(3)>.step-dot]:-left-[155px] [&_.step-card:nth-child(5)>.step-dot]:-left-[155px] [&_.step-card:nth-child(2)>.step-dot]:-right-[151px] [&_.step-card:nth-child(1)]:mb-[63px] [&_.step-card:nth-child(2)]:mb-[50px] [&_.step-card:nth-child(3)]:mb-[48px] [&_.step-card:nth-child(4)]:mb-[47px] [&_.step-card:nth-child(5)]:mb-[75px]">
                    {timelineData.map((item, index) => (
                    <div
                        key={index}
                        className={`step-card flex items-center relative z-[1] ${
                        index % 2 === 1 ? "flex-row" : "flex-row-reverse"
                        } `}
                    >
                        <div className="2xl:w-[421px] rounded-[13px_13px_0_13px] overflow-hidden 2xl:shadow-[0_0_22px_0_rgba(0,0,0,0.25)] xl:shadow-[0_0_17px_0_rgba(0,0,0,0.25)] md:shadow-[0_0_14px_0_rgba(0,0,0,0.25)] shadow-[0_0_13px_0_rgba(0,0,0,0.25)]">
                        <div>
                            <Image src={item.image} alt={item.year} />
                            <div className="2xl:p-[24px]">
                                <h3 className="text-black font-bold 2xl:text-[24px] xl:text-[18px] text-base">{item.year}</h3>
                                <p className="text-black text-[15px] mt-[15px]">{item.description}</p>
                            </div>
                        </div>
                        </div>
                        <div className="relative step-dot">
                        <div className="2xl:w-[62px] 2xl:h-[62px] bg-[rgba(53,99,233,0.2)] rounded-full absolute top-1/2 transform -translate-y-[60px] -translate-x-1/2 flex justify-center items-center">
                            <div className="bg-[#3563E9] 2xl:w-[24px] 2xl:h-[24px] rounded-full">

                            </div>
                        </div>
                        </div>
                    </div>
                    ))}
                    <div className="absolute left-0 right-0 top-0 mx-auto flex justify-center -z-[1]">
                    <div className="absolute text-[#3563E9] -top-[17px]">
                    <TbHexagonFilled className="2xl:w-[30px] 2xl:h-[30px] rotate-90" />
                    </div>
                    <Image src={dottedLine} alt="" />
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default RoadMap;