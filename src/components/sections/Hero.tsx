"use client";

import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import ShaderBackground from "@/components/ui/shader-background";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden w-full">
      <ShaderBackground />
      <LampContainer>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center text-center max-w-4xl mx-auto z-50 relative mt-16"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6">
            Premium Digital <br className="hidden sm:block" /> Experiences
          </h1>
          
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-10">
            Building modern websites, AI solutions, and automation systems designed for performance, scalability, and exceptional user experience.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.a 
              href="#contact" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-black font-bold hover:bg-[#8aff5c] hover:shadow-[0_0_30px_rgba(124,255,79,0.5)] transition-all duration-300"
            >
              Start Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a 
              href="#portfolio" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-white font-medium hover:border-primary/50 hover:shadow-[0_0_20px_rgba(124,255,79,0.2)] hover:text-primary transition-all duration-300"
            >
              View Portfolio
            </motion.a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <motion.a 
              href="https://github.com/mriganshuks" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-white/80 text-sm font-medium hover:border-primary/50 hover:shadow-[0_0_15px_rgba(124,255,79,0.15)] hover:text-primary transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.4 5.4 0 0 0-1.5-3.8 5 5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.5 5 1.9 5 1.9a5 5 0 0 0-.1 3.8A5.4 5.4 0 0 0 3 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"/><path d="M9 18c-4.5 1.5-5-2.5-7-3"/></svg>
              GitHub
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/mriganshu-kumar-singh-578478379/" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-white/80 text-sm font-medium hover:border-primary/50 hover:shadow-[0_0_15px_rgba(124,255,79,0.15)] hover:text-primary transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              LinkedIn
            </motion.a>
          </div>
        </motion.div>
      </LampContainer>
    </section>
  );
}
