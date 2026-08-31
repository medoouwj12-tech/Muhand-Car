"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  ShieldCheck,
  Clock,
  UserCheck,
  MessageCircle,
  BadgePercent,
  Headphones,
  Sparkles,
} from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <ShieldCheck className="w-7 h-7 text-gold-400" />,
      title: t("why1Title"),
      desc: t("why1Desc"),
    },
    {
      icon: <Clock className="w-7 h-7 text-gold-400" />,
      title: t("why2Title"),
      desc: t("why2Desc"),
    },
    {
      icon: <UserCheck className="w-7 h-7 text-gold-400" />,
      title: t("why3Title"),
      desc: t("why3Desc"),
    },
    {
      icon: <MessageCircle className="w-7 h-7 text-gold-400" />,
      title: t("why4Title"),
      desc: t("why4Desc"),
    },
    {
      icon: <BadgePercent className="w-7 h-7 text-gold-400" />,
      title: t("why5Title"),
      desc: t("why5Desc"),
    },
    {
      icon: <Headphones className="w-7 h-7 text-gold-400" />,
      title: t("why6Title"),
      desc: t("why6Desc"),
    },
  ];

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-obsidian-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          tag={t("whyTag")}
          title={t("whyTitle")}
          subtitle={t("whySubtitle")}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-obsidian-850 dark:bg-obsidian-850 light:bg-white border border-gold-500/15 hover:border-gold-500/50 transition-all duration-300 shadow-md hover:shadow-gold-sm group"
            >
              <div className="w-14 h-14 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-gold-500/20 transition-all">
                {feat.icon}
              </div>

              <h3 className="text-lg font-black text-neutral-900 dark:text-white group-hover:text-gold-400 transition-colors mb-2.5">
                {feat.title}
              </h3>

              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-medium">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
