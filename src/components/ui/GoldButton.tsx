"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GoldButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "whatsapp";
  size?: "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

export const GoldButton: React.FC<GoldButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  icon,
  iconPosition = "left",
  fullWidth = false,
  className,
  ...props
}) => {
  const sizeClasses = {
    sm: "px-3.5 py-1.5 text-xs font-semibold gap-1.5 rounded-lg",
    md: "px-5 py-2.5 text-sm font-bold gap-2 rounded-xl",
    lg: "px-7 py-3.5 text-base font-bold gap-2.5 rounded-xl",
    xl: "px-8 py-4 text-lg font-bold gap-3 rounded-2xl",
  };

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-gold-400 via-gold-500 to-gold-700 text-obsidian-950 shadow-gold-sm hover:shadow-gold-md hover:from-gold-300 hover:to-gold-600 active:scale-[0.98] border border-gold-300/40 font-black tracking-wide",
    secondary:
      "bg-obsidian-800/90 text-gold-400 border border-gold-500/30 hover:border-gold-400 hover:bg-obsidian-750 shadow-sm active:scale-[0.98] hover:text-gold-300",
    outline:
      "bg-transparent text-gold-400 border-2 border-gold-500/50 hover:border-gold-400 hover:bg-gold-500/10 active:scale-[0.98]",
    ghost:
      "bg-transparent text-neutral-300 hover:text-gold-400 hover:bg-gold-500/10 active:scale-[0.98]",
    whatsapp:
      "bg-gradient-to-r from-emerald-600 to-green-500 text-white hover:from-emerald-500 hover:to-green-400 shadow-md hover:shadow-emerald-500/20 active:scale-[0.98] border border-emerald-400/30 font-bold",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center transition-all duration-300 relative overflow-hidden group cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed",
        sizeClasses[size],
        variantClasses[variant],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {/* Subtle Shimmer highlight effect on primary */}
      {variant === "primary" && (
        <span className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
      )}
      {icon && iconPosition === "left" && <span className="flex-shrink-0">{icon}</span>}
      <span className="relative z-10">{children}</span>
      {icon && iconPosition === "right" && <span className="flex-shrink-0">{icon}</span>}
    </button>
  );
};
