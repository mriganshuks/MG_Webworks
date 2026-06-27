import Script from "next/script";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "MG Webworks | Premium Digital Agency",
  description: "Websites Built To Grow Businesses. Premium SaaS and Web3 digital experiences.",
  verification: {
    google: "UsIH7ALy3cNc8YwOkTsQOFADY7SG6nBMOlvmUD-npGQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased bg-background text-foreground min-h-screen flex flex-col relative`}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GT-K54MV9TD"
          strategy="beforeInteractive"
        />
        <Script id="google-analytics" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZWM0SFVCEG');
          `}
        </Script>

        {/* Cinematic Ambient Background */}
        <div className="fixed inset-0 z-0 pointer-events-none bg-grid-pattern">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/30 blur-[120px]" />
        </div>

        <div className="relative z-10 flex flex-col flex-1">
          <Navbar />
          {children}
          <Footer />
        </div>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GT-K54MV9TD"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZWM0SFVCEG');
          `}
        </Script>

      </body>
    </html>
  );
}
