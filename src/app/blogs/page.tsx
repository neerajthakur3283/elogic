import React from "react";
import PageBanner from "./_components/PageBanner";
import BlogCard from "./_components/BlogCard";

// images
import bogOne from "@/src/assets/images/blog-1.jpg";
import blogTwo from "@/src/assets/images/blog-2.jpg";
import blogThree from "@/src/assets/images/blog-3.jpg";
import blogFour from "@/src/assets/images/blog-4.jpg";
import PaginationWithEllipsis from "@/src/common/Pagination";
import TalkToExpert from "@/src/common/TalkToExpert";

function page() {
  const blogCardData = [
    {
      cardTitle:
        "Accelerate Your IoT Product Development Journey",
      cardLink: "blogs/mastering-chatgpt",
      linkText: "Learn More",
      cardImg: bogOne,
      blogTag: "Technology",
      cardDate: "August 20, 2022",
    },
    {
      cardTitle:
        "The Hidden Cost of Hardware Prototyping",
      cardLink: "blogs/mastering-chatgpt",
      linkText: "Learn More",
      cardImg: blogTwo,
      blogTag: "Technology",
      cardDate: "August 20, 2022",
    },
    {
      cardTitle:
        "Outsource IoT Development - Save Your Engineering Hours and Get 10X Results",
      cardLink: "blogs/mastering-chatgpt",
      linkText: "Learn More",
      cardImg: blogThree,
      blogTag: "Technology",
      cardDate: "August 20, 2022",
    },
    {
      cardTitle:
        "What Is Industry 4.0 and the Industry Disruptions",
      cardLink: "blogs/mastering-chatgpt",
      linkText: "Learn More",
      cardImg: blogFour,
      blogTag: "Technology",
      cardDate: "August 20, 2022",
    },
    {
      cardTitle:
        "How IIoT can optimize a factory floor",
      cardLink: "blogs/mastering-chatgpt",
      linkText: "Learn More",
      cardImg: bogOne,
      blogTag: "Technology",
      cardDate: "August 20, 2022",
    },
    {
      cardTitle:
        "What Is Edge Computing? - Everything You Need to Know",
      cardLink: "blogs/mastering-chatgpt",
      linkText: "Learn More",
      cardImg: blogTwo,
      blogTag: "Technology",
      cardDate: "August 20, 2022",
    },
    {
      cardTitle:
        "How Smart Buildings are Paving the Way for Sustainable Infrastructure",
      cardLink: "blogs/mastering-chatgpt",
      linkText: "Learn More",
      cardImg: blogThree,
      blogTag: "Technology",
      cardDate: "August 20, 2022",
    },
    {
      cardTitle:
        "Connected Device - The Rule of Thumb in Embedded Systems Development",
      cardLink: "blogs/mastering-chatgpt",
      linkText: "Learn More",
      cardImg: blogFour,
      blogTag: "Technology",
      cardDate: "August 20, 2022",
    },
  ];
  return (
    <>
      <PageBanner />
      <section>
        <div className="bg-[#EEF1F5] 2xl:pt-[100px] xl:pt-[75px] lg:pt-[66px] md:pt-[45px] pt-[50px] 2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px] md:pb-0 pb-12">
          <div className="">
            <h1 className="text-[#181A2A] 2xl:text-[60px] xl:text-[45px] text-[40px] md:font-bold font-semibold 2xl:w-[550px] xl:w-[450px] md:w-[355px] mb-3 tracking-[-1.5px] max-[767px]:leading-[1.34]">
              Latest Blogs
            </h1>
          </div>
          <div className="2xl:pt-[100px] xl:pt-[75px] lg:pt-[66px] md:pt-[45px] pt-[50px] grid grid-cols-1 md:grid-cols-2 max-[991px]:!grid-cols-1 2xl:gap-[36.95px] xl:gap-[27.53px] md:gap-[24.64px] gap-[15.81px]">
            <BlogCard blogCardData={blogCardData} />
          </div>
          <div className="border-t border-t-[#E5E5E5] 2xl:pt-[40px] xl:pt-[30px] md:pt-[26px] pt-[20px] 2xl:mt-[65px] xl:mt-[50px] md:mt-[40px] mt-[30px]">
            <PaginationWithEllipsis />
          </div>
        </div>
      </section>
      <TalkToExpert />
    </>
  );
}

export default page;
