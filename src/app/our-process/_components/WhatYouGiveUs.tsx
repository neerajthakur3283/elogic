// components/WhatYouGiveUs.tsx
import React from "react";

const WhatYouGiveUs = () => {
  return (
    <section>
        <div className="2xl:pb-[100px] xl:pb-[75px] lg:pb-[66px] md:pb-[45px] pb-[50px]">
            <div className="2xl:px-[60px] xl:px-[45px] md:px-[40px] px-[20px] 2xl:py-[40px] xl:py-[30px] md:py-[26px] py-[20px] mx-auto from-[#E7F1FF] to-[#ffffff] bg-gradient-to-r 2xl:rounded-[20px] xl:rounded-[16px] md:rounded-[14px] rounded-[12px] w-full min-[1420px]:max-w-[1366px] min-[1085px]:max-w-[1024px] min-[992px]:max-w-[910px] flex justify-between max-[991px]:max-w-[calc(100%_-_40px)] max-[991px]:flex-wrap gap-6 max-[991px]:gap-0">
                <div className="2xl:w-[calc(100%_-_620px)] xl:w-[calc(100%_-_464px)] lg:w-[calc(100%_-_412px)] max-[991px]:w-full">
                    <h3 className="text-[#3284FF] font-semibold 2xl:text-[18px] xl:text-[13.5px] md:text-[12px] text-[13.5px]">Design and Development</h3>
                    <h2 className="font-semibold 2xl:text-[32px] xl:text-[28px] md:text-[25px] text-[22px] text-[#222325] text-nowrap">What you give us</h2>
                </div>

                <div className="2xl:w-[620px] xl:w-[464px] md:w-[412px] max-[991px]:!w-full max-[991px]:pt-[40px] max-[767px]:pt-[30px]">
                    <p>
                    <span className="font-semibold 2xl:text-[18px] xl:text-[13.5px] md:text-[12px] text-[13.5px] text-[#4B5563] block">Concept:</span>
                    <span className="text-[#4B5563] 2xl:text-[13px] xl:text-[9.75px] md:text-[8.67px] text-[9.75px]">Idea, sketch, model, block diagram, concept notes, concept renders, etc.</span>
                    </p>
                    <p>
                    <span className="font-semibold 2xl:text-[18px] xl:text-[13.5px] md:text-[12px] text-[13.5px] text-[#4B5563] block">Specification Matrix:</span>
                    <span className="text-[#4B5563] 2xl:text-[13px] xl:text-[9.75px] md:text-[8.67px] text-[9.75px]">Electrical specifications, mechanical specifications, computational resource & memory specifications, peripherals specifications, wireless specifications, environmental specifications.</span>
                    </p>
                    <p>
                    <span className="font-semibold 2xl:text-[18px] xl:text-[13.5px] md:text-[12px] text-[13.5px] text-[#4B5563] block">Functional Requirement:</span> 
                    <span className="text-[#4B5563] 2xl:text-[13px] xl:text-[9.75px] md:text-[8.67px] text-[9.75px]">Feature list, cross-compatibility requirements, standards compliance requirements, form factor requirements.</span>
                    </p>
                    <p>
                    <span className="font-semibold 2xl:text-[18px] xl:text-[13.5px] md:text-[12px] text-[13.5px] text-[#4B5563] block">Reference Products:</span> 
                    <span className="text-[#4B5563] 2xl:text-[13px] xl:text-[9.75px] md:text-[8.67px] text-[9.75px]">Alternative products, design inspirations, user experience references.</span>
                    </p>
                    <p>
                    <span className="font-semibold 2xl:text-[18px] xl:text-[13.5px] md:text-[12px] text-[13.5px] text-[#4B5563] block">Commercial Requirements:</span> 
                    <span className="text-[#4B5563] 2xl:text-[13px] xl:text-[9.75px] md:text-[8.67px] text-[9.75px]">Forecasted production volumes, production cost target, supply chain sourcing requirements, go-to-market timeline, etc.</span>
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default WhatYouGiveUs;
