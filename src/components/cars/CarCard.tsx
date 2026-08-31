"use client";

import React from "react";
import { Car } from "@/data/carsData";
import { useLanguage } from "@/context/LanguageContext";
import { useBooking } from "@/context/BookingContext";
import { CarImageGallery } from "./CarImageGallery";
import { CarSpecsBadge } from "./CarSpecsBadge";
import { GoldButton } from "@/components/ui/GoldButton";
import { CheckCircle2, MessageCircle, CalendarCheck } from "lucide-react";
import { getQuickWhatsAppChatUrl } from "@/lib/whatsapp";

interface CarCardProps {
  car: Car;
}

export const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const { lang, t } = useLanguage();
  const { openBookingModal } = useBooking();

  const carName = lang === "ar" ? car.nameAr : car.nameEn;
  const badgeText = lang === "ar" ? car.badgeAr : car.badgeEn;
  const priceNote = lang === "ar" ? car.priceNoteAr : car.priceNoteEn;
  const description = lang === "ar" ? car.descriptionAr : car.descriptionEn;
  const features = lang === "ar" ? car.featuresAr : car.featuresEn;

  const handleBookClick = () => {
    openBookingModal(car.id, carName, car.category === "wedding" ? "wedding" : "vip");
  };

  const handleDirectWhatsApp = () => {
    const customMsg =
      lang === "ar"
        ? `مرحباً مهند كار، أود الاستفسار عن حجز سيارة (${car.nameAr}) ومعرفة الأسعار والمواعيد المتاحة.`
        : `Hello Muhand Car, I would like to inquire about booking the (${car.nameEn}) and check availability & rates.`;
    window.open(getQuickWhatsAppChatUrl(customMsg, lang), "_blank");
  };

  return (
    <div className="flex flex-col h-full rounded-2xl bg-obsidian-850 dark:bg-obsidian-850 light:bg-white border border-gold-500/20 hover:border-gold-500/60 transition-all duration-500 shadow-lg hover:shadow-gold-md group overflow-hidden">
      {/* Interactive Multi-Image Gallery */}
      <CarImageGallery
        images={car.images}
        carName={carName}
        badgeText={badgeText}
      />

      {/* Card Content */}
      <div className="flex flex-col flex-1 p-5 md:p-6 justify-between">
        <div>
          {/* Brand & Year Header */}
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-500">
              {car.brand}
            </span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-gold-500/10 text-gold-400 border border-gold-500/20">
              {car.modelYear}
            </span>
          </div>

          {/* Car Title */}
          <h3 className="text-lg sm:text-xl font-black text-neutral-900 dark:text-white group-hover:text-gold-400 transition-colors duration-300 mb-2 leading-snug">
            {carName}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 line-clamp-2 mb-3">
            {description}
          </p>

          {/* Specs Grid */}
          <CarSpecsBadge specs={car.specs} />

          {/* Top Features Tags */}
          <div className="space-y-1.5 my-3">
            {features.slice(0, 3).map((feat, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 text-xs text-neutral-700 dark:text-neutral-300"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-gold-500 flex-shrink-0" />
                <span className="truncate">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing & CTA Actions */}
        <div className="pt-4 border-t border-gold-500/15 mt-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <span className="block text-[11px] text-neutral-500 dark:text-neutral-400">
                {t("perTrip")}
              </span>
              <span className="text-sm font-black text-gold-400">
                {priceNote}
              </span>
            </div>
            <div className="text-end">
              <span className="inline-block text-[11px] font-semibold text-emerald-400">
                ✓ {t("bestPriceGuarantee")}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <GoldButton
              variant="primary"
              size="sm"
              onClick={handleBookClick}
              icon={<CalendarCheck className="w-4 h-4" />}
            >
              {t("carBookBtn")}
            </GoldButton>

            <GoldButton
              variant="whatsapp"
              size="sm"
              onClick={handleDirectWhatsApp}
              icon={<MessageCircle className="w-4 h-4" />}
            >
              {lang === "ar" ? "واتساب سريع" : "WhatsApp"}
            </GoldButton>
          </div>
        </div>
      </div>
    </div>
  );
};
