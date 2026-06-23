"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Activity, Zap, Shield } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
        
        {/* Left Side: Typography & CTA */}
        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Next-Gen Web Architecture
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-glow-white leading-[1.1]">
              Websites Built To <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400 text-glow">
                Grow Businesses.
              </span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-white/60 max-w-xl leading-relaxed"
          >
            We create high-performance websites, landing pages, and digital experiences that help businesses attract customers and grow online.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <Link 
              href="#contact" 
              className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-black font-bold hover:bg-white hover:box-glow transition-all duration-300"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="#portfolio" 
              className="px-8 py-4 rounded-xl glass-panel text-white font-medium hover:text-primary transition-all duration-300"
            >
              View Portfolio
            </Link>
          </motion.div>
        </div>

        {/* Right Side: 3D Mockup & Floating Cards */}
        <div className="relative h-[600px] w-full hidden lg:block">
          {/* Animated Glow Rings behind laptop */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-primary/20 border-dashed"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-emerald-500/20"
          />

          {/* 3D Laptop Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute inset-0 flex items-center justify-center z-10"
          >
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image 
                src="/laptop.png" 
                alt="3D Futuristic Laptop Mockup" 
                width={700} 
                height={700}
                className="drop-shadow-[0_0_50px_rgba(124,255,79,0.3)] object-contain"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Floating Analytics Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute top-20 right-0 z-20"
          >
            <div className="glass-panel p-4 rounded-xl flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Activity className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-white/60 uppercase font-medium">Conversion Rate</p>
                <p className="text-xl font-bold text-white">+48.5%</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute bottom-32 left-0 z-20"
          >
            <div className="glass-panel p-4 rounded-xl flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <Zap className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-xs text-white/60 uppercase font-medium">Page Speed</p>
                <p className="text-xl font-bold text-white">99/100</p>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
