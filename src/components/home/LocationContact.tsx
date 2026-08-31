"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GoldButton } from "@/components/ui/GoldButton";
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  ExternalLink,
  Navigation,
} from "lucide-react";
import {
  DISPLAY_PHONE_NUMBER,
  INT_DISPLAY_PHONE_NUMBER,
  getQuickWhatsAppChatUrl,
} from "@/lib/whatsapp";

export const LocationContact: React.FC = () => {
  const { t, lang } = useLanguage();

  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=3Q9H%2BJ5V%2C+Qism+Minya%2C+Minya+Governorate+2426770";

  return (
    <section id="location" className="py-20 sm:py-28 bg-obsidian-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          tag={t("contactTag")}
          title={t("contactTitle")}
          subtitle={t("contactSubtitle")}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left / Top: Contact Info Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {/* Phone & WhatsApp Card */}
            <div className="p-6 rounded-3xl bg-obsidian-850 dark:bg-obsidian-850 light:bg-white border border-gold-500/20 hover:border-gold-500/50 transition-all shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-base text-neutral-900 dark:text-white">
                    {t("contactCardPhoneTitle")}
                  </h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    {t("contactCardPhoneSub")}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-gold-500/15">
                <a
                  href={`tel:${DISPLAY_PHONE_NUMBER}`}
                  className="text-lg font-black text-gold-400 hover:text-gold-300 font-mono"
                >
                  {INT_DISPLAY_PHONE_NUMBER}
                </a>
                <div className="flex gap-2">
                  <a
                    href={`tel:${DISPLAY_PHONE_NUMBER}`}
                    className="p-2 rounded-xl bg-gold-500/10 hover:bg-gold-500/20 text-gold-400 border border-gold-500/30 text-xs font-bold"
                    title={t("contactDirectCall")}
                  >
                    {t("contactDirectCall")}
                  </a>
                  <a
                    href={getQuickWhatsAppChatUrl(undefined, lang)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold"
                    title={t("contactWhatsAppChat")}
                  >
                    واتساب
                  </a>
                </div>
              </div>
            </div>

            {/* Location & Plus Code Card */}
            <div className="p-6 rounded-3xl bg-obsidian-850 dark:bg-obsidian-850 light:bg-white border border-gold-500/20 hover:border-gold-500/50 transition-all shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-base text-neutral-900 dark:text-white">
                    {t("contactCardLocTitle")}
                  </h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    {t("contactCardLocSub")}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-gold-500/15 space-y-2">
                <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-medium">
                  {t("addressFull")}
                </p>
                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="font-mono text-gold-400 font-bold">
                    Plus Code: 3Q9H+J5V
                  </span>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-gold-400 hover:text-gold-300 font-bold underline"
                  >
                    <span>{t("mapOpenInGoogle")}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Working Hours Card */}
            <div className="p-6 rounded-3xl bg-obsidian-850 dark:bg-obsidian-850 light:bg-white border border-gold-500/20 hover:border-gold-500/50 transition-all shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-base text-neutral-900 dark:text-white">
                    {t("contactCardHoursTitle")}
                  </h4>
                  <p className="text-xs text-emerald-400 font-bold">
                    ✓ {t("contactCardHoursSub")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right / Bottom: Embedded Google Map */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-gold-500/30 shadow-2xl relative min-h-[380px] lg:min-h-full flex flex-col">
            {/* Embedded Google Map iframe using Plus Code Location */}
            <iframe
              title="Muhand Car Location Minya"
              src="https://maps.google.com/maps?q=3Q9H%2BJ5V%2C+Qism+Minya%2C+Minya+Governorate+2426770&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              className="w-full h-full min-h-[380px] flex-1 border-0 filter contrast-105"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Map Overlay Action Badge */}
            <div className="absolute bottom-4 inset-x-4 flex items-center justify-between p-3 rounded-2xl bg-obsidian-950/90 backdrop-blur-md border border-gold-500/30">
              <div className="flex items-center gap-2 text-xs font-bold text-white">
                <Navigation className="w-4 h-4 text-gold-400" />
                <span>3Q9H+J5V, المنيا</span>
              </div>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-gold-500 text-obsidian-950 text-xs font-black hover:bg-gold-400 transition-colors flex items-center gap-1"
              >
                <span>{t("mapOpenInGoogle")}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
