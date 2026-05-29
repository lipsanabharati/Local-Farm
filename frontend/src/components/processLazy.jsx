"use client";

import dynamic from "next/dynamic";

const OurProcess = dynamic(
  () => import("@/components/process"),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

export default function OurProcessLazy() {
  return <OurProcess />;
}