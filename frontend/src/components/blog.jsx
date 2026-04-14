"use client";

import { useState,useEffect } from "react";
import axios from "axios";

export default function Blog({slug})
{
   
    const [blog,setBlog]=useState({});

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/blogs/${slug}`)
        .then((res)=>{
             setBlog(res.data);
             console.log(res.data);
        })
        .catch((err)=>{
             console.error(err);
             setBlog({});
        })
    },[]);

    return(
        <div className="flex flex-col gap-3 md:gap-8 px-5 md:px-10 lg:px-50">

            <h1 className="text-2xl lg:text-3xl font-bold text-[#609647]" dangerouslySetInnerHTML={{ __html:blog.title }}></h1>

            <div className="flex flex-col lg:flex-row gap-3 lg:gap-8">
                    <div className="bg-[#EFEAE6] w-full flex flex-row items-center justify-center lg:w-1/2">
                            <img src={blog.photos?.[0]?.imagePath
                            ? `http://localhost:5000/${blog.photos[0].imagePath}`
                            : "/error.png"}
                            alt={blog.title}
                            className="w-full"/>
                </div>

                <div className="text-lg lg:w-1/2" dangerouslySetInnerHTML={{__html:blog.introduction}}>
                </div>
                
            </div>

            <div className="text-lg" dangerouslySetInnerHTML={{__html:blog.content}}>
            </div>
             

             {
                    blog.photos?.length > 1 && (
            <div className="bg-[#EFEAE6] w-full flex flex-row items-center justify-center">
                   {
                    blog.photos.slice(1).map((photo, index) => (
                    <img
                        key={index}
                        src={photo.imagePath}
                        alt="blog"
                        className="w-32 h-32 object-cover"
                    />
                    ))}
             </div>
            )}


        </div>
    )
}