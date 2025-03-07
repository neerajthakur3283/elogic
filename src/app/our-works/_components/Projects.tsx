"use client";
import React from "react";

import projectOne from "@/src/assets/images/power-distribution.jpg";
import Image from "next/image";

const projectData = [
  {
    id: 1,
    name: (
      <>
        Power Distribution <br />
        Board
      </>
    ),
    client: "Presso",
    domain: "Commercial/Industrial Robotics",
    projectImg: projectOne,
    projectTitle: "Power Distribution Board",
    projectCards: [
      {
        cardHeading: "Challenge & scope",
        cardDes:
          "Our custom IoT application development service delivers end-to-end solutions for connected devices and systems. We specialize in creating secure, scalable, and efficient IoT applications that bridge edge devices with cloud infrastructure, enabling data-driven insights and remote control capabilities across industrial, commercial, and scientific applications.",
      },
      {
        cardHeading: "Capabilities involved",
        cardDes: (
          <>
            <ul className="list-disc ps-[17px] grid grid-cols-2">
              <li>hardware design </li>
              <li>PCB layout & routing </li>
              <li>power integrity analysis</li>
              <li>lab prototyping</li>
            </ul>
          </>
        ),
      },
      {
        cardHeading: "Engineering Spotlight",
        cardDes:
          "closed-feedback-loop thermal system controller tuning, mil-spec component specification & specialized power electronics design based on custom MOSFET",
      },
      {
        cardHeading: "Client Testimonial",
        cardDes: "Akanksha: ",
      },
    ],
  },
  {
    id: 2,
    name: (
      <>
        Wireless voting <br />
        system
      </>
    ),
    client: "Meridia",
    domain: "Consumer Electronics",
    projectImg: projectOne,
    projectTitle: "Wireless voting system",
    projectCards: [
      {
        cardHeading: "Challenge & scope",
        cardDes:
          "Our custom IoT application development service delivers end-to-end solutions for connected devices and systems. We specialize in creating secure, scalable, and efficient IoT applications that bridge edge devices with cloud infrastructure, enabling data-driven insights and remote control capabilities across industrial, commercial, and scientific applications.",
      },
      {
        cardHeading: "Capabilities involved",
        cardDes: (
          <>
            <ul className="list-disc ps-[17px] grid grid-cols-2">
              <li>hardware design</li>
              <li>PCB layout & routing</li>
              <li>antenna design</li>
              <li>RF protocol design</li>
              <li>firmware development</li>
              <li>power optimization</li>
              <li>mechanical design</li>
              <li>3D rendering</li>
              <li>custom PCB membrane design</li>
              <li>user interface design</li>
              <li>power & signal integrity analysis</li>
              <li>lab prototyping</li>
              <li>tooling design</li>
              <li>DfM+DfA optimization</li>
            </ul>
          </>
        ),
      },
      {
        cardHeading: "Engineering Spotlight",
        cardDes: "Custom wireless protocol & stack design",
      },
      {
        cardHeading: "Client Testimonial",
        cardDes: "Peter: ",
      },
    ],
  },
  {
    id: 3,
    name: (
      <>
        Smart home <br />
        automation controller
      </>
    ),
    client: "Keus",
    domain: "Consumer Electronics",
    projectImg: projectOne,
    projectTitle: "Smart home automation controller",
    projectCards: [
      {
        cardHeading: "Challenge & scope",
        cardDes:
          "Our custom IoT application development service delivers end-to-end solutions for connected devices and systems. We specialize in creating secure, scalable, and efficient IoT applications that bridge edge devices with cloud infrastructure, enabling data-driven insights and remote control capabilities across industrial, commercial, and scientific applications.",
      },
      {
        cardHeading: "Capabilities involved",
        cardDes: (
          <>
            <ul className="list-disc ps-[17px] grid grid-cols-2">
              <li>hardware design</li>
              <li>PCB layout & routing</li>
              <li>firmware development</li>
              <li>wireless protocol implementation</li>
              <li>mechanical design</li>
              <li>3D rendering</li>
              <li>user interface design</li>
            </ul>
          </>
        ),
      },
      {
        cardHeading: "Engineering Spotlight",
        cardDes: "intuitive minimal user interface design",
      },
      {
        cardHeading: "Client Testimonial",
        cardDes: "Manish: ",
      },
    ],
  },
  {
    id: 4,
    name: (
      <>
        Battery Management <br />
        System
      </>
    ),
    client: "Unbox Robotics",
    domain: "Commercial/Industrial Robotics",
    projectImg: projectOne,
    projectTitle: "Power Distribution Board",
    projectCards: [
      {
        cardHeading: "Challenge & scope",
        cardDes:
          "Our custom IoT application development service delivers end-to-end solutions for connected devices and systems. We specialize in creating secure, scalable, and efficient IoT applications that bridge edge devices with cloud infrastructure, enabling data-driven insights and remote control capabilities across industrial, commercial, and scientific applications.",
      },
      {
        cardHeading: "Capabilities involved",
        cardDes: (
          <>
            <ul className="list-disc ps-[17px] grid grid-cols-2">
              <li>analog & digital hardware design</li>
              <li>mixed-signal PCB layout & routing</li>
              <li>firmware development</li>
              <li>wireless protocol implementation</li>
              <li> mechanical design</li>
              <li>3D rendering</li>
              <li>user interface design</li>
            </ul>
          </>
        ),
      },
      {
        cardHeading: "Engineering Spotlight",
        cardDes: "analog front end design",
      },
      {
        cardHeading: "Client Testimonial",
        cardDes: " ",
      },
    ],
  },
  {
    id: 5,
    name: (
      <>
        Industrial signal <br />
        processing board
      </>
    ),
    client: "Finna Sensors",
    domain: "Industrial Controls",
    projectImg: projectOne,
    projectTitle: "Industrial signal processing board",
    projectCards: [
      {
        cardHeading: "Challenge & scope",
        cardDes:
          "Our custom IoT application development service delivers end-to-end solutions for connected devices and systems. We specialize in creating secure, scalable, and efficient IoT applications that bridge edge devices with cloud infrastructure, enabling data-driven insights and remote control capabilities across industrial, commercial, and scientific applications.",
      },
      {
        cardHeading: "Capabilities involved",
        cardDes: (
          <>
            <ul className="list-disc ps-[17px] grid">
              <li>
                ADC, DAC & power electronics hardware design, mixed-signal PCB
                layout & routing
              </li>
            </ul>
          </>
        ),
      },
      {
        cardHeading: "Engineering Spotlight",
        cardDes: "FPGA based digital signal processing",
      },
      {
        cardHeading: "Client Testimonial",
        cardDes: "Varun/scott",
      },
    ],
  },
  {
    id: 6,
    name: (
      <>
        Chemical testing <br />
        lab equipment
      </>
    ),
    client: "Toshcon",
    domain: "Instrumentation",
    projectImg: projectOne,
    projectTitle: "Chemical testing lab equipment",
    projectCards: [
      {
        cardHeading: "Challenge & scope",
        cardDes:
          "Our custom IoT application development service delivers end-to-end solutions for connected devices and systems. We specialize in creating secure, scalable, and efficient IoT applications that bridge edge devices with cloud infrastructure, enabling data-driven insights and remote control capabilities across industrial, commercial, and scientific applications.",
      },
      {
        cardHeading: "Capabilities involved",
        cardDes: (
          <ul className="list-disc ps-[17px] grid grid-cols-2">
            <li>modular analog front-end design </li>
            <li>System-on-module-based hardware design </li>
            <li>mechanical design </li>
            <li>mixed-signal & high speed PCB layout & routing</li>
            <li>linux kernel customization and application development</li>
            <li>3D rendering</li>
            <li>touch interface design </li>
            <li>power & signal integrity analysis</li>
            <li>lab prototyping</li>
            <li>tooling design </li>
            <li>DfM optimization</li>
          </ul>
        ),
      },
      {
        cardHeading: "Engineering Spotlight",
        cardDes: "analog front end design, industrial product design",
      },
      {
        cardHeading: "Client Testimonial",
        cardDes: "Toshniwal/Pieter",
      },
    ],
  },
  {
    id: 7,
    name: <>Process analyzer</>,
    client: "Toshcon",
    domain: "Instrumentation",
    projectImg: projectOne,
    projectTitle: "Process analyzer",
    projectCards: [
      {
        cardHeading: "Challenge & scope",
        cardDes:
          "Our custom IoT application development service delivers end-to-end solutions for connected devices and systems. We specialize in creating secure, scalable, and efficient IoT applications that bridge edge devices with cloud infrastructure, enabling data-driven insights and remote control capabilities across industrial, commercial, and scientific applications.",
      },
      {
        cardHeading: "Capabilities involved",
        cardDes: (
          <ul className="list-disc ps-[17px] grid grid-cols-2">
            <li>modular analog front-end design</li>
            <li>hardware design</li>
            <li>mixed-signal PCB layout & routing</li>
            <li>linux kernel customization and application development</li>
            <li>mechanical design</li>
            <li>3D rendering</li>
            <li>touch interface design</li>
            <li>power & signal integrity analysis</li>
            <li>lab prototyping</li>
          </ul>
        ),
      },
      {
        cardHeading: "Engineering Spotlight",
        cardDes: "Extensive cost-optimzation for price-sensitive markets",
      },
      {
        cardHeading: "Client Testimonial",
        cardDes: "Toshniwal/Pieter",
      },
    ],
  },
  {
    id: 8,
    name: (
      <>
        Digital IoT-enabled <br />
        gas detection module
      </>
    ),
    client: "Uniphos",
    domain: "Instrumentation",
    projectImg: projectOne,
    projectTitle: "Digital IoT-enabled gas detection module",
    projectCards: [
      {
        cardHeading: "Challenge & scope",
        cardDes:
          "Our custom IoT application development service delivers end-to-end solutions for connected devices and systems. We specialize in creating secure, scalable, and efficient IoT applications that bridge edge devices with cloud infrastructure, enabling data-driven insights and remote control capabilities across industrial, commercial, and scientific applications.",
      },
      {
        cardHeading: "Capabilities involved",
        cardDes: (
          <ul className="list-disc ps-[17px] grid grid-cols-2">
            <li>hardware design</li>
            <li>PCB layout & routing</li>
            <li>firmware development</li>
            <li>cellular connectivity & IoT protocols implementation</li>
            <li>
              wired & wireless industrial fieldbus protocols implementation
            </li>
            <li>mechanical design</li>
            <li>3D rendering</li>
            <li>user interface design</li>
          </ul>
        ),
      },
      {
        cardHeading: "Engineering Spotlight",
        cardDes: "ATEX class II rated intrinsically safe design",
      },
      {
        cardHeading: "Client Testimonial",
        cardDes: "Rajan",
      },
    ],
  },
  {
    id: 9,
    name: (
      <>
        Linux single-board <br />
        computer
      </>
    ),
    client: " ",
    projectImg: projectOne,
    domain: "Industrial Controls",
    projectTitle: "Linux single-board computer",
    projectCards: [
      {
        cardHeading: "Challenge & scope",
        cardDes:
          "Our custom IoT application development service delivers end-to-end solutions for connected devices and systems. We specialize in creating secure, scalable, and efficient IoT applications that bridge edge devices with cloud infrastructure, enabling data-driven insights and remote control capabilities across industrial, commercial, and scientific applications.",
      },
      {
        cardHeading: "Capabilities involved",
        cardDes: (
          <ul className="list-disc ps-[17px] grid grid-cols-2">
            <li>linux kernel customization and application development</li>
            <li>System-on-module-based hardware design</li>
            <li>wired & wireless protocol implementation</li>
            <li>cellular connectivity & IoT protocols implementation</li>
            <li>mechanical design</li>
            <li>mixed-signal & high speed PCB layout & routing</li>
            <li>3D rendering</li>
            <li>web-server user interface design</li>
            <li>power & signal integrity analysis</li>
            <li>lab prototyping</li>
            <li>tooling design</li>
            <li>DfM optimization</li>
          </ul>
        ),
      },
      {
        cardHeading: "Engineering Spotlight",
        cardDes: "custom bootloader, kernel & drivers development",
      },
      {
        cardHeading: "Client Testimonial",
        cardDes: "",
      },
    ],
  },
  {
    id: 10,
    name: (
      <>
        Industrial I/O <br />
        module
      </>
    ),
    client: "Gridshield Technologies",
    projectImg: projectOne,
    domain: "Industrial Controls",
    projectTitle: "Industrial I/O module",
    projectCards: [
      {
        cardHeading: "Challenge & scope",
        cardDes:
          "Our custom IoT application development service delivers end-to-end solutions for connected devices and systems. We specialize in creating secure, scalable, and efficient IoT applications that bridge edge devices with cloud infrastructure, enabling data-driven insights and remote control capabilities across industrial, commercial, and scientific applications.",
      },
      {
        cardHeading: "Capabilities involved",
        cardDes: (
          <ul className="list-disc ps-[17px] grid grid-cols-2">
            <li>microprocessor-based hardware design</li>
            <li>mixed-signal & high speed PCB layout & routing</li>
            <li>linux kernel customization and application development</li>
            <li>wired & wireless protocol implementation</li>
            <li>mechanical design</li>
            <li>3D rendering</li>
            <li>power & signal integrity analysis</li>
            <li>lab prototyping</li>
            <li>tooling design</li>
            <li>DfM optimization</li>
            <li>standards-compliance documentation & testing</li>
          </ul>
        ),
      },
      {
        cardHeading: "Engineering Spotlight",
        cardDes:
          "IEC-something compliance, modular & expandable plug-in I/O design",
      },
      {
        cardHeading: "Client Testimonial",
        cardDes: "Anand",
      },
    ],
  },
  {
    id: 11,
    name: (
      <>
        Thermal Imaging <br /> Masking Proejct
      </>
    ),
    client: "Sagar Thermals",
    projectImg: projectOne,
    domain: "Defense",
    projectTitle: "Thermal Imaging Masking Proejct",
    projectCards: [
      {
        cardHeading: "Challenge & scope",
        cardDes:
          "Our custom IoT application development service delivers end-to-end solutions for connected devices and systems. We specialize in creating secure, scalable, and efficient IoT applications that bridge edge devices with cloud infrastructure, enabling data-driven insights and remote control capabilities across industrial, commercial, and scientific applications.",
      },
      {
        cardHeading: "Capabilities involved",
        cardDes: (
          <ul className="list-disc ps-[17px] grid grid-cols-2">
            <li>hardware design</li>
            <li>PCB layout & routing</li>
            <li>power & thermal simulations</li>
            <li>firmware development</li>
            <li>closed-loop control system development & tuning</li>
            <li>wireless protocol implementation</li>
            <li>harness design</li>
            <li>field testing</li>
          </ul>
        ),
      },
      {
        cardHeading: "Engineering Spotlight",
        cardDes:
          "closed-feedback-loop thermal system controller tuning, mil-spec component specification & specialized power electronics design based on custom MOSFET",
      },
      {
        cardHeading: "Client Testimonial",
        cardDes: "Kedar",
      },
    ],
  },
  {
    id: 12,
    name: (
      <>
        Smart residential <br /> energy meter
      </>
    ),
    client: "Innologix",
    projectImg: projectOne,
    domain: "Instrumentation",
    projectTitle: "Smart residential energy meter",
    projectCards: [
      {
        cardHeading: "Challenge & scope",
        cardDes:
          "Our custom IoT application development service delivers end-to-end solutions for connected devices and systems. We specialize in creating secure, scalable, and efficient IoT applications that bridge edge devices with cloud infrastructure, enabling data-driven insights and remote control capabilities across industrial, commercial, and scientific applications.",
      },
      {
        cardHeading: "Capabilities involved",
        cardDes: (
          <ul className="list-disc ps-[17px] grid grid-cols-2">
            <li>analog front end design</li>
            <li>hardware design</li>
            <li>PCB layout & routing</li>
            <li>firmware development</li>
            <li>cellular connectivity & IoT protocols implementation</li>
            <li>mechanical design</li>
            <li>3D rendering</li>
            <li>user interface design</li>
          </ul>
        ),
      },
      {
        cardHeading: "Engineering Spotlight",
        cardDes: "",
      },
      {
        cardHeading: "Client Testimonial",
        cardDes: "",
      },
    ],
  },
  {
    id: 13,
    name: (
      <>
        Gas flow metering <br /> system controller
      </>
    ),
    client: "Mitico",
    projectImg: projectOne,
    domain: "Industrial Controls",
    projectTitle: "Gas flow metering system controller",
    projectCards: [
      {
        cardHeading: "Challenge & scope",
        cardDes:
          "Our custom IoT application development service delivers end-to-end solutions for connected devices and systems. We specialize in creating secure, scalable, and efficient IoT applications that bridge edge devices with cloud infrastructure, enabling data-driven insights and remote control capabilities across industrial, commercial, and scientific applications.",
      },
      {
        cardHeading: "Capabilities involved",
        cardDes: (
          <ul className="list-disc ps-[17px] grid grid-cols-2">
            <li>Firmware development</li>
            <li>System Integration</li>
            <li>Field testing</li>
            <li>Closed-loop control system design & tuning</li>
          </ul>
        ),
      },
      {
        cardHeading: "Engineering Spotlight",
        cardDes: "PLC-to-embedded conversion",
      },
      {
        cardHeading: "Client Testimonial",
        cardDes: "",
      },
    ],
  },
  {
    id: 14,
    name: (
      <>
        Wire-winding machine <br />
        embedded controller
      </>
    ),
    client: "T-WORKS",
    projectImg: projectOne,
    domain: "Industrial Controls",
    projectTitle: "Wire-winding machine embedded controller",
    projectCards: [
      {
        cardHeading: "Challenge & scope",
        cardDes:
          "Our custom IoT application development service delivers end-to-end solutions for connected devices and systems. We specialize in creating secure, scalable, and efficient IoT applications that bridge edge devices with cloud infrastructure, enabling data-driven insights and remote control capabilities across industrial, commercial, and scientific applications.",
      },
      {
        cardHeading: "Capabilities involved",
        cardDes: (
          <ul className="list-disc ps-[17px] grid grid-cols-2">
            <li>Firmware development</li>
            <li>System Integration</li>
            <li>Field testing</li>
            <li>Closed-loop control system design & tuning</li>
          </ul>
        ),
      },
      {
        cardHeading: "Engineering Spotlight",
        cardDes: "PLC-to-embedded conversion",
      },
      {
        cardHeading: "Client Testimonial",
        cardDes: "",
      },
    ],
  },
];

function ProjectsCards() {
  return (
    <>
      <section>
        <div className="2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px] 2xl:py-[100px] xl:py-[75px] lg:py-[66px] md:py-[45px] py-[50px]">
          <h2 className="leading-[1] 2xl:text-[61.77px] xl:text-[46.33px] md:text-[41.18px] text-[24px] font-bold capitalize text-center 2xl:pb-[70px] xl:pb-[52px] lg:pb-[45px] pb-[40px]">
            Projects
          </h2>
          <div className="grid grid-cols-1 2xl:gap-[54px] max-[991px]:flex-wrap overflow-y-hidden">
            {projectData.map((data, index) => (
              <div
                key={index}
                className="max-[991px]:mt-9 max-[767px]:mt-7 bg-[#051731] 2xl:rounded-[17.78px] xl:rounded-[12px] rounded-[10px] 2xl:p-[44px] xl:p-[33px] md:p-[30px] p-[20px]"
              >
                <div className="relative w-full imggrdnt after:absolute after:left-0 after:bottom-0 after:h-full after:w-full max-[639px]:h-[180px]">
                  <Image
                    src={data.projectImg}
                    alt="Project"
                    width={1920}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute z-[1] bottom-0 2xl:p-[40px] xl:p-[27px] md:p-[30px] p-[12px] w-full text-white">
                    <span className="rounded-full font-medium 2xl:text-base xl:text-[15px] md:text-[14px] text-[12px] bg-[rgba(0,0,0,0.32)] 2xl:px-[22px] xl:px-[18px] px-[15px] 2xl:py-[8px] xl:py-[7px] py-[6px]">
                      {data.domain}
                    </span>
                    <h2 className="font-semibold 2xl:text-[32px] xl:text-[28px] md:text-[25px] text-[22px] 2xl:my-2">
                      {data.projectTitle}
                    </h2>
                    <p className="2xl:text-[18px] xl:text-[13.5px] md:text-[12px] text-[11.22px]">
                      <span className="font-semibold">Client Name:</span>{" "}
                      {data.client}
                    </p>
                  </div>
                </div>
                <div className="2xl:w-[calc(100%_-_383px)] xl:w-[calc(100%_-_303px)] md:w-[calc(100%_-_260px)] max-[991px]:!w-full max-[991px]:mt-9 max-[767px]:mt-7 bg-[#051731] 2xl:rounded-[17.78px] xl:rounded-[12px] rounded-[10px] 2xl:p-[44px] xl:p-[33px] md:p-[30px] p-[20px]">
                  <div>
                    <div className="group [&>*:nth-child(1)]:border-b [&>*:nth-child(1)]:border-b-[rgba(255,255,255,0.5)] [&>*:nth-child(2)]:border-b [&>*:nth-child(2)]:border-b-[rgba(255,255,255,0.5)] 2xl:pt-[40px] [&>*:nth-child(1)]:2xl:pb-[30px] [&>*:nth-child(2)]:2xl:pb-[30px] [&>*:nth-child(1)]:2xl:mb-[30px] [&>*:nth-child(2)]:2xl:mb-[30px] [&>*:nth-child(1)]:xl:pb-[20px] [&>*:nth-child(2)]:xl:pb-[20px] [&>*:nth-child(1)]:pb-[18px] [&>*:nth-child(2)]:pb-[18px] [&>*:nth-child(1)]:xl:mb-[20px] [&>*:nth-child(2)]:xl:mb-[20px] [&>*:nth-child(1)]:mb-[18px] [&>*:nth-child(2)]:mb-[18px] xl:pt-[30px] md:pt-[26px] pt-[30px] grid md:grid-cols-2 grid-cols-1 2xl:gap-x-[53px] xl:gap-x-[40px] md:gap-x-[35px] max-[767px]:[&>div]:border-b max-[767px]:[&>div]:border-b-[rgba(255,255,255,0.5)] max-[767px]:[&>div]:!pb-5 max-[767px]:[&>div]:!mb-5 max-[767px]:[&>*:last-child]:border-b-0 max-[767px]:[&>*:last-child]:!pb-0">
                      {data.projectCards.map((data, subindex) => (
                        <div
                          key={subindex}
                          className="group-nth-child(1):border-b"
                        >
                          <h1 className="2xl:text-[21.33px] xl:text-[16px] md:text-[14.22px] text-base text-white">
                            {data.cardHeading}
                          </h1>
                          <div className="2xl:text-base xl:text-[15px] md:text-[14px] text-[12px] text-white 2xl:mt-4 mt-3">
                            {data.cardDes}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default ProjectsCards;
