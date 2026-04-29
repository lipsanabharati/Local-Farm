



import ProductDesc from "@/components/productDesc";
import Carousel from "@/components/carousel";


export default async function ProductPage({params})
{
    const {id}=await params;

    const res = await fetch(`http://localhost:5000/api/products/${id}`, {
        cache: "no-store"
    });

    const product = await res.json();
    const categoryId = product.categoryId;

    return(
        <section className="mt-20 flex flex-col max-w-[1440px] items-center overflow-hidden">
            <ProductDesc id={id} />

            <div className="flex flex-row justify-center items-center bg-[url('/blogBg.svg')] bg-no-repeat lg:bg-contain bg-cover bg-position-[center_bottom_1rem] lg:bg-position-[center_bottom_6rem] md:bg-position-[center_bottom_0rem] p-1 md:p-15 w-screen max-w-[1440px] lg:mb-30 mb-20 lg:h-200 h-250">
                <Carousel  transparent={true} categoryId={categoryId}/>
            </div>
        </section>
    )
}