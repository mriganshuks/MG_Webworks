"use client";

import { Hero } from "@/components/sections/Hero";
import { FounderMessage } from "@/components/sections/FounderMessage";
import { ContactForm } from "@/components/sections/ContactForm";
import { motion } from "framer-motion";
import { Code2, Paintbrush, Box } from "lucide-react";
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
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-glow-white">Featured Work</h2>
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
              whileHover={{ y: -8 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="group relative block rounded-3xl overflow-hidden glass-panel aspect-video border-white/10 cursor-pointer transition-all duration-400 hover:border-primary/50 hover:shadow-[0_0_60px_rgba(124,255,79,0.3)]"
            >
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src="/portfolio/mg-visual-featured.webp"
                  alt="MG Visual — Creative Portfolio Website"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-115"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-10 pointer-events-none" />

              {/* Floating LIVE badge */}
              <div className="absolute top-4 right-4 z-30 pointer-events-none">
                <div className="bg-primary/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-primary/40 shadow-[0_0_20px_rgba(124,255,79,0.4)]">
                  <span className="text-[#050505] text-xs font-bold tracking-wider flex items-center gap-1">
                    LIVE ↗
                  </span>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 z-20 pointer-events-none">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-glow transition-all duration-300">
                  MG Visual
                </h3>
                <p className="text-white/50 text-sm font-medium mb-3">
                  Creative Portfolio Website
                </p>
                <p className="text-white/60 text-sm font-medium sm:hidden">
                  Tap to Visit →
                </p>
                <p className="text-white/60 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:text-primary hidden sm:block">
                  Click to Visit Website →
                </p>
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
              whileHover={{ y: -8 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="group relative block rounded-3xl overflow-hidden glass-panel aspect-video border-white/10 cursor-pointer transition-all duration-400 hover:border-primary/50 hover:shadow-[0_0_60px_rgba(124,255,79,0.3)]"
            >
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src="/portfolio/mg-neon-featured.webp"
                  alt="MG Neon — AI Experience Platform"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-115"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-10 pointer-events-none" />

              {/* Floating LIVE badge */}
              <div className="absolute top-4 right-4 z-30 pointer-events-none">
                <div className="bg-primary/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-primary/40 shadow-[0_0_20px_rgba(124,255,79,0.4)]">
                  <span className="text-[#050505] text-xs font-bold tracking-wider flex items-center gap-1">
                    LIVE ↗
                  </span>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 z-20 pointer-events-none">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-glow transition-all duration-300">
                  MG Neon
                </h3>
                <p className="text-white/50 text-sm font-medium mb-3">
                  AI Experience Platform
                </p>
                <p className="text-white/60 text-sm font-medium sm:hidden">
                  Tap to Visit →
                </p>
                <p className="text-white/60 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:text-primary hidden sm:block">
                  Click to Visit Website →
                </p>
              </div>
            </motion.a>
            {/* Project 3 — MG Magic */}
            <motion.a
              href="https://mgmagic.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } } }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="group relative block rounded-3xl overflow-hidden glass-panel aspect-video border-white/10 cursor-pointer transition-all duration-400 hover:border-primary/50 hover:shadow-[0_0_60px_rgba(124,255,79,0.3)]"
            >
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src="/portfolio/mg-magic.jpg"
                  alt="MG Magic — AI Creative Platform"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-115"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-10 pointer-events-none" />

              {/* Floating LIVE badge */}
              <div className="absolute top-4 right-4 z-30 pointer-events-none">
                <div className="bg-primary/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-primary/40 shadow-[0_0_20px_rgba(124,255,79,0.4)]">
                  <span className="text-[#050505] text-xs font-bold tracking-wider flex items-center gap-1">
                    LIVE ↗
                  </span>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 z-20 pointer-events-none">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-glow transition-all duration-300">
                  MG Magic
                </h3>
                <p className="text-white/50 text-sm font-medium mb-3">
                  AI Creative Platform
                </p>
                <p className="text-white/60 text-sm font-medium sm:hidden">
                  Tap to Visit →
                </p>
                <p className="text-white/60 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:text-primary hidden sm:block">
                  Click to Visit Website →
                </p>
              </div>
            </motion.a>

            {/* Project 4 — MG Satoru */}
            <motion.a
              href="https://mgsatoru.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } } }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="group relative block rounded-3xl overflow-hidden glass-panel aspect-video border-white/10 cursor-pointer transition-all duration-400 hover:border-primary/50 hover:shadow-[0_0_60px_rgba(124,255,79,0.3)]"
            >
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src="/portfolio/mg-satoru.jpg"
                  alt="MG Satoru — AI Workspace"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-115"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-10 pointer-events-none" />

              {/* Floating LIVE badge */}
              <div className="absolute top-4 right-4 z-30 pointer-events-none">
                <div className="bg-primary/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-primary/40 shadow-[0_0_20px_rgba(124,255,79,0.4)]">
                  <span className="text-[#050505] text-xs font-bold tracking-wider flex items-center gap-1">
                    LIVE ↗
                  </span>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 z-20 pointer-events-none">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-glow transition-all duration-300">
                  MG Satoru
                </h3>
                <p className="text-white/50 text-sm font-medium mb-3">
                  AI Workspace
                </p>
                <p className="text-white/60 text-sm font-medium sm:hidden">
                  Tap to Visit →
                </p>
                <p className="text-white/60 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:text-primary hidden sm:block">
                  Click to Visit Website →
                </p>
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      <ContactForm />
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
