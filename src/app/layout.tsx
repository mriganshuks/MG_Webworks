import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "MG Webworks | Premium Digital Agency",
  description:
    "We build websites that grow businesses. Premium web experiences, high-performance design, and conversion-focused digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased bg-black text-foreground min-h-screen flex flex-col relative`}>
        <div className="relative z-10 flex flex-col flex-1">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
