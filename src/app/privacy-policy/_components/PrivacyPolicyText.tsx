'use client'
import React, { useEffect, useState } from 'react'

function PrivacyPolicyText() {
    const sections = [
        'Introduction',
        'Definitions',
        'Information Collection and Use',
        'Personal Data',
        'Usage Data',
        'Tracking Cookies Data',
        'Examples of Cookies we use',
        'Retention of Data',
        'Transfer of Data',
        'Disclosure of Data',
        'Security of Data',
        'Contact us',
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
      const sectionElement = document.getElementById(section.replace(/\s+/g, '-').toLowerCase());
      if (sectionElement) observer.observe(sectionElement);
    });

    return () => observer.disconnect();
  }, []);
  return (
    <>
        <section>
            <div className='bg-[#EEF1F5] 2xl:pt-[100px] xl:pt-[75px] lg:pt-[66px] md:pt-[45px] pt-[50px] 2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px]'>
                <div className="flex flex-col lg:flex-row">
                <aside className="lg:w-1/4 w-full mb-8 lg:mb-0">
                    <div className="sticky top-4">
                    <h2 className="font-semibold text-lg mb-4">In this article</h2>
                    <ul className="space-y-3">
                        {sections.map((item, index) => {
                        const sectionId = item.replace(/\s+/g, '-').toLowerCase();
                        return (
                            <li key={index}>
                            <a
                                href={`#${sectionId}`}
                                className={`block ${
                                activeSection === sectionId ? 'text-blue-600 font-bold' : 'text-gray-600'
                                } transition-all duration-300`}
                            >
                                {item}
                            </a>
                            </li>
                        );
                        })}
                    </ul>
                    </div>
                </aside>

                {/* Content Sections */}
                    <main className="lg:w-3/4 w-full space-y-10">
                        {sections.map((section) => {
                        const sectionId = section.replace(/\s+/g, '-').toLowerCase();
                        return (
                            <section key={sectionId} id={sectionId} className="scroll-mt-16">
                            <h2 className="text-xl font-bold mb-2">{section}</h2>
                            <p className="text-gray-700">
                                This is a placeholder for the {section} section. Add the actual content here.
                            </p>
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