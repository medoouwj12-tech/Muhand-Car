"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  Car,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { DISPLAY_PHONE_NUMBER, INT_DISPLAY_PHONE_NUMBER, getQuickWhatsAppChatUrl } from "@/lib/whatsapp";

export const Footer: React.FC = () => {
  const { t, lang, dir } = useLanguage();

  const ArrowIcon = dir === "rtl" ? ChevronLeft : ChevronRight;

  const quickLinks = [
    { label: t("navHome"), href: "#hero" },
    { label: t("navServices"), href: "#services" },
    { label: t("navFleet"), href: "#fleet" },
    { label: t("navWhyUs"), href: "#why-us" },
    { label: t("navReviews"), href: "#reviews" },
    { label: t("navBooking"), href: "#booking" },
    { label: t("navLocation"), href: "#location" },
  ];

  const services = [
    { label: t("serviceWeddingTitle"), href: "#services" },
    { label: t("serviceVipTitle"), href: "#services" },
    { label: t("serviceTravelTitle"), href: "#services" },
    { label: t("serviceCorpTitle"), href: "#services" },
  ];

  return (
    <footer className="relative bg-obsidian-950 border-t border-gold-500/20 text-neutral-300 pt-16 pb-8 overflow-hidden">
      {/* Subtle gold ambient light glow */}
      <div className="absolute top-0 start-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 end-1/4 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gold-500/15">
          {/* Brand Info Column */}
          <div className="space-y-4">
            <Link href="#hero" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 to-gold-700 p-0.5 shadow-gold-sm">
                <div className="w-full h-full bg-obsidian-950 rounded-[10px] flex items-center justify-center">
                  <Car className="w-5 h-5 text-gold-400" />
                </div>
              </div>
              <div>
                <span className="text-xl font-black text-white">
                  {t("brandName")}
                </span>
                <span className="block text-xs font-semibold text-gold-400">
                  {t("brandSubtitle")}
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              {t("footerAboutDesc")}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-bold">
              <ShieldCheck className="w-4 h-4 text-gold-400" />
              <span>{t("bestPriceGuarantee")}</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold-400" />
              <span>{t("footerQuickLinks")}</span>
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-neutral-400 hover:text-gold-400 transition-colors flex items-center gap-1.5"
                  >
                    <ArrowIcon className="w-3.5 h-3.5 text-gold-500/60" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold-400" />
              <span>{t("footerServicesLinks")}</span>
            </h4>
            <ul className="space-y-2.5">
              {services.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-neutral-400 hover:text-gold-400 transition-colors flex items-center gap-1.5"
                  >
                    <ArrowIcon className="w-3.5 h-3.5 text-gold-500/60" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Plus Code Column */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold-400" />
              <span>{t("footerContactTitle")}</span>
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5 text-neutral-300">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">{t("address")}</p>
                  <p className="text-[11px] text-neutral-400">{t("addressFull")}</p>
                  <p className="text-[11px] text-gold-400 font-mono mt-0.5">Plus Code: 3Q9H+J5V</p>
                </div>
              </li>

              <li className="flex items-center gap-2.5 text-neutral-300">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <a
                  href={`tel:${DISPLAY_PHONE_NUMBER}`}
                  className="hover:text-gold-400 transition-colors font-bold text-white font-mono"
                >
                  {INT_DISPLAY_PHONE_NUMBER}
                </a>
              </li>

              <li className="flex items-center gap-2.5 text-neutral-300">
                <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a
                  href={getQuickWhatsAppChatUrl(undefined, lang)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors font-bold text-emerald-400"
                >
                  {DISPLAY_PHONE_NUMBER} (WhatsApp 24/7)
                </a>
              </li>

              <li className="flex items-center gap-2.5 text-neutral-300">
                <Clock className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span className="text-neutral-400">{t("contactCardHoursSub")}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>{t("footerRights")}</p>
          <div className="flex items-center gap-2 text-gold-400/80">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>{t("footerDesigned")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
