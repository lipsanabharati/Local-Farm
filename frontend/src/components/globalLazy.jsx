"use client";

import dynamic from "next/dynamic";

const Global = dynamic(
  () => import("@/components/global"),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

export default function GlobalLazy() {
  return <Global />;
}