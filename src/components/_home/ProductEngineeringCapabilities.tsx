"use client";
import React from "react";
import ProductSlider from "./ProductSlider";

// images
import productOne from "@/src/assets/images/product-one.jpg";
import productTwo from "@/src/assets/images/product-two.jpg";
import productThree from "@/src/assets/images/product-three.jpg";
import productFour from "@/src/assets/images/product-four.jpg";
import productFive from "@/src/assets/images/product-five.jpg";
import productSix from "@/src/assets/images/product-six.jpg";
import productSeven from "@/src/assets/images/product-seven.jpg";
import arrowImage from "@/src/assets/images/long-arrrow.svg";

function ProductEngineeringCapabilities() {
  const productCardData = [
    {
      productImg: productOne,
      title: "Embedded Hardware Design",
      smallTitle:
        "Hardware architecture and PCB design from system specification to manufacturing release.",
      cardLink: "/",
      arrowImg: arrowImage,
    },
    {
      productImg: productTwo,
      title: "Embedded Software Design",
      smallTitle:
        "Firmware and software stack development from bootloader through application layer.",
      cardLink: "/",
      arrowImg: arrowImage,
    },
    {
      productImg: productSix,
      title: "Mechanical & Industrial Design",
      smallTitle:
        "Mechanical integration and manufacturing-optimized enclosure development for electronic products.",
      cardLink: "/",
      arrowImg: arrowImage,
    },
    {
      productImg: productFour,
      title: "Human Machine Interface Development pending",
      smallTitle:
        "Input/output interface design and implementation for device control and monitoring",
      cardLink: "/",
      arrowImg: arrowImage,
    },
    {
      productImg: productThree,
      title: "Wireless Systems Development",
      smallTitle:
        "Integration of wireless communication subsystems into embedded product architectures.",
      cardLink: "/",
      arrowImg: arrowImage,
    },
    {
      productImg: productSeven,
      title: "Manufacturing Support",
      smallTitle:
        "Production process engineering for scalable electronics manufacturing and testing.",
      cardLink: "/",
      arrowImg: arrowImage,
    },
    {
      productImg: productSeven,
      title: "IoT application development",
      smallTitle:
        "Application front-end and back-end development for cloud-side device data processing management .",
      cardLink: "/",
      arrowImg: arrowImage,
    },
    {
      productImg: productFive,
      title: "Technology consulting",
      smallTitle:
        "Technical assessment and compliance support and economic feasibility planning for regulatory and market requirements.",
      cardLink: "/",
      arrowImg: arrowImage,
    },
  ];
  return (
    <>
      <section>
        <div className="bg-[#EEF1F5] 2xl:pt-[80px] xl:pt-[70px] lg:pt-[60px] md:pt-[0px] pt-[15px] overflow-hidden">
          <div className="relative">
            <div className="2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px]">
              <h2 className="text-[#1D3157] 2xl:text-[47px] xl:text-[35px] lg:text-[31px] text-[24px] font-bold">
                Our Product Engineering Capabilities
              </h2>
            </div>
            <div className="2xl:pt-[45px] xl:pt-[30px] pt-[25px] max-[767px]:pt-4 max-[767px]:relative max-[767px]:mt-[0px]">
              <ProductSlider productCardData={productCardData} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductEngineeringCapabilities;
