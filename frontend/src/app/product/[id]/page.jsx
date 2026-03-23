
import ProductDesc from "@/components/productDesc";
import Carousel from "@/components/carousel";

export default async function ProductPage({params})
{
    const {id}=await params;
    
    return(
        <section className="mt-10 flex flex-col max-w-[1440px] items-center">
            <ProductDesc id={id} />

            <div className="flex flex-row justify-center items-center bg-[url('/blogBg.svg')] bg-no-repeat lg:bg-contain bg-cover bg-position-[center_bottom_1rem] md:bg-position-[center_bottom_2rem]  p-1 md:p-15 w-screen max-w-[1440px] lg:mb-30 mb-20">
                <Carousel />
            </div>
        </section>
    )
}