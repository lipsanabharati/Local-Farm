

import Blog from "@/components/blog";

// // import Carousel from "@/components/carousel";
// const Carousel = dynamic(() => import("@/components/carousel"), {
//   ssr:false,
//   loading: () => <p>Loading...</p>,
// });

import CarouselLazy from "@/components/carouselLazy";


export default async function BlogPage({params})
{
    const {slug}=await params;

    return(
       <section className="flex flex-col items-center mt-50 mb-20 lg:mt-60 gap-10 max-w-[1440px] overflow-hidden">
         <Blog slug={slug}/>
         
         <div className="md:mt-10 md:mb-20">
            <CarouselLazy transparent={false} />
        </div>
       </section>
    )
}