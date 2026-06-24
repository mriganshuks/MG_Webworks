"use client";

import { motion } from "framer-motion";
import { ShinyText } from "@/components/ui/ShinyText";

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4";

const WHATSAPP_URL = "https://wa.me/918427144836";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/mriganshu-kumar-singh-578478379?utm_source=share_via&utm_content=profile&utm_medium=member_android";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] flex flex-col bg-black overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />

      <div className="relative z-10 flex-1 flex flex-col max-w-7xl mx-auto w-full px-6 pt-28 pb-12">
        {/* Top trust row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-6 mb-10 lg:mb-16"
        >
          <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-xl">
            We deliver transformative digital solutions that empower businesses with cutting-edge web
            experiences built to thrive globally.
          </p>
          <p className="text-white/80 text-sm md:text-base leading-relaxed lg:text-right lg:justify-self-end max-w-xl">
            Premium Experiences Built for Growth!
          </p>
        </motion.div>

        {/* Center hero */}
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/80 text-xs md:text-sm uppercase tracking-[0.2em] mb-6 md:mb-8"
          >
            Premium Digital Experiences
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-medium tracking-tighter leading-[0.85] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
          >
            <span className="block text-white">WE BUILD</span>
            <span className="block text-white">WEBSITES THAT</span>
            <span className="block">
              <ShinyText
                text="GROW BUSINESSES."
                className="font-medium"
                baseColor="#7cff4f"
                shineColor="#ffffff"
                speed={3}
                spread={100}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-8 md:mt-10 text-white/80 text-sm md:text-base max-w-2xl leading-relaxed"
          >
            Modern websites, high-performance experiences, and conversion-focused digital products
            built for ambitious brands.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap items-center justify-center gap-4 mt-10 md:mt-12"
          >
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 rounded-full bg-primary text-black font-bold text-sm md:text-base hover:bg-[#8aff5c] hover:shadow-[0_0_30px_rgba(124,255,79,0.45)] transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              WhatsApp
            </motion.a>
            <motion.a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 rounded-full bg-white/5 backdrop-blur-md border border-white/15 text-white font-medium text-sm md:text-base hover:border-primary/50 hover:text-primary hover:shadow-[0_0_20px_rgba(124,255,79,0.15)] transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              LinkedIn
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
