"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function GlowHorizon({ className }: { className?: string }) {
  return (
    <div className={cn("relative w-full h-[400px] overflow-hidden flex items-end justify-center pointer-events-none", className)}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute bottom-0 w-[120%] h-[200px] bg-[var(--cyan)]/20 rounded-[100%] blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        className="absolute bottom-0 w-[80%] h-[100px] bg-[var(--violet)]/40 rounded-[100%] blur-2xl"
      />
      <div className="absolute bottom-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--cyan)] to-transparent shadow-[0_0_30px_var(--cyan)]" />
    </div>
  );
}
