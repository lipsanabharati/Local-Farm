"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

export default function Carousel({ transparent, categoryId }) {
  const [blogs, setBlogs] = useState([]);
  const [current, setCurrent] = useState(0);
  if (categoryId) {
    useEffect(() => {
      axios
        .get(`https://api.localfarmnepal.com/api/blogs/category/${categoryId}`)
        .then((res) => {
          setBlogs(res.data);
          // console.log(res.data);
        })
        .catch((err) => {
          //console.error(err);
        });
    }, []);
  } else {
    useEffect(() => {
      axios
        .get(`https://api.localfarmnepal.com/api/blogslp`)
        .then((res) => {
          setBlogs(res.data);
          // console.log(res.data);
        })
        .catch((err) => {
          //console.error(err);
        });
    }, []);
  }

  const nextSlide = () => {
    setCurrent((current + 1) % blogs.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + blogs.length) % blogs.length);
  };

  return (
    blogs.length > 0 && (
      <div className="flex flex-col items-center justify-center bg-transparent py-5 px-10 w-screen max-w-[1440px]">
        <div className="flex flex-col w-[90%]">
          {/*Slide*/}
          <div
            className={`flex lg:flex-row flex-col  lg:gap-5 md:gap-10 gap-5  ${transparent ? "bg-transparent" : "bg-[#f4eac3]"} `}
          >
            {/*Image*/}
            <div
              className="lg:w-1/2 w-full h-[250px] sm:h-[300px] lg:h-[400px] bg-cover bg-center relative"
              // style={{
              //   backgroundImage: `url(${
              //     blogs[current]?.photos?.[0]?.imagePath
              //       ? `https://api.localfarmnepal.com//${blogs[current].photos[0].imagePath}`
              //       : "/https://res.cloudinary.com/dpff5cxm3/image/upload/v1779941841/error_pr4qab.webp"
              //   })`,
              // }}
            >
              <Image
                src={`${
                  blogs[current]?.photos?.[0]?.imagePath
                    ? `https://api.localfarmnepal.com/${blogs[current].photos[0].imagePath}`
                    : "https://res.cloudinary.com/dpff5cxm3/image/upload/v1779941841/error_pr4qab.webp"
                }`}
                alt="background"
                fill
                priority
                unoptimized
                className="object-cover"
              />
            </div>

            {/*Text*/}
            <div className="lg:w-1/2 flex flex-col gap-3 px-10 py-5">
              <h2
                className="md:text-4xl text-2xl text-[#609647] font-bold"
                dangerouslySetInnerHTML={{ __html: blogs[current].title }}
              ></h2>

              <p
                className="text-gray-600 md:text-lg text-sm line-clamp-6"
                dangerouslySetInnerHTML={{
                  __html: blogs[current].introduction,
                }}
              ></p>

              <Link
                className="py-3 px-4 bg-[#93C553] text-white rounded-xl text-md font-medium hover:opacity-90 transition hover:cursor-pointer hover:bg-[#609647] w-30"
                href={`/blog/${blogs[current].slug}`}
                aria-label="go to blog"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 gap-3">
          {blogs.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`hover:cursor-pointer w-3 h-3 rounded-full transition-all ${
                current === index ? "bg-[#93C553] scale-125" : "bg-[#609647]"
              }`}
              aria-label="carousel dots"
            ></button>
          ))}
        </div>
      </div>
    )
  );
}
