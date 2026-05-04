"use client";

import Header from "../components/Header"
import Footer from "../components/Footer"
import "./globals.css"
import CartProvider from "@/context/CartContext";
import { ToastProvider } from "@/context/ToastContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "@/context/AuthContext";
import { usePathname } from "next/navigation";

export default function RootLayout({children}) {
  const pathname=usePathname();
  return (
    <html lang="en">
      <head>
        <title>Local Farm Nepal</title>
        <meta
          name="description"
          content="Local Farm Nepal connects farmers and buyers with fresh agricultural products and fair trade opportunities."
         
        />
      </head>
      <body className="bg-[#F2F6E8] ">
     <AuthProvider >
      <ToastProvider >
        <ToastContainer />
       <CartProvider>
        
        <Header />
        <div className="flex flex-col items-center scroll-smooth">
         
        {children}
        {(!pathname.startsWith("/admin")&&!pathname.startsWith("/login")) && <Footer />}
        </div>
        
        
       </CartProvider>
       </ToastProvider >
       </AuthProvider>
      </body>
    </html>
  );
}
