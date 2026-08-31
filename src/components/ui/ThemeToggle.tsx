"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === "dark" ? t("lightMode") : t("darkMode")}
      title={theme === "dark" ? t("lightMode") : t("darkMode")}
      className="relative p-2.5 rounded-xl border border-gold-500/30 bg-obsidian-900/80 text-gold-400 hover:text-gold-300 hover:border-gold-400 hover:bg-obsidian-800 transition-all duration-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50 flex items-center justify-center group"
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {theme === "dark" ? (
          <Sun className="w-5 h-5 transition-transform duration-500 group-hover:rotate-90 text-gold-400" />
        ) : (
          <Moon className="w-5 h-5 transition-transform duration-500 group-hover:-rotate-12 text-gold-600" />
        )}
      </div>
    </button>
  );
};
