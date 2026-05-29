
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import Providers from "./providers";
import {Geologica, Lora} from "next/font/google"

const geologica=Geologica({
  subsets:["latin"],
  variable: "--geologica",
  display:"swap"
})

const lora=Lora({
  subsets:["latin"],
  variable:"--lora",
  display:"swap"
})

export const metadata = {
  title: "Local Farm Nepal",
  description: "Local Farm Nepal connects farmers and buyers with fresh agricultural products and fair trade opportunities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-[#F2F6E8] ${lora.variable} ${geologica.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}