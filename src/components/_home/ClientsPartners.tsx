"use client";
import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// images
import logoOne from "@/src/assets/images/partner-1.png";
import logoTwo from "@/src/assets/images/partner-2.png";
import logoThree from "@/src/assets/images/partner-3.png";
import logoFour from "@/src/assets/images/partner-4.png";
import logoFive from "@/src/assets/images/partner-5.png";
import logoSix from "@/src/assets/images/partner-6.png";
import logoSeven from "@/src/assets/images/partner-7.png";
import logoEight from "@/src/assets/images/partner-8.png";
import logoNine from "@/src/assets/images/partner-9.png";
import logoTen from "@/src/assets/images/partner-10.png";

const ClientsPartners: React.FC = () => {
  const clientData = [
    { partnerLogo: logoOne },
    { partnerLogo: logoTwo },
    { partnerLogo: logoThree },
    { partnerLogo: logoFour },
    { partnerLogo: logoFive },
    { partnerLogo: logoSix },
    { partnerLogo: logoSeven },
    { partnerLogo: logoEight },
    { partnerLogo: logoNine },
    { partnerLogo: logoTen },
  ];

  const clientLageLogo =[
    {partnerTopLogo:logoOne,partnerBottomLogo:logoSix},
    {partnerTopLogo:logoTwo,partnerBottomLogo:logoSeven},
    {partnerTopLogo:logoThree,partnerBottomLogo:logoEight},
    {partnerTopLogo:logoFour,partnerBottomLogo:logoNine},
    {partnerTopLogo:logoFive,partnerBottomLogo:logoTen},
    {partnerTopLogo:logoOne,partnerBottomLogo:logoSix},
    {partnerTopLogo:logoTwo,partnerBottomLogo:logoSeven},
    {partnerTopLogo:logoThree,partnerBottomLogo:logoEight},
    {partnerTopLogo:logoFour,partnerBottomLogo:logoNine},
    {partnerTopLogo:logoFive,partnerBottomLogo:logoTen},
  ]
  return (
    <>
      <section>
        <div className="2xl:py-[75px] xl:py-[66px] py-[40px] px-[25px]">
          <div className="xl:mb-[45px] mb-[40px]">
            <h5 className="text-black font-bold xl:text-[18px] lg:text-base text-[24px] text-center">
              Our Clients &amp; partners
            </h5>
          </div>
          <div className="md:grid hidden grid-cols-1 2xl:gap-[48px] xl:gap-[42px]">
            {/* {clientData.map((data, index) => (
              <div key={index}>
                <Image src={data.partnerLogo} alt="" width={240} height={80} />
              </div>
            ))} */}
            <Carousel
              opts={{ align: "start", loop: true }}
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
            >
              <CarouselContent>
                {clientLageLogo.map((data, index) => (
                  <CarouselItem
                    key={index}
                    className="lg:basis-1/5 basis-1/4 max-[420px]:basis-full"
                  >
                    <div className="flex justify-center flex-col 2xl:gap-y-[70px] xl:gap-y-[48px] gap-y-[42px]">
                      <Image
                        src={data.partnerTopLogo}
                        alt=""
                        width={240}
                        height={80}
                      />
                      <Image
                        src={data.partnerBottomLogo}
                        alt=""
                        width={240}
                        height={80}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="md:hidden">
            <Carousel
              opts={{ align: "start", loop: true }}
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
            >
              <CarouselContent>
                {clientData.map((data, index) => (
                  <CarouselItem
                    key={index}
                    className="min-[576px]:basis-1/3 basis-1/2"
                  >
                    <div className="flex justify-center">
                      <Image
                        src={data.partnerLogo}
                        alt=""
                        width={240}
                        height={80}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientsPartners;
