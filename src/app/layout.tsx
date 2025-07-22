import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
  subsets: ["latin", "devanagari"],
});

export const metadata: Metadata = {
  title: "Affiliate Business Marketing | Akinpelu Isreal",
  description: "Affiliate Busines Marketing website for Akinpelu Isreal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Navbar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
