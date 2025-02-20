'use client'
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link'
import React, { useState } from 'react'

function ContactUsWidgets() {
    const [selectedTab, setSelectedTab] = useState("services");
    // const [file, setFile] = useState<File | null>(null);
    //   const [uploadStatus, setUploadStatus] = useState<string>("");

    //   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const selectedFile = event.target.files?.[0];
    //     if (selectedFile) {
    //       if (selectedFile.size > 4 * 1024 * 1024) {
    //         setUploadStatus("File size exceeds 4MB limit.");
    //         return;
    //       }
    //       setFile(selectedFile);
    //       setUploadStatus("");
    //     }
    //   };

    //   const handleUpload = async () => {
    //     if (!file) {
    //       setUploadStatus("Please select a file.");
    //       return;
    //     }

    //     const formData = new FormData();
    //     formData.append("file", file);

    //     try {
    //       const response = await fetch("/api/upload", {
    //         method: "POST",
    //         body: formData,
    //       });

    //       if (response.ok) {
    //         setUploadStatus("Upload successful!");
    //       } else {
    //         setUploadStatus("Upload failed.");
    //       }
    //     } catch (error) {
    //       setUploadStatus("Error uploading file.");
    //     }
    //   };
    return (
        <>
            <section>
                <div className='bg-[#EEF1F5] 2xl:py-[100px] xl:py-[75px] lg:py-[66px] md:py-[45px] py-[50px] 2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px] md:pb-0 pb-12'>

                    <div className='flex justify-between 2xl:gap-[100px] xl:gap-[75px] lg:gap-[66px] lg:flex-nowrap flex-wrap'>

                        <div className='lg:w-[900px] w-full 2xl:rounded-[26px] xl:rounded-[19.5px] md:rounded-[17.33px] rounded-[16.21px] bg-white 2xl:shadow-[0_0_50px_rgba(0,0,0,0.1)] xl:shadow-[0_0_18px_rgba(146,146,146,0.25)] md:shadow-[0_0_16px_rgba(146,146,146,0.25)] shadow-[0_0_14px_rgba(0,0,0,0.25)] 2xl:p-[50px] xl:p-[40px] lg:p-[35px] md:p-[30px] p-[25px]'>
                            <h2 className='text-[#262626] font-bold 2xl:text-[36px] xl:text-[27px] md:text-[24px] text-[22.45px] text-center'>Are you looking for?</h2>
                            <div className='2xl:pt-[60px] xl:pt-[50px] md:pt-[40px] pt-[30px] overflow-hidden'>
                                <form method='get' action="#">

                                    <div className='flex items-center justify-between gap-3 md:flex-nowrap flex-wrap'>
                                        {/* <label className='relative flex items-center gap-2 [&_input:checked_+_div]:bg-[#007AFF] [&_input:checked_+_div]:shadow-[0_1px_4px_0_rgba(0,122,255,0.25)]' htmlFor='Service'>
                                        <input type='radio' name='selectService' className='absolute -left-[9999999px] top-0' id='Service' />
                                        <div className='relative border border-[rgba(0,0,0,0.15)] w-[18px] h-[18px] rounded-full shadow-[inset_0_1px_4px_0_rgba(0,0,0,0.12)] flex justify-center items-center'>
                                        <span className='absolute left-[4px] top-[4px] w-[8px] h-[8px] rounded-full bg-white flex m-auto'></span>
                                        </div>
                                        <span className='text-black opacity-[0.85] font-medium 2xl:text-[20px] xl:text-[15px] text-[13.33px]'>Services</span>
                                    </label>
                                    <label className='relative flex items-center gap-2 [&_input:checked_+_div]:bg-[#007AFF] [&_input:checked_+_div]:shadow-[0_1px_4px_0_rgba(0,122,255,0.25)]' htmlFor='Partnership'>
                                        <input type='radio' name='selectService' className='absolute -left-[9999999px] top-0' id='Partnership' />
                                        <div className='relative border border-[rgba(0,0,0,0.15)] w-[18px] h-[18px] rounded-full shadow-[inset_0_1px_4px_0_rgba(0,0,0,0.12)] flex justify-center items-center'>
                                        <span className='absolute left-[4px] top-[4px] w-[8px] h-[8px] rounded-full bg-white flex m-auto'></span>
                                        </div>
                                        <span className='text-black opacity-[0.85] font-medium 2xl:text-[20px] xl:text-[15px] text-[13.33px]'>Partnership</span>
                                    </label>
                                    <label className='relative flex items-center gap-2 [&_input:checked_+_div]:bg-[#007AFF] [&_input:checked_+_div]:shadow-[0_1px_4px_0_rgba(0,122,255,0.25)]' htmlFor='Career'>
                                        <input type='radio' name='selectService' className='absolute -left-[9999999px] top-0' id='Career' />
                                        <div className='relative border border-[rgba(0,0,0,0.15)] w-[18px] h-[18px] rounded-full shadow-[inset_0_1px_4px_0_rgba(0,0,0,0.12)] flex justify-center items-center'>
                                            <span className='absolute left-[4px] top-[4px] w-[8px] h-[8px] rounded-full bg-white flex m-auto'></span>
                                        </div>
                                        <span className='text-black opacity-[0.85] font-medium 2xl:text-[20px] xl:text-[15px] text-[13.33px]'>Career</span>
                                    </label>
                                    <label className='relative flex items-center gap-2 [&_input:checked_+_div]:bg-[#007AFF] [&_input:checked_+_div]:shadow-[0_1px_4px_0_rgba(0,122,255,0.25)]' htmlFor='Solutions'>
                                        <input type='radio' name='selectService' className='absolute -left-[9999999px] top-0' id='Solutions' />
                                        <div className='relative border border-[rgba(0,0,0,0.15)] w-[18px] h-[18px] rounded-full shadow-[inset_0_1px_4px_0_rgba(0,0,0,0.12)] flex justify-center items-center'>
                                            <span className='absolute left-[4px] top-[4px] w-[8px] h-[8px] rounded-full bg-white flex m-auto'></span>
                                        </div>
                                        <span className='text-black opacity-[0.85] font-medium 2xl:text-[20px] xl:text-[15px] text-[13.33px]'>Solutions</span>
                                    </label> */}
                                        {["services", "partnership", "career", "solutions"].map((tab) => (
                                            <label key={tab} className="flex items-center gap-2 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="contactType"
                                                    value={tab}
                                                    checked={selectedTab === tab}
                                                    onChange={() => setSelectedTab(tab)}
                                                    className="hidden"
                                                />
                                                <div
                                                    className={`relative border w-[18px] h-[18px] rounded-full flex justify-center items-center transition-all duration-300 ${selectedTab === tab
                                                            ? "shadow-[inset_#007AFF_0px_0px_0px_4px] border-[#007AFF]"
                                                            : "border border-[rgba(0,0,0,0.15)] shadow-[inset_0_1px_4px_0_rgba(0,0,0,0.12)]"
                                                        }`}
                                                >
                                                    <span
                                                        className={`absolute left-[4px] top-[4px] w-[8px] h-[8px] rounded-full transition-all duration-300 ${selectedTab === tab ? "" : ""
                                                            }`}
                                                    ></span>
                                                </div>
                                                <span
                                                    className={`text-black opacity-[0.85] font-medium 2xl:text-[20px] xl:text-[15px] text-[13.33px] transition-all duration-300 ${selectedTab === tab ? "" : ""
                                                        }`}
                                                >
                                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                                </span>
                                            </label>
                                        ))}

                                    </div>

                                    <div>
                                        {selectedTab === "services" &&
                                            <>
                                                <div className='grid grid-cols-2 2xl:gap-[30px] xl:gap-[22.5px] md:gap-[20px] gap-[18.75px] my-[30px]'>
                                                    <div>
                                                        <label htmlFor="Name" className="text-[#262626] 2xl:text-[18px] xl:text-[13.5px] md:text-[12px] text-[11.22px] 2xl:mb-[7px] md:mb-[9px] mb-1.5 flex"
                                                        >Name</label>
                                                        <input id="Name" className="outline-none focus:shadow-[inset_0_0_0_1px_#3563E9] w-full bg-[#F5F5F5] ring-0 2xl:rounded-[8px] xl:rounded-[6px] h-auto 2xl:text-[18px] md:text-[13.5px] text-[11.22px] 2xl:py-[23.5px] xl:py-[15px] md:py-[12.35px] py-[12.55px] 2xl:px-[20px] xl:px-[15px] md:px-[13.5px] px-[12.5px] placeholder:text-[#656567] text-black border-0" type="text" placeholder="Enter your Name" />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="Company" className="text-[#262626] 2xl:text-[18px] xl:text-[13.5px] md:text-[12px] text-[11.22px] 2xl:mb-[7px] md:mb-[9px] mb-1.5 flex"
                                                        >Company</label>
                                                        <input id="Company" className="outline-none focus:shadow-[inset_0_0_0_1px_#3563E9] w-full bg-[#F5F5F5] ring-0 2xl:rounded-[8px] xl:rounded-[6px] h-auto 2xl:text-[18px] md:text-[13.5px] text-[11.22px] 2xl:py-[23.5px] xl:py-[15px] md:py-[12.35px] py-[12.55px] 2xl:px-[20px] xl:px-[15px] md:px-[13.5px] px-[12.5px] placeholder:text-[#656567] text-black border-0" type="text" placeholder="Enter your company name" />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="Email" className="text-[#262626] 2xl:text-[18px] xl:text-[13.5px] md:text-[12px] text-[11.22px] 2xl:mb-[7px] md:mb-[9px] mb-1.5 flex"
                                                        >Email</label>
                                                        <input id="Email" className="outline-none focus:shadow-[inset_0_0_0_1px_#3563E9] w-full bg-[#F5F5F5] ring-0 2xl:rounded-[8px] xl:rounded-[6px] h-auto 2xl:text-[18px] md:text-[13.5px] text-[11.22px] 2xl:py-[23.5px] xl:py-[15px] md:py-[12.35px] py-[12.55px] 2xl:px-[20px] xl:px-[15px] md:px-[13.5px] px-[12.5px] placeholder:text-[#656567] text-black border-0" type="email" placeholder="Enter your email" />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="Phone" className="text-[#262626] 2xl:text-[18px] xl:text-[13.5px] md:text-[12px] text-[11.22px] 2xl:mb-[7px] md:mb-[9px] mb-1.5 flex"
                                                        >Phone Number</label>
                                                        <input id="Phone" className="outline-none focus:shadow-[inset_0_0_0_1px_#3563E9] w-full bg-[#F5F5F5] ring-0 2xl:rounded-[8px] xl:rounded-[6px] h-auto 2xl:text-[18px] md:text-[13.5px] text-[11.22px] 2xl:py-[23.5px] xl:py-[15px] md:py-[12.35px] py-[12.55px] 2xl:px-[20px] xl:px-[15px] md:px-[13.5px] px-[12.5px] placeholder:text-[#656567] text-black border-0" type="tel" placeholder="Enter your phone number" />
                                                    </div>
                                                </div>

                                                <div className='2xl:pt-[30px] xl:pt-[20px] pt-[18px] 2xl:pb-[40px] xl:pb-[30px] pb-[22px]'>
                                                    <div className='text-black font-semibold 2xl:text-[18px] xl:text-[13.5px] md:text-[12px] text-[11.22px] mb-4'>
                                                        Choose a Service
                                                    </div>
                                                    <div className='grid md:grid-cols-3 grid-cols-2 max-[500px]:grid-cols-1 xl:gap-[20px] gap-[15px]'>
                                                        <label className='relative [&_input:checked_+_div]:shadow-[inset_0_0_0_1px_#3563E9] [&_input:checked_+_div]:text-[#3563E9]' htmlFor='ServiceOne'>
                                                            <input type='radio' id='ServiceOne' className='absolute -left-[9999999px] top-0' name='chooseService' />
                                                            <div className='px-3 bg-[#F5F5F5] font-medium rounded-[8px] text-[#656567] text-[12px] justify-center flex items-center h-[41px] text-center'>
                                                                Embedded Hardware Design
                                                            </div>
                                                        </label>
                                                        <label className='relative [&_input:checked_+_div]:shadow-[inset_0_0_0_1px_#3563E9] [&_input:checked_+_div]:text-[#3563E9]' htmlFor='ServiceTwo'>
                                                            <input type='radio' id='ServiceTwo' className='absolute -left-[9999999px] top-0' name='chooseService' />
                                                            <div className='px-3 bg-[#F5F5F5] font-medium rounded-[8px] text-[#656567] text-[12px] justify-center flex items-center h-[41px] text-center'>
                                                                Embedded Software Design
                                                            </div>
                                                        </label>
                                                        <label className='relative [&_input:checked_+_div]:shadow-[inset_0_0_0_1px_#3563E9] [&_input:checked_+_div]:text-[#3563E9]' htmlFor='ServiceThree'>
                                                            <input type='radio' id='ServiceThree' className='absolute -left-[9999999px] top-0' name='chooseService' />
                                                            <div className='px-3 bg-[#F5F5F5] font-medium rounded-[8px] text-[#656567] text-[12px] justify-center flex items-center h-[41px] text-center'>
                                                                Wireless Systems Development
                                                            </div>
                                                        </label>
                                                        <label className='relative [&_input:checked_+_div]:shadow-[inset_0_0_0_1px_#3563E9] [&_input:checked_+_div]:text-[#3563E9]' htmlFor='ServiceFour'>
                                                            <input type='radio' id='ServiceFour' className='absolute -left-[9999999px] top-0' name='chooseService' />
                                                            <div className='px-3 bg-[#F5F5F5] font-medium rounded-[8px] text-[#656567] text-[12px] justify-center flex items-center h-[41px] text-center'>
                                                                Human Machine Interface Development
                                                            </div>
                                                        </label>
                                                        <label className='relative [&_input:checked_+_div]:shadow-[inset_0_0_0_1px_#3563E9] [&_input:checked_+_div]:text-[#3563E9]' htmlFor='ServiceFive'>
                                                            <input type='radio' id='ServiceFive' className='absolute -left-[9999999px] top-0' name='chooseService' />
                                                            <div className='px-3 bg-[#F5F5F5] font-medium rounded-[8px] text-[#656567] text-[12px] justify-center flex items-center h-[41px] text-center'>
                                                                Technology Consulting
                                                            </div>
                                                        </label>
                                                        <label className='relative [&_input:checked_+_div]:shadow-[inset_0_0_0_1px_#3563E9] [&_input:checked_+_div]:text-[#3563E9]' htmlFor='ServiceSix'>
                                                            <input type='radio' id='ServiceSix' className='absolute -left-[9999999px] top-0' name='chooseService' />
                                                            <div className='px-3 bg-[#F5F5F5] font-medium rounded-[8px] text-[#656567] text-[12px] justify-center flex items-center h-[41px] text-center'>
                                                                Manufacturing Support
                                                            </div>
                                                        </label>
                                                        <label className='relative [&_input:checked_+_div]:shadow-[inset_0_0_0_1px_#3563E9] [&_input:checked_+_div]:text-[#3563E9]' htmlFor='ServiceSeven'>
                                                            <input type='radio' id='ServiceSeven' className='absolute -left-[9999999px] top-0' name='chooseService' />
                                                            <div className='px-3 bg-[#F5F5F5] font-medium rounded-[8px] text-[#656567] text-[12px] justify-center flex items-center h-[41px] text-center'>
                                                                Mechanical and Industrial Design
                                                            </div>
                                                        </label>
                                                        <label className='relative [&_input:checked_+_div]:shadow-[inset_0_0_0_1px_#3563E9] [&_input:checked_+_div]:text-[#3563E9]' htmlFor='ServiceEight'>
                                                            <input type='radio' id='ServiceEight' className='absolute -left-[9999999px] top-0' name='chooseService' />
                                                            <div className='px-3 bg-[#F5F5F5] font-medium rounded-[8px] text-[#656567] text-[12px] justify-center flex items-center h-[41px] text-center'>
                                                                Custom IoT application development
                                                            </div>
                                                        </label>

                                                    </div>
                                                </div>
                                                <div className='2xl:pb-[40px] xl:pb-[30px] pb-[22px]'>
                                                    <div className='text-black font-semibold 2xl:text-[18px] xl:text-[13.5px] md:text-[12px] text-[11.22px] mb-4'>
                                                        About your project
                                                    </div>
                                                    <input className="outline-none focus:shadow-[inset_0_0_0_1px_#3563E9] w-full bg-[#F5F5F5] ring-0 2xl:rounded-[8px] xl:rounded-[6px] h-auto 2xl:text-[18px] md:text-[13.5px] text-[11.22px] 2xl:py-[23.5px] xl:py-[15px] md:py-[12.35px] py-[12.55px] 2xl:px-[20px] xl:px-[15px] md:px-[13.5px] px-[12.5px] placeholder:text-[#656567] text-black border-0" type="tel" placeholder="How can we help?" />
                                                </div>
                                                <div className='flex justify-end'>
                                                    <input type='submit' className='bg-[#3563E9] text-white rounded-[10px] 2xl:w-[200px] xl:w-[175px] md:w-[160px] w-[135px] 2xl:h-[50px] xl:h-[45px] md:h-[42px] h-[40px] 2xl:text-[20px] xl:text-[16px] md:text-[15px] text-[15.24px] cursor-pointer transition-all duration-500 hover:bg-black' value='Submit' />
                                                </div>
                                            </>
                                        }



                                        {selectedTab === "partnership" &&
                                            <>
                                                <div className='grid grid-cols-2 2xl:gap-[30px] xl:gap-[22.5px] md:gap-[20px] gap-[18.75px] my-[30px]'>
                                                    <div>
                                                        <label htmlFor="Name" className="text-[#262626] 2xl:text-[18px] xl:text-[13.5px] md:text-[12px] text-[11.22px] 2xl:mb-[7px] md:mb-[9px] mb-1.5 flex"
                                                        >Name</label>
                                                        <input id="Name" className="outline-none focus:shadow-[inset_0_0_0_1px_#3563E9] w-full bg-[#F5F5F5] ring-0 2xl:rounded-[8px] xl:rounded-[6px] h-auto 2xl:text-[18px] md:text-[13.5px] text-[11.22px] 2xl:py-[23.5px] xl:py-[15px] md:py-[12.35px] py-[12.55px] 2xl:px-[20px] xl:px-[15px] md:px-[13.5px] px-[12.5px] placeholder:text-[#656567] text-black border-0" type="text" placeholder="Enter your Name" />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="Company" className="text-[#262626] 2xl:text-[18px] xl:text-[13.5px] md:text-[12px] text-[11.22px] 2xl:mb-[7px] md:mb-[9px] mb-1.5 flex"
                                                        >Company</label>
                                                        <input id="Company" className="outline-none focus:shadow-[inset_0_0_0_1px_#3563E9] w-full bg-[#F5F5F5] ring-0 2xl:rounded-[8px] xl:rounded-[6px] h-auto 2xl:text-[18px] md:text-[13.5px] text-[11.22px] 2xl:py-[23.5px] xl:py-[15px] md:py-[12.35px] py-[12.55px] 2xl:px-[20px] xl:px-[15px] md:px-[13.5px] px-[12.5px] placeholder:text-[#656567] text-black border-0" type="text" placeholder="Enter your company name" />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="Email" className="text-[#262626] 2xl:text-[18px] xl:text-[13.5px] md:text-[12px] text-[11.22px] 2xl:mb-[7px] md:mb-[9px] mb-1.5 flex"
                                                        >Email</label>
                                                        <input id="Email" className="outline-none focus:shadow-[inset_0_0_0_1px_#3563E9] w-full bg-[#F5F5F5] ring-0 2xl:rounded-[8px] xl:rounded-[6px] h-auto 2xl:text-[18px] md:text-[13.5px] text-[11.22px] 2xl:py-[23.5px] xl:py-[15px] md:py-[12.35px] py-[12.55px] 2xl:px-[20px] xl:px-[15px] md:px-[13.5px] px-[12.5px] placeholder:text-[#656567] text-black border-0" type="email" placeholder="Enter your email" />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="Phone" className="text-[#262626] 2xl:text-[18px] xl:text-[13.5px] md:text-[12px] text-[11.22px] 2xl:mb-[7px] md:mb-[9px] mb-1.5 flex"
                                                        >Phone Number</label>
                                                        <input id="Phone" className="outline-none focus:shadow-[inset_0_0_0_1px_#3563E9] w-full bg-[#F5F5F5] ring-0 2xl:rounded-[8px] xl:rounded-[6px] h-auto 2xl:text-[18px] md:text-[13.5px] text-[11.22px] 2xl:py-[23.5px] xl:py-[15px] md:py-[12.35px] py-[12.55px] 2xl:px-[20px] xl:px-[15px] md:px-[13.5px] px-[12.5px] placeholder:text-[#656567] text-black border-0" type="tel" placeholder="Enter your phone number" />
                                                    </div>
                                                </div>

                                                <div className='2xl:pb-[40px] xl:pb-[30px] pb-[22px]'>
                                                    <div className='text-black font-semibold 2xl:text-[18px] xl:text-[13.5px] md:text-[12px] text-[11.22px] mb-4'>
                                                        Talk to us
                                                    </div>
                                                    <input className="outline-none focus:shadow-[inset_0_0_0_1px_#3563E9] w-full bg-[#F5F5F5] ring-0 2xl:rounded-[8px] xl:rounded-[6px] h-auto 2xl:text-[18px] md:text-[13.5px] text-[11.22px] 2xl:py-[23.5px] xl:py-[15px] md:py-[12.35px] py-[12.55px] 2xl:px-[20px] xl:px-[15px] md:px-[13.5px] px-[12.5px] placeholder:text-[#656567] text-black border-0" type="tel" placeholder="How can we help?" />
                                                </div>
                                                <div className='flex justify-end'>
                                                    <input type='submit' className='bg-[#3563E9] text-white rounded-[10px] 2xl:w-[200px] xl:w-[175px] md:w-[160px] w-[135px] 2xl:h-[50px] xl:h-[45px] md:h-[42px] h-[40px] 2xl:text-[20px] xl:text-[16px] md:text-[15px] text-[15.24px] cursor-pointer transition-all duration-500 hover:bg-black' value='Submit' />
                                                </div>
                                            </>
                                        }
                                        {selectedTab === "career" &&
                                            <>
                                                <div className='grid grid-cols-2 2xl:gap-[30px] xl:gap-[22.5px] md:gap-[20px] gap-[18.75px] my-[30px]'>
                                                    <div>
                                                        <label htmlFor="Name" className="text-[#262626] 2xl:text-[18px] xl:text-[13.5px] md:text-[12px] text-[11.22px] 2xl:mb-[7px] md:mb-[9px] mb-1.5 flex"
                                                        >Name</label>
                                                        <input id="Name" className="outline-none focus:shadow-[inset_0_0_0_1px_#3563E9] w-full bg-[#F5F5F5] ring-0 2xl:rounded-[8px] xl:rounded-[6px] h-auto 2xl:text-[18px] md:text-[13.5px] text-[11.22px] 2xl:py-[23.5px] xl:py-[15px] md:py-[12.35px] py-[12.55px] 2xl:px-[20px] xl:px-[15px] md:px-[13.5px] px-[12.5px] placeholder:text-[#656567] text-black border-0" type="text" placeholder="Enter your Name" />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="Company" className="text-[#262626] 2xl:text-[18px] xl:text-[13.5px] md:text-[12px] text-[11.22px] 2xl:mb-[7px] md:mb-[9px] mb-1.5 flex"
                                                        >Company</label>
                                                        <input id="Company" className="outline-none focus:shadow-[inset_0_0_0_1px_#3563E9] w-full bg-[#F5F5F5] ring-0 2xl:rounded-[8px] xl:rounded-[6px] h-auto 2xl:text-[18px] md:text-[13.5px] text-[11.22px] 2xl:py-[23.5px] xl:py-[15px] md:py-[12.35px] py-[12.55px] 2xl:px-[20px] xl:px-[15px] md:px-[13.5px] px-[12.5px] placeholder:text-[#656567] text-black border-0" type="text" placeholder="Enter your company name" />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="Email" className="text-[#262626] 2xl:text-[18px] xl:text-[13.5px] md:text-[12px] text-[11.22px] 2xl:mb-[7px] md:mb-[9px] mb-1.5 flex"
                                                        >Email</label>
                                                        <input id="Email" className="outline-none focus:shadow-[inset_0_0_0_1px_#3563E9] w-full bg-[#F5F5F5] ring-0 2xl:rounded-[8px] xl:rounded-[6px] h-auto 2xl:text-[18px] md:text-[13.5px] text-[11.22px] 2xl:py-[23.5px] xl:py-[15px] md:py-[12.35px] py-[12.55px] 2xl:px-[20px] xl:px-[15px] md:px-[13.5px] px-[12.5px] placeholder:text-[#656567] text-black border-0" type="email" placeholder="Enter your email" />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="Phone" className="text-[#262626] 2xl:text-[18px] xl:text-[13.5px] md:text-[12px] text-[11.22px] 2xl:mb-[7px] md:mb-[9px] mb-1.5 flex"
                                                        >Phone Number</label>
                                                        <input id="Phone" className="outline-none focus:shadow-[inset_0_0_0_1px_#3563E9] w-full bg-[#F5F5F5] ring-0 2xl:rounded-[8px] xl:rounded-[6px] h-auto 2xl:text-[18px] md:text-[13.5px] text-[11.22px] 2xl:py-[23.5px] xl:py-[15px] md:py-[12.35px] py-[12.55px] 2xl:px-[20px] xl:px-[15px] md:px-[13.5px] px-[12.5px] placeholder:text-[#656567] text-black border-0" type="tel" placeholder="Enter your phone number" />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="Role" className="text-[#262626] 2xl:text-[18px] xl:text-[13.5px] md:text-[12px] text-[11.22px] 2xl:mb-[7px] md:mb-[9px] mb-1.5 flex"
                                                        >Role</label>
                                                        <input id="Role" className="outline-none focus:shadow-[inset_0_0_0_1px_#3563E9] w-full bg-[#F5F5F5] ring-0 2xl:rounded-[8px] xl:rounded-[6px] h-auto 2xl:text-[18px] md:text-[13.5px] text-[11.22px] 2xl:py-[23.5px] xl:py-[15px] md:py-[12.35px] py-[12.55px] 2xl:px-[20px] xl:px-[15px] md:px-[13.5px] px-[12.5px] placeholder:text-[#656567] text-black border-0" type="text" placeholder="Enter enter your current role" />
                                                        <div className='mt-5 flex items-center gap-2.5'>
                                                            <span className="px-4 py-2 border border-[#3563E9] text-[#3563E9] rounded-[8px] cursor-pointer">Upload Resume</span>
                                                            <small className="text-gray-500">(Max Size 4 MB)</small>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label htmlFor="ExperienceYears" className="text-[#262626] 2xl:text-[18px] xl:text-[13.5px] md:text-[12px] text-[11.22px] 2xl:mb-[7px] md:mb-[9px] mb-1.5 flex"
                                                        >Experience in years</label>
                                                        <input id="ExperienceYears" className="outline-none focus:shadow-[inset_0_0_0_1px_#3563E9] w-full bg-[#F5F5F5] ring-0 2xl:rounded-[8px] xl:rounded-[6px] h-auto 2xl:text-[18px] md:text-[13.5px] text-[11.22px] 2xl:py-[23.5px] xl:py-[15px] md:py-[12.35px] py-[12.55px] 2xl:px-[20px] xl:px-[15px] md:px-[13.5px] px-[12.5px] placeholder:text-[#656567] text-black border-0" type="number" placeholder="Please enter your total experience" />
                                                        <small className='flex items-center gap-2 mt-2'>
                                                            <Checkbox id="terms" />
                                                            Check box if your experience is not relevant
                                                        </small>
                                                    </div>
                                                </div>
                                                <div className='flex justify-end'>
                                                    <input type='submit' className='bg-[#3563E9] text-white rounded-[10px] 2xl:w-[200px] xl:w-[175px] md:w-[160px] w-[135px] 2xl:h-[50px] xl:h-[45px] md:h-[42px] h-[40px] 2xl:text-[20px] xl:text-[16px] md:text-[15px] text-[15.24px] cursor-pointer transition-all duration-500 hover:bg-black' value='Submit' />
                                                </div>
                                            </>
                                        }


                                        {selectedTab === "solutions" &&
                                            <>
                                                <div className='grid grid-cols-2 2xl:gap-[30px] xl:gap-[22.5px] md:gap-[20px] gap-[18.75px] my-[30px]'>
                                                    <div>
                                                        <label htmlFor="Name" className="text-[#262626] 2xl:text-[18px] xl:text-[13.5px] md:text-[12px] text-[11.22px] 2xl:mb-[7px] md:mb-[9px] mb-1.5 flex"
                                                        >Name</label>
                                                        <input id="Name" className="outline-none focus:shadow-[inset_0_0_0_1px_#3563E9] w-full bg-[#F5F5F5] ring-0 2xl:rounded-[8px] xl:rounded-[6px] h-auto 2xl:text-[18px] md:text-[13.5px] text-[11.22px] 2xl:py-[23.5px] xl:py-[15px] md:py-[12.35px] py-[12.55px] 2xl:px-[20px] xl:px-[15px] md:px-[13.5px] px-[12.5px] placeholder:text-[#656567] text-black border-0" type="text" placeholder="Enter your Name" />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="Company" className="text-[#262626] 2xl:text-[18px] xl:text-[13.5px] md:text-[12px] text-[11.22px] 2xl:mb-[7px] md:mb-[9px] mb-1.5 flex"
                                                        >Company</label>
                                                        <input id="Company" className="outline-none focus:shadow-[inset_0_0_0_1px_#3563E9] w-full bg-[#F5F5F5] ring-0 2xl:rounded-[8px] xl:rounded-[6px] h-auto 2xl:text-[18px] md:text-[13.5px] text-[11.22px] 2xl:py-[23.5px] xl:py-[15px] md:py-[12.35px] py-[12.55px] 2xl:px-[20px] xl:px-[15px] md:px-[13.5px] px-[12.5px] placeholder:text-[#656567] text-black border-0" type="text" placeholder="Enter your company name" />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="Email" className="text-[#262626] 2xl:text-[18px] xl:text-[13.5px] md:text-[12px] text-[11.22px] 2xl:mb-[7px] md:mb-[9px] mb-1.5 flex"
                                                        >Email</label>
                                                        <input id="Email" className="outline-none focus:shadow-[inset_0_0_0_1px_#3563E9] w-full bg-[#F5F5F5] ring-0 2xl:rounded-[8px] xl:rounded-[6px] h-auto 2xl:text-[18px] md:text-[13.5px] text-[11.22px] 2xl:py-[23.5px] xl:py-[15px] md:py-[12.35px] py-[12.55px] 2xl:px-[20px] xl:px-[15px] md:px-[13.5px] px-[12.5px] placeholder:text-[#656567] text-black border-0" type="email" placeholder="Enter your email" />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="Phone" className="text-[#262626] 2xl:text-[18px] xl:text-[13.5px] md:text-[12px] text-[11.22px] 2xl:mb-[7px] md:mb-[9px] mb-1.5 flex"
                                                        >Phone Number</label>
                                                        <input id="Phone" className="outline-none focus:shadow-[inset_0_0_0_1px_#3563E9] w-full bg-[#F5F5F5] ring-0 2xl:rounded-[8px] xl:rounded-[6px] h-auto 2xl:text-[18px] md:text-[13.5px] text-[11.22px] 2xl:py-[23.5px] xl:py-[15px] md:py-[12.35px] py-[12.55px] 2xl:px-[20px] xl:px-[15px] md:px-[13.5px] px-[12.5px] placeholder:text-[#656567] text-black border-0" type="tel" placeholder="Enter your phone number" />
                                                    </div>
                                                </div>

                                                <div className='2xl:pt-[30px] xl:pt-[20px] pt-[18px] 2xl:pb-[40px] xl:pb-[30px] pb-[22px]'>
                                                    <div className='text-black font-semibold 2xl:text-[18px] xl:text-[13.5px] md:text-[12px] text-[11.22px] mb-4'>
                                                        Choose a Service
                                                    </div>
                                                    <div className='grid md:grid-cols-3 grid-cols-2 max-[500px]:grid-cols-1 xl:gap-[20px] gap-[15px]'>
                                                        <label className='relative [&_input:checked_+_div]:shadow-[inset_0_0_0_1px_#3563E9] [&_input:checked_+_div]:text-[#3563E9]' htmlFor='SolutionOne'>
                                                            <input type='radio' id='SolutionOne' className='absolute -left-[9999999px] top-0' name='chooseSolution' />
                                                            <div className='px-3 bg-[#F5F5F5] font-medium rounded-[8px] text-[#656567] text-[12px] justify-center flex items-center h-[41px] text-center'>
                                                                IIoT
                                                            </div>
                                                        </label>
                                                        <label className='relative [&_input:checked_+_div]:shadow-[inset_0_0_0_1px_#3563E9] [&_input:checked_+_div]:text-[#3563E9]' htmlFor='SolutionTwo'>
                                                            <input type='radio' id='SolutionTwo' className='absolute -left-[9999999px] top-0' name='chooseSolution' />
                                                            <div className='px-3 bg-[#F5F5F5] font-medium rounded-[8px] text-[#656567] text-[12px] justify-center flex items-center h-[41px] text-center'>
                                                                Mobility
                                                            </div>
                                                        </label>
                                                        <label className='relative [&_input:checked_+_div]:shadow-[inset_0_0_0_1px_#3563E9] [&_input:checked_+_div]:text-[#3563E9]' htmlFor='SolutionThree'>
                                                            <input type='radio' id='SolutionThree' className='absolute -left-[9999999px] top-0' name='chooseSolution' />
                                                            <div className='px-3 bg-[#F5F5F5] font-medium rounded-[8px] text-[#656567] text-[12px] justify-center flex items-center h-[41px] text-center'>
                                                                Smart buildings solutions
                                                            </div>
                                                        </label>

                                                    </div>
                                                </div>
                                                <div className='2xl:pb-[40px] xl:pb-[30px] pb-[22px]'>
                                                    <input className="outline-none focus:shadow-[inset_0_0_0_1px_#3563E9] w-full bg-[#F5F5F5] ring-0 2xl:rounded-[8px] xl:rounded-[6px] h-auto 2xl:text-[18px] md:text-[13.5px] text-[11.22px] 2xl:py-[23.5px] xl:py-[15px] md:py-[12.35px] py-[12.55px] 2xl:px-[20px] xl:px-[15px] md:px-[13.5px] px-[12.5px] placeholder:text-[#656567] text-black border-0" type="tel" placeholder="Tell us about your project" />
                                                </div>
                                                <div className='flex justify-end'>
                                                    <input type='submit' className='bg-[#3563E9] text-white rounded-[10px] 2xl:w-[200px] xl:w-[175px] md:w-[160px] w-[135px] 2xl:h-[50px] xl:h-[45px] md:h-[42px] h-[40px] 2xl:text-[20px] xl:text-[16px] md:text-[15px] text-[15.24px] cursor-pointer transition-all duration-500 hover:bg-black' value='Submit' />
                                                </div>
                                            </>
                                        }
                                    </div>

                                </form>
                            </div>
                        </div>

                        <div className='lg:w-[calc(100%_-_900px)] w-full 2xl:pt-8 lg:mt-0 mt-10'>
                            <div className='grid grid-cols-1 h-full'>
                                <div className='flex flex-col border-b border-b-[#DCDCDC] 2xl:pb-[40px] xl:pb-[30px] md:pb-[26px] pb-[20px]'>
                                    <span className='text-[#656567] tracking-[-0.22px] 2xl:text-[18px] md:text-[13.5px] text-[11.22px]'>Email Address</span>
                                    <Link href='mailto:info.edge@Elogictech.com' className='mt-[5px] flex font-semibold text-[#4B5563] 2xl:text-[20px] xl:text-[15px] text-[13.33px]'>
                                        info.edge@Elogictech.com
                                    </Link>
                                </div>
                                <div className='flex flex-col border-b border-b-[#DCDCDC] 2xl:pb-[40px] xl:pb-[30px] md:pb-[26px] pb-[20px] 2xl:mt-[40px] xl:mt-[30px] md:mt-[26px] mt-[20px]'>
                                    <span className='text-[#656567] tracking-[-0.22px] 2xl:text-[18px] md:text-[13.5px] text-[11.22px]'>Phone Number</span>
                                    <Link href='tel:+919177444992' className='mt-[5px] flex font-semibold text-[#4B5563] 2xl:text-[20px] xl:text-[15px] text-[13.33px]'>
                                        +91 9177444992
                                    </Link>
                                </div>
                                <div className='flex flex-col 2xl:pb-[40px] xl:pb-[30px] md:pb-[26px] pb-[20px] 2xl:mt-[40px] xl:mt-[30px] md:mt-[26px] mt-[20px]'>
                                    <span className='text-[#656567] tracking-[-0.22px] 2xl:text-[18px] md:text-[13.5px] text-[11.22px]'>Office Address</span>
                                    <Link href='tel:+919177444992' className='mt-[5px] flex font-semibold text-[#4B5563] 2xl:text-[20px] xl:text-[15px] text-[13.33px]'>
                                        2nd Floor, Ashoka HiTech Chambers, Road No. 2, opp. KBR Park, Banjara Hills, Hyderabad, Telangana 500034
                                    </Link>
                                </div>
                                <div className='rounded-[10px] overflow-hidden'>
                                    <iframe className='w-full 2xl:h-[550px] lg:h-[470px] h-[450px]' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30453.907124137066!2d78.423904!3d17.424338!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb970d18993739%3A0x90c151e6974d10e8!2seLogicTech%20Edge!5e0!3m2!1sen!2sin!4v1738235240338!5m2!1sen!2sin"></iframe>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default ContactUsWidgets