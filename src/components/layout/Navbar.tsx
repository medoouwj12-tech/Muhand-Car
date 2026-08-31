"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useBooking } from "@/context/BookingContext";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { GoldButton } from "@/components/ui/GoldButton";
import {
  Menu,
  X,
  Car,
  PhoneCall,
  Sparkles,
  CalendarCheck,
} from "lucide-react";
import { DISPLAY_PHONE_NUMBER } from "@/lib/whatsapp";

export const Navbar: React.FC = () => {
  const { t, lang } = useLanguage();
  const { openBookingModal } = useBooking();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t("navHome"), href: "#hero" },
    { label: t("navServices"), href: "#services" },
    { label: t("navFleet"), href: "#fleet" },
    { label: t("navWhyUs"), href: "#why-us" },
    { label: t("navReviews"), href: "#reviews" },
    { label: t("navBooking"), href: "#booking" },
    { label: t("navLocation"), href: "#location" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        isScrolled
          ? "bg-obsidian-950/90 dark:bg-obsidian-950/90 light:bg-white/95 backdrop-blur-xl border-b border-gold-500/20 shadow-lg py-3"
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="#hero" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-gold-400 via-gold-500 to-gold-700 p-0.5 shadow-gold-sm group-hover:shadow-gold-md transition-all duration-300">
            <div className="w-full h-full bg-obsidian-950 rounded-[10px] flex items-center justify-center">
              <Car className="w-5 h-5 sm:w-6 sm:h-6 text-gold-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-black tracking-tight text-white dark:text-white group-hover:text-gold-400 transition-colors">
              {t("brandName")}
            </span>
            <span className="text-[10px] sm:text-xs font-semibold text-gold-400 tracking-wider">
              {t("brandSubtitle")}
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="text-xs xl:text-sm font-bold text-neutral-300 hover:text-gold-400 transition-colors relative py-1 group"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 inset-x-0 h-[2px] bg-gold-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
            </Link>
          ))}
        </nav>

        {/* Action Controls (Toggles & CTA) */}
        <div className="hidden sm:flex items-center gap-3">
          <ThemeToggle />
          <LanguageToggle />

          <GoldButton
            variant="primary"
            size="sm"
            onClick={() => openBookingModal()}
            icon={<CalendarCheck className="w-4 h-4" />}
          >
            {t("bookNowBtn")}
          </GoldButton>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-xl bg-obsidian-900 border border-gold-500/30 text-gold-400 hover:text-white"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-obsidian-950/98 border-b border-gold-500/30 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-bold text-neutral-200 hover:bg-gold-500/10 hover:text-gold-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="pt-4 border-t border-gold-500/20 space-y-3">
            <GoldButton
              variant="primary"
              size="md"
              fullWidth
              onClick={() => {
                setIsMobileMenuOpen(false);
                openBookingModal();
              }}
              icon={<CalendarCheck className="w-5 h-5" />}
            >
              {t("bookNowBtn")}
            </GoldButton>

            <a
              href={`tel:${DISPLAY_PHONE_NUMBER}`}
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-gold-500/30 text-gold-400 text-sm font-bold bg-obsidian-900/60"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{DISPLAY_PHONE_NUMBER}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
