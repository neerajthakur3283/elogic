'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";
import elogicTechLogo from "../assets/images/elogictech-logo.svg";
import Link from "next/link";
import NavBar from "./Navigation";

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header 
      className={`w-full backdrop-blur-[20px] 2xl:px-[72px] xl:px-[54px] px-[20px] 2xl:py-[26px] xl:py-[19.5px] py-[16.5px] flex justify-between items-center left-0 top-0 right-0 z-[999] transition-all duration-500 ${isSticky ? "fixed shadow-md bg-white [&>a>img]:brightness-0 [&_.togglebtn]:text-black [&_.head-action]:hover:bg-black [&_.head-action]:text-white [&_nav_ul>li_*]:text-black" : "absolute bg-[rgba(0,0,0,0.14)]"}`}>
        <Link href="/">
          <Image
            className="2xl:w-[200px] w-[150px]"
            src={elogicTechLogo}
            alt=""
          />
        </Link>
        <div>
          <NavBar />
        </div>
        <div className="max-[1279px]:hidden">
          <Link
            className="transition-all head-action bg-[#3563E9] 2xl:px-[39px] xl:px-[29.5px] px-[22px] 2xl:py-[15.5px] xl:py-[11.5px] py-[9px] text-white 2xl:text-[18px] xl:text-[13.5px] font-bold rounded-[16px] capitalize translate-x-full duration-500 hover:bg-white hover:text-black"
            href="/"
          >
            contact us
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
