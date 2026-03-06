"use client";

export default function Footer()
{
    return(
        <footer className="relative text-white -mt-32">
            {/*Wavy top*/}
            <svg height="182" viewBox="0 0 1280 182" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full ">
<path d="M360.547 7.95513C334.531 4.97122 -133.803 -21.7459 -217 43.2035V265H1448V41.9264C1340.65 19.8182 1072.78 8.56484 831.116 24.4721C589.451 40.3794 386.562 10.939 360.547 7.95513Z" fill="#344304"/>
</svg>

<svg height="182" viewBox="0 0 1280 182" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full ">
<path d="M360.547 7.95513C334.531 4.97122 -133.803 -21.7459 -217 43.2035V265H1448V41.9264C1340.65 19.8182 1072.78 8.56484 831.116 24.4721C589.451 40.3794 386.562 10.939 360.547 7.95513Z" fill="#344304"/>
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