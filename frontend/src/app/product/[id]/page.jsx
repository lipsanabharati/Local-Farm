
import ProductDesc from "@/components/productDesc";
import Carousel from "@/components/carousel";

export default async function ProductPage({params})
{
    const {id}=await params;
    
    return(
        <section className="mt-10 flex flex-col max-w-[1440px] items-center">
            <ProductDesc id={id} />

            <div className="flex flex-row justify-center items-center bg-[url('/blogBg.svg')] bg-no-repeat bg-cover bg-position-[center_top_1rem] md:bg-position-[center_bottom_0rem] lg:h-screen p-1 md:p-15 w-screen lg:h-screen max-w-[1440px] ">
                <Carousel />
            </div>
        </section>
    )
}