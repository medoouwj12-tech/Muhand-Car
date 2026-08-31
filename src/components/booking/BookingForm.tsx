"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { carsData } from "@/data/carsData";
import { servicesData } from "@/data/servicesData";
import { getWhatsAppBookingUrl, DISPLAY_PHONE_NUMBER } from "@/lib/whatsapp";
import { GoldButton } from "@/components/ui/GoldButton";
import {
  Send,
  PhoneCall,
  Car as CarIcon,
  Calendar,
  Clock,
  MapPin,
  User,
  Phone,
  FileText,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import confetti from "canvas-confetti";

interface BookingFormProps {
  preSelectedCarId?: string;
  preSelectedService?: string;
  onSuccess?: () => void;
  isModal?: boolean;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  preSelectedCarId,
  preSelectedService,
  onSuccess,
  isModal = false,
}) => {
  const { lang, t } = useLanguage();

  const [serviceType, setServiceType] = useState<string>("");
  const [carModel, setCarModel] = useState<string>("");
  const [pickupLocation, setPickupLocation] = useState<string>("");
  const [dropoffLocation, setDropoffLocation] = useState<string>("");
  const [pickupDate, setPickupDate] = useState<string>("");
  const [pickupTime, setPickupTime] = useState<string>("");
  const [withChauffeur, setWithChauffeur] = useState<boolean>(true);
  const [customerName, setCustomerName] = useState<string>("");
  const [customerPhone, setCustomerPhone] = useState<string>("");
  const [notes, setNotes] = useState<string>("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Initialize pre-selections
  useEffect(() => {
    if (preSelectedCarId) {
      const found = carsData.find((c) => c.id === preSelectedCarId);
      if (found) {
        setCarModel(lang === "ar" ? found.nameAr : found.nameEn);
        if (found.category === "wedding") {
          setServiceType(lang === "ar" ? "سيارات زفاف وتجهيز العرسان" : "Luxury Wedding Cars");
        } else if (found.category === "travel") {
          setServiceType(lang === "ar" ? "سفر ورحلات بين المحافظات والمطارات" : "Airport & Intercity Travel");
        } else {
          setServiceType(lang === "ar" ? "مشاوير VIP وانتقالات داخلية" : "Direct VIP City Trips");
        }
      }
    } else if (preSelectedService) {
      const s = servicesData.find((sd) => sd.key === preSelectedService || sd.id === preSelectedService);
      if (s) {
        setServiceType(lang === "ar" ? s.titleAr : s.titleEn);
      }
    } else {
      // default service
      setServiceType(lang === "ar" ? "سيارات زفاف وتجهيز العرسان" : "Luxury Wedding Cars");
    }

    // Default today's date
    const today = new Date().toISOString().split("T")[0];
    setPickupDate(today);
  }, [preSelectedCarId, preSelectedService, lang]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!customerName || !customerPhone || !pickupLocation) {
      alert(
        lang === "ar"
          ? "يرجى كتابة الاسم ورقم الهاتف ومكان التحرك لإتمام الحجز."
          : "Please fill in your Name, Phone number, and Pick-up Location."
      );
      return;
    }

    setIsSubmitting(true);
    setShowSuccessMessage(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#D4AF37", "#FFD700", "#FFF", "#AA771C"],
      });
    } catch {
      // ignore
    }

    const bookingUrl = getWhatsAppBookingUrl(
      {
        serviceType: serviceType || (lang === "ar" ? "خدمة عامة" : "General Service"),
        carModel: carModel || (lang === "ar" ? "أي سيارة متاحة بالأسطول" : "Any Available Fleet Car"),
        pickupLocation,
        dropoffLocation,
        pickupDate: pickupDate || new Date().toLocaleDateString(),
        pickupTime: pickupTime || (lang === "ar" ? "حسب الاتفاق" : "As Agreed"),
        withChauffeur,
        customerName,
        customerPhone,
        notes,
      },
      lang
    );

    setTimeout(() => {
      window.open(bookingUrl, "_blank");
      setIsSubmitting(false);
      if (onSuccess) {
        onSuccess();
      }
    }, 1200);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Service & Car Selection Step */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-gold-500/20 text-gold-400 font-bold text-sm">
          <CarIcon className="w-4 h-4 text-gold-400" />
          <span>{t("formStep1")}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Service Type */}
          <div>
            <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">
              {t("formServiceType")} *
            </label>
            <select
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-obsidian-900/80 border border-gold-500/30 text-neutral-900 dark:text-white focus:border-gold-400 focus:ring-1 focus:ring-gold-400 text-sm font-medium outline-none transition-all"
              required
            >
              {servicesData.map((svc) => (
                <option
                  key={svc.id}
                  value={lang === "ar" ? svc.titleAr : svc.titleEn}
                  className="bg-obsidian-900 text-white"
                >
                  {lang === "ar" ? svc.titleAr : svc.titleEn}
                </option>
              ))}
            </select>
          </div>

          {/* Car Model */}
          <div>
            <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">
              {t("formSelectCar")}
            </label>
            <select
              value={carModel}
              onChange={(e) => setCarModel(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-obsidian-900/80 border border-gold-500/30 text-neutral-900 dark:text-white focus:border-gold-400 focus:ring-1 focus:ring-gold-400 text-sm font-medium outline-none transition-all"
            >
              <option value="" className="bg-obsidian-900 text-white">
                {t("allCarsOpt")}
              </option>
              {carsData.map((c) => (
                <option
                  key={c.id}
                  value={lang === "ar" ? c.nameAr : c.nameEn}
                  className="bg-obsidian-900 text-white"
                >
                  {lang === "ar" ? c.nameAr : c.nameEn} ({c.brand})
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Date, Time, & Locations Step */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-gold-500/20 text-gold-400 font-bold text-sm">
          <MapPin className="w-4 h-4 text-gold-400" />
          <span>{t("formStep2")}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Pickup Location */}
          <div>
            <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">
              {t("formPickupLocation")} *
            </label>
            <div className="relative">
              <input
                type="text"
                required
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                placeholder={t("formPickupLocationPlh")}
                className="w-full px-4 py-3 rounded-xl bg-obsidian-900/80 border border-gold-500/30 text-neutral-900 dark:text-white placeholder-neutral-500 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 text-sm outline-none transition-all"
              />
            </div>
          </div>

          {/* Dropoff Location */}
          <div>
            <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">
              {t("formDropoffLocation")}
            </label>
            <div className="relative">
              <input
                type="text"
                value={dropoffLocation}
                onChange={(e) => setDropoffLocation(e.target.value)}
                placeholder={t("formDropoffLocationPlh")}
                className="w-full px-4 py-3 rounded-xl bg-obsidian-900/80 border border-gold-500/30 text-neutral-900 dark:text-white placeholder-neutral-500 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 text-sm outline-none transition-all"
              />
            </div>
          </div>

          {/* Date */}
          <div>
            <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">
              {t("formDate")} *
            </label>
            <div className="relative">
              <input
                type="date"
                required
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-obsidian-900/80 border border-gold-500/30 text-neutral-900 dark:text-white focus:border-gold-400 focus:ring-1 focus:ring-gold-400 text-sm outline-none transition-all"
              />
            </div>
          </div>

          {/* Time */}
          <div>
            <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">
              {t("formTime")}
            </label>
            <div className="relative">
              <input
                type="time"
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-obsidian-900/80 border border-gold-500/30 text-neutral-900 dark:text-white focus:border-gold-400 focus:ring-1 focus:ring-gold-400 text-sm outline-none transition-all"
              />
            </div>
          </div>
        </div>

        {/* Chauffeur Toggle */}
        <div className="p-3.5 rounded-xl bg-obsidian-900/50 border border-gold-500/20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span className="text-xs font-bold text-neutral-800 dark:text-neutral-200">
              {withChauffeur ? t("formWithChauffeur") : t("formWithoutChauffeur")}
            </span>
          </div>
          <button
            type="button"
            onClick={() => setWithChauffeur(!withChauffeur)}
            className={`px-3 py-1 text-xs font-bold rounded-lg border transition-all ${
              withChauffeur
                ? "bg-gold-500 text-black border-gold-400"
                : "bg-transparent text-neutral-400 border-neutral-600"
            }`}
          >
            {withChauffeur ? "✓ مفعّل" : "بدون سائق"}
          </button>
        </div>
      </div>

      {/* Customer Info Step */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-gold-500/20 text-gold-400 font-bold text-sm">
          <User className="w-4 h-4 text-gold-400" />
          <span>{t("formStep3")}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Customer Name */}
          <div>
            <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">
              {t("formName")} *
            </label>
            <input
              type="text"
              required
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder={t("formNamePlh")}
              className="w-full px-4 py-3 rounded-xl bg-obsidian-900/80 border border-gold-500/30 text-neutral-900 dark:text-white placeholder-neutral-500 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 text-sm outline-none transition-all"
            />
          </div>

          {/* Customer Phone */}
          <div>
            <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">
              {t("formPhone")} *
            </label>
            <input
              type="tel"
              required
              value={customerPhone}
              onChange={(e) => setCustomerPhone(e.target.value)}
              placeholder={t("formPhonePlh")}
              className="w-full px-4 py-3 rounded-xl bg-obsidian-900/80 border border-gold-500/30 text-neutral-900 dark:text-white placeholder-neutral-500 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 text-sm outline-none transition-all"
            />
          </div>
        </div>

        {/* Special Notes */}
        <div>
          <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">
            {t("formNotes")}
          </label>
          <textarea
            rows={2}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder={t("formNotesPlh")}
            className="w-full px-4 py-3 rounded-xl bg-obsidian-900/80 border border-gold-500/30 text-neutral-900 dark:text-white placeholder-neutral-500 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 text-sm outline-none transition-all resize-none"
          />
        </div>
      </div>

      {/* Success Notification Alert */}
      {showSuccessMessage && (
        <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 flex items-center gap-3 animate-fade-in">
          <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
          <span className="text-xs sm:text-sm font-bold">
            {t("formSuccessMsg")}
          </span>
        </div>
      )}

      {/* Submit Buttons */}
      <div className="pt-2 space-y-3">
        <GoldButton
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          disabled={isSubmitting}
          icon={<Send className="w-5 h-5" />}
        >
          {isSubmitting ? "جاري التجهيز..." : t("formSubmitBtn")}
        </GoldButton>

        <div className="flex items-center justify-center gap-2 text-xs text-neutral-400 pt-2">
          <span>{t("formOrCallUs")}</span>
          <a
            href={`tel:${DISPLAY_PHONE_NUMBER}`}
            className="inline-flex items-center gap-1 text-gold-400 hover:text-gold-300 font-bold underline transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>{DISPLAY_PHONE_NUMBER}</span>
          </a>
        </div>
      </div>
    </form>
  );
};
