"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

import projectOne from "@/src/assets/images/power-distribution.jpg";

const projects = [
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
            hardware design <br />
            PCB layout & routing <br />
            power integrity analysis
            <br />
            lab prototyping
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
            hardware design <br />
            PCB layout & routing <br />
            antenna design <br />
            RF protocol design <br />
            firmware development <br />
            power optimization <br />
            mechanical design
            <br />
            3D rendering <br />
            custom PCB membrane design <br />
            user interface design
            <br />
            power & signal integrity analysis <br />
            lab prototyping <br />
            tooling design <br />
            DfM+DfA optimization
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
            hardware design <br />
            PCB layout & routing <br />
            firmware development
            <br />
            wireless protocol implementation <br />
            mechanical design <br />
            3D rendering <br />
            user interface design
            <br />
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
            analog & digital hardware design <br />
            mixed-signal PCB layout & routing <br />
            firmware development
            <br />
            wireless protocol implementation <br />
            mechanical design <br />
            3D rendering <br />
            user interface design
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
            ADC, DAC & power electronics hardware design, mixed-signal PCB
            layout & routing
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
          <>
            modular analog front-end design <br />
            System-on-module-based hardware design <br />
            mixed-signal & high speed PCB layout & routing
            <br />
            linux kernel customization and application development
            <br />
            mechanical design <br />
            3D rendering
            <br />
            touch interface design <br />
            power & signal integrity analysis <br />
            lab prototyping
            <br />
            tooling design <br />
            DfM optimization
          </>
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
          <>
            modular analog front-end design <br />
            hardware design <br />
            mixed-signal PCB layout & routing
            <br />
            linux kernel customization and application development
            <br />
            mechanical design <br />
            3D rendering <br />
            touch interface design <br />
            power & signal integrity analysis <br /> lab prototyping
          </>
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
          <>
            hardware design <br />
            PCB layout & routing <br />
            firmware development <br />
            cellular connectivity & IoT protocols implementation <br />
            wired & wireless industrial fieldbus protocols implementation <br />
            mechanical design <br />
            3D rendering <br />
            user interface design <br />
          </>
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
          <>
            System-on-module-based hardware design <br />
            mixed-signal & high speed PCB layout & routing <br />
            linux kernel customization and application development <br />
            wired & wireless protocol implementation <br />
            cellular connectivity & IoT protocols implementation <br />
            mechanical design <br />
            3D rendering <br />
            web-server user interface design <br />
            power & signal integrity analysis <br />
            lab prototyping <br />
            tooling design <br />
            DfM optimization
          </>
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
          <>
            microprocessor-based hardware design <br />
            mixed-signal & high speed PCB layout & routing <br />
            linux kernel customization and application development <br />
            wired & wireless protocol implementation <br />
            mechanical design <br />
            3D rendering <br />
            power & signal integrity analysis <br />
            lab prototyping <br />
            tooling design <br />
            DfM optimization <br />
            standards-compliance documentation & testing
          </>
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
          <>
            hardware design <br />
            PCB layout & routing <br />
            power & thermal simulations <br />
            firmware development <br />
            closed-loop control system development & tuning <br />
            wireless protocol implementation <br />
            harness design <br />
            field testing
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
          <>
            analog front end design <br />
            hardware design <br />
            PCB layout & routing <br />
            firmware development <br />
            cellular connectivity & IoT protocols implementation <br />
            mechanical design <br />
            3D rendering <br />
            user interface design
          </>
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
          <>
            Closed-loop control system design & tuning <br />
            Firmware development <br />
            System Integration <br />
            Field testing
          </>
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
          <>
            Closed-loop control system design & tuning <br />
            Firmware development <br />
            System Integration <br />
            Field testing
          </>
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

export default function Projects() {
  const scrollContainerRef = useRef<HTMLUListElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [lineHeight, setLineHeight] = useState("0px");

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => {
      if (id) {
        clearInterval(id);
      }
    };
  }, []);

  const startAutoSwitch = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
  };

  const handleClick = (index: number) => {
    setCurrentIndex(index);
    startAutoSwitch();
    updateLineHeight(index);
  };

  const updateLineHeight = (index: number) => {
    if (scrollContainerRef.current) {
      const listItems = scrollContainerRef.current.children;
      let newHeight = 0;
      for (let i = 0; i <= index; i++) {
        newHeight += listItems[i].clientHeight + 20;
      }
      setLineHeight(`${newHeight}px`);
    }
  };

  useEffect(() => {
    if (scrollContainerRef.current) {
      const itemHeight = 60;
      scrollContainerRef.current.scrollTo({
        top: currentIndex * itemHeight,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <section>
      <div className="2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px] 2xl:py-[100px] xl:py-[75px] lg:py-[66px] md:py-[45px] py-[50px]">
        <div className="flex items-start 2xl:gap-[54px] max-[991px]:flex-wrap overflow-y-hidden">
          <div className="2xl:w-[383px] xl:w-[303px] md:w-[260px] max-[991px]:!w-full">
            <h2 className="text-[24px] font-bold mb-4">Projects</h2>
            <div className="relative timeline-block">
              <div className="absolute h-full w-1 bg-gray-300 max-h-[90vh] -z-[1] timeline-custom">
                <div
                  className="absolute left-0 w-1 bg-blue-500 transition-all duration-300"
                  //style={{ height: lineHeight }}
                />
              </div>
              <ul
                ref={scrollContainerRef}
                className="relative flex flex-col gap-y-[20px] overflow-y-auto max-h-[90vh] px-[20px] scrollbar-hide"
              >
                {projects.map((project, index) => (
                  <li
                    key={index}
                    className={`relative flex items-center cursor-pointer text-base leading-snug transition-transform duration-500 ease-in-out  ${
                      index === currentIndex
                        ? "font-bold text-[#222325]"
                        : "text-[#828282] font-medium"
                    }`}
                    onClick={() => handleClick(index)}
                  >
                    <div
                      style={{
                        boxShadow:
                          index == currentIndex
                            ? `0px 0px 0px 7px #d7e0fb`
                            : "none",
                      }}
                      className={`w-4 h-4 rounded-full border-2 -z-[1] ${
                        index <= currentIndex
                          ? "bg-blue-500 border-blue-500"
                          : "border-gray-300 bg-gray-300"
                      }`}
                    />
                    <div className="2xl:min-h-[66px] xl:min-h-[55px] flex items-center max-[991px]:w-full ml-4">
                      {project.name}
                    </div>
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
                    {projects[currentIndex].domain}
                  </span>
                  <h2 className="font-semibold 2xl:text-[32px] xl:text-[28px] md:text-[25px] text-[22px] 2xl:my-2">
                    {projects[currentIndex].projectTitle}
                  </h2>
                  <p className="2xl:text-[18px] xl:text-[13.5px] md:text-[12px] text-[11.22px]">
                    <span className="font-semibold">Client Name:</span>{" "}
                    {projects[currentIndex].client}
                  </p>
                </div>
              </div>
              <div className="group [&>*:nth-child(1)]:border-b [&>*:nth-child(1)]:border-b-[rgba(255,255,255,0.5)] [&>*:nth-child(2)]:border-b [&>*:nth-child(2)]:border-b-[rgba(255,255,255,0.5)] 2xl:pt-[40px] [&>*:nth-child(1)]:2xl:pb-[30px] [&>*:nth-child(2)]:2xl:pb-[30px] [&>*:nth-child(1)]:2xl:mb-[30px] [&>*:nth-child(2)]:2xl:mb-[30px] [&>*:nth-child(1)]:xl:pb-[20px] [&>*:nth-child(2)]:xl:pb-[20px] [&>*:nth-child(1)]:pb-[18px] [&>*:nth-child(2)]:pb-[18px] [&>*:nth-child(1)]:xl:mb-[20px] [&>*:nth-child(2)]:xl:mb-[20px] [&>*:nth-child(1)]:mb-[18px] [&>*:nth-child(2)]:mb-[18px] xl:pt-[30px] md:pt-[26px] pt-[30px] grid md:grid-cols-2 grid-cols-1 2xl:gap-x-[53px] xl:gap-x-[40px] md:gap-x-[35px] max-[767px]:[&>div]:border-b max-[767px]:[&>div]:border-b-[rgba(255,255,255,0.5)] max-[767px]:[&>div]:!pb-5 max-[767px]:[&>div]:!mb-5 max-[767px]:[&>*:last-child]:border-b-0 max-[767px]:[&>*:last-child]:!pb-0">
                {projects[currentIndex].projectCards.map((data, subindex) => (
                  <div key={subindex} className="group-nth-child(1):border-b">
                    <h1 className="2xl:text-[21.33px] xl:text-[16px] md:text-[14.22px] text-base text-white">
                      {data.cardHeading}
                    </h1>
                    <p className="2xl:text-base xl:text-[15px] md:text-[14px] text-[12px] text-white 2xl:mt-4 mt-3">
                      {data.cardDes}
                    </p>
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
