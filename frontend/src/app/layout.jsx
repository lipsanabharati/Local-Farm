
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import Providers from "./providers";

export const metadata = {
  title: "Local Farm Nepal",
  description: "Local Farm Nepal connects farmers and buyers with fresh agricultural products and fair trade opportunities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#F2F6E8]">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}