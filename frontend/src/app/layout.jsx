"use client";

import Header from "../components/Header"
import Footer from "../components/Footer"
import "./globals.css"

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className="bg-[#F2F6E8] ">
        <Header />
        <div className="flex flex-col items-center">
         
        {children}
        <Footer />
        </div>
      </body>
    </html>
  );
}
