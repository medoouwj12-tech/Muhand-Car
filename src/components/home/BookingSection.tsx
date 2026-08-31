"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BookingForm } from "@/components/booking/BookingForm";
import { ShieldCheck, MessageCircle, PhoneCall, Sparkles } from "lucide-react";
import { DISPLAY_PHONE_NUMBER, getQuickWhatsAppChatUrl } from "@/lib/whatsapp";

export const BookingSection: React.FC = () => {
  const { t, lang } = useLanguage();

  return (
    <section id="booking" className="py-20 sm:py-28 bg-obsidian-900/70 relative">
      {/* Glow backgrounds */}
      <div className="absolute top-1/4 start-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 end-1/4 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          tag={t("bookingTag")}
          title={t("bookingTitle")}
          subtitle={t("bookingSubtitle")}
        />

        {/* Main Booking Container */}
        <div className="p-6 sm:p-10 rounded-3xl bg-obsidian-850 dark:bg-obsidian-850 light:bg-white border border-gold-500/30 shadow-2xl relative overflow-hidden">
          {/* Top highlight bar */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-700" />

          <BookingForm />
        </div>
      </div>
    </section>
  );
};
