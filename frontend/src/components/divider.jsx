import Image from "next/image"

export default function Divider()
{
    return (
        <section
                className="h-[500px] bg-[#F2F6E8] p-20 -mt-50 flex lg:flex-row-reverse lg:items-start lg:justify-start items-end justify-center w-full relative"
                // style={{
                //   backgroundImage: `url(/bgGrown.webp)`,
                //   backgroundSize: "cover",
                //   backgroundPosition: "center",
                //   backgroundRepeat: "no-repeat",
                // }}
              >
                  <Image
                          src="https://res.cloudinary.com/dpff5cxm3/image/upload/f_auto,q_60/v1779940989/bgGrown_j13xkp.webp"
                          alt="background"
                          fill
                          priority
                          className="object-cover"
                  />

                <div className="lg:w-1/3 md:w-1/2 h-[140px] lg:mt-30 lg:me-20 p-5 backdrop-blur-sm bg-white/10 border border-white/20 text-white rounded-xl md:text-[17px] text-[17px]">
                  Locally grown,naturally pure-our products carry the care of Nepali
                  farmers and the goodness of the soil.
                </div>
              </section>
        
    )
}