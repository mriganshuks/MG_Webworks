"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

export type Theme = "dark" | "minimalism" | "skeuomorphism" | "neomorphism" | "glassmorphism" | "maximalism";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.body.removeAttribute("data-design");
    } else {
      document.body.setAttribute("data-design", theme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}
