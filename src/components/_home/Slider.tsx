"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";

// images
import slideOne from "@/src/assets/images/home-slide-1.svg";
import slideTwo from "@/src/assets/images/home-slide-2.png";
import slideThree from "@/src/assets/images/home-slide-3.png";
import slideFour from "@/src/assets/images/home-slide-4.png";
import moImgeOne from "@/src/assets/images/mobile-slide-1.jpg";
import staticMobBgImage from "@/src/assets/images/mobile-slide-1.jpg";
import staticBgImage from "@/src/assets/images/Slide-three.jpg";

const Slider: React.FC = () => {
  const sliderData = [
    {
      id: 1,
      sliderImg: slideOne,
      mobSliderImg: moImgeOne,
      slidePara:
        "Monitor efficiency, health and productivity of your manufacturing operations and make data-driven decisions",
    },
    {
      id: 2,
      sliderImg: slideTwo,
      mobSliderImg: moImgeOne,
      slidePara:
        "Monitor efficiency, health and productivity of your manufacturing operations and make data-driven decisions",
    },
    {
      id: 3,
      sliderImg: slideThree,
      mobSliderImg: moImgeOne,
      slidePara:
        "Monitor efficiency, health and productivity of your manufacturing operations and make data-driven decisions",
    },
    {
      id: 4,
      sliderImg: slideFour,
      mobSliderImg: moImgeOne,
      slidePara:
        "Monitor efficiency, health and productivity of your manufacturing operations and make data-driven decisions",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const startSlider = () => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
      }, 2000);
    };

    startSlider();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <section>
      <div className="relative ms:pt-0 pt-4 after:absolute after:left-0 after:right-0 after:top-0 after:h-[210px] after:bg-gradient-to-b after:from-black to-[rgba(0,0,0,0)]">
        <div className="absolute z-[2] left-0 top-0 bottom-0 flex items-center w-full">
          <div className="relative" key={currentIndex}>
            <div className="slider-image w-full relative flex items-center md:flex-nowrap flex-wrap justify-between">
              <div className="flex md:items-center 2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px] max-[991px]:!top-[25px] z-[2]">
                <div className="w-full 2xl:max-w-[845px] xl:max-w-[632px] md:max-w-[562px] max-w-[372px]">
                  <h1 className="text-white 2xl:text-[60px] xl:text-[45px] text-[40px] md:font-bold font-semibold 2xl:w-[550px] xl:w-[450px] md:w-[355px] mb-3 tracking-[-1.5px] max-[767px]:leading-[1.34]">
                    Digitiz﻿e your shop floor operations
                  </h1>
                  <p className="text-[#F9F9FB] 2xl:text-[24px] xl:text-[18px] text-base md:leading-7 leading-[1.65] tracking-[-0.2px] 2xl:pt-[30px] xl:pt-[20px] md:pt-[15x] pt-[12px]">
                    {sliderData[currentIndex].slidePara}
                  </p>
                  <div className="2xl:pt-[40px] xl:pt-[30px] md:pt-[26px] pt-[20px]">
                    <Link
                      className="bg-[#3563E9] text-white px-[2] w-full 2xl:max-w-[200px] xl:max-w-[153.5px] md:max-w-[136.44px] max-w-[123px] 2xl:h-[60px] xl:h-[45px] md:h-[41px] h-[48px] flex justify-center items-center py-[2px] 2xl:text-[19px] xl:text-[14.25px] text-[16px] md:text-[12.67px] md:font-bold font-semibold rounded-[16px] capitalize duration-500 hover:bg-white hover:text-black"
                      href="/"
                    >
                      contact us
                    </Link>
                  </div>
                </div>
              </div>
              <div className="slide-img max-[767px]:px-[20px] md:pt-0 sm:pt-[90px] pt-3">
                <div className="">
                  <Image
                    className="w-full"
                    src={sliderData[currentIndex].sliderImg}
                    alt=""
                    width={1920}
                    height={957}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-image max-[767px]:after:hidden after:absolute after:left-0 after:top-0 after:bottom-0 after:right-0 after:bg-gradient-to-r after:from-[rgba(0,0,0,0.7)] after:to-[rgba(0,0,0,0)] max-[991px]:h-[600px] max-[767px]:h-auto max-[991px]:[&>img]:h-full max-[991px]:[&>img]:object-cover">
          <Image className="md:flex hidden" src={staticBgImage} alt="" />
          <Image
            className="md:hidden flex w-full"
            src={staticMobBgImage}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Slider;
