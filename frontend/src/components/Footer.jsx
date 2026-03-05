"use client";

export default function Footer()
{
    return(
        <div className="relative bg-[url('/footer-box.svg')] bg-cover bg-center w-full h-[265px]">
            {/* Overlay text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-body mt-20">
                <div className="flex flex-row gap-60 mx-[10px]">
                     {/* Hours */}
                    <div className="flex flex-col gap-3">
                        <div className="font-heading font-bold text-center text-xl">Hours</div>
                        <div className="flex flex-col">
                            <p>Sun-Fri: 10am-5pm</p>
                            <p>Sat: Closed</p>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="flex flex-col gap-3">
                        <div className="font-heading font-bold text-center text-xl">Location</div>
                        <div className="flex flex-col">
                            <p>Maharajgunj-03,Kathmandu</p>
                        </div>
                    </div>

                     {/* Contact */}
                    <div className="flex flex-col gap-3">
                        <div className="font-heading font-bold text-center text-xl">Contact</div>
                        <div className="flex flex-col w-[200px]">
                            <p>9802512888, 9840298608,01-4373154</p>
                            <p>localfarmnepal@gmail.com</p>
                        </div>
                    </div>


                </div>
                <img src="logo-white.svg" className="mr-[5%]" />
            </div>

        </div>
    );
};