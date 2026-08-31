"use client";

import React from "react";
import { Users, Gauge, Wind, UserCheck, Briefcase } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { CarSpecs } from "@/data/carsData";

interface CarSpecsBadgeProps {
  specs: CarSpecs;
  compact?: boolean;
}

export const CarSpecsBadge: React.FC<CarSpecsBadgeProps> = ({ specs, compact = false }) => {
  const { t } = useLanguage();

  const items = [
    {
      icon: <Users className="w-4 h-4 text-gold-400" />,
      label: `${specs.passengers} ${t("carSpecPassengers")}`,
    },
    {
      icon: <Gauge className="w-4 h-4 text-gold-400" />,
      label: t("carSpecTransmission"),
    },
    {
      icon: <Wind className="w-4 h-4 text-gold-400" />,
      label: t("carSpecAC"),
    },
    {
      icon: <UserCheck className="w-4 h-4 text-gold-400" />,
      label: t("carSpecChauffeur"),
    },
  ];

  if (compact) {
    return (
      <div className="grid grid-cols-2 gap-2 text-xs text-neutral-300">
        {items.slice(0, 4).map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-1.5 p-1.5 rounded-lg bg-obsidian-900/60 border border-gold-500/10 text-neutral-300 dark:text-neutral-300"
          >
            {item.icon}
            <span className="truncate text-[11px] font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 py-3 border-y border-gold-500/15 my-3">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center justify-center p-2 rounded-xl bg-obsidian-900/40 dark:bg-obsidian-900/60 border border-gold-500/10 text-center"
        >
          <div className="mb-1 text-gold-400">{item.icon}</div>
          <span className="text-[11px] font-bold text-neutral-700 dark:text-neutral-300">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};
