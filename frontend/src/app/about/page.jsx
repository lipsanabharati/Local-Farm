"use client"

import {Swiper,SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Autoplay,Pagination} from "swiper/modules";

export default function About()
{
    const team=[
        {
            name:"John Doe",
            post:"Manager",
            photo:"pfp.jpg",
        },
        {
            name:"John Doe",
            post:"Manager",
            photo:"pfp.jpg",
        },
        {
            name:"John Doe",
            post:"Manager",
            photo:"pfp.jpg",
        },
        {
            name:"John Doe",
            post:"Manager",
            photo:"pfp.jpg",
        },
        {
            name:"John Doe",
            post:"Manager",
            photo:"pfp.jpg",
        },
        {
            name:"John Doe",
            post:"Manager",
            photo:"pfp.jpg",
        },
         {
            name:"John Doe",
            post:"Manager",
            photo:"pfp.jpg",
        },
         {
            name:"John Doe",
            post:"Manager",
            photo:"pfp.jpg",
        }
    ];
    return(
     <section className="flex flex-col items-center p-10 m-10 mt-30 gap-5 max-w-[1440px]">

        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#609647] mt-10">About Us</h1>

        <div className="flex flex-row justify-center items-center bg-[url('/blogBg.svg')] bg-no-repeat  lg:bg-contain bg-cover bg-position-[center_bottom_0rem] lg:bg-position-[center_bottom_0rem] md:bg-position-[center_bottom_0rem] p-1 md:p-15 w-screen max-w-[1440px]  lg:h-150 h-100 mySwiper">

            <Swiper
            modules={[Autoplay,Pagination]}
            autoplay={{delay:2000}}
            loop={true}
            pagination={{clickable:true}}
            speed={1500}
            breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }}
            className="w-full flex flex-col gap-3 items-center justify-center -mb-10"
            >
               <SwiperSlide
               ><img src="/farm1.png" className="w-[80%] mx-10 mb-10" /></SwiperSlide>
               <SwiperSlide ><img src="/farm1.png" className="w-[80%] mx-10 mb-10" /></SwiperSlide>
               <SwiperSlide ><img src="/farm1.png" className="w-[80%] mx-10 mb-10" /></SwiperSlide>
               <SwiperSlide ><img src="/farm1.png" className="w-[80%] mx-10 mb-10" /></SwiperSlide>
            </Swiper>
        </div>

        <div className="text-md px-5 md:px-15 lg:px-30 lg:text-xl">
            Local Farm serves as an inspiration for aspiring entrepreneurs and a reminder to consumers about the value of supporting local bussinesses. As Birat Bikram Shah and his team continue their journey, they’re not just growing a  business; they’re nurturing the seeds of change in Nepal’s agricultural landscape.
        </div>

        <div className="text-md px-5 md:px-15 lg:px-30 lg:text-xl">
            Local Farm serves as an inspiration for aspiring entrepreneurs and a reminder to consumers about the value of supporting local bussinesses
        </div>

        <div className="w-full flex flex-row justify-start px-5 md:px-15 lg:px-30">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#609647] mt-5">Our Legacy</h1>
        </div>
        
        {/*Small screens */}
        <div className="flex flex-row gap-8 justify-center px-5 md:px-15 md:hidden">
            <img src="/a1.svg" className="w-1/3 md:w-1/5" />
            <h1 className="text-2xl text-end lg:text-3xl font-bold text-[#609647] mt-5">Supporting Local Farmers all over Nepal</h1>
        </div>

        <div className="text-md px-5 md:px-15 text-end md:hidden">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedLorem ipsum dolor sit amet.
        </div>

        <div className="flex flex-row gap-8 justify-center px-5 md:px-15 mt-10 md:hidden">
            <h1 className="text-2xl lg:text-3xl font-bold text-[#609647] mt-5">Providing Quality Products</h1>
            <img src="/a2.svg" className="w-1/3 md:w-1/5" />
        </div>

        <div className="text-md px-5 md:hidden">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedLorem ipsum dolor sit amet.
        </div>
        

         <div className="flex flex-row gap-8 justify-center px-5 mt-10 md:hidden">
            <img src="/a3.png" className="w-1/3" />
            <h1 className="text-2xl lg:text-3xl font-bold text-[#609647] mt-5 text-end">Supporting Local Farmers all over Nepal</h1>
        </div>

        <div className="text-md text-end px-5 md:hidden">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedLorem ipsum dolor sit amet.
        </div>

        {/*Medium and above screens */}
        <div className="hidden md:flex md:flex-row justify-center gap-10 px-15 lg:mt-20 lg:px-30">
            <img src="/a1.svg" className="w-[50%]" />

            <div className="flex flex-col w-[50%]">
                 <h1 className="text-2xl text-end md:text-3xl lg:text-5xl font-bold text-[#609647] mt-5">Supporting Local Farmers all over Nepal</h1>
                 <div className="text-md text-end lg:text-xl lg:mt-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedLorem ipsum dolor sit amet.
                </div>
            </div>
        </div>


         <div className="hidden md:flex md:flex-row justify-center gap-10 px-15 lg:px-30 lg:mt-20">
            

            <div className="flex flex-col w-[65%]">
                 <h1 className="text-2xl text-end lg:text-3xl lg:text-5xl font-bold text-[#609647] mt-5">Supporting Local Farmers all over Nepal</h1>
                 <div className="text-md text-end lg:text-xl lg:mt-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedLorem ipsum dolor sit amet.
                </div>
            </div>

            <img src="/a2.svg" className="w-[35%]" />
        </div>

        <div className="hidden md:flex md:flex-row justify-center gap-10 px-15 lg:px-30 lg:mt-20">
             <img src="/a3.png" className="w-[25%]" />

            <div className="flex flex-col w-[75%]">
                 <h1 className="text-2xl text-end md:text-3xl lg:text-5xl font-bold text-[#609647] mt-5">Supporting Local Farmers all over Nepal</h1>
                 <div className="text-md text-end lg:text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedLorem ipsum dolor sit amet.
                </div>
            </div>
        </div>


        <div className="flex flex-row justify-center items-center">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#609647] mt-5">Our Team</h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-20 md:gap-20 lg:gap-30 mt-10 lg:mb-20">

            {
                team.map((person,index)=>(
                <div key={index} className="flex flex-col gap-2 items-center">
                    <div 
                    className="rounded-full w-25 h-25 lg:w-40 lg:h-40 bg-cover bg-no-repeat"  
                    style={{ backgroundImage: `url(/${person.photo})`}}>
                    </div>

                    <div>
                        <p className="text-[#93C553] text-lg">{person.name}</p>
                        <p className="text-gray-600 text-xl -mt-1">{person.post}</p>
                    </div>
                </div>
                ))
            }
        </div>
    </section>
    )
}