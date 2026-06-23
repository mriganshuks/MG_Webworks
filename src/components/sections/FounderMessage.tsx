"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

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
            Message From The Founder
          </h2>

          <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
            
            {/* Avatar placeholder */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 rounded-full border-2 border-primary/30 p-2 relative">
                <div className="w-full h-full rounded-full bg-white/5 flex items-center justify-center overflow-hidden">
                  {/* Placeholder for image */}
                  <span className="text-4xl font-bold text-white/20">MKS</span>
                </div>
                {/* Online indicator dot */}
                <div className="absolute bottom-2 right-2 w-4 h-4 bg-primary rounded-full border-2 border-[#050505] shadow-[0_0_10px_#7cff4f]" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-xl md:text-2xl text-white leading-relaxed mb-8 font-light italic">
                "Our goal is to create fast, modern, and memorable digital experiences that turn visitors into customers because great websites aren't built just to look good, they're built to help businesses grow."
              </p>
              
              <div className="mb-10">
                <h3 className="text-lg font-bold text-white mb-1">Mriganshu K. Singh</h3>
                <p className="text-primary font-medium text-sm">Founder & Lead Developer, MG Webworks</p>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                {[
                  "Modern Design",
                  "Performance Focused",
                  "Mobile Optimized",
                  "Business Growth Driven"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-white/80">{item}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
