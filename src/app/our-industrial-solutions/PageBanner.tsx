import React from "react";

function PageBanner() {
  return (
    <>
      <section>
        <div className="bg-black 2xl:py-[260px] xl:py-[195px] md:py-[173px] py-[185px] 2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px]">
          <div className="flex justify-center text-white flex-col text-center 2xl:gap-y-[40px] xl:gap-y-[30px] md:gap-y-[26.67px] gap-y-[16px]">
            <h1 className="2xl:text-[68.5px] xl:text-[49.35px] md:text-[48px] text-[32px] font-semibold">
              Our Industrial <br />
              Solutions Overview
            </h1>
            <div className="mx-auto 2xl:text-[20.72px] xl:text-[15.54px] text-[14px] 2xl:max-w-[588px] xl:max-w-[441px] md:max-w-[392px] max-w-[388px]">
              High-performance digital and power infrastructure for
              entertainment venues and logistics sites.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PageBanner;
