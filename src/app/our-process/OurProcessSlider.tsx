'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Slider = () => {
  const slides = [
    {
      title: 'What You Give Us',
      points: ['Concept', 'Specification Matrix', 'Reference Products', 'Functional Requirement'],
      bgColor: 'bg-red-100'
    },
    {
      title: 'Our Process',
      points: ['eLogicTech Edge'],
      bgColor: 'bg-blue-200'
    },
    {
      title: 'What You Get',
      points: ['Control Over Production', 'User Centric Designing', 'Standards Compliance', 'Internet Protocol Ownership', 'Rapid Time To Market'],
      bgColor: 'bg-blue-100'
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-10">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={`flex flex-col justify-center items-center p-10 rounded-lg ${slide.bgColor}`}>
              <h2 className="text-2xl font-bold mb-4">{slide.title}</h2>
              <ul className="text-lg list-disc text-center">
                {slide.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;