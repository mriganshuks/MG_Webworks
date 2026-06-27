"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function FounderMessage() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glass-panel p-10 md:p-16 rounded-[2rem] border border-white/10 relative"
        >
          {/* Subtle neon border glow on hover handled by glass-panel utility class */}
          
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-10 text-center">
            Message From The Lead Developer
          </h2>

          <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
            
            {/* Avatar */}
            <div className="flex-shrink-0">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="w-32 h-32 rounded-full border-2 border-primary/50 p-2 relative shadow-[0_0_20px_rgba(124,255,79,0.25)] hover:shadow-[0_0_35px_rgba(124,255,79,0.45)] hover:border-primary/80 transition-all duration-300"
              >
                <div className="w-full h-full rounded-full overflow-hidden relative bg-white/5 ring-1 ring-primary/30">
                  <Image
                    src="/founder-profile.jpg"
                    alt="Mriganshu K. Singh — Lead Developer at MG Webworks"
                    fill
                    sizes="128px"
                    className="object-cover object-center"
                    priority
                  />
                </div>
                {/* Online indicator dot */}
                <div className="absolute bottom-2 right-2 w-4 h-4 bg-primary rounded-full border-2 border-[#050505] shadow-[0_0_10px_#7cff4f]" />
              </motion.div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-xl md:text-2xl text-white leading-relaxed mb-6 font-light italic">
                &quot;Our goal is to create fast, modern, and memorable digital experiences that turn visitors into customers because great websites aren&apos;t built just to look good, they&apos;re built to help businesses grow.&quot;
              </p>
              
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Mriganshu K. Singh</h3>
                <p className="text-primary font-medium text-sm">The Lead Developer, MG Webworks</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
