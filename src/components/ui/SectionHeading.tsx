"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  tag,
  title,
  subtitle,
  centered = true,
  className,
}) => {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        centered ? "text-center mx-auto max-w-3xl" : "text-start max-w-3xl",
        className
      )}
    >
      {tag && (
        <div
          className={cn(
            "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-gold-500/30 bg-gold-500/10 text-gold-400 backdrop-blur-md",
            centered ? "justify-center" : "justify-start"
          )}
        >
          <Sparkles className="w-3.5 h-3.5 text-gold-400 animate-pulse" />
          <span>{tag}</span>
        </div>
      )}

      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-neutral-900 dark:text-white tracking-tight leading-tight mb-4">
        {title}
      </h2>

      {subtitle && (
        <p className="text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-300 font-medium leading-relaxed">
          {subtitle}
        </p>
      )}

      {/* Decorative Gold Accent Underline */}
      <div
        className={cn(
          "flex items-center gap-2 mt-4",
          centered ? "justify-center" : "justify-start"
        )}
      >
        <span className="h-[2px] w-8 bg-gradient-to-r from-transparent to-gold-500 rounded-full" />
        <span className="w-2 h-2 rotate-45 bg-gold-500 shadow-gold-sm" />
        <span className="h-[2px] w-8 bg-gradient-to-l from-transparent to-gold-500 rounded-full" />
      </div>
    </div>
  );
};
