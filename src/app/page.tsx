"use client";

import { Hero } from "@/components/sections/Hero";
import { FounderMessage } from "@/components/sections/FounderMessage";
import { motion } from "framer-motion";
import { Code2, Paintbrush, Box, Zap, Rocket, Users, MessageSquare } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Home() {
  return (
    <>
      <Hero />
      <FounderMessage />
      
      {/* Services Section */}
      <section id="services" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow-white">Our Services</h2>
            <p className="text-white/60 max-w-2xl mx-auto">Comprehensive digital solutions to help your business scale and succeed in the modern web era.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Code2, title: "Full-Stack Development", desc: "End-to-end web applications built with Next.js, React, and Node.js." },
              { icon: Paintbrush, title: "Premium UI/UX Design", desc: "Stunning, conversion-optimized interfaces tailored to your brand." },
              { icon: Box, title: "3D Web Experiences", desc: "Immersive WebGL and Three.js integrations that wow your audience." },
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } } }}
                className="glass-panel p-8 rounded-2xl group"
              >
                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors border border-white/5 group-hover:border-primary/30">
                  <service.icon className="w-7 h-7 text-white/70 group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-glow transition-all">{service.title}</h3>
                <p className="text-white/60 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow-white">Featured Work</h2>
              <p className="text-white/60 max-w-xl">Selected concepts that show the kind of polished, conversion-ready digital work MG Webworks delivers.</p>
            </div>
            <Link href="#contact" className="text-primary hover:text-white transition-colors flex items-center gap-2 font-medium">
              View All Projects <ArrowRightIcon />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 — MG Visual (Featured) */}
            <motion.a
              href="https://mgvisual.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } } }}
              className="group relative block rounded-3xl overflow-hidden glass-panel aspect-video border-white/10 cursor-pointer transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_40px_rgba(124,255,79,0.15)]"
            >
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src="/portfolio/mg-visual-featured.webp"
                  alt="MG Visual — Creative Portfolio Website"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />

              <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 z-20 pointer-events-none">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-glow transition-all duration-300">
                  MG Visual
                </h3>
                <p className="text-white/50 text-sm font-medium mb-3">
                  Creative Portfolio Website
                </p>
                <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <span className="text-primary text-xs font-bold tracking-wide">
                    ↗ Live
                  </span>
                </div>
              </div>
            </motion.a>

            {/* Project 2 — MG Neon */}
            <motion.a
              href="https://mgneon.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } } }}
              className="group relative block rounded-3xl overflow-hidden glass-panel aspect-video border-white/10 cursor-pointer transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_40px_rgba(124,255,79,0.15)] hover:-translate-y-1"
            >
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src="/portfolio/mg-neon-featured.webp"
                  alt="MG Neon — AI Experience Platform"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />

              <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 z-20 pointer-events-none">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-glow transition-all duration-300">
                  MG Neon
                </h3>
                <p className="text-white/40 text-xs font-medium tracking-wide uppercase">
                  Coming Soon
                </p>
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="py-32 relative">
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="glass-panel p-12 md:p-20 rounded-[3rem] border-primary/20 relative overflow-hidden"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[100px] -z-10" />
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-glow-white">Ready to elevate your digital presence?</h2>
            <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto">
              Partner with MG Webworks to build high-performance, premium web experiences that convert visitors into customers.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://wa.me/918427144836" 
                target="_blank" 
                rel="noopener"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-black font-bold hover:bg-white hover:box-glow transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                WhatsApp Me
              </a>
              <a 
                href="mailto:hello@mgwebworks.com"
                className="w-full sm:w-auto px-8 py-4 rounded-xl glass-panel text-white font-medium hover:text-primary transition-all duration-300"
              >
                Send an Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function ArrowRightIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
