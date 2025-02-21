"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

import projectOne from '@/src/assets/images/power-distribution.jpg'

const projects = [
    { name: <>Power Distribution<br/>Board</>, client: "Picaso",},
    { name: <>Wireless Voting <br/>System</>, client: "Client Name",},
    { name: <>Smarthome <br/>Automation Controller</>, client: "Client Name",},
    { name: <>Project Name 1</>, client: "Client Name",},
    { name: <>Project Name 2</>, client: "Client Name",},
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

  const projectDes = [
    {projectImg:projectOne,projectTag:'Commercial/Industrial Robotics',clientName:'Picaso', projectTitle:'Power Distribution Board'}
  ]

  return (
    <section>
        <div className="2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px] 2xl:py-[100px] xl:py-[75px] lg:py-[66px] md:py-[45px] py-[50px]">
            <div className="flex items-start 2xl:gap-[54px]">
                {/* Sidebar Timeline */}
                <div className="2xl:w-[383px]">
                    <h2 className="text-2xl font-bold mb-4">Projects</h2>
                    <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[11px] top-2 h-full w-1 bg-gray-300"></div>
                    <ul className="relative z-10 flex flex-col gap-y-[85px] 2xl:py-[85px]">
                        {projects.map((project, index) => (
                        <li
                            key={index}
                            className={`relative flex items-center cursor-pointer 2xl:ps-[68px] 2xl:text-[24px] xl:text-[18px] text-base leading-snug ${
                            index === currentIndex
                                ? "font-bold text-[#222325]"
                                : "text-[#828282] font-medium"
                            }`}
                            onClick={() => setCurrentIndex(index)}
                        >
                            {/* Circle Indicator */}
                            <div
                            className={`2xl:w-[26px] 2xl:h-[26px] rounded-full absolute left-0 after:2xl:w-[56px] after:2xl:h-[56px] after:absolute after:2xl:-left-[15px] after:2xl:-top-[15px] after:rounded-full ${
                                index === currentIndex ? "bg-[#3563E9] after:bg-[#DAE2FB] after:-z-[1]" : "bg-[#D7DBE1]"
                            }`}
                            ></div>
                            <div className="min-h-[66px] flex items-center">{project.name}</div>
                        </li>
                        ))}
                    </ul>
                    </div>
                </div>

                {/* Project Details Card */}
                <div className="2xl:w-[calc(100%_-_383px)] bg-[#051731] 2xl:rounded-[17.78px] xl:rounded-[12px] rounded-[10px] 2xl:p-[44px]">
                    {projectDes.map((data,subindex)=>(
                        <div key={subindex}>
                            <div className="relative w-full after:bg-from-[#000000] after:to-[#000000] after:bg-linear-to-t after:absolute after:left-0 after:bottom-0 after:h-full after:w-full after:z-[1]">
                                <Image
                                    src={data.projectImg}
                                    alt="Project"
                                    width={1920}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                                <div className="absolute bottom-0 2xl:p-[40px] xl:p-[30px] md:p-[26px] p-[30px] w-full text-white">
                                    <span className="rounded-full font-medium 2xl:text-base xl:text-[15px] md:text-[14px] text-[12px] bg-[rgba(0,0,0,0.32)] 2xl:px-[22px] xl:px-[18px] px-[15px] 2xl:py-[8px] xl:py-[7px] py-[6px]">
                                    {data.projectTag}
                                    </span>
                                    <h2 className="font-semibold 2xl:text-[32px] xl:text-[28px] md:text-[25px] text-[22px] 2xl:my-2">
                                    {data.projectTitle}
                                    </h2>
                                    <p className="2xl:text-[18px] xl:text-[13.5px] md:text-[12px] text-[11.22px]"><span className="font-semibold">Client Name:</span> {data.clientName}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Content Sections */}
                    <div className="mt-6">
                    <h3 className="text-xl font-semibold">Challenge & Scope</h3>
                    <p className="text-gray-600 mt-2">
                        Our custom IoT application development service delivers end-to-end solutions for connected devices and systems...
                    </p>
                    </div>

                    <div className="mt-6">
                    <h3 className="text-xl font-semibold">Capabilities Involved</h3>
                    <p className="text-gray-600 mt-2">
                        Our Custom IoT Application Development Service delivers end-to-end solutions...
                    </p>
                    </div>

                    <div className="mt-6">
                    <h3 className="text-xl font-semibold">Engineering Spotlight</h3>
                    <p className="text-gray-600 mt-2">
                        Closed-feedback-loop thermal system controller tuning...
                    </p>
                    </div>

                    <div className="mt-6">
                    <h3 className="text-xl font-semibold">Client Testimonial</h3>
                    <p className="text-gray-600 mt-2">
                        Our custom IoT application development service delivers...
                    </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
