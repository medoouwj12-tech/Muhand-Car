"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

export const LanguageToggle: React.FC = () => {
  const { lang, toggleLang, t } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      title={t("langSwitchTo")}
      aria-label={t("langSwitchTo")}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-gold-500/30 bg-obsidian-900/80 text-gold-400 hover:text-gold-300 hover:border-gold-400 hover:bg-obsidian-800 transition-all duration-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50 text-xs font-bold"
    >
      <Globe className="w-4 h-4 text-gold-400" />
      <span>{lang === "ar" ? "EN" : "عربي"}</span>
    </button>
  );
};
