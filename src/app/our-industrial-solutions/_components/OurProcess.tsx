"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";

const steps = [
  {
    title: "Requirement Capture",
    content: (
      <>
        <ul className="text-[#C0C4CB] tracking-[-0.51px] 2xl:text-[25.59px] xl:text-[19.19px] text-[17.06px] w-full 2xl:max-w-[1140px] xl:max-w-[855px] md:max-w-[760px] 2xl:ps-4 ps-3 gap-y-1 grid grid-cols-1">
          <li className="flex gap-2">
            •{" "}
            <span className="ms-2 flex">
              Free consultation to understand your operational challenges and
              goals.
            </span>
          </li>
          <li className="flex gap-2">
            •{" "}
            <span className="ms-2 flex">
              Expert assessment of machine health monitoring, energy usage, and
              productivity metrics.
            </span>
          </li>
          <li className="flex gap-2">
            •{" "}
            <span className="ms-2 flex">
              Detailed site survey to identify optimal monitoring points and
              connectivity options.
            </span>
          </li>
          <li className="flex gap-2">
            •{" "}
            <span className="ms-2 flex">
              Custom solution design that leverages your existing infrastructure
              where possible.
            </span>
          </li>
        </ul>
        {/* <button className="bg-[#3563E9] text-white 2xl:text-[25.59px] xl:text-[19.19px] text-[17.06px] 2xl:w-[228.12px] xl:w-[171.09px] w-[152.41px] 2xl:h-[56.47px] xl:h-[42.35px] h-[37.65px] rounded-full 2xl:mt-[24px] xl:mt-[18px] mt-[16px]">
          Get Started →
        </button> */}
      </>
    ),
  },
  {
    title: "Proof of Value",
    content: (
      <>
        <ul className="text-[#C0C4CB] tracking-[-0.51px] 2xl:text-[25.59px] xl:text-[19.19px] text-[17.06px] w-full 2xl:max-w-[1140px] xl:max-w-[855px] md:max-w-[760px] 2xl:ps-4 ps-3 gap-y-1 grid grid-cols-1">
          <li className="flex gap-2">
            •{" "}
            <span className="ms-2 flex">
              Quick deployment on 1-2 machines to demonstrate immediate value
            </span>
          </li>
          <li className="flex gap-2">
            •{" "}
            <span className="ms-2 flex">
              Real-time monitoring and basic analytics setup
            </span>
          </li>
          <li className="flex gap-2">
            •{" "}
            <span className="ms-2 flex">
              Clear demonstration of potential ROI and benefits
            </span>
          </li>
        </ul>
        {/* <button className="bg-[#3563E9] text-white 2xl:text-[25.59px] xl:text-[19.19px] text-[17.06px] 2xl:w-[228.12px] xl:w-[171.09px] w-[152.41px] 2xl:h-[56.47px] xl:h-[42.35px] h-[37.65px] rounded-full 2xl:mt-[24px] xl:mt-[18px] mt-[16px]">
          Get Started →
        </button> */}
      </>
    ),
  },
  {
    title: "Commissioning",
    content: (
      <>
        <ul className="text-[#C0C4CB] tracking-[-0.51px] 2xl:text-[25.59px] xl:text-[19.19px] text-[17.06px] w-full 2xl:max-w-[1140px] xl:max-w-[855px] md:max-w-[760px] 2xl:ps-4 ps-3 gap-y-1 grid grid-cols-1">
          <li className="flex gap-2">
            •{" "}
            <span className="ms-2 flex">
              Full-scale deployment across your facility.
            </span>
          </li>
          <li className="flex gap-2">
            •{" "}
            <span className="ms-2 flex">
              Complete system setup with custom dashboards and alerts.
            </span>
          </li>
          <li className="flex gap-2">
            •{" "}
            <span className="ms-2 flex">
              Comprehensive training for your team.
            </span>
          </li>
        </ul>
        {/* <button className="bg-[#3563E9] text-white 2xl:text-[25.59px] xl:text-[19.19px] text-[17.06px] 2xl:w-[228.12px] xl:w-[171.09px] w-[152.41px] 2xl:h-[56.47px] xl:h-[42.35px] h-[37.65px] rounded-full 2xl:mt-[24px] xl:mt-[18px] mt-[16px]">
          Get Started →
        </button> */}
      </>
    ),
  },
  {
    title: "Analysis & Support",
    content: (
      <>
        <ul className="text-[#C0C4CB] tracking-[-0.51px] 2xl:text-[25.59px] xl:text-[19.19px] text-[17.06px] w-full 2xl:max-w-[1140px] xl:max-w-[855px] md:max-w-[760px] 2xl:ps-4 ps-3 gap-y-1 grid grid-cols-1">
          <li className="flex gap-2">
            •{" "}
            <span className="ms-2 flex">
              Ongoing system optimization and technical support.
            </span>
          </li>
          <li className="flex gap-2">
            •{" "}
            <span className="ms-2 flex">
              Regular performance reviews and recommendations.
            </span>
          </li>
          <li className="flex gap-2">
            •{" "}
            <span className="ms-2 flex">
              Continuous platform enhancements based on your evolving needs.
            </span>
          </li>
        </ul>
        {/* <button className="bg-[#3563E9] text-white 2xl:text-[25.59px] xl:text-[19.19px] text-[17.06px] 2xl:w-[228.12px] xl:w-[171.09px] w-[152.41px] 2xl:h-[56.47px] xl:h-[42.35px] h-[37.65px] rounded-full 2xl:mt-[24px] xl:mt-[18px] mt-[16px]">
          Get Started →
        </button> */}
      </>
    ),
  },
];

export default function OurProcess() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#EEF1F5] 2xl:py-[80px] xl:py-[75px] lg:py-[66px] md:py-[45px] py-[50px] 2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px] lg:pb-0 pb-[70px]">
      <div className="flex justify-between items-start md:flex-nowrap flex-wrap md:gap-y-0 gap-y-[20px]">
        <div className="text-black">
          <h2 className="leading-[1] 2xl:text-[46.88px] xl:text-[35.16px] md:text-[31.25px] text-[24px] font-bold">
            Our Process (Highlighting PoC phase)
          </h2>
        </div>
        <div className="text-[#4B5563] font-medium leading-snug w-full 2xl:max-w-[771.19px] xl:max-w-[578px] lg:max-w-[514px] md:max-w-[420px] 2xl:text-[24px] xl:text-[18px] text-base">
          Partner with us to transform your industrial operations through
          data-driven insights and automated monitoring.
          <div className="2xl:pt-[40px] xl:pt-[30px] md:pt-[26px] pt-[20px]">
            <Link
              className="bg-[#3563E9] text-white px-[2] w-full 2xl:max-w-[275px] xl:max-w-[209px] md:max-w-[175.44px] max-w-[195px] 2xl:h-[52px] xl:h-[39px] md:h-[35px] h-[40.29px] flex justify-center items-center py-[2px] 2xl:text-[20px] xl:text-[15px] md:text-[13.33px] text-[15.24px] md:font-bold font-semibold rounded-[16px] capitalize duration-500 hover:bg-black hover:text-white"
              href="/"
            >
              Schedule a demo <MdArrowOutward className="ms-2.5" />
            </Link>
          </div>
        </div>
      </div>
      <div className="relative 2xl:pt-[80px] xl:pt-[60px] md:pt-[53px] pt-[40px] grid grid-cols-1 2xl:gap-y-[15.36px] xl:gap-y-[11.52px] gap-y-[10.23px]">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex relative ${
              index <= activeStep ? "after:bg-[#3563E9]" : "after:bg-[#D7DBE1]"
            } after:absolute after:top-0 after:left-[18px] after:h-[calc(100%_+_25px)] after:w-[3px]`}
          >
            <div
              className={`flex items-center ${
                index <= activeStep ? "after:bg-[#3563E9]" : ""
              }`}
            >
              <div
                className={`w-[37px] min-h-[37px] rounded-full border-[3px] flex items-center justify-center cursor-pointer relative z-[3] bg-[#EEF1F5] ${
                  index <= activeStep ? "border-[#3563E9]" : "border-[#D7DBE1]"
                }`}
                onClick={() => setActiveStep(index)}
              >
                {index <= activeStep && (
                  <div className="w-[19px] h-[19px] bg-[#3563E9] rounded-full"></div>
                )}
              </div>
            </div>
            <div className="2xl:ps-[32px] xl:ps-[23px] ps-[21px] w-full">
              <button
                onClick={() => setActiveStep(index)}
                className={`w-full text-left 2xl:px-[32px] xl:px-[23px] px-[21px] 2xl:py-[19px] xl:py-[14.5px] py-[12.065px] transition border-[rgba(4,21,47,0.1)] 2xl:border-[4.5px] xl:border-[3.37px] border-[3px]  ${
                  index === activeStep
                    ? "bg-[#05152F] text-white border-[#05152F] font-semibold 2xl:rounded-ss-[25.59px] 2xl:rounded-se-[25.59px] xl:rounded-ss-[19.19px] xl:rounded-se-[19.19px] rounded-ss-[17.06px] rounded-se-[17.06px] 2xl:text-[34.15px] xl:text-[25.61px] text-[22.76px]"
                    : "bg-[#EEF1F5] border-[rgba(4,21,47,0.1)] text-[#05152F] font-normal 2xl:rounded-[25.59px] xl:rounded-[19.19px] rounded-[17.06px] 2xl:text-[33.87px] xl:text-[25.4px] text-[22.58px]"
                } 2xl:border-[4.5px] xl:border-[3.37px] border-[3px]`}
              >
                <span>{step.title}</span>
              </button>
              {index === activeStep && step.content && (
                <div className="bg-[#05152F] relative top-[-1px] text-white 2xl:rounded-es-[25.59px] 2xl:rounded-ee-[25.59px] xl:rounded-es-[19.19px] xl:rounded-ee-[19.19px] rounded-es-[17.06px] rounded-ee-[17.06px] 2xl:px-[32px] xl:px-[24px] px-[22px] 2xl:pb-[26px] xl:pb-[20px] pb-[17.33px]">
                  {step.content}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
