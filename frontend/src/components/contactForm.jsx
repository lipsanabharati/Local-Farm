"use client"

import { useState,useEffect } from "react";
import { useToast } from "@/context/ToastContext";
import axios from "axios";
import emailjs from "@emailjs/browser";

export default function ContactForm()
{

    const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [message, setMessage] = useState("");
      const [followup, setFollowUp] = useState(false);
    
      const { showSuccess, showFail } = useToast();
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!name || !email || !message) {
          showFail("All fields are required.");
          return;
        }
        const contactData = {
          name,
          email,
          message,
          followup,
        };
    
        const templateParams = {
          name,
          email,
          message,
          followup: followup
            ? "Already replied to message."
            : "Not replied to message.",
        };
    
        try {
          await axios.post(
            `http://localhost:5000/api/contact`,
            contactData,
          );
    
          await emailjs.send(
            "service_otzi5fa",
            "template_cl2wv73",
            templateParams,
            "rfkYhs7TsWdRZUZu8",
          );
    
          showSuccess("Message Forwarded!");
        } catch (err) {
          // console.log(err);
          showFail("Message failed to send.");
        } finally {
          setName("");
          setEmail("");
          setMessage("");
        }
      };

    return(
         <section
        className="w-full py-20 md:px-20 -mb-10"
        style={{
          backgroundImage: `url(/formBg.svg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-[1440px] w-full flex flex-row md:justify-end items-start justify-center">
          <div className="backdrop-blur-lg bg-white/20 border border-white/30 shadow-xl rounded-2xl lg:p-10 p-5 lg:w-[400px] flex flex-col">
            <h2 className="lg:text-3xl text-xl font-bold text-white text-center mb-6">
              Contact Us!
            </h2>

            <form
              className="flex flex-col lg:gap-4 gap-2"
              onSubmit={handleSubmit}
            >
              {/* Full Name */}
              <div className="flex flex-col gap-2">
                <label className="text-black" htmlFor="name">Full Name</label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="p-3 rounded-lg bg-white/60 text-black outline-none focus:ring-2 focus:ring-white"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="text-black" htmlFor="email"> Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 rounded-lg bg-white/60 text-black outline-none focus:ring-2 focus:ring-white"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="text-black" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="p-3 rounded-lg bg-white/80 text-black outline-none focus:ring-2 focus:ring-white resize-none"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="mt-2 bg-[#609647] text-black font-semibold py-3 rounded-lg transition hover:cursor-pointer hover:bg-[#93C553]"
                aria-label="Send Message Button"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    )
}