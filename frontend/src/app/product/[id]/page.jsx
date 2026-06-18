import ProductDesc from "@/components/productDesc";

import dynamic from "next/dynamic";

// import Carousel from "@/components/carousel";
// const Carousel = dynamic(() => import("@/components/carousel"), {
//   ssr:false,
//   loading: () => <p>Loading...</p>,
// });

import CarouselLazy from "@/components/carouselLazy";

export default async function ProductPage({ params }) {
  const { id } = await params;

  const res = await fetch(`http://api.localfarmnepal.com/api/products/${id}`, {
    cache: "no-store",
  });

  const product = await res.json();
  const categoryId = product.categoryId;

  return (
    <section className="mt-20 flex flex-col max-w-[1440px] items-center overflow-hidden">
      <ProductDesc id={id} />

      <div className="flex flex-row justify-center items-center bg-[url('/blogBg.webp')] bg-no-repeat lg:bg-contain bg-cover bg-position-[center_bottom_1rem] lg:bg-position-[center_bottom_6rem] md:bg-position-[center_bottom_0rem] p-1 md:p-15 w-screen max-w-[1440px] lg:mb-30 mb-20 lg:h-200 h-250">
        <CarouselLazy transparent={true} categoryId={categoryId} />
      </div>
    </section>
  );
}
