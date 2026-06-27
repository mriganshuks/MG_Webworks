"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Loader2, Check } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const whatsappNumber = "+918427144836";

export function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    timeline: "",
    projectDescription: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const validateForm = () => {
    const requiredFields: Array<keyof typeof formData> = [
      "fullName",
      "email",
      "phone",
      "projectType",
      "timeline",
      "projectDescription"
    ];

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const isValid = requiredFields.every((field) => {
      const value = formData[field].trim();
      if (field === "email") {
        return emailPattern.test(value);
      }
      return value.length > 0;
    });

    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus("loading");

    await new Promise((resolve) => setTimeout(resolve, 1400));

    const message = [
      "🚀 *New Project Inquiry*",
      "",
      "👤 Full Name:",
      formData.fullName.trim(),
      "",
      "📧 Email Address:",
      formData.email.trim(),
      "",
      "📱 Phone Number:",
      formData.phone.trim() || "Not provided",
      "",
      "🏢 Company / Brand:",
      formData.company.trim() || "Not provided",
      "",
      "💼 Project Type:",
      formData.projectType.trim() || "Not specified",
      "",
      "⏳ Project Timeline:",
      formData.timeline.trim() || "Not specified",
      "",
      "📝 Project Description:",
      formData.projectDescription.trim() || "Not provided",
      "",
      "━━━━━━━━━━━━━━━━━━━━━━",
      "",
      "Submitted from:",
      "MG Webworks Website"
    ].join("\n");

    const encodedMessage = encodeURIComponent(message);
    const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent || "");
    const whatsappUrl = isMobile
      ? `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${encodedMessage}`
      : `https://web.whatsapp.com/send?phone=${whatsappNumber.replace(/\D/g, "")}&text=${encodedMessage}`;

    setStatus("success");
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      company: "",
      projectType: "",
      timeline: "",
      projectDescription: ""
    });

    window.setTimeout(() => {
      window.location.href = whatsappUrl;
    }, 1800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow-white">Ready to elevate your digital presence?</h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Tell us about your project and we'll get back to you within 24 hours.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
          className="glass-panel p-8 md:p-12 rounded-[2rem] border-primary/20 relative overflow-hidden"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[100px] -z-10" />
          
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center py-16"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 border border-primary/40"
                >
                  <Check className="w-10 h-10 text-primary" />
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Project inquiry prepared successfully. Opening WhatsApp...</h3>
                <p className="text-white/60 max-w-md mx-auto">
                  Your lead details are being sent to the WhatsApp inbox for instant follow-up.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-white/80 text-sm font-medium">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-white/80 text-sm font-medium">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-white/80 text-sm font-medium">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all duration-300"
                      placeholder="+91 9876543210"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-white/80 text-sm font-medium">Company / Brand</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all duration-300"
                      placeholder="Your Company"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-white/80 text-sm font-medium">Project Type *</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all duration-300 cursor-pointer"
                    >
                      <option value="" className="bg-[#050505]">Select project type</option>
                      <option value="Business Website" className="bg-[#050505]">Business Website</option>
                      <option value="Portfolio" className="bg-[#050505]">Portfolio</option>
                      <option value="Landing Page" className="bg-[#050505]">Landing Page</option>
                      <option value="E-commerce" className="bg-[#050505]">E-commerce</option>
                      <option value="Web App" className="bg-[#050505]">Web App</option>
                      <option value="UI/UX Design" className="bg-[#050505]">UI/UX Design</option>
                      <option value="Other" className="bg-[#050505]">Other</option>
                    </select>
                  </div>


                  <div className="space-y-2">
                    <label className="text-white/80 text-sm font-medium">Project Timeline *</label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all duration-300 cursor-pointer"
                    >
                      <option value="" className="bg-[#050505]">Select timeline</option>
                      <option value="ASAP" className="bg-[#050505]">ASAP</option>
                      <option value="1-2 weeks" className="bg-[#050505]">1-2 weeks</option>
                      <option value="1 month" className="bg-[#050505]">1 month</option>
                      <option value="2-3 months" className="bg-[#050505]">2-3 months</option>
                      <option value="3+ months" className="bg-[#050505]">3+ months</option>
                    </select>
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label className="text-white/80 text-sm font-medium">Project Description *</label>
                    <textarea
                      name="projectDescription"
                      value={formData.projectDescription}
                      onChange={handleChange}
                      rows={4}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all duration-300 resize-none"
                      placeholder="Tell us about your project goals, requirements, and any specific features you need..."
                    />
                  </div>
                </div>


                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="flex-1 px-8 py-4 rounded-xl bg-primary text-black font-bold hover:bg-white hover:box-glow transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-primary disabled:hover:shadow-none"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Preparing lead...
                      </>
                    ) : (
                      "Submit Project →"
                    )}
                  </button>
                  
                  <a
                    href="https://wa.me/918427144836"
                    target="_blank"
                    rel="noopener"
                    className="flex-1 px-8 py-4 rounded-xl glass-panel text-white font-medium hover:text-primary transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-5 h-5" />
                    Chat on WhatsApp
                  </a>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
