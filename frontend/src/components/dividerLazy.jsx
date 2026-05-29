"use client";

import dynamic from "next/dynamic";

const Divider = dynamic(
  () => import("@/components/divider"),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

export default function DividerLazy() {
  return <Divider />;
}