"use client";

import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-white xl:-mt-5 -mt-30 md:-mt-20 lg:-mt-5 w-screen">
      <svg
        // height="272"
        viewBox="0 0 2467 272"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="xl:flex md:hidden lg:hidden hidden xl:w-screen"
      >
        <path
          d="M855.741 14.0779C624.981 -3.78355 123.272 -15.6231 0 49.3263V271.123H2467V48.0491C2307.94 25.9409 1828 0.121094 1552.97 30.5948C1277.95 61.0686 1086.5 31.9393 855.741 14.0779Z"
          fill="#344304"
        />
      </svg>

      <svg
        width="1665"
        height="265"
        viewBox="0 0 1665 265"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="md:flex hidden xl:hidden w-screen lg:flex"
      >
        <path
          d="M577.547 7.95513C551.531 4.97122 83.1972 -21.7459 0 43.2035V265H1665V41.9264C1557.65 19.8182 1289.78 8.56484 1048.12 24.4721C806.451 40.3794 603.562 10.939 577.547 7.95513Z"
          fill="#344304"
        />
      </svg>

      <svg
        width="743"
        height="461"
        viewBox="0 0 743 461"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="md:hidden flex max-w-screen"
      >
        <path
          d="M257.728 20.8919C205.456 -2.07376 37.1264 -29.88 0 81.1467V460.293H743V78.9635C695.096 41.171 570.936 38.4611 467.718 49.1265C364.5 59.792 310 43.8575 257.728 20.8919Z"
          fill="#344304"
        />
      </svg>

      <div className="p-5 lg:p-10 md:-mt-30 -mt-70 md:top-20 left-0 flex flex-col items-start md:items-center justify-center text-white font-body bg-[#344304] w-full gap-5 tracking-wider">
        <div className="md:grid md:grid-cols-3 md:gap-10 lg:gap-60 flex flex-col gap-5">
          {/* Hours */}
          <div className="flex flex-col gap-1 md:gap-2 items-start">
            <div className="font-heading font-bold md:text-center text-start text-xl">
              Hours
            </div>

            <div className="flex flex-col leading-8">
              <p>Sun-Fri: 10am-5pm</p>
              <p>Sat: Closed</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex flex-col gap-1">
            <div className="font-heading font-bold md:text-center text-start text-xl">
              Location
            </div>
            <div className="flex flex-col leading-8">
              {" "}
              <p>Maharajgunj-03,Kathmandu</p>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-1 items-start leading-8">
            <div className="font-heading font-bold md:text-center text-start text-xl">
              Contact
            </div>
            <div className="flex flex-col w-[200px] ">
              <p>9802512888, 9840298608,01-4373154</p>{" "}
              <p>localfarmnepal@gmail.com</p>
              <div className="flex flex-row gap-5 mt-2">
                <FaInstagram
                  size={30}
                  color="#FFFFFF"
                  className="cursor-pointer"
                  onClick={() =>
                    window.open("https://www.instagram.com/localfarm.nepal/")
                  }
                ></FaInstagram>
                <FaFacebook
                  size={30}
                  color="#FFFFFF"
                  className="cursor-pointer"
                  onClick={() =>
                    window.open("https://www.facebook.com/localfarm.nepal")
                  }
                ></FaFacebook>
                <FaTiktok
                  size={30}
                  color="#FFFFFF"
                  className="cursor-pointer"
                  onClick={() =>
                    window.open("https://www.tiktok.com/@localfarm.nepal")
                  }
                ></FaTiktok>
                <FaWhatsapp
                  size={30}
                  color="#FFFFFF"
                  className="cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://wa.me/9779802512888?text=Hello%20LocalFarm%20Nepal!",
                      "_blank",
                    )
                  }
                ></FaWhatsapp>
              </div>
            </div>
          </div>
        </div>

        <img src="/logo-white.svg" className="w-60" />
      </div>
    </footer>
  );
}
