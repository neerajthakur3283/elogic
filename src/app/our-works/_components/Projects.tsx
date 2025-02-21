"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

import projectOne from '@/src/assets/images/power-distribution.jpg'

const projects = [
    {
        name: <>Power Distribution<br/>Board</>,
        client: "Picaso",
        projectImg: projectOne,
        projectTag: 'Commercial/Industrial Robotics',
        clientName: 'Picaso',
        projectTitle: 'Power Distribution Board',
        projectCards: [
            { cardHeading: "Challenge & scope", cardDes: "Our custom IoT application development service delivers end-to-end solutions for connected devices and systems. We specialize in creating secure, scalable, and efficient IoT applications that bridge edge devices with cloud infrastructure, enabling data-driven insights and remote control capabilities across industrial, commercial, and scientific applications." },
            { cardHeading: "Capabilities involved", cardDes: "Our custom IoT application development service delivers end-to-end solutions for connected devices and systems. We specialize in creating secure, scalable, and efficient IoT applications that bridge edge devices with cloud infrastructure, enabling data-driven insights and remote control capabilities across industrial, commercial, and scientific applications." },
            { cardHeading: "Engineering Spotlight", cardDes: "closed-feedback-loop thermal system controller tuning, mil-spec component specification & specialized power electronics design based on custom MOSFET" },
            { cardHeading: "Client Testimonial", cardDes: "Our custom IoT application development service delivers end-to-end solutions for connected devices and systems. We specialize in creating secure, scalable, and efficient IoT applications that bridge edge devices with cloud infrastructure, enabling data-driven insights and remote control capabilities across industrial, commercial, and scientific applications." }
        ]
    },
    {
        name: <>Wireless Voting <br/>System</>,
        client: "Client Name",
        projectImg: projectOne,
        projectTag: 'Voting Technology',
        clientName: 'Client Name',
        projectTitle: 'Wireless Voting System',
        projectCards: [
            { cardHeading: "Challenge & scope", cardDes: "Our custom IoT application development service delivers end-to-end solutions for connected devices and systems. We specialize in creating secure, scalable, and efficient IoT applications that bridge edge devices with cloud infrastructure, enabling data-driven insights and remote control capabilities across industrial, commercial, and scientific applications." },
            { cardHeading: "Capabilities involved", cardDes: "Our custom IoT application development service delivers end-to-end solutions for connected devices and systems. We specialize in creating secure, scalable, and efficient IoT applications that bridge edge devices with cloud infrastructure, enabling data-driven insights and remote control capabilities across industrial, commercial, and scientific applications." },
            { cardHeading: "Engineering Spotlight", cardDes: "closed-feedback-loop thermal system controller tuning, mil-spec component specification & specialized power electronics design based on custom MOSFET" },
            { cardHeading: "Client Testimonial", cardDes: "Our custom IoT application development service delivers end-to-end solutions for connected devices and systems. We specialize in creating secure, scalable, and efficient IoT applications that bridge edge devices with cloud infrastructure, enabling data-driven insights and remote control capabilities across industrial, commercial, and scientific applications." }
        ]
    },
    {
        name: <>Smarthome <br/>Automation Controller</>,
        client: "Client Name",
        projectImg: projectOne,
        projectTag: 'Home Automation',
        clientName: 'Client Name',
        projectTitle: 'Smarthome Automation Controller',
        projectCards: [
            { cardHeading: "Challenge & scope", cardDes: "Our custom IoT application development service delivers end-to-end solutions for connected devices and systems. We specialize in creating secure, scalable, and efficient IoT applications that bridge edge devices with cloud infrastructure, enabling data-driven insights and remote control capabilities across industrial, commercial, and scientific applications." },
            { cardHeading: "Capabilities involved", cardDes: "Our custom IoT application development service delivers end-to-end solutions for connected devices and systems. We specialize in creating secure, scalable, and efficient IoT applications that bridge edge devices with cloud infrastructure, enabling data-driven insights and remote control capabilities across industrial, commercial, and scientific applications." },
            { cardHeading: "Engineering Spotlight", cardDes: "closed-feedback-loop thermal system controller tuning, mil-spec component specification & specialized power electronics design based on custom MOSFET" },
            { cardHeading: "Client Testimonial", cardDes: "Our custom IoT application development service delivers end-to-end solutions for connected devices and systems. We specialize in creating secure, scalable, and efficient IoT applications that bridge edge devices with cloud infrastructure, enabling data-driven insights and remote control capabilities across industrial, commercial, and scientific applications." }
        ]
    },
    {
        name: <>Project Name 1</>,
        client: "Client Name",
        projectImg: projectOne,
        projectTag: 'Category 1',
        clientName: 'Client Name',
        projectTitle: 'Project Name 1',
        projectCards: [
            { cardHeading: "Challenge & scope", cardDes: "Our custom IoT application development service delivers end-to-end solutions for connected devices and systems. We specialize in creating secure, scalable, and efficient IoT applications that bridge edge devices with cloud infrastructure, enabling data-driven insights and remote control capabilities across industrial, commercial, and scientific applications." },
            { cardHeading: "Capabilities involved", cardDes: "Our custom IoT application development service delivers end-to-end solutions for connected devices and systems. We specialize in creating secure, scalable, and efficient IoT applications that bridge edge devices with cloud infrastructure, enabling data-driven insights and remote control capabilities across industrial, commercial, and scientific applications." },
            { cardHeading: "Engineering Spotlight", cardDes: "closed-feedback-loop thermal system controller tuning, mil-spec component specification & specialized power electronics design based on custom MOSFET" },
            { cardHeading: "Client Testimonial", cardDes: "Our custom IoT application development service delivers end-to-end solutions for connected devices and systems. We specialize in creating secure, scalable, and efficient IoT applications that bridge edge devices with cloud infrastructure, enabling data-driven insights and remote control capabilities across industrial, commercial, and scientific applications." }
        ]
    },
    {
        name: <>Project Name 2</>,
        client: "Client Name",
        projectImg: projectOne,
        projectTag: 'Category 2',
        clientName: 'Client Name',
        projectTitle: 'Project Name 2',
        projectCards: [
            { cardHeading: "Challenge & scope", cardDes: "Our custom IoT application development service delivers end-to-end solutions for connected devices and systems. We specialize in creating secure, scalable, and efficient IoT applications that bridge edge devices with cloud infrastructure, enabling data-driven insights and remote control capabilities across industrial, commercial, and scientific applications." },
            { cardHeading: "Capabilities involved", cardDes: "Our custom IoT application development service delivers end-to-end solutions for connected devices and systems. We specialize in creating secure, scalable, and efficient IoT applications that bridge edge devices with cloud infrastructure, enabling data-driven insights and remote control capabilities across industrial, commercial, and scientific applications." },
            { cardHeading: "Engineering Spotlight", cardDes: "closed-feedback-loop thermal system controller tuning, mil-spec component specification & specialized power electronics design based on custom MOSFET" },
            { cardHeading: "Client Testimonial", cardDes: "Our custom IoT application development service delivers end-to-end solutions for connected devices and systems. We specialize in creating secure, scalable, and efficient IoT applications that bridge edge devices with cloud infrastructure, enabling data-driven insights and remote control capabilities across industrial, commercial, and scientific applications." }
        ]
    },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Auto-slide every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section>
        <div className="2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px] 2xl:py-[100px] xl:py-[75px] lg:py-[66px] md:py-[45px] py-[50px]">
            <div className="flex items-start 2xl:gap-[54px] max-[991px]:flex-wrap">
                {/* Sidebar Timeline */}
                <div className="2xl:w-[383px] xl:w-[303px] md:w-[260px] max-[991px]:!w-full">
                    <h2 className="2xl:text-[54px] xl:text-[42px] md:text-[36px] text-[24px] font-bold mb-4">Projects</h2>
                    <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute 2xl:left-[11px] xl:left-[8px] md:left-[6px] top-2 h-full w-1 bg-gray-300 max-[991px]:h-[3px] max-[991px]:w-full max-[991px]:!top-[18.5px]"></div>
                    <ul className="relative min-[992px]:flex-col max-[991px]:flex-row w-full overflow-hidden z-10 flex flex-col 2xl:gap-y-[85px] xl:gap-y-[66px] md:gap-y-[58px] 2xl:py-[85px] xl:py-[66px] md:py-[58px] max-[991px]:!pt-[10px] max-[991px]:gap-x-[30px] max-[991px]:!pb-0">
                        {projects.map((project, index) => (
                        <li
                            key={index}
                            className={`relative flex items-center cursor-pointer 2xl:ps-[68px] xl:ps-[55px] md:ps-[42px] max-[991px]:!ps-0 2xl:text-[24px] xl:text-[18px] text-base leading-snug transition-transform duration-500 ease-in-out max-[991px]:flex-col max-[991px]:flex-wrap max-[991px]:min-w-[250px] ${
                            index === currentIndex
                                ? "font-bold text-[#222325]"
                                : "text-[#828282] font-medium"
                            }`}
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                            onClick={() => setCurrentIndex(index)}
                        >
                            {/* Circle Indicator */}
                            <div
                            className={`2xl:w-[26px] xl:w-[20px] md:w-[18px] 2xl:h-[26px] xl:h-[20px] md:h-[18px] rounded-full absolute left-0 after:2xl:w-[56px] after:xl:w-[42px] after:2xl:h-[56px] after:xl:h-[42px] after:md:h-[38px] after:md:w-[38px] after:absolute after:2xl:-left-[15px] after:2xl:-top-[15px] after:xl:-left-[11px] after:xl:-top-[11px] after:md:-left-[10.5px] after:md:-top-[9.5px] after:rounded-full max-[991px]:relative max-[991px]:me-auto max-[991px]:ms-3 max-[991px]:mb-5 ${
                                index === currentIndex ? "bg-[#3563E9] after:bg-[#DAE2FB] after:-z-[1]" : "bg-[#D7DBE1]"
                            }`}
                            ></div>
                            <div className="2xl:min-h-[66px] xl:min-h-[55px] flex items-center max-[991px]:w-full">{project.name}</div>
                        </li>
                        ))}
                    </ul>
                    </div>
                </div>

                {/* Project Details Card */}
                <div className="2xl:w-[calc(100%_-_383px)] xl:w-[calc(100%_-_303px)] md:w-[calc(100%_-_260px)] max-[991px]:!w-full max-[991px]:mt-9 max-[767px]:mt-7 bg-[#051731] 2xl:rounded-[17.78px] xl:rounded-[12px] rounded-[10px] 2xl:p-[44px] xl:p-[33px] md:p-[30px] p-[20px]">
                    <div>
                        <div className="relative w-full imggrdnt after:absolute after:left-0 after:bottom-0 after:h-full after:w-full">
                            <Image
                                src={projects[currentIndex].projectImg}
                                alt="Project"
                                width={1920}
                                className="w-full h-full object-cover rounded-lg"
                            />
                            <div className="absolute z-[1] bottom-0 2xl:p-[40px] xl:p-[27px] md:p-[30px] p-[12px] w-full text-white">
                                <span className="rounded-full font-medium 2xl:text-base xl:text-[15px] md:text-[14px] text-[12px] bg-[rgba(0,0,0,0.32)] 2xl:px-[22px] xl:px-[18px] px-[15px] 2xl:py-[8px] xl:py-[7px] py-[6px]">
                                {projects[currentIndex].projectTag}
                                </span>
                                <h2 className="font-semibold 2xl:text-[32px] xl:text-[28px] md:text-[25px] text-[22px] 2xl:my-2">
                                {projects[currentIndex].projectTitle}
                                </h2>
                                <p className="2xl:text-[18px] xl:text-[13.5px] md:text-[12px] text-[11.22px]"><span className="font-semibold">Client Name:</span> {projects[currentIndex].clientName}</p>
                            </div>
                        </div>
                        <div className="group [&>*:nth-child(1)]:border-b [&>*:nth-child(1)]:border-b-[rgba(255,255,255,0.5)] [&>*:nth-child(2)]:border-b [&>*:nth-child(2)]:border-b-[rgba(255,255,255,0.5)] 2xl:pt-[40px] [&>*:nth-child(1)]:2xl:pb-[30px] [&>*:nth-child(2)]:2xl:pb-[30px] [&>*:nth-child(1)]:2xl:mb-[30px] [&>*:nth-child(2)]:2xl:mb-[30px] [&>*:nth-child(1)]:xl:pb-[20px] [&>*:nth-child(2)]:xl:pb-[20px] [&>*:nth-child(1)]:pb-[18px] [&>*:nth-child(2)]:pb-[18px] [&>*:nth-child(1)]:xl:mb-[20px] [&>*:nth-child(2)]:xl:mb-[20px] [&>*:nth-child(1)]:mb-[18px] [&>*:nth-child(2)]:mb-[18px] xl:pt-[30px] md:pt-[26px] pt-[30px] grid md:grid-cols-2 grid-cols-1 2xl:gap-x-[53px] xl:gap-x-[40px] md:gap-x-[35px] max-[767px]:[&>div]:border-b max-[767px]:[&>div]:border-b-[rgba(255,255,255,0.5)] max-[767px]:[&>div]:!pb-5 max-[767px]:[&>div]:!mb-5 max-[767px]:[&>*:last-child]:border-b-0 max-[767px]:[&>*:last-child]:!pb-0">
                            {projects[currentIndex].projectCards.map((data, subindex) => (
                                <div key={subindex} className="group-nth-child(1):border-b">
                                    <h1 className="2xl:text-[21.33px] xl:text-[16px] md:text-[14.22px] text-base text-white">{data.cardHeading}</h1>
                                    <p className="2xl:text-base xl:text-[15px] md:text-[14px] text-[12px] text-white 2xl:mt-4 mt-3">{data.cardDes}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
