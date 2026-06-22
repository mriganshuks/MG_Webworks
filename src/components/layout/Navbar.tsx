"use client";
import Link from "next/link";
import { useTheme, Theme } from "@/components/theme-provider";

export function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="site-nav sticky top-0 z-50 flex items-center justify-between gap-[24px] w-[min(1180px,calc(100%-32px))] mx-auto mt-[14px] px-[18px] py-[12px] border border-[var(--line)] rounded-[8px] bg-[rgba(5,7,13,0.78)] shadow-[0_12px_40px_rgba(0,0,0,0.22)] backdrop-blur-[18px] transition-all duration-[360ms]">
      <Link href="/" className="brand inline-flex items-center gap-[10px] text-[0.98rem] font-[800] whitespace-nowrap">
        <div className="brand-mark grid place-items-center w-[34px] h-[34px] border border-[rgba(56,231,255,0.45)] rounded-[8px] bg-gradient-to-br from-[rgba(56,231,255,0.18)] to-[rgba(157,98,255,0.17)] text-[var(--cyan)] shadow-[0_0_22px_rgba(56,231,255,0.18)] transition-all duration-[360ms]">
          MG
        </div>
        Webworks
      </Link>
      <div className="nav-links flex items-center gap-[clamp(10px,3vw,28px)] text-[var(--muted-custom)] text-[0.92rem] font-[600] max-md:hidden">
        <Link href="/services" className="px-[2px] py-[8px] transition-colors hover:text-[var(--cyan)]">Services</Link>
        <Link href="/process" className="px-[2px] py-[8px] transition-colors hover:text-[var(--cyan)]">Process</Link>
        <Link href="/portfolio" className="px-[2px] py-[8px] transition-colors hover:text-[var(--cyan)]">Portfolio</Link>
        <Link href="/contact" className="px-[2px] py-[8px] transition-colors hover:text-[var(--cyan)]">Contact</Link>
      </div>
      <div className="nav-actions flex items-center gap-[18px]">
        <div className="design-switcher inline-flex items-center gap-[10px] min-h-[40px] pl-[13px] pr-[5px] py-[4px] border border-[var(--line)] rounded-[999px] bg-[var(--panel)] text-[var(--muted-custom)] text-[0.78rem] font-[800] whitespace-nowrap backdrop-blur-[12px] transition-all duration-[260ms]">
          Design:
          <select 
            className="min-h-[30px] max-w-[168px] border-0 rounded-[999px] px-[12px] bg-[var(--text-custom)] text-[var(--bg)] text-[0.78rem] outline-none cursor-pointer transition-all duration-[260ms]"
            value={theme}
            onChange={(e) => setTheme(e.target.value as Theme)}
          >
            <option value="dark">Dark</option>
            <option value="minimalism">Minimalism</option>
            <option value="skeuomorphism">Skeuomorphism</option>
            <option value="neomorphism">Neomorphism</option>
            <option value="glassmorphism">Glassmorphism</option>
            <option value="maximalism">Maximalism</option>
          </select>
        </div>
      </div>
    </nav>
  );
}
