"use client";

import axios from "axios";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Staff() {
  const [staffs, setStaffs] = useState();

  useEffect(() => {
    axios
      .get(`http://api.localfarmnepal.com//api/staff`)
      .then((res) => {
        setStaffs(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        // console.error(err);
        setStaffs([]);
      });
  }, []);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-20 md:gap-20 lg:gap-30 mt-10 mb-20 p-10">
      {staffs?.map((staff, index) => (
        <div key={index} className="flex flex-col gap-2 items-center">
          <div
            className="rounded-full w-24 h-24 lg:w-40 lg:h-40 bg-cover bg-no-repeat relative overflow-hidden"
            // style={{
            //   backgroundImage: `url(http://api.localfarmnepal.com/${staff.imagePath})`,
            // }}
          >
            <Image
              src={`http://api.localfarmnepal.com/${staff.imagePath}`}
              alt="staff image"
              fill
              unoptimized
              className="object-cover -z-10"
            />
          </div>

          <div className="">
            <p className="text-[#93C553] text-lg text-center">{staff.name}</p>
            <p className="text-gray-600 text-xl -mt-1 text-center">
              {staff.position}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
