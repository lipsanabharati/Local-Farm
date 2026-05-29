"use client";

import dynamic from "next/dynamic";

const Why = dynamic(
  () => import("@/components/why"),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

export default function WhyLazy() {
  return <Why />;
}