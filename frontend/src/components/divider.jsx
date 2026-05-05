

export default function Divider()
{
    return (
        <section
                className="h-[500px] bg-[#F2F6E8] p-20 -mt-50 flex lg:flex-row-reverse lg:items-start lg:justify-start items-end justify-center w-full"
                style={{
                  backgroundImage: `url(/bgGrown.svg)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="lg:w-1/3 md:w-1/2 h-[140px] lg:mt-30 lg:me-20 p-5 backdrop-blur-sm bg-white/10 border border-white/20 text-white rounded-xl md:text-xl text-sm">
                  Locally grown,naturally pure-our products carry the care of Nepali
                  farmers and the goodness of the soil.
                </div>
              </section>
        
    )
}