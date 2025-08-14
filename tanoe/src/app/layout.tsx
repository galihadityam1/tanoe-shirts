import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tanoe de Attire",
  description: "E-commerce for buying your outfit",
  keywords: "E-commerce, clothing, shirts, fashion, men's wear, shopping online, Tanoe de Attire",
  robots: "index, follow",
  openGraph: {
    title: "Tanoe de Attire",
    description: "E-commerce for buying your outfit",
    url: "https://tanoe.vercel.app/",
    siteName: "Tanoe de Attire",
  },
};

export const viewport = {
  width: "device-width", 
  initialScale: 1,        
  maximumScale: 1,        
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="E-commerce for buying your outfit" />
        <meta name="keywords" content="E-commerce, clothing, shirts, fashion, men's wear, shopping online, Tanoe de Attire" />
        <meta name="author" content="Tanoe de Attire Team" />
        <meta name="robots" content="index, follow" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
