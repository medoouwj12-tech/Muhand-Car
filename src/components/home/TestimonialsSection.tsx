"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Star, Quote } from "lucide-react";

export const TestimonialsSection: React.FC = () => {
  const { t } = useLanguage();

  const reviews = [
    {
      name: t("review1Name"),
      role: t("review1Role"),
      text: t("review1Text"),
      rating: 5,
    },
    {
      name: t("review2Name"),
      role: t("review2Role"),
      text: t("review2Text"),
      rating: 5,
    },
    {
      name: t("review3Name"),
      role: t("review3Role"),
      text: t("review3Text"),
      rating: 5,
    },
    {
      name: t("review4Name"),
      role: t("review4Role"),
      text: t("review4Text"),
      rating: 5,
    },
  ];

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-obsidian-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          tag={t("reviewsTag")}
          title={t("reviewsTitle")}
          subtitle={t("reviewsSubtitle")}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between p-6 rounded-3xl bg-obsidian-900/90 dark:bg-obsidian-900/90 light:bg-white border border-gold-500/20 hover:border-gold-400/60 transition-all duration-300 shadow-lg group relative"
            >
              <Quote className="absolute top-4 end-4 w-8 h-8 text-gold-500/10 group-hover:text-gold-500/20 transition-colors pointer-events-none" />

              <div>
                {/* 5-star rating */}
                <div className="flex items-center gap-1 mb-4 text-gold-400">
                  {[...Array(rev.rating)].map((_, sIdx) => (
                    <Star
                      key={sIdx}
                      className="w-4 h-4 fill-gold-400 text-gold-400"
                    />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed italic mb-6">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-gold-500/15 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-700 flex items-center justify-center text-obsidian-950 font-black text-sm">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900 dark:text-white group-hover:text-gold-400 transition-colors">
                    {rev.name}
                  </h4>
                  <span className="text-[11px] font-medium text-gold-500">
                    {rev.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
