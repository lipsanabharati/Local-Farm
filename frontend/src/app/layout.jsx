"use client";

import Header from "../components/Header"
import Footer from "../components/Footer"
import "./globals.css"
import { CartProvider } from "@/context/CartContext";

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className="bg-[#F2F6E8] ">

       <CartProvider>
        <Header />
        <div className="flex flex-col items-center scroll-smooth">
         
        {children}
        <Footer />
        </div>
       </CartProvider>
      </body>
    </html>
  );
}
