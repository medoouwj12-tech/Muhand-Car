"use client";

import React, { useState } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getQuickWhatsAppChatUrl, DISPLAY_PHONE_NUMBER } from "@/lib/whatsapp";
import { motion, AnimatePresence } from "framer-motion";

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, lang } = useLanguage();

  const quickMessages = [
    { text: t("floatingQuick1") },
    { text: t("floatingQuick2") },
    { text: t("floatingQuick3") },
  ];

  const handleSendMessage = (customText?: string) => {
    const url = getQuickWhatsAppChatUrl(customText, lang);
    window.open(url, "_blank");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 end-6 z-40 flex flex-col items-end">
      {/* Quick Chat Popover Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ duration: 0.25 }}
            className="mb-4 w-72 sm:w-80 rounded-2xl bg-obsidian-900 border border-emerald-500/40 shadow-2xl overflow-hidden text-white"
          >
            {/* Popover Header */}
            <div className="p-4 bg-gradient-to-r from-emerald-700 via-emerald-600 to-green-600 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="absolute bottom-0 end-0 w-2.5 h-2.5 bg-emerald-300 rounded-full border-2 border-emerald-800" />
                </div>
                <div>
                  <h4 className="font-bold text-sm leading-tight text-white">
                    {t("floatingTitle")}
                  </h4>
                  <p className="text-[11px] text-emerald-100">
                    {t("floatingSubtitle")}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Popover Body & Quick Options */}
            <div className="p-4 space-y-3 bg-obsidian-850">
              <p className="text-xs text-neutral-300">
                {lang === "ar"
                  ? "اختر سؤالاً سريعاً أو ابدأ المحادثة المباشرة:"
                  : "Choose a quick inquiry or start a direct conversation:"}
              </p>

              <div className="space-y-1.5">
                {quickMessages.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(item.text)}
                    className="w-full text-start p-2 rounded-xl bg-obsidian-900/90 border border-gold-500/20 hover:border-gold-400 hover:bg-gold-500/10 text-xs text-neutral-200 transition-all flex items-center justify-between group"
                  >
                    <span className="truncate">{item.text}</span>
                    <Send className="w-3 h-3 text-gold-400 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ms-1" />
                  </button>
                ))}
              </div>

              <button
                onClick={() => handleSendMessage()}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t("floatingStartChat")}</span>
              </button>

              <div className="text-center pt-1">
                <span className="text-[10px] text-neutral-400">
                  {DISPLAY_PHONE_NUMBER} • رد فوري 24/7
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chat on WhatsApp"
        className="relative w-14 h-14 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 text-white flex items-center justify-center shadow-lg hover:shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all duration-300 group cursor-pointer border-2 border-white/20"
      >
        {/* Pulsing Outer Ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping pointer-events-none" />

        <MessageCircle className="w-7 h-7 group-hover:rotate-12 transition-transform duration-300" />

        {/* Unread dot */}
        <span className="absolute top-0 end-0 w-4 h-4 bg-gold-400 rounded-full border-2 border-obsidian-950 flex items-center justify-center">
          <Sparkles className="w-2.5 h-2.5 text-obsidian-950" />
        </span>
      </button>
    </div>
  );
};
