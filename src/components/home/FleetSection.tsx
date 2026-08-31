"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { carsData, Car } from "@/data/carsData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CarCard } from "@/components/cars/CarCard";
import { Sparkles, Layers } from "lucide-react";

type CategoryFilter = "all" | "wedding" | "vip" | "travel" | "suv";

export const FleetSection: React.FC = () => {
  const { t, lang } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("all");

  const categories: { id: CategoryFilter; label: string }[] = [
    { id: "all", label: t("categoryAll") },
    { id: "wedding", label: t("categoryWedding") },
    { id: "vip", label: t("categoryVIP") },
    { id: "travel", label: t("categoryTravel") },
    { id: "suv", label: t("categorySUV") },
  ];

  const filteredCars = carsData.filter((car) => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === "wedding") return car.category === "wedding";
    if (selectedCategory === "vip") return car.category === "vip";
    if (selectedCategory === "travel") return car.category === "travel" || car.category === "suv";
    if (selectedCategory === "suv") return car.category === "suv";
    return true;
  });

  return (
    <section id="fleet" className="py-20 sm:py-28 bg-obsidian-950 relative">
      {/* Background Decor */}
      <div className="absolute top-1/3 end-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          tag={t("fleetTag")}
          title={t("fleetTitle")}
          subtitle={t("fleetSubtitle")}
        />

        {/* Category Filters Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-14">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-gold-400 to-gold-600 text-obsidian-950 shadow-gold-sm scale-105 border border-gold-300"
                    : "bg-obsidian-900/80 text-neutral-300 hover:text-gold-400 border border-gold-500/20 hover:border-gold-500/50 hover:bg-obsidian-800"
                }`}
              >
                {isActive && <Sparkles className="w-3.5 h-3.5" />}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>

        {/* Bottom Fleet Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-obsidian-900/80 border border-gold-500/30 text-xs sm:text-sm text-neutral-300">
            <Layers className="w-4 h-4 text-gold-400" />
            <span>
              {lang === "ar"
                ? "تتوفر سيارات إضافية حسب الطلب والمواصفات الخاصة - تواصل معنا عبر الواتساب"
                : "Additional premium models available upon request - Contact us via WhatsApp"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
