"use client";

import Header from "../components/Header"
import Footer from "../components/Footer"
import "./globals.css"
import CartProvider from "@/context/CartContext";
import { ToastProvider } from "@/context/ToastContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className="bg-[#F2F6E8] ">
      <ToastProvider >
        <ToastContainer />
       <CartProvider>
        
        <Header />
        <div className="flex flex-col items-center scroll-smooth">
         
        {children}
        <Footer />
        </div>
        
        
       </CartProvider>
       </ToastProvider >
      </body>
    </html>
  );
}
