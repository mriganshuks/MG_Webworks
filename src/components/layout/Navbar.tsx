"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between glass-panel rounded-2xl px-6 py-3 transition-all duration-300">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30 group-hover:bg-primary/30 group-hover:box-glow transition-all duration-300">
            <span className="text-primary font-bold text-xl tracking-tighter">MG</span>
          </div>
          <span className="font-bold text-lg tracking-wide hidden sm:block text-glow-white">
            MG WEBWORKS
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          <Link href="#services" className="hover:text-primary hover:text-glow transition-colors">Services</Link>
          <Link href="#portfolio" className="hover:text-primary hover:text-glow transition-colors">Portfolio</Link>
          <Link href="#process" className="hover:text-primary hover:text-glow transition-colors">Process</Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Link 
            href="#contact" 
            className="px-5 py-2.5 rounded-xl bg-primary/10 text-primary border border-primary/30 font-medium hover:bg-primary hover:text-black hover:box-glow transition-all duration-300"
          >
            Start Project
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
