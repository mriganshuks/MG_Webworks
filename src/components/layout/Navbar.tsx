"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { GradientButton } from "@/components/ui/gradient-button";

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sections = ["services", "portfolio", "process", "contact"];
    const sectionElements = sections.map((id) => document.getElementById(id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px", // Trigger slightly before center
      }
    );

    sectionElements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      sectionElements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-2 sm:py-4 pointer-events-none"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between glass-panel rounded-xl sm:rounded-[2rem] px-4 sm:px-6 py-2 sm:py-3 transition-all duration-300 pointer-events-auto">
        <Link href="/" className="flex items-center gap-3 group transition-all duration-300">
          <Image
            src="/mg-webworks-logo.png"
            alt="MG Webworks logo"
            width={147}
            height={96}
            priority
            className="h-8 md:h-12 w-auto object-contain transition-all duration-300 group-hover:scale-[1.03] group-hover:drop-shadow-[0_0_14px_rgba(124,255,79,0.55)]"
          />
          <span className="font-bold text-lg tracking-wide hidden sm:block text-glow-white transition-all duration-300 group-hover:text-glow">
            MG WEBWORKS
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-2">
          <GradientButton 
            variant="nav" 
            size="sm" 
            asChild 
            data-active={activeSection === "services"}
            className="rounded-full px-5 py-2 font-medium"
          >
            <Link href="#services">Services</Link>
          </GradientButton>
          <GradientButton 
            variant="nav" 
            size="sm" 
            asChild 
            data-active={activeSection === "portfolio"}
            className="rounded-full px-5 py-2 font-medium"
          >
            <Link href="#portfolio">Portfolio</Link>
          </GradientButton>
          <GradientButton 
            variant="nav" 
            size="sm" 
            asChild 
            data-active={activeSection === "process"}
            className="rounded-full px-5 py-2 font-medium"
          >
            <Link href="#process">Process</Link>
          </GradientButton>
        </nav>
        
        <div className="flex items-center gap-4">
          <GradientButton variant="outline" size="sm" asChild>
            <Link href="#contact">
              Start Project
            </Link>
          </GradientButton>
        </div>
      </div>
    </motion.header>
  );
}
