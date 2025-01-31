import React from 'react'
import BlogCard from '../../_components/BlogCard'

// images
import bogOne from "@/src/assets/images/blog-1.jpg";
import blogTwo from "@/src/assets/images/blog-2.jpg";
import blogThree from "@/src/assets/images/blog-3.jpg";
import blogFour from "@/src/assets/images/blog-4.jpg";

function RelatedBlogs() {
    const blogCardData = [
        {
          cardTitle:
            "The Impact of Technology on the Workplace: How Technology is Changing",
          cardLink: "blogs/mastering-chatgpt",
          linkText: "Learn More",
          cardImg: bogOne,
          blogTag: "Technology",
          cardDate: "August 20, 2022",
        },
        {
          cardTitle:
            "The Impact of Technology on the Workplace: How Technology is Changing",
          cardLink: "blogs/mastering-chatgpt",
          linkText: "Learn More",
          cardImg: blogTwo,
          blogTag: "Technology",
          cardDate: "August 20, 2022",
        },
        {
          cardTitle:
            "The Impact of Technology on the Workplace: How Technology is Changing",
          cardLink: "blogs/mastering-chatgpt",
          linkText: "Learn More",
          cardImg: blogThree,
          blogTag: "Technology",
          cardDate: "August 20, 2022",
        },
        {
          cardTitle:
            "The Impact of Technology on the Workplace: How Technology is Changing",
          cardLink: "blogs/mastering-chatgpt",
          linkText: "Learn More",
          cardImg: blogFour,
          blogTag: "Technology",
          cardDate: "August 20, 2022",
        },
      ];
  return (
    <>
        <section>
            <div className='bg-[#EEF1F5] 2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px] 2xl:pt-[100px] xl:pt-[75px] lg:pt-[66px] md:pt-[45px] pt-[50px] md:pb-0 pb-12'>
                <h2 className='2xl:text-[60px] xl:text-[45px] text-[40px] text-[rgba(24, 26, 42, 1)] font-bold '>
                    Related Blogs
                </h2>
                <div className='2xl:pt-[100px] xl:pt-[75px] lg:pt-[66px] md:pt-[45px] pt-[50px] grid grid-cols-1 md:grid-cols-2 max-[991px]:!grid-cols-1 2xl:gap-[36.95px] xl:gap-[27.53px] md:gap-[24.64px] gap-[15.81px]'>
                    <BlogCard blogCardData={blogCardData} />
                </div>
            </div>
        </section>
    </>
  )
}

export default RelatedBlogs