"use client";

import dynamic from "next/dynamic";

const Carousel = dynamic(
  () => import("@/components/carousel"),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

export default function CarouselLazy({transparent,categoryId}) {
  return <Carousel transparent={transparent} categoryId={categoryId} />;
}