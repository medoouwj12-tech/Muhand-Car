"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useBooking } from "@/context/BookingContext";
import { GoldButton } from "@/components/ui/GoldButton";
import { servicesData } from "@/data/servicesData";
import { carsData } from "@/data/carsData";
import {
  MessageCircle,
  PhoneCall,
  Sparkles,
  ShieldCheck,
  Clock,
  Car,
  ChevronDown,
  Calendar,
  Send,
} from "lucide-react";
import { DISPLAY_PHONE_NUMBER, getQuickWhatsAppChatUrl } from "@/lib/whatsapp";
import { motion } from "framer-motion";

export const HeroSection: React.FC = () => {
  const { t, lang } = useLanguage();
  const { openBookingModal } = useBooking();

  // Quick Bar State
  const [selectedService, setSelectedService] = useState("");
  const [selectedCar, setSelectedCar] = useState("");
  const [journeyDate, setJourneyDate] = useState("");

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openBookingModal(selectedCar || undefined, undefined, selectedService || undefined);
  };

  const handleDirectWhatsApp = () => {
    window.open(getQuickWhatsAppChatUrl(undefined, lang), "_blank");
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-center pt-24 sm:pt-28 pb-16 overflow-hidden bg-obsidian-950"
    >
      {/* Background Cinematic Image & Ambient Glows */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cars/0bcd3ce1-cad4-4d1b-a386-897ebf720402.jpeg"
          alt="Muhand Car Luxury Fleet"
          fill
          priority
          className="object-cover object-center opacity-25 filter brightness-[0.6] contrast-125 scale-105 animate-pulse-slow"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/80 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian-950 via-transparent to-obsidian-950" />
        {/* Radial Gold Flare */}
        <div className="absolute top-1/4 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Text Content */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs sm:text-sm font-black shadow-gold-sm backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-gold-400 animate-spin" style={{ animationDuration: "6s" }} />
            <span>{t("heroBadge")}</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.15]"
          >
            <span className="block">{t("heroTitlePart1")}</span>
            <span className="gold-text-gradient block mt-1">
              {t("heroTitlePart2")}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm sm:text-base md:text-xl text-neutral-300 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            {t("heroSubtitle")}
          </motion.p>

          {/* CTA Buttons Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2"
          >
            <GoldButton
              variant="primary"
              size="lg"
              onClick={handleDirectWhatsApp}
              icon={<MessageCircle className="w-5 h-5" />}
            >
              {t("heroCtaBook")}
            </GoldButton>

            <a href="#fleet">
              <GoldButton
                variant="secondary"
                size="lg"
                icon={<Car className="w-5 h-5" />}
              >
                {t("heroCtaFleet")}
              </GoldButton>
            </a>

            <a href={`tel:${DISPLAY_PHONE_NUMBER}`}>
              <GoldButton
                variant="outline"
                size="lg"
                icon={<PhoneCall className="w-5 h-5" />}
              >
                {t("heroCallUs")}
              </GoldButton>
            </a>
          </motion.div>
        </div>

        {/* Quick Reservation Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 sm:mt-14 max-w-4xl mx-auto"
        >
          <div className="p-4 sm:p-6 rounded-3xl bg-obsidian-900/90 backdrop-blur-xl border border-gold-500/30 shadow-2xl">
            <div className="flex items-center gap-2 mb-4 text-gold-400 font-bold text-xs sm:text-sm">
              <Sparkles className="w-4 h-4" />
              <span>{t("quickBarTitle")}</span>
            </div>

            <form
              onSubmit={handleQuickSubmit}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
            >
              {/* Service Select */}
              <div>
                <label className="block text-[11px] font-semibold text-neutral-400 mb-1">
                  {t("quickBarServiceLabel")}
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-obsidian-950 border border-gold-500/20 text-white text-xs font-medium focus:border-gold-400 outline-none"
                >
                  <option value="">{t("allServicesOpt")}</option>
                  {servicesData.map((s) => (
                    <option key={s.id} value={s.id}>
                      {lang === "ar" ? s.titleAr : s.titleEn}
                    </option>
                  ))}
                </select>
              </div>

              {/* Car Select */}
              <div>
                <label className="block text-[11px] font-semibold text-neutral-400 mb-1">
                  {t("quickBarCarLabel")}
                </label>
                <select
                  value={selectedCar}
                  onChange={(e) => setSelectedCar(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-obsidian-950 border border-gold-500/20 text-white text-xs font-medium focus:border-gold-400 outline-none"
                >
                  <option value="">{t("allCarsOpt")}</option>
                  {carsData.map((c) => (
                    <option key={c.id} value={c.id}>
                      {lang === "ar" ? c.nameAr : c.nameEn}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date */}
              <div>
                <label className="block text-[11px] font-semibold text-neutral-400 mb-1">
                  {t("quickBarDateLabel")}
                </label>
                <input
                  type="date"
                  value={journeyDate}
                  onChange={(e) => setJourneyDate(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-obsidian-950 border border-gold-500/20 text-white text-xs font-medium focus:border-gold-400 outline-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="flex items-end">
                <GoldButton
                  type="submit"
                  variant="primary"
                  size="md"
                  fullWidth
                  icon={<Send className="w-4 h-4" />}
                >
                  {t("quickBarAction")}
                </GoldButton>
              </div>
            </form>
          </div>
        </motion.div>

        {/* 4 Trust Feature Badges Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-12"
        >
          {[
            { icon: <Clock className="w-4 h-4 text-gold-400" />, text: t("heroFeature1") },
            { icon: <ShieldCheck className="w-4 h-4 text-gold-400" />, text: t("heroFeature2") },
            { icon: <Car className="w-4 h-4 text-gold-400" />, text: t("heroFeature3") },
            { icon: <Sparkles className="w-4 h-4 text-gold-400" />, text: t("heroFeature4") },
          ].map((feat, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 p-3 rounded-2xl bg-obsidian-900/60 backdrop-blur-md border border-gold-500/15 text-neutral-300 text-xs font-bold justify-center text-center"
            >
              {feat.icon}
              <span className="truncate">{feat.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
