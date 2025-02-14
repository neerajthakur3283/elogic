'use client'
import React, { useState } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa6";

// images
import { FaChevronRight } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const NavBar: React.FC = () => {
  const [activeIndexIot, setActiveIndexIot] = useState<number>(0);
  const [activeIndexProduct, setActiveIndexProduct] = useState<number>(0);
  const [activeIndexProducts, setActiveIndexProducts] = useState<number>(0);
  const [activeIndexAboutUs, setActiveIndexAboutUs] = useState<number>(0);
  const [activeIndexMedia, setActiveIndexMedia] = useState<number>(0);

  const iotSolutiosItems = [
    {
      title: "Industrial Solutions Overview",
      desTitle: 'Industrial Solutions Overview',
      learnMoreLink: '/our-industrial-solutions',
      description: "Transform customer support with skills designed to efficiently solve recurring issues.",
      links: ["Applications", "Industries", "Who you are"],
    },
    {
      title: "Productivity Monitoring",
      desTitle: 'Productivity Monitoring',
      learnMoreLink: '/oee-and-production-monitoring',
      description: "Enhance production efficiency with real-time monitoring and analytics.",
      links: ["Process Optimization", "Manufacturing Insights", "Reports & Analytics"],
    },
    {
      title: "Condition Monitoring",
      desTitle: 'Condition Monitoring',
      learnMoreLink: '/machine-condition-monitoring',
      description: "Monitor equipment health to reduce downtime and improve maintenance planning.",
      links: ["Predictive Maintenance", "Sensor Data Analysis", "Failure Prevention"],
    },
    // {
    //   title: "Wireless Sensor Data Aggregation",
    //   desTitle: 'Wireless Sensor Data Aggregation',
    //   learnMoreLink: '/',
    //   description: "Aggregate and analyze sensor data to optimize operations and performance.",
    //   links: ["Applications", "Hardware Ecosystem", "Industries", "Our Process", "Who you are"],
    // },
    {
      title: "Energy Monitoring",
      desTitle: 'Energy Monitoring',
      learnMoreLink: '/energy-consumption-monitoring',
      description: "Track and optimize energy usage to reduce costs and improve sustainability.",
      links: ["Energy Efficiency", "Consumption Trends", "Sustainability Reports"],
    },
  ];
  const productSolutionsItems = [
    {
      title: "Overview",
      desTitle: 'Product Development Overview',
      learnMoreLink: '/',
      description: "Transform customer support with skills designed to efficiently solve recurring.",
      links: ["Why Us", "Design & Development ", "Our Process", "Production and supply"],
    },
    {
      title: "Capabilities",
      desTitle: 'Capabilities Overview',
      learnMoreLink: '/',
      description: "Enhance production efficiency with real-time monitoring and analytics.",
      links: ["Process Optimization", "Manufacturing Insights", "Reports & Analytics"],
    },
    {
      title: "Projects",
      desTitle: 'Projects',
      learnMoreLink: '/',
      description: "Monitor equipment health to reduce downtime and improve maintenance planning.",
      links: ["Predictive Maintenance", "Sensor Data Analysis", "Failure Prevention"],
    },
  ];

  const productsItems = [
    {
      title: "Edge Connect Series",
      desTitle: 'Edge Connect Series Overview',
      learnMoreLink: '/',
      description: "Transform customer support with skills designed to efficiently solve recurring.",
    },
    {
      title: "Field Connect Series",
      desTitle: 'Field Connect Series Overview',
      learnMoreLink: '/',
      description: "Transform customer support with skills designed to efficiently solve recurring.",
    }
  ];
  const aboutUsItems = [
    {
      title: "Overview",
      desTitle: 'About Us Overview',
      learnMoreLink: '/',
      description: "Transform customer support with skills designed to efficiently solve recurring.",
    },
    {
      title: "Team",
      desTitle: 'Our Team Overview',
      learnMoreLink: '/our-team',
      description: "Transform customer support with skills designed to efficiently solve recurring.",
    },
    {
      title: "Careers",
      desTitle: 'Careers Overview',
      learnMoreLink: '/',
      description: "Transform customer support with skills designed to efficiently solve recurring.",
    },
  ];

  const mediaItems = [
    {
      title: "Blogs",
      desTitle: 'Blogs Overview',
      learnMoreLink: '/blogs',
      description: "Transform customer support with skills designed to efficiently solve recurring.",
    },
    {
      title: "Press",
      desTitle: 'Press Overview',
      learnMoreLink: '/',
      description: "Transform customer support with skills designed to efficiently solve recurring.",
    },
  ];

  return (
    <div className="flex">
      <div className="relative group">
        {/* Menu Button */}
        <button className="nav-btn 2xl:text-[18px] xl:text-[13.5px] text-base text-white px-[20px] flex items-center gap-3 2xl:py-[38px] xl:py-[19.5px] py-[16.5px]">
          Our IOT Solutions <FaChevronDown className="w-[12px] transform transition-all duration-300" />
        </button>

        {/* Mega Menu Container */}
        <div className="group-hover:flex group-hover:opacity-100 dropdown-menu fixed hidden opacity-0 2xl:top-[99px] xl:top-[62px] left-0 right-0 bg-white border shadow-lg 2xl:px-[20px] xl:px-[15px] flex-col w-full px-[20px]">
          <div className="flex items-start min-[1350px]:max-w-[1279px] mx-auto w-full">
            {/* Left Panel - Navigation Items */}
            <div className="2xl:w-[345px] lg:w-[330px] border-r 2xl:pe-[30px]  pe-[20px] pt-[23px] 2xl:pb-[45px] lg:pb-[35px]">
              <span className="text-[13px] text-[#4B5563] ps-[15px] pb-3 flex">Our IOT Solutions</span>
              <ul>
                {iotSolutiosItems.map((item, index) => (
                  <li
                    key={index}
                    onMouseEnter={() => setActiveIndexIot(index)}
                    className={`group pe-[15px] ps-[35px] hover:ps-[15px] w-full cursor-pointer flex rounded-[6px] justify-between items-center smooth text-[#4B5563] hover:text-[#3563E9] ${activeIndexIot === index ? "bg-[rgba(55,99,233,0.1)] !ps-[15px] font-semibold !text-[#3563E9]" : "hover:text-[#3563E9]"
                      }`}
                  >
                    <span className="2xl:text-[14px] text-[13.5px] text-nowrap 2xl:py-2.5 xl:py-2 flex group-hover:text-[15px] smooth">{item.title}</span>
                    <span>
                      <FaChevronRight className="text-[11px]" />
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Panel - Separate Sections for Each Item */}
            <div className="2xl:w-[calc(100%_-_345px)] w-[calc(100%_-_330px)] 2xl:ps-[30px] ps-[20px] pt-[23px] 2xl:pb-[45px] lg:pb-[35px]">

              {iotSolutiosItems.map((item, index) => (
                <div
                  key={index}
                  className={`transition-opacity duration-300 w-full items-start gap-[15px] ${activeIndexIot === index ? "opacity-100 flex" : "opacity-0 hidden"
                    }`}
                >
                  <div className="2xl:w-[277px]">
                    <span className="text-[13px] text-[#4B5563] 2xl:pb-8 xl:pb-6 lg:pb-4 flex">Description</span>
                    <h3 className="text-[14px] font-medium text-black">{item.desTitle}</h3>
                    <p className="text-[12px] text-[#4B5563] mt-2.5 mb-6 max-w-[230px] opacity-80">{item.description}</p>
                    <div className="flex justify-start">
                      <Link href={item.learnMoreLink} className="flex items-center h-[40px] px-[18px] bg-[#3563E9] transition-all duration-500 hover:bg-black rounded-[8px] text-white font-semibold">
                        <span className="text-[14px]">Learn More</span> <MdArrowOutward className="ms-2.5" />
                      </Link>
                    </div>
                  </div>

                  <div className="text-[14px] text-black w-[calc(100%_-_277px)] font-medium">
                    <span className="text-[13px] text-[#4B5563] 2xl:pb-8 xl:pb-6 lg:pb-4 flex">More</span>
                    <div className="grid grid-cols-2 gap-2 gap-y-8">
                      {item.links.map((link, idx) => (
                        <Link key={idx} href="#" className="">
                          {link}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <div className="relative group">
        {/* Menu Button */}
        <button className="nav-btn 2xl:text-[18px] xl:text-[13.5px] text-base text-white px-[20px] flex items-center gap-3 2xl:py-[38px] xl:py-[19.5px] py-[16.5px]">
          Product Development <FaChevronDown className="w-[12px] transform transition-all duration-300" />
        </button>

        {/* Mega Menu Container */}
        <div className="group-hover:flex group-hover:opacity-100 dropdown-menu fixed hidden opacity-0 2xl:top-[99px] xl:top-[62px] left-0 right-0 bg-white border shadow-lg 2xl:px-[20px] xl:px-[15px] flex-col w-full px-[20px]">
          <div className="flex items-start min-[1350px]:max-w-[1279px] mx-auto w-full">
            {/* Left Panel - Navigation Items */}
            <div className="2xl:w-[345px] lg:w-[330px] border-r 2xl:pe-[30px]  pe-[20px] pt-[23px] 2xl:pb-[45px] lg:pb-[35px]">
              <span className="text-[13px] text-[#4B5563] ps-[15px] pb-3 flex">Product Development</span>
              <ul>
                {productSolutionsItems.map((item, index) => (
                  <li
                    key={index}
                    onMouseEnter={() => setActiveIndexProduct(index)}
                    className={`group pe-[15px] ps-[35px] hover:ps-[15px] w-full cursor-pointer flex rounded-[6px] justify-between items-center smooth text-[#4B5563] hover:text-[#3563E9] ${activeIndexProduct === index ? "bg-[rgba(55,99,233,0.1)] !ps-[15px] font-semibold !text-[#3563E9]" : "hover:text-[#3563E9]"
                      }`}
                  >
                    <span className="2xl:text-[14px] text-[13.5px] text-nowrap 2xl:py-2.5 xl:py-2 flex group-hover:text-[15px] smooth">{item.title}</span>
                    <span>
                      <FaChevronRight className="text-[11px]" />
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Panel - Separate Sections for Each Item */}
            <div className="2xl:w-[calc(100%_-_345px)] w-[calc(100%_-_330px)] 2xl:ps-[30px] ps-[20px] pt-[23px] 2xl:pb-[45px] lg:pb-[35px]">

              {productSolutionsItems.map((item, index) => (
                <div
                  key={index}
                  className={`transition-opacity duration-300 w-full items-start gap-[15px] ${activeIndexProduct === index ? "opacity-100 flex" : "opacity-0 hidden"
                    }`}
                >
                  <div className="2xl:w-[277px]">
                    <span className="text-[13px] text-[#4B5563] 2xl:pb-8 xl:pb-6 lg:pb-4 flex">Description</span>
                    <h3 className="text-[14px] font-medium text-black">{item.desTitle}</h3>
                    <p className="text-[12px] text-[#4B5563] mt-2.5 mb-6 max-w-[230px] opacity-80">{item.description}</p>
                    <div className="flex justify-start">
                      <Link href={item.learnMoreLink} className="flex items-center h-[40px] px-[18px] bg-[#3563E9] transition-all duration-500 hover:bg-black rounded-[8px] text-white font-semibold">
                        <span className="text-[14px]">Learn More</span> <MdArrowOutward className="ms-2.5" />
                      </Link>
                    </div>
                  </div>

                  <div className="text-[14px] text-black w-[calc(100%_-_277px)] font-medium">
                    <span className="text-[13px] text-[#4B5563] 2xl:pb-8 xl:pb-6 lg:pb-4 flex">More</span>
                    <div className="grid grid-cols-2 gap-2 gap-y-8">
                      {item.links.map((link, idx) => (
                        <Link key={idx} href="#" className="hover:text-[#3563E9]">
                          {link}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <div className="relative group">
        {/* Menu Button */}
        <button className="nav-btn 2xl:text-[18px] xl:text-[13.5px] text-base text-white px-[20px] flex items-center gap-3 2xl:py-[38px] xl:py-[19.5px] py-[16.5px]">
          Products <FaChevronDown className="w-[12px] transform transition-all duration-300" />
        </button>

        {/* Mega Menu Container */}
        <div className="group-hover:flex group-hover:opacity-100 dropdown-menu fixed hidden opacity-0 2xl:top-[99px] xl:top-[62px] left-0 right-0 bg-white border shadow-lg 2xl:px-[20px] xl:px-[15px] flex-col w-full px-[20px]">
          <div className="flex items-start min-[1350px]:max-w-[1279px] mx-auto w-full">
            {/* Left Panel - Navigation Items */}
            <div className="2xl:w-[345px] lg:w-[330px] border-r 2xl:pe-[30px]  pe-[20px] pt-[23px] 2xl:pb-[45px] lg:pb-[35px]">
              <span className="text-[13px] text-[#4B5563] ps-[15px] pb-3 flex">Products</span>
              <ul>
                {productsItems.map((item, index) => (
                  <li
                    key={index}
                    onMouseEnter={() => setActiveIndexProducts(index)}
                    className={`group pe-[15px] ps-[35px] hover:ps-[15px] w-full cursor-pointer flex rounded-[6px] justify-between items-center smooth text-[#4B5563] hover:text-[#3563E9] ${activeIndexProducts === index ? "bg-[rgba(55,99,233,0.1)] !ps-[15px] font-semibold !text-[#3563E9]" : "hover:text-[#3563E9]"
                      }`}
                  >
                    <span className="2xl:text-[14px] text-[13.5px] text-nowrap 2xl:py-2.5 xl:py-2 flex group-hover:text-[15px] smooth">{item.title}</span>
                    <span>
                      <FaChevronRight className="text-[11px]" />
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Panel - Separate Sections for Each Item */}
            <div className="2xl:w-[calc(100%_-_345px)] w-[calc(100%_-_330px)] 2xl:ps-[30px] ps-[20px] pt-[23px] 2xl:pb-[45px] lg:pb-[35px]">

              {productsItems.map((item, index) => (
                <div
                  key={index}
                  className={`transition-opacity duration-300 w-full items-start gap-[15px] ${activeIndexProducts === index ? "opacity-100 flex" : "opacity-0 hidden"
                    }`}
                >
                  <div className="2xl:w-[277px]">
                    <span className="text-[13px] text-[#4B5563] 2xl:pb-8 xl:pb-6 lg:pb-4 flex">Description</span>
                    <h3 className="text-[14px] font-medium text-black">{item.desTitle}</h3>
                    <p className="text-[12px] text-[#4B5563] mt-2.5 mb-6 max-w-[230px] opacity-80">{item.description}</p>
                    <div className="flex justify-start">
                      <Link href={item.learnMoreLink} className="flex items-center h-[40px] px-[18px] bg-[#3563E9] transition-all duration-500 hover:bg-black rounded-[8px] text-white font-semibold">
                        <span className="text-[14px]">Learn More</span> <MdArrowOutward className="ms-2.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>


      <div className="relative group">
        {/* Menu Button */}
        <button className="nav-btn 2xl:text-[18px] xl:text-[13.5px] text-base text-white px-[20px] flex items-center gap-3 2xl:py-[38px] xl:py-[19.5px] py-[16.5px]">
          About Us <FaChevronDown className="w-[12px] transform transition-all duration-300" />
        </button>

        {/* Mega Menu Container */}
        <div className="group-hover:flex group-hover:opacity-100 dropdown-menu fixed hidden opacity-0 2xl:top-[99px] xl:top-[62px] left-0 right-0 bg-white border shadow-lg 2xl:px-[20px] xl:px-[15px] flex-col w-full px-[20px]">
          <div className="flex items-start min-[1350px]:max-w-[1279px] mx-auto w-full">
            {/* Left Panel - Navigation Items */}
            <div className="2xl:w-[345px] lg:w-[330px] border-r 2xl:pe-[30px]  pe-[20px] pt-[23px] 2xl:pb-[45px] lg:pb-[35px]">
              <span className="text-[13px] text-[#4B5563] ps-[15px] pb-3 flex">About Us</span>
              <ul>
                {aboutUsItems.map((item, index) => (
                  <li
                    key={index}
                    onMouseEnter={() => setActiveIndexAboutUs(index)}
                    className={`group pe-[15px] ps-[35px] hover:ps-[15px] w-full cursor-pointer flex rounded-[6px] justify-between items-center smooth text-[#4B5563] hover:text-[#3563E9] ${activeIndexAboutUs === index ? "bg-[rgba(55,99,233,0.1)] !ps-[15px] font-semibold !text-[#3563E9]" : "hover:text-[#3563E9]"
                      }`}
                  >
                    <span className="2xl:text-[14px] text-[13.5px] text-nowrap 2xl:py-2.5 xl:py-2 flex group-hover:text-[15px] smooth">{item.title}</span>
                    <span>
                      <FaChevronRight className="text-[11px]" />
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Panel - Separate Sections for Each Item */}
            <div className="2xl:w-[calc(100%_-_345px)] w-[calc(100%_-_330px)] 2xl:ps-[30px] ps-[20px] pt-[23px] 2xl:pb-[45px] lg:pb-[35px]">

              {aboutUsItems.map((item, index) => (
                <div
                  key={index}
                  className={`transition-opacity duration-300 w-full items-start gap-[15px] ${activeIndexAboutUs === index ? "opacity-100 flex" : "opacity-0 hidden"
                    }`}
                >
                  <div className="2xl:w-[277px]">
                    <span className="text-[13px] text-[#4B5563] 2xl:pb-8 xl:pb-6 lg:pb-4 flex">Description</span>
                    <h3 className="text-[14px] font-medium text-black">{item.desTitle}</h3>
                    <p className="text-[12px] text-[#4B5563] mt-2.5 mb-6 max-w-[230px] opacity-80">{item.description}</p>
                    <div className="flex justify-start">
                      <Link href={item.learnMoreLink} className="flex items-center h-[40px] px-[18px] bg-[#3563E9] transition-all duration-500 hover:bg-black rounded-[8px] text-white font-semibold">
                        <span className="text-[14px]">Learn More</span> <MdArrowOutward className="ms-2.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <div className="relative group">
        {/* Menu Button */}
        <button className="nav-btn 2xl:text-[18px] xl:text-[13.5px] text-base text-white px-[20px] flex items-center gap-3 2xl:py-[38px] xl:py-[19.5px] py-[16.5px]">
          Media <FaChevronDown className="w-[12px] transform transition-all duration-300" />
        </button>

        {/* Mega Menu Container */}
        <div className="group-hover:flex group-hover:opacity-100 dropdown-menu fixed hidden opacity-0 2xl:top-[99px] xl:top-[62px] left-0 right-0 bg-white border shadow-lg 2xl:px-[20px] xl:px-[15px] flex-col w-full px-[20px]">
          <div className="flex items-start min-[1350px]:max-w-[1279px] mx-auto w-full">
            {/* Left Panel - Navigation Items */}
            <div className="2xl:w-[345px] lg:w-[330px] border-r 2xl:pe-[30px]  pe-[20px] pt-[23px] 2xl:pb-[45px] lg:pb-[35px]">
              <span className="text-[13px] text-[#4B5563] ps-[15px] pb-3 flex">Media</span>
              <ul>
                {mediaItems.map((item, index) => (
                  <li
                    key={index}
                    onMouseEnter={() => setActiveIndexMedia(index)}
                    className={`group pe-[15px] ps-[35px] hover:ps-[15px] w-full cursor-pointer flex rounded-[6px] justify-between items-center smooth text-[#4B5563] hover:text-[#3563E9] ${activeIndexMedia === index ? "bg-[rgba(55,99,233,0.1)] !ps-[15px] font-semibold !text-[#3563E9]" : "hover:text-[#3563E9]"
                      }`}
                  >
                    <span className="2xl:text-[14px] text-[13.5px] text-nowrap 2xl:py-2.5 xl:py-2 flex group-hover:text-[15px] smooth">{item.title}</span>
                    <span>
                      <FaChevronRight className="text-[11px]" />
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Panel - Separate Sections for Each Item */}
            <div className="2xl:w-[calc(100%_-_345px)] w-[calc(100%_-_330px)] 2xl:ps-[30px] ps-[20px] pt-[23px] 2xl:pb-[45px] lg:pb-[35px]">

              {mediaItems.map((item, index) => (
                <div
                  key={index}
                  className={`transition-opacity duration-300 w-full items-start gap-[15px] ${activeIndexMedia === index ? "opacity-100 flex" : "opacity-0 hidden"
                    }`}
                >
                  <div className="2xl:w-[277px]">
                    <span className="text-[13px] text-[#4B5563] 2xl:pb-8 xl:pb-6 lg:pb-4 flex">Description</span>
                    <h3 className="text-[14px] font-medium text-black">{item.desTitle}</h3>
                    <p className="text-[12px] text-[#4B5563] mt-2.5 mb-6 max-w-[230px] opacity-80">{item.description}</p>
                    <div className="flex justify-start">
                      <Link href={item.learnMoreLink} className="flex items-center h-[40px] px-[18px] bg-[#3563E9] transition-all duration-500 hover:bg-black rounded-[8px] text-white font-semibold">
                        <span className="text-[14px]">Learn More</span> <MdArrowOutward className="ms-2.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default NavBar;
