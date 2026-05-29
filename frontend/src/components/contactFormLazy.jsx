"use client";

import dynamic from "next/dynamic";

const ContactForm = dynamic(
  () => import("@/components/contactForm"),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

export default function ContactFormLazy() {
  return <ContactForm />;
}