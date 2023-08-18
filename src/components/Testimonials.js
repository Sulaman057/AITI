"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const TestimonialsContent = ({comment, name, designation }) => {
  return(
    <div className='m-20 flex flex-col items-center justify-center lg:mx-25 lg:my-10 md:mx-10'>
      <p className='text-bg'>{comment}</p>
      <div className='flex flex-col items-center justify-center mt-8 lg:mt-6'>
        <div className='w-20 h-20 rounded-full bg-bg opacity-50 lg:w-16 lg:h-16' />
        <h5 className=' text-bg text-lg font-extrabold leading-normal'>{name}</h5>
        <h6 className=' text-bg text-base font-medium leading-normal'>{designation}</h6>
      </div>
    </div>
  )
}

const Testimonials = () => {

  return (
    <div className="my-12 md:my-6 testimonials w-full flex flex-col items-center p-11 lg:p-9 sm:p-6 xs:px-0 xs:py-8 max-w-[1250px] opacity-70 2xl:w-[1200px] xl:w-[1000px] lg:w-[800px] md:w-[550px] sm:w-[450px] xs:w-[350px] xxs:w-[320px]">
      <h4 className=" text-bg font-bold text-5xl md:text-4xl ">Testimonials</h4>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <TestimonialsContent 
            comment="Incredible! The software solution they provided streamlined our operations like never before."
            name="John Doe"
            designation="CEO, TechCo"
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialsContent 
            comment="Their cybersecurity expertise gave us peace of mind in an increasingly digital world."
            name="Jane Smith"
            designation="CTO, InnovateCorp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialsContent 
            comment="Incredible! The software solution they provided streamlined our operations like never before."
            name="John Doe"
            designation="CEO, TechCo"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Testimonials
