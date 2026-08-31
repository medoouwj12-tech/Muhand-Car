"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useBooking } from "@/context/BookingContext";
import { servicesData, ServiceItem } from "@/data/servicesData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GoldButton } from "@/components/ui/GoldButton";
import {
  HeartHandshake,
  Crown,
  PlaneTakeoff,
  Briefcase,
  CheckCircle2,
  CalendarCheck,
  MessageCircle,
} from "lucide-react";
import { getQuickWhatsAppChatUrl } from "@/lib/whatsapp";

const iconMap = {
  HeartHandshake: HeartHandshake,
  Crown: Crown,
  PlaneTakeoff: PlaneTakeoff,
  Briefcase: Briefcase,
  Car: Crown,
  ShieldCheck: Crown,
};

export const ServicesSection: React.FC = () => {
  const { t, lang } = useLanguage();
  const { openBookingModal } = useBooking();

  return (
    <section id="services" className="py-20 sm:py-28 bg-obsidian-900/60 relative">
      {/* Background Decor */}
      <div className="absolute top-1/2 start-0 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 end-0 w-80 h-80 bg-gold-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          tag={t("servicesTag")}
          title={t("servicesTitle")}
          subtitle={t("servicesSubtitle")}
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Crown;
            const title = lang === "ar" ? service.titleAr : service.titleEn;
            const tagline = lang === "ar" ? service.taglineAr : service.taglineEn;
            const description = lang === "ar" ? service.descriptionAr : service.descriptionEn;
            const features = lang === "ar" ? service.featuresAr : service.featuresEn;

            const handleBook = () => {
              openBookingModal(service.recommendedCarId, undefined, title);
            };

            const handleWhatsApp = () => {
              const msg =
                lang === "ar"
                  ? `مرحباً مهند كار، أود الاستفسار وحجز خدمة (${service.titleAr}).`
                  : `Hello Muhand Car, I would like to inquire about and book (${service.titleEn}).`;
              window.open(getQuickWhatsAppChatUrl(msg, lang), "_blank");
            };

            return (
              <div
                key={service.id}
                className="flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-obsidian-850 dark:bg-obsidian-850 light:bg-white border border-gold-500/20 hover:border-gold-400/80 transition-all duration-500 shadow-xl hover:shadow-gold-md group relative overflow-hidden"
              >
                {/* Top Corner Glow */}
                <div className="absolute -top-12 -end-12 w-28 h-28 bg-gold-500/10 rounded-full blur-2xl group-hover:bg-gold-500/20 transition-all" />

                <div>
                  {/* Icon Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-400 via-gold-500 to-gold-700 p-0.5 shadow-gold-sm group-hover:scale-110 transition-transform duration-300">
                      <div className="w-full h-full bg-obsidian-950 rounded-[14px] flex items-center justify-center">
                        <IconComponent className="w-7 h-7 text-gold-400 group-hover:text-gold-300" />
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-gold-500/80">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-lg sm:text-xl font-black text-neutral-900 dark:text-white group-hover:text-gold-400 transition-colors mb-2 leading-snug">
                    {title}
                  </h3>

                  <p className="text-xs font-semibold text-gold-500 mb-3">
                    {tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                    {description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 pb-6 border-b border-gold-500/15">
                    {features.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-start gap-2 text-xs text-neutral-700 dark:text-neutral-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-6 space-y-2.5">
                  <GoldButton
                    variant="primary"
                    size="sm"
                    fullWidth
                    onClick={handleBook}
                    icon={<CalendarCheck className="w-4 h-4" />}
                  >
                    {t("bookNowBtn")}
                  </GoldButton>

                  <GoldButton
                    variant="whatsapp"
                    size="sm"
                    fullWidth
                    onClick={handleWhatsApp}
                    icon={<MessageCircle className="w-4 h-4" />}
                  >
                    {lang === "ar" ? "استفسار واتساب" : "WhatsApp Chat"}
                  </GoldButton>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
