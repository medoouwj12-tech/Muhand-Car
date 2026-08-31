"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useBooking } from "@/context/BookingContext";
import { useLanguage } from "@/context/LanguageContext";
import { BookingForm } from "./BookingForm";
import { X, Sparkles, Car } from "lucide-react";

export const BookingModal: React.FC = () => {
  const { modalState, closeBookingModal } = useBooking();
  const { t } = useLanguage();

  if (!modalState.isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
        {/* Background Backdrop click */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeBookingModal}
          className="fixed inset-0"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-2xl bg-obsidian-850 border border-gold-500/30 rounded-3xl shadow-2xl overflow-hidden z-10 my-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative px-6 py-5 bg-gradient-to-r from-obsidian-900 via-obsidian-850 to-obsidian-900 border-b border-gold-500/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400">
                <Car className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-black text-white flex items-center gap-2">
                  <span>{t("modalTitle")}</span>
                  <Sparkles className="w-4 h-4 text-gold-400 animate-pulse" />
                </h3>
                <p className="text-xs text-neutral-400">
                  {modalState.selectedCarName ? modalState.selectedCarName : t("modalSubtitle")}
                </p>
              </div>
            </div>

            <button
              onClick={closeBookingModal}
              className="p-2 rounded-xl bg-white/5 hover:bg-gold-500/20 text-neutral-400 hover:text-gold-400 border border-white/5 hover:border-gold-500/30 transition-all"
              aria-label={t("modalClose")}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 max-h-[80vh] overflow-y-auto">
            <BookingForm
              preSelectedCarId={modalState.selectedCarId}
              preSelectedService={modalState.selectedService}
              onSuccess={closeBookingModal}
              isModal={true}
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
