"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { translations, TranslationKey } from "@/data/translations";

type Language = "ar" | "en";
type Direction = "rtl" | "ltr";

interface LanguageContextType {
  lang: Language;
  dir: Direction;
  toggleLang: () => void;
  setLang: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("ar");
  const [dir, setDir] = useState<Direction>("rtl");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem("muhand_lang") as Language | null;
    if (savedLang === "ar" || savedLang === "en") {
      setLangState(savedLang);
      const newDir = savedLang === "ar" ? "rtl" : "ltr";
      setDir(newDir);
      document.documentElement.setAttribute("dir", newDir);
      document.documentElement.setAttribute("lang", savedLang);
    } else {
      document.documentElement.setAttribute("dir", "rtl");
      document.documentElement.setAttribute("lang", "ar");
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    const newDir = newLang === "ar" ? "rtl" : "ltr";
    setDir(newDir);
    localStorage.setItem("muhand_lang", newLang);
    document.documentElement.setAttribute("dir", newDir);
    document.documentElement.setAttribute("lang", newLang);
  };

  const toggleLang = () => {
    setLang(lang === "ar" ? "en" : "ar");
  };

  const t = (key: TranslationKey): string => {
    const dict = translations[lang] || translations.ar;
    return (dict as Record<string, string>)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, dir, toggleLang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
