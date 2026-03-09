"use client";

export default function Footer()
{
    return(
        <footer className="relative text-white -mt-10 md:-mt-20 max-w-screen">
           
            <svg width="1665" height="265" viewBox="0 0 1665 265" fill="none" xmlns="http://www.w3.org/2000/svg"
            className="md:flex hidden max-w-screen">
            <path d="M577.547 7.95513C551.531 4.97122 83.1972 -21.7459 0 43.2035V265H1665V41.9264C1557.65 19.8182 1289.78 8.56484 1048.12 24.4721C806.451 40.3794 603.562 10.939 577.547 7.95513Z" fill="#344304"/>
            </svg>

            <svg width="743" height="453" viewBox="0 0 743 453" fill="none" xmlns="http://www.w3.org/2000/svg"
            className="md:hidden flex max-w-screen">
            <path d="M257.728 13.5988C246.119 8.49798 37.1264 -37.1731 0 73.8536V453H743V71.6704C695.096 33.8778 575.56 14.641 467.718 41.8334C359.876 69.0259 269.337 18.6996 257.728 13.5988Z" fill="#344304"/>
            </svg>


            
            <div className="p-5 lg:p-10 absolute top-10 md:top-20 left-0 flex flex-col items-start md:items-center justify-center text-white font-body bg-[#344304] w-full gap-5">
               <div className="md:grid md:grid-cols-3 md:gap-10 lg:gap-60 flex flex-col gap-5">
                    
                    {/* Hours */}
                  <div className="flex flex-col gap-1 md:gap-2"> 
                    <div className="font-heading font-bold md:text-center text-start text-xl">
                        Hours
                    </div> 

                    <div className="flex flex-col">          
                        <p>Sun-Fri: 10am-5pm</p> 
                        <p>Sat: Closed</p> 
                    </div> 
                  </div>

                    {/* Location */} 
                <div className="flex flex-col gap-1">    <div className="font-heading font-bold md:text-center text-start text-xl">
                        Location
                </div> 
                    <div className="flex flex-col"> <p>Maharajgunj-03,Kathmandu</p> 
                    </div> 
                </div>

                    {/* Contact */} 
                    <div className="flex flex-col gap-1">    
                        <div className="font-heading font-bold md:text-center text-start text-xl">
                        Contact
                        </div> 
                        <div className="flex flex-col w-[200px]"> 
                            <p>9802512888, 9840298608,01-4373154</p> <p>localfarmnepal@gmail.com</p> 
                        </div> 
                    </div>

                </div>

                <img src="logo-white.svg" className="" /> 
                
            </div>
        </footer>

    );
};