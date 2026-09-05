
import Image from "next/image"

export default function AboutContent()
{
    return(
        <section className="">
            <div className="text-md px-5 md:px-15 lg:px-30 lg:text-xl">
        Local Farm Nepal was built with a simple vision—to reconnect people with
        pure, natural food while uplifting the farmers who grow it. What started
        as a small initiative has grown into a trusted platform that brings
        high-quality organic products directly from local farms to your home.
      </div>

      <div className="text-md px-5 md:px-15 lg:px-30 lg:text-xl">
        Our journey is rooted in sustainability, transparency, and community
        impact. Every product you choose supports local farmers, preserves
        traditional practices, and promotes a healthier lifestyle for everyone.
      </div>

      <div className="w-full flex flex-row justify-start px-5 md:px-15 lg:px-30">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#609647] mt-5">
          Our Legacy
        </h1>
      </div>

      {/*Small screens */}
      <div className="flex flex-row gap-8 justify-center px-5 md:px-15 md:hidden">
        <Image 
        src="https://res.cloudinary.com/dpff5cxm3/image/upload/f_auto,q_60/v1779940393/a1_g60tl3.webp" 
        className="w-1/3 md:w-1/5" 
        alt="about image"
        width={500}
        height={500}/>
        <h1 className="text-2xl text-end lg:text-3xl font-bold text-[#609647] mt-5">
          Supporting Local Farmers all over Nepal
        </h1>
      </div>

      <div className="text-md px-5 md:px-15 text-end md:hidden">
        We work closely with farmers across Nepal, creating fair opportunities
        and ensuring they receive the value they deserve. By choosing Local
        Farm, you directly contribute to strengthening rural livelihoods and
        preserving agricultural traditions.
      </div>

      <div className="flex flex-row gap-8 justify-center px-5 md:px-15 mt-10 md:hidden">
        <h1 className="text-2xl lg:text-3xl font-bold text-[#609647] mt-5">
          Providing Quality Products
        </h1>
        <Image 
        src="https://res.cloudinary.com/dpff5cxm3/image/upload/f_auto,q_60/v1779940394/a2_ifefk0.webp" 
        className="w-1/3 md:w-1/5" 
        alt="about image"
        width={350}
        height={350} />
      </div>

      <div className="text-md px-5 md:hidden">
        Our products are carefully sourced, naturally processed, and
        quality-checked to maintain their authenticity. From farm to packaging,
        we ensure everything meets the highest standards of purity and
        freshness.
      </div>

      <div className="flex flex-row gap-8 justify-center px-5 mt-10 md:hidden">
        <Image 
        src="https://res.cloudinary.com/dpff5cxm3/image/upload/f_auto,q_60/v1779940394/a3_b3qf2p.webp" 
        className="w-1/3" 
        alt="about image"
        width={250}
        height={250} />
        <h1 className="text-2xl lg:text-3xl font-bold text-[#609647] mt-5 text-end">
          Committed to Sustainable Living
        </h1>
      </div>

      <div className="text-md text-end px-5 md:hidden">
        We believe in responsible farming and eco-friendly practices that
        protect both people and the planet. By promoting organic methods and
        reducing harmful chemicals, we are building a healthier future for
        generations to come.
      </div>

      {/*Medium and above screens */}
      <div className="hidden md:flex md:flex-row justify-center gap-10 px-15 lg:mt-20 lg:px-30">
        <Image 
        src="https://res.cloudinary.com/dpff5cxm3/image/upload/f_auto,q_60/v1779940393/a1_g60tl3.webp" 
        className="w-[50%]" 
        alt="about image"
         width={500}
        height={500}
         />

        <div className="flex flex-col w-[50%]">
          <h1 className="text-2xl text-end md:text-3xl lg:text-5xl font-bold text-[#609647] mt-5">
            Supporting Local Farmers all over Nepal
          </h1>
          <div className="text-md text-end lg:text-xl lg:mt-10">
            We work closely with farmers across Nepal, creating fair
            opportunities and ensuring they receive the value they deserve. By
            choosing Local Farm, you directly contribute to strengthening rural
            livelihoods and preserving agricultural traditions.
          </div>
        </div>
      </div>

      <div className="hidden md:flex md:flex-row justify-center gap-10 px-15 lg:px-30 lg:mt-20">
        <div className="flex flex-col w-[65%]">
          <h1 className="text-2xl text-end lg:text-3xl lg:text-5xl font-bold text-[#609647] mt-5">
            Providing Quality Products
          </h1>
          <div className="text-md text-end lg:text-xl lg:mt-10">
            Our products are carefully sourced, naturally processed, and
            quality-checked to maintain their authenticity. From farm to
            packaging, we ensure everything meets the highest standards of
            purity and freshness.
          </div>
        </div>

        <Image 
        src="https://res.cloudinary.com/dpff5cxm3/image/upload/f_auto,q_60/v1779940394/a2_ifefk0.webp" 
        className="w-[35%]" 
        alt="about image"
        width={350}
        height={350}/>
      </div>

      <div className="hidden md:flex md:flex-row justify-center gap-10 px-15 lg:px-30 lg:mt-20 ">
        <Image 
        src="https://res.cloudinary.com/dpff5cxm3/image/upload/f_auto,q_60/v1779940394/a3_b3qf2p.webp" 
        className="md:w-[40%] w-[25%]" 
        alt="about image"
        width={250}
        height={250} />

        <div className="flex flex-col w-[75%]">
          <h1 className="text-2xl text-end md:text-3xl lg:text-5xl font-bold text-[#609647] mt-5 mb-6">
            Committed to Sustainable Living
          </h1>
          <div className="text-md text-end lg:text-xl">
            We believe in responsible farming and eco-friendly practices that
            protect both people and the planet. By promoting organic methods and
            reducing harmful chemicals, we are building a healthier future for
            generations to come.
          </div>
        </div>
      </div>
        </section>
    )
}