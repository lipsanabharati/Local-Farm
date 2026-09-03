

import dynamic from "next/dynamic";

import Hero2 from "@/components/hero2";
import About from "@/components/about";
import Quality from "@/components/quality";


// const ProductsSection = dynamic(()=>import("@/components/productSection"),{
//   ssr:false,
//   loading:()=> <p>Loading...</p>
// }); 

import ProductsSectionLazy from "@/components/productSectionLazy";

// const OurProcess = dynamic(() => import("@/components/process"), {
//   ssr:false,
//   loading: () => <p>Loading...</p>,
// }); 

import OurProcessLazy from "@/components/processLazy";

// const Carousel = dynamic(() => import("@/components/carousel"), {
  // ssr:false,
  // loading: () => <p>Loading...</p>,
// });

import CarouselLazy from "@/components/carouselLazy";

// const Faq = dynamic(() => import("@/components/faq"), {
//   ssr:false,
//   loading: () => <p>Loading...</p>,
// });

import FaqLazy from "@/components/faqLazy";

// const Global = dynamic(() => import("@/components/global"), {
//   ssr:false,
//   loading: () => <p>Loading...</p>,
// });

import GlobalLazy from "@/components/globalLazy";


// const Sustainable = dynamic(() => import("@/components/sustainable"), {
//   ssr:false,
//   loading: () => <p>Loading...</p>,
// });

import SustainableLazy from "@/components/sustainableLazy";

// const Divider = dynamic(() => import("@/components/divider"), {
//   ssr:false,
//   loading: () => <p>Loading...</p>,
// }); 

import DividerLazy from "@/components/dividerLazy";


// const  Why = dynamic(() => import("@/components/why"), {
//   ssr:false,
//   loading: () => <p>Loading...</p>,
// });

import WhyLazy from "@/components/whyLazy";

// const ContactFormLazy = dynamic(() => import("@/components/contactFormLazy"), {
//   ssr:false,
//   loading: () => <p>Loading...</p>,
// }); 

import ContactFormLazy from "@/components/contactFormLazy";


export default function Home() {


  

  return (
    <div className="overflow-hidden">
      {/*Hero section */}
      <Hero2 />

      {/*About us*/}
      <About />

      {/*We prioritize quality*/}
      <Quality />

      {/*Product Section*/}
      <section className="flex flex-col py-10 px-20 lg:gap-10 gap-5 font-body justify-items-center items-center bg-[#F2F6E8] max-w-[1440px] mx-auto">
        <h1 className="font-heading lg:text-[56px] md:text-[36px] text-xl font-bold text-start text-[#4D641E] lg:text-center">
          From Local Farms to Your Home
        </h1>

        <div className="lg:w-1/2 w-full">
          <p className="lg:text-[17px] md:text-[17px] text-sm md:text-center">
            Locally sourced, naturally grown,and delivered fresh from our
            farmers to your doorstep.
          </p>
        </div>

      <ProductsSectionLazy />
      </section>

      {/*Divider*/}
      <DividerLazy />
      
      {/*Sustainable Farming*/}
      <SustainableLazy />

      {/*Our Process */}
      <section className="lg:h-[300px] bg-[#F2F6E8] flex flex-col gap-10 items-center max-w-[1440px] mx-auto">
        <h1 className="font-heading md:text-5xl text-3xl  font-bold  text-[#609647] text-center">
          Our Process
        </h1>

        <OurProcessLazy />
      </section>

      {/*Why Localfarm?*/}
      <WhyLazy />

      <section className="max-w-[1440px] mx-auto mb-30">
        <CarouselLazy transparent={false} />
      </section>

      <section>
        <FaqLazy />
      </section>

      <section>
        <GlobalLazy />
      </section>

     {/*Contact form */}
     <ContactFormLazy />
    </div>
  );
}
