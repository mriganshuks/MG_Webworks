"use client";

import { Hero } from "@/components/sections/Hero";
import { TrustSection } from "@/components/sections/TrustSection";
import { FounderMessage } from "@/components/sections/FounderMessage";
import { motion } from "framer-motion";
import { Code2, Paintbrush, Zap, Smartphone, Search, Layers, Rocket } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const WHATSAPP_URL = "https://wa.me/918427144836";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/mriganshu-kumar-singh-578478379?utm_source=share_via&utm_content=profile&utm_medium=member_android";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustSection />
      <FounderMessage />

      {/* Services Section */}
      <section id="services" className="py-24 relative overflow-hidden bg-black">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <p className="text-primary text-sm font-bold tracking-widest uppercase mb-4">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow-white">Our Services</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Comprehensive digital solutions to help your business scale and succeed in the modern web era.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Code2,
                title: "Website Development",
                desc: "Custom websites and web applications built with modern frameworks for speed and scale.",
              },
              {
                icon: Paintbrush,
                title: "UI/UX Design",
                desc: "Stunning, conversion-optimized interfaces tailored to your brand identity.",
              },
              {
                icon: Zap,
                title: "Performance Optimization",
                desc: "Lightning-fast experiences optimized for Core Web Vitals and user retention.",
              },
              {
                icon: Smartphone,
                title: "Responsive Design",
                desc: "Pixel-perfect layouts that adapt flawlessly across every device and screen.",
              },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } },
                }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="glass-panel p-8 rounded-2xl group border border-white/10 hover:border-primary/40 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors border border-white/5 group-hover:border-primary/30">
                  <service.icon className="w-7 h-7 text-white/70 group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-glow transition-all">
                  {service.title}
                </h3>
                <p className="text-white/60 leading-relaxed text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 relative bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <p className="text-primary text-sm font-bold tracking-widest uppercase mb-4">How We Work</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow-white">Our Process</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              A clear, collaborative approach from discovery to launch.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                step: "01",
                title: "Discover",
                desc: "We learn your business goals, audience, and vision to define a clear digital strategy.",
              },
              {
                icon: Layers,
                step: "02",
                title: "Design",
                desc: "Premium UI/UX crafted with precision, motion, and conversion-focused storytelling.",
              },
              {
                icon: Rocket,
                step: "03",
                title: "Deliver",
                desc: "High-performance builds, rigorous testing, and launch support for lasting results.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.12 } },
                }}
                whileHover={{ y: -6 }}
                className="glass-panel p-8 rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300"
              >
                <span className="text-primary text-sm font-bold tracking-widest">{item.step}</span>
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center my-5">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 relative bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          >
            <div>
              <p className="text-primary text-sm font-bold tracking-widest uppercase mb-4">Selected Work</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow-white">Featured Work</h2>
              <p className="text-white/60 max-w-xl">
                Selected concepts that show the kind of polished, conversion-ready digital work MG Webworks delivers.
              </p>
            </div>
            <Link
              href="#contact"
              className="text-primary hover:text-white transition-colors flex items-center gap-2 font-medium text-sm"
            >
              View All Projects <ArrowRightIcon />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <PortfolioCard
              href="https://mgvisual.vercel.app/"
              image="/portfolio/mg-visual-featured.webp"
              alt="MG Visual — Creative Portfolio Website"
              badge="FEATURED PROJECT"
              title="MG Visual"
              description="A modern visual portfolio experience focused on premium design, immersive interactions, smooth animations, and high-end digital presentation."
              showComingSoon={false}
              priority
            />
            <PortfolioCard
              href="https://mgneon.vercel.app/"
              image="/portfolio/mg-neon-featured.webp"
              alt="MG Neon — AI Experience Platform"
              badge="AI EXPERIENCE"
              title="MG Neon"
              description="An immersive AI-powered digital experience focused on futuristic design, intelligent interactions, and next-generation user experiences."
              showComingSoon={true}
            />
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="py-32 relative bg-black">
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="glass-panel p-12 md:p-20 rounded-[3rem] border border-primary/20 relative overflow-hidden hover:border-primary/40 hover:shadow-[0_0_50px_rgba(124,255,79,0.1)] transition-all duration-500"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[100px] -z-10 pointer-events-none" />

            <p className="text-primary text-sm font-bold tracking-widest uppercase mb-6">Get In Touch</p>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-glow-white tracking-tight">
              Ready to elevate your digital presence?
            </h2>
            <p className="text-lg text-white/60 mb-4 max-w-2xl mx-auto">
              Partner with MG Webworks to build high-performance, premium web experiences that convert visitors into customers.
            </p>
            <p className="text-white/50 text-sm mb-10">
              <a href="tel:+918427144836" className="hover:text-primary transition-colors">+91 8427144836</a>
              {" · "}
              <a href="mailto:hello@mgwebworks.com" className="hover:text-primary transition-colors">
                hello@mgwebworks.com
              </a>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-black font-bold hover:bg-[#8aff5c] hover:shadow-[0_0_30px_rgba(124,255,79,0.4)] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <WhatsAppIcon />
                WhatsApp
              </motion.a>
              <motion.a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto px-8 py-4 rounded-full glass-panel text-white font-medium hover:text-primary hover:border-primary/40 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <LinkedInIcon />
                LinkedIn
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

interface PortfolioCardProps {
  href: string;
  image: string;
  alt: string;
  badge: string;
  title: string;
  description: string;
  showComingSoon?: boolean;
  priority?: boolean;
}

function PortfolioCard({
  href,
  image,
  alt,
  badge,
  title,
  description,
  showComingSoon = false,
  priority = false,
}: PortfolioCardProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } } }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative block rounded-3xl overflow-hidden glass-panel aspect-video border border-white/10 cursor-pointer hover:border-primary/50 hover:shadow-[0_0_50px_rgba(124,255,79,0.18)]"
    >
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />

      {showComingSoon && (
        <div className="absolute top-6 left-6 z-20 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary/25 text-primary text-xs font-bold border border-primary/50 backdrop-blur-md shadow-[0_0_18px_rgba(124,255,79,0.45)]">
            Coming Soon
          </span>
        </div>
      )}

      <div className="absolute top-6 right-6 z-20 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
        <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary/20 text-primary text-xs font-bold border border-primary/40 backdrop-blur-md shadow-[0_0_15px_rgba(124,255,79,0.3)]">
          Live Website ↗
        </span>
      </div>

      <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 pointer-events-none">
        <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold mb-3 border border-primary/30 backdrop-blur-md">
          {badge}
        </div>
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-glow transition-all duration-300">
          {title}
        </h3>
        <p className="text-white/70 text-sm leading-relaxed max-w-md">{description}</p>
      </div>
    </motion.a>
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

function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
