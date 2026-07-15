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
        </motion.div>
      </LampContainer>
    </section>
  );
}
