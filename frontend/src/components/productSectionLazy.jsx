"use client";

import dynamic from "next/dynamic";

const ProductsSection = dynamic(
  () => import("@/components/productSection"),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

export default function ProductsSectionLazy() {
  return <ProductsSection />;
}