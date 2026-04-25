"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { ChevronDown } from "lucide-react";

export default function Faq() {
  const [faqs, setFaqs] = useState([]);
  const [opened, setOpened] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/faqs`)
      .then((res) => {
        setFaqs(res.data);
      })
      .catch((err) => {
        console.error(err);
        setFaqs([]);
      });
  }, []);

  return (
    <section className="p-5">
        <h1 className="font-heading lg:text-5xl md:text-4xl text-2xl font-bold text-center text-[#609647] mb-10 lg:mb-20">Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div key={index} className=" flex flex-col lg:mb-12 gap-10  mb-5">
        <div className="flex flex-col gap-5">
          <div className="flex flex-row bg-white rounded-full p-5 py-3 shadow-md shadow-[#779768]/40">
            <div className="w-[80%] md:w-[90%] flex justify-start items-center text-[#4D641E] font-semibold lg:text-lg text-md ">{faq.question}</div>
            <button onClick={() => setOpened(opened === index ? null : index)}
                className={` w-10 h-10 flex items-center justify-center transition-transform duration-300 hover:cursor-pointer ${opened===index? "rotate-180": ""}`}>
                <ChevronDown className="text-[#93C553] lg:w-10 lg:h-10 w-8 h-8 "/>
            </button>
          </div>
          { opened==index && (
        <div className="flex flex-row w-full justify-center">
          <div className="bg-white rounded-md text-center p-4 mx-5 text-[#444444] lg:w-150 w-100 lg:text-lg text-md">{opened === index ? faq.answer : ""}</div>
          </div>
          )}
          </div>
        </div>
      ))}
    </section>
  );
}