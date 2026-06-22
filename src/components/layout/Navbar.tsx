"use client";
import Link from "next/link";
import { useTheme, Theme } from "@/components/theme-provider";

export function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <Link className="brand" href="/" aria-label="MG Webworks home">
        <span className="brand-mark">MG</span>
        <span>MG Webworks</span>
      </Link>
      <div className="nav-actions">
        <label className="design-switcher" htmlFor="design-system">
          <span>Design:</span>
          <select 
            id="design-system" 
            aria-label="Design System"
            value={theme}
            onChange={(e) => setTheme(e.target.value as Theme)}
          >
            <option value="minimalism">Minimalism</option>
            <option value="skeuomorphism">Skeuomorphism</option>
            <option value="neomorphism">Neomorphism</option>
            <option value="glassmorphism">Glassmorphism</option>
            <option value="maximalism">Maximalism</option>
            <option value="brutalism">Brutalism</option>
            <option value="liquid-glass">Liquid Glass</option>
            <option value="bento-grid">Bento Grid</option>
            <option value="special-ui">Special UI</option>
            <option value="claymorphism">Claymorphism</option>
            <option value="dark">Dark (Default)</option>
          </select>
        </label>
        <button 
          className="mode-toggle" 
          type="button" 
          aria-label="Toggle dark mode" 
          aria-pressed={theme === "dark"} 
          onClick={() => setTheme(theme === "dark" ? "claymorphism" : "dark")}
        >
          <span className="mode-icon" aria-hidden="true"></span>
          <span className="mode-text">{theme === 'dark' ? 'Dark' : 'Light'}</span>
        </button>
        <div className="nav-links">
          <Link href="/services">Services</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/process">Process</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
