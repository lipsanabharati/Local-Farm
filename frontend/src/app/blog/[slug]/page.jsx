import Blog from "@/components/blog";
import Carousel from "@/components/carousel";

export default async function BlogPage({params})
{
    const {slug}=await params;

    return(
       <section className="flex flex-col items-center mt-20 mb-0 lg:mt-35 gap-10 max-w-[1440px]">
         <Blog slug={slug}/>
         
         <div className="md:mt-10 md:mb-20">
            <Carousel />
        </div>
       </section>
    )
}