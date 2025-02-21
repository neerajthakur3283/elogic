'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { MdArrowOutward } from 'react-icons/md'

// images
import footerLogo from "@/src/assets/images/footer-logo.svg";
import linkedinImg from "@/src/assets/images/linkedin.svg";
import mobLogo from "@/src/assets/images/mobile-footer-logo.svg";

function Footer() {
  return (
    <>
      <footer className="bg-[#EEF1F5]">
        <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3}}
        className="bg-[#172747] 2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px] 2xl:py-[100px] xl:py-[75px] lg:py-[66px] md:py-[45px] py-[50px] 2xl:rounded-ss-[100px] xl:rounded-ss-[75px] md:rounded-ss-[66px] rounded-ss-[40px] 2xl:rounded-se-[100px] xl:rounded-se-[75px] md:rounded-se-[66px] rounded-se-[40px] max-[767px]:pb-[30px]">
          <div className="flex items-start 2xl:gap-x-[85px] xl:gap-x-[60px] lg:gap-x-[70px] max-[1200px]:!gap-x-[40px] max-[991px]:!gap-x-[30px] max-[790px]:!gap-x-[20px] max-[991px]:justify-around max-[767px]:flex-wrap">
            <div className="w-full 2xl:max-w-[430px] xl:max-w-[322.5px] lg:max-w-[286.67px] max-[1200px]:max-w-[250.67px] max-[767px]:max-w-full">
              <Image
                className="2xl:w-[200px] xl:w-[150px] lg:w-[133px] md:w-[125px]"
                src={footerLogo}
                alt=""
              />
              <div className="2xl:text-[14.5px] xl:text-[12px] md:text-[10.67px] 2xl:pt-[32px] xl:pt-[24px] pt-[15px] text-white font-normal tracking-[-0.4px]">
                We Provide Cutting Edge Solutions To Hardware And Software
                Clients Across Various Industries
              </div>
            </div>
            <div className="w-full 2xl:max-w-[218px] xl:max-w-[180px] lg:max-w-[155px] max-[1200px]:max-w-[94px] max-[767px]:max-w-full md:mt-0 mt-8">
              <h4 className="mb-3 text-white font-bold 2xl:text-[18px] xl:text-[14.5px] md:text-[13.75px] text-[17px]">Industrial IoT Solutions</h4>
              <ul className="flex flex-col xl:gap-y-[22px] lg:gap-y-[19px] md:gap-y-[17px] gap-y-[15px] 2xl:text-[14.5px] xl:text-[12px] md:text-[10.67px] tracking-[-0.4px]">
                <li>
                  <Link href="/our-industrial-solutions" className="text-white">
                    Overview
                  </Link>
                </li>
                <li>
                  <Link href="/energy-consumption-monitoring" className="text-white">
                  Energy Monitoring
                  </Link>
                </li>
                <li>
                  <Link href="/machine-condition-monitoring" className="text-white">
                  Condition Monitoring
                  </Link>
                </li>
                <li>
                  <Link href="/oee-and-production-monitoring" className="text-white">
                  Productivity Monitoring
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="text-white">
                    Custom Solutions
                  </Link>
                </li>
                <li>
                  <Link href="" className="text-white">
                    Case Studies
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full 2xl:max-w-[270px] xl:max-w-[215px] md:max-w-[190px] md:my-0 my-8">
            <h4 className="mb-3 text-white font-bold 2xl:text-[18px] xl:text-[14.5px] md:text-[13.75px] text-[17px]">Product Development</h4>
              <ul className="flex flex-col xl:gap-y-[22px] lg:gap-y-[19px] md:gap-y-[17px] gap-y-[15px] 2xl:text-[14.5px] xl:text-[12px] md:text-[10.67px] tracking-[-0.4px]">
                <li>
                  <Link href="/services-overview" className="text-white">
                    Overview
                  </Link>
                </li>
                <li>
                  <Link href="/services-overview/embedded-hardware-design" className="text-white">
                  Embedded Hardware Design
                  </Link>
                </li>
                <li>
                  <Link href="/services-overview/embedded-software-design" className="text-white">
                  Embedded Software Design
                  </Link>
                </li>
                <li>
                  <Link href="/services-overview/human-machine-interface-ux-development" className="text-white">
                  Human-machine Interface Development
                  </Link>
                </li>
                <li>
                  <Link href="/services-overview/wireless-systems-development" className="text-white">
                    Wireless Systems Development
                  </Link>
                </li>
                <li>
                  <Link href="/services-overview/mechanical-and-industrial-design" className="text-white">
                  Mechanical & Industrial Design
                  </Link>
                </li>
                <li>
                  <Link href="/services-overview/manufacturing-optimization-support" className="text-white">
                  Manufacturing Support
                  </Link>
                </li>
                <li>
                  <Link href="/services-overview/custom-iot-apps-development" className="text-white">
                  IoT application Development
                  </Link>
                </li>
                <li>
                  <Link href="/services-overview/technology-compliance-consulting" className="text-white">
                  Technology Consulting
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full 2xl:max-w-[155px] xl:max-w-[140px] md:max-w-[105px] max-[767px]:flex max-[767px]:justify-between max-[480px]:flex-wrap max-[480px]:flex-col max-[480px]:gap-[30px]">
            
            <div>
              <h4 className="mb-3 text-white font-bold 2xl:text-[18px] xl:text-[14.5px] md:text-[13.75px] text-[17px]">Products</h4>
                <ul className="flex flex-col xl:gap-y-[22px] lg:gap-y-[19px] md:gap-y-[17px] gap-y-[15px] 2xl:text-[14.5px] xl:text-[12px] md:text-[10.67px] tracking-[-0.4px]">
                  <li>
                    <Link href="/blogs" className="text-white">
                      Edge Connect Series
                    </Link>
                  </li>
                  <li>
                    <Link href="" className="text-white">
                    Field Connect Series
                    </Link>
                  </li>
                </ul>
              </div>
            
            <div className="md:my-6">
              <h4 className="mb-3 text-white font-bold 2xl:text-[18px] xl:text-[14.5px] md:text-[13.75px] text-[17px]">About Us</h4>
                <ul className="flex flex-col xl:gap-y-[22px] lg:gap-y-[19px] md:gap-y-[17px] gap-y-[15px] 2xl:text-[14.5px] xl:text-[12px] md:text-[10.67px] tracking-[-0.4px]">
                  <li>
                    <Link href="/about-us" className="text-white">
                      Overview
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-process" className="text-white">
                    Our Process
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-team" className="text-white">
                    Team
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers" className="text-white">
                    Careers
                    </Link>
                  </li>
                </ul>
              </div>
            
            <div>
              <h4 className="mb-3 text-white font-bold 2xl:text-[18px] xl:text-[14.5px] md:text-[13.75px] text-[17px]">Media</h4>
                <ul className="flex flex-col xl:gap-y-[22px] lg:gap-y-[19px] md:gap-y-[17px] gap-y-[15px] 2xl:text-[14.5px] xl:text-[12px] md:text-[10.67px] tracking-[-0.4px]">
                  <li>
                    <Link href="/blogs" className="text-white">
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link href="" className="text-white">
                    Press
                    </Link>
                  </li>
                </ul>
              </div>

            </div>
            <div className="w-full 2xl:max-w-[230px] xl:max-w-[172.5px] md:max-w-[153.33px] 2xl:text-[14px] xl:text-[10.5px] md:text-[9.33px]  text-white flex flex-col gap-y-[25px] xl:gap-y-[21px] lg:gap-y-[19px] md:gap-y-[16px] md:mt-0 mt-8">
              <span className="capitalize">Contact us</span>
              <div className="flex flex-col 2xl:gap-y-[26px] xl:gap-y-[22px] lg:gap-y-[19px] md:gap-y-[16px]">
                <Link
                  href="tel:+919177444992"
                  className="flex items-center gap-[8px] text-white"
                >
                  <span className="2xl:w-[20px] xl:w-[15px] flex">
                    <FaPhone className="2xl:text-lg xl:text-[13px]" />
                  </span>{" "}
                  +91 9177444992
                </Link>
                <Link
                  href="mailto:info.edge@Elogictech.com"
                  className="flex items-center gap-[8px] text-white"
                >
                  <span className="2xl:w-[20px] xl:w-[15px] flex">
                    <FaEnvelope className="2xl:text-lg xl:text-[13px]" />
                  </span>{" "}
                  info.edge@Elogictech.com
                </Link>
              </div>
              <div className="2xl:text-[14px] xl:text-[10.5px] md:text-[9.33px] text-white flex items-center 2xl:gap-x-[16px] xl:gap-x-[12px] md:gap-x-[10px]">
                <span>Follow Us On</span>
                <Image
                  className="2xl:w-[35px] xl:w-[26.25px] md:w-[23.33px]"
                  src={linkedinImg}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="copyright 2xl:pt-[122px] xl:pt-[96px] lg:pt-[85px] md:pt-[65px] pt-[40px] tracking-[-0.4px] inline-block w-full">
            <div className="border-t border-t-[rgba(255,255,255,0.4)] flex justify-between items-center 2xl:pt-[32px] xl:pt-[23px] pt-[21px] max-[575px]:flex-col max-[575px]:gap-5">
              <div className="flex items-center capitalize 2xl:text-[18px] xl:text-[13.5px] md:text-[12px]">
                <Link
                  href="/privacy-policy"
                  className="flex items-center text-white font-semibold"
                >
                  Privacy Policy{" "}
                  {/* <span className="flex w-[1px] bg-[#747D91] 2xl:h-[20px] xl:h-[15px] md:h-[13px] 2xl:mx-[32px] xl:mx-[24px] lg:mx-[21px] md:mx-[18px]"></span> */}
                </Link>
                <div className="sm:ms-5 ms-3">
                    <Link className="bg-[#3563E9] text-white px-[2] w-full 2xl:min-w-[275px] xl:min-w-[209px] md:min-w-[175.44px] sm:min-w-[195px] min-w-[175px] 2xl:h-[52px] xl:h-[39px] md:h-[35px] h-[40.29px] flex justify-center items-center py-[2px] 2xl:text-[20px] xl:text-[15px] md:text-[13.33px] text-[15.24px] md:font-bold font-semibold rounded-[16px] capitalize duration-500 hover:bg-white hover:text-black"
                        href="/contact-us">Schedule a demo <MdArrowOutward className="ms-2.5" /></Link>
                </div>
              </div>
              <div className="text-white font-medium 2xl:text-[14.5px] xl:text-[12px] md:text-[10.67px]">
                ©Elogictech Edge 2025
              </div>
            </div>
          </div>
        </motion.div>
      </footer>
    </>
  );
}

export default Footer;
