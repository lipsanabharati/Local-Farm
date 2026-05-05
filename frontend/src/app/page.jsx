
import dynamic from "next/dynamic";

import Hero from "@/components/hero";
import About from "@/components/about";
import Quality from "@/components/quality";


const ProductsSection =dynamic(()=>import("@/components/productSection"),{
  loading:()=> <p>Loading...</p>
});

const OurProcess = dynamic(() => import("@/components/process"), {
  loading: () => <p>Loading...</p>,
});

const Carousel = dynamic(() => import("@/components/carousel"), {
  loading: () => <p>Loading...</p>,
});

const Faq = dynamic(() => import("@/components/faq"), {
  loading: () => <p>Loading...</p>,
});


const Global = dynamic(() => import("@/components/global"), {
  loading: () => <p>Loading...</p>,
});


const Sustainable = dynamic(() => import("@/components/sustainable"), {
  loading: () => <p>Loading...</p>,
});


const Divider = dynamic(() => import("@/components/divider"), {
  loading: () => <p>Loading...</p>,
});


const  Why = dynamic(() => import("@/components/why"), {
  loading: () => <p>Loading...</p>,
});


const ContactForm = dynamic(() => import("@/components/contactForm"), {
  loading: () => <p>Loading...</p>,
});

export default function Home() {


  

  return (
    <>
      {/*Hero section */}
      <Hero />

      {/*About us*/}
      <About />

      {/*We prioritize quality*/}
      <Quality />

      {/*Product Section*/}
      <section className="flex flex-col py-10 px-20 lg:gap-10 gap-5 font-body justify-items-center items-center bg-[#F2F6E8] max-w-[1440px]">
        <h1 className="font-heading lg:text-5xl md:text-3xl text-xl font-bold text-start text-[#4D641E] text-center">
          From Local Farms to Your Home
        </h1>

        <div className="lg:w-1/2 w-full">
          <p className="lg:text-2xl md:text-xl text-sm md:text-center">
            Locally sourced, naturally grown,and delivered fresh from our
            farmers to your doorstep.
          </p>
        </div>

        <ProductsSection />
      </section>

      {/*Divider*/}
      <Divider />
      
      {/*Sustainable Farming*/}
      <Sustainable />

      {/*Our Process */}
      <section className="lg:h-[300px] bg-[#F2F6E8] flex flex-col gap-10 items-center max-w-[1440px]">
        <h1 className="font-heading md:text-5xl text-3xl  font-bold  text-[#609647] text-center">
          Our Process
        </h1>

        <OurProcess />
      </section>

      {/*Why Localfarm?*/}
      <Why />

      <section className="max-w-[1440px] mb-30">
        <Carousel transparent={false} />
      </section>

      <section>
        <Faq />
      </section>

      <section>
        <Global />
      </section>

     {/*Contact form */}
     <ContactForm />
    </>
  );
}
