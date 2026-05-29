"use client";

import dynamic from "next/dynamic";

const Sustainable = dynamic(
  () => import("@/components/sustainable"),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

export default function SustainableLazy() {
  return <Sustainable />;
}