"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export const EmailCapture = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  
  const targetText = isSubmitted 
    ? "You Will Receive Notifications By Email" 
    : "Enter Your Email Here For Early Access";

  useEffect(() => {
    if (!isFormOpen) {
      return;
    }
    
    let currentIndex = 0;
    setTimeout(() => setPlaceholder(""), 0); // Reset on open or state change
    
    const intervalId = setInterval(() => {
      if (currentIndex <= targetText.length) {
        setPlaceholder(targetText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 60);

    return () => clearInterval(intervalId);
  }, [isFormOpen, isSubmitted, targetText]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitted(true);
    setEmail("");
    
    // Reset back to button after 4 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setIsFormOpen(false);
    }, 4000);
  };

  return (
    <div className="flex items-center justify-center relative z-50 h-[56px] w-[340px]">
      <AnimatePresence mode="wait">
        {!isFormOpen ? (
          <motion.button
            key="button"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsFormOpen(true)}
            className="absolute inset-0 group flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-black font-bold hover:bg-[#8aff5c] hover:shadow-[0_0_30px_rgba(124,255,79,0.5)] transition-all duration-300 w-full"
          >
            Start Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            onSubmit={handleSubmit}
            className="absolute inset-0 flex items-center gap-2 pl-5 pr-1.5 py-1.5 rounded-xl bg-white/5 backdrop-blur-md border border-white/20 w-full focus-within:border-primary/50 focus-within:shadow-[0_0_20px_rgba(124,255,79,0.2)] transition-all duration-300"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder}
              disabled={isSubmitted}
              autoFocus
              className="flex-1 bg-transparent border-none outline-none text-white placeholder-white/50 text-sm font-medium w-full"
            />
            <button
              type="submit"
              disabled={isSubmitted || !email}
              className={cn(
                "flex items-center justify-center w-11 h-11 rounded-lg transition-all duration-300 shrink-0",
                isSubmitted 
                  ? "bg-emerald-500 text-white" 
                  : "bg-primary text-black hover:bg-[#8aff5c]"
              )}
            >
              {isSubmitted ? (
                <Check className="w-5 h-5" />
              ) : (
                <ArrowRight className="w-5 h-5" />
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};
