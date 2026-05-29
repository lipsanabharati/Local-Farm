"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

export default function AboutSwiper()
{
    return(
         <div className="w-full flex flex-row justify-center items-center bg-[url('/blogBg.webp')] bg-no-repeat  lg:bg-contain bg-cover bg-position-[center_bottom_0rem] lg:bg-position-[center_bottom_0rem] md:bg-position-[center_bottom_0rem] p-1 md:p-15 w-screen max-w-[1440px]  lg:h-150 h-100 mySwiper">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2000 }}
          loop={true}
          pagination={{ clickable: true }}
          speed={1500}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full flex flex-col gap-3 items-center justify-center -mb-10"
        >
          {/* <SwiperSlide
               ><img src="/farm1.webp" className="w-[80%] mx-10 mb-10" /></SwiperSlide> */}
          <SwiperSlide>
            <Image src="https://res.cloudinary.com/dpff5cxm3/image/upload/f_auto,q_60/v1779940697/aboutC2_c7xzvu.webp" className="w-[80%] mx-10 mb-10" width={468} height={338} alt="about image" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="https://res.cloudinary.com/dpff5cxm3/image/upload/f_auto,q_60/v1779940697/aboutC4_fdh2c0.webp" className="w-[80%] mx-10 mb-10" width={468} height={338} alt="about image"/>
          </SwiperSlide>
          <SwiperSlide>
            <Image src="https://res.cloudinary.com/dpff5cxm3/image/upload/f_auto,q_60/v1779940697/aboutC8_viemui.webp" className="w-[80%] mx-10 mb-10" width={468} height={338} alt="about image" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="https://res.cloudinary.com/dpff5cxm3/image/upload/f_auto,q_60/v1779940698/aboutC11_c1lcvf.webp" className="w-[80%] mx-10 mb-10" width={468} height={338} alt="about image" />
          </SwiperSlide>
        </Swiper>
      </div>
    )
}