"use client";

import { motion } from "framer-motion";
import { Zap, TrendingUp, Smartphone } from "lucide-react";

const cards = [
  {
    icon: Zap,
    title: "Performance Focused",
    desc: "Lightning-fast load times and optimized experiences that keep visitors engaged.",
  },
  {
    icon: TrendingUp,
    title: "Business Growth Driven",
    desc: "Conversion-ready design built to turn traffic into customers and revenue.",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    desc: "Flawless responsive experiences across every screen size and device.",
  },
];

export function TrustSection() {
  return (
    <section className="py-20 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass-panel p-8 rounded-2xl border border-white/10 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(124,255,79,0.12)] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                <card.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
