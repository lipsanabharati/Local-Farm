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
      <body className="bg-[#F2F6E8] ">
     <AuthProvider >
      <ToastProvider >
        <ToastContainer />
       <CartProvider>
        
        <Header />
        <div className="flex flex-col items-center scroll-smooth">
         
        {children}
        {!pathname.startsWith("/admin") && <Footer />}
        </div>
        
        
       </CartProvider>
       </ToastProvider >
       </AuthProvider>
      </body>
    </html>
  );
}
