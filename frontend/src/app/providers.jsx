"use client";

import dynamic from "next/dynamic";
import Header from "../components/Header";
import { usePathname } from "next/navigation";
import { AuthProvider } from "@/context/AuthContext";
import { ToastProvider } from "@/context/ToastContext";
import  CartProvider  from "@/context/CartContext";

const Footer = dynamic(() => import("../components/Footer"), {
  loading: () => <p>Loading...</p>,
});

const ToastContainer = dynamic(
  () => import("react-toastify").then((mod) => mod.ToastContainer),
  { loading: () => null }
);

export default function Providers({ children }) {
  const pathname = usePathname();
  return (
    <AuthProvider>
      <ToastProvider>
        <ToastContainer />
        <CartProvider>
          <Header />
          <div className="flex flex-col items-center scroll-smooth">
            {children}
            {!pathname.startsWith("/admin") && !pathname.startsWith("/login") && (
              <Footer />
            )}
          </div>
        </CartProvider>
      </ToastProvider>
    </AuthProvider>
  );
}