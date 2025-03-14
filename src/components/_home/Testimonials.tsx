"use client";
import React from "react";
import TestimonialCard from "./TestimonialCard";
import { motion } from "framer-motion";

// images
import userOne from "@/src/assets/images/user-1.jpg";
import userTwo from "@/src/assets/images/user-2.jpg";
import userThree from "@/src/assets/images/user-3.jpg";

function Testimonials() {
  const testimonialData = [
    {
      feedbackPara:
        "I have been using [Your Email Marketing Software Name] for over a year now, and I must say it has transformed the way we approach email marketing. The personalization features have allowed us to create tailored campaigns that resonate.",
      profileImg: userOne,
      profileName: "Sarah Thompson",
      profileDes: "Marketing Manager",
    },
    {
      feedbackPara:
        "We tried various email marketing platforms before coming across [Your Email Marketing Software Name], and none of them could match the level of personalization and ease of use that this software offers.",
      profileImg: userTwo,
      profileName: "John Roberts",
      profileDes: "E-commerce Owner",
    },
    {
      feedbackPara:
        "As a non-profit organization, we face resource constraints, but our need to communicate effectively with donors and volunteers is essential. [Your Email Marketing Software Name] has significantly enhanced our ability to engage and connect.",
      profileImg: userThree,
      profileName: "Emily Parker",
      profileDes: "Non-profit Coordinator",
    },
    {
      feedbackPara:
        "As a non-profit organization, we face resource constraints, but our need to communicate effectively with donors and volunteers is essential. [Your Email Marketing Software Name] has significantly enhanced our ability to engage and connect.",
      profileImg: userOne,
      profileName: "Sarah Thompson",
      profileDes: "Marketing Manager",
    },
  ];
  return (
    <>
      <section>
        <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5}}
        className="bg-[#EEF1F5] 2xl:pt-[140px] xl:pt-[105px] lg:pt-[90px] md:pt-[70px] pt-[60px] overflow-hidden 2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px]">
          <div className="relative">
            <div className="">
              <h2 className="text-[#1D3157] 2xl:text-[47px] xl:text-[35px] lg:text-[31px] text-[24px] font-bold">
                What Our Clients Say About Us
              </h2>
            </div>
            <div className="2xl:pt-[60px] xl:pt-[45px] pt-[40px] max-[767px]:relative max-[767px]:mt-[40px]">
              <TestimonialCard testimonialData={testimonialData} />
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default Testimonials;
