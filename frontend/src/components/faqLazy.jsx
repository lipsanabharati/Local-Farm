"use client";

import dynamic from "next/dynamic";

const Faq = dynamic(
  () => import("@/components/faq"),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

export default function FaqLazy() {
  return <Faq />;
}