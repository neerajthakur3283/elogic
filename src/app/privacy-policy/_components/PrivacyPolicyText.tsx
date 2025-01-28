'use client'
import React, { useEffect, useState } from 'react'
import Introduction from './Introduction';
import Definitions from './Definitions';
import InformationCollection from './InformationCollection';
import PersonalData from './PersonalData';
import UsageData from './UsageData';
import TrackingCookiesData from './TrackingCookiesData';

function PrivacyPolicyText() {
    const sections = [
        {
            title: 'Introduction',
            content: (
              <>
                <Introduction />
              </>
            ),
          },
          {
            title: 'Definitions',
            content: (
              <>
                <Definitions />
              </>
            ),
          },
          {
            title: 'Information Collection and Use',
            content: (
              <>
                <InformationCollection />
              </>
            ),
          },
          {
            title: 'Personal Data',
            content: (
              <>
                <PersonalData />
              </>
            ),
          },
          {
            title: 'Usage Data',
            content: (
              <>
                <UsageData />
              </>
            ),
          },
          {
            title: 'Tracking Cookies Data',
            content: (
              <>
                <TrackingCookiesData />
              </>
            ),
          },
      ];
      const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observerOptions = {
      root: null, // Observe the viewport
      rootMargin: '-50px 0px -50px 0px', // Adjust trigger range
      threshold: 0.5, // Trigger when 50% of the section is visible
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      const sectionElement = document.getElementById(section.title.replace(/\s+/g, '-').toLowerCase());
      if (sectionElement) observer.observe(sectionElement);
    });

    return () => observer.disconnect();
  }, [sections]);
  return (
    <>
        <section>
            <div className='bg-[#EEF1F5] 2xl:pt-[100px] xl:pt-[75px] lg:pt-[66px] md:pt-[45px] pt-[50px] 2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px]'>
                <div className="flex 2xl:gap-[30px]">
                <aside className="2xl:w-[341px]">
                    <div className="sticky top-[140px]">
                        <h2 className="font-semibold text-[#424242] 2xl:text-[27px]">In this article</h2>
                        <ul className="2xl:pt-[20px] grid grid-cols-1 gap-y-[10px] font-semibold text-[#424242]">
                        {sections.map((item, index) => {
                            const sectionId = item.title.replace(/\s+/g, '-').toLowerCase();
                            return (
                            <li key={index}>
                                <a
                                href={`#${sectionId}`}
                                className={`block ${
                                    activeSection === sectionId
                                    ? 'text-[#3464FC] after:bg-[#3464FC]'
                                    : 'text-[#424242]'
                                } transition-all duration-500 2xl:py-2 2xl:ps-[20px] relative after:absolute after:left-0 after:top-0 after:bottom-0 after:w-[3px]`}
                                >
                                {item.title}
                                </a>
                            </li>
                            );
                        })}
                        </ul>
                    </div>
                    </aside>

                {/* Content Sections */}
                <main className="2xl:w-[calc(100%_-_341px)] grid-cols-1 grid gap-[30px]">
                    {sections.map((section) => {
                        const sectionId = section.title.replace(/\s+/g, '-').toLowerCase();
                        return (
                        <section key={sectionId} id={sectionId} className="scroll-mt-16">
                            <h2 className="text-[#1B1B1F] font-semibold 2xl:text-[27px] xl:text-[20.25px] text-[18px]">
                            {section.title}
                            </h2>
                            <div>{section.content}</div>
                        </section>
                        );
                    })}
                </main>
                </div>
            </div>
        </section>
    </>
  )
}

export default PrivacyPolicyText