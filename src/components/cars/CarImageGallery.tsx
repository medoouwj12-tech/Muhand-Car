"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface CarImageGalleryProps {
  images: string[];
  carName: string;
  badgeText?: string;
}

export const CarImageGallery: React.FC<CarImageGalleryProps> = ({
  images,
  carName,
  badgeText,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const { dir } = useLanguage();

  if (!images || images.length === 0) {
    return (
      <div className="relative aspect-[16/10] w-full bg-obsidian-900 rounded-t-2xl flex items-center justify-center text-neutral-500">
        <span>No image</span>
      </div>
    );
  }

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-2xl bg-obsidian-900 group select-none">
        {/* Main Image Slider */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0.4, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.4 }}
            transition={{ duration: 0.35 }}
            className="relative w-full h-full"
          >
            <Image
              src={images[currentIndex]}
              alt={`${carName} - photo ${currentIndex + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              priority={currentIndex === 0}
            />
          </motion.div>
        </AnimatePresence>

        {/* Ambient Dark Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-black/30 pointer-events-none" />

        {/* Badge Tag if present */}
        {badgeText && (
          <div className="absolute top-3 start-3 z-10">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-black bg-gold-500 text-obsidian-950 shadow-gold-sm tracking-wide">
              {badgeText}
            </span>
          </div>
        )}

        {/* Image Counter Badge */}
        <div className="absolute top-3 end-3 z-10">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-bold bg-black/60 backdrop-blur-md text-gold-300 border border-gold-500/30">
            {currentIndex + 1} / {images.length}
          </span>
        </div>

        {/* Fullscreen Preview Action */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsLightboxOpen(true);
          }}
          className="absolute bottom-3 end-3 z-10 p-2 rounded-lg bg-black/60 backdrop-blur-md text-neutral-300 hover:text-gold-400 hover:bg-black/80 border border-white/10 hover:border-gold-500/40 transition-all opacity-0 group-hover:opacity-100"
          title="Fullscreen Gallery"
        >
          <Maximize2 className="w-4 h-4" />
        </button>

        {/* Previous / Next Arrows (if more than 1 image) */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              aria-label="Previous Image"
              className="absolute start-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-white hover:text-gold-400 hover:bg-black/90 border border-white/20 hover:border-gold-400 flex items-center justify-center transition-all opacity-80 hover:opacity-100 hover:scale-110 active:scale-95"
            >
              {dir === "rtl" ? (
                <ChevronRight className="w-4 h-4" />
              ) : (
                <ChevronLeft className="w-4 h-4" />
              )}
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Image"
              className="absolute end-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-white hover:text-gold-400 hover:bg-black/90 border border-white/20 hover:border-gold-400 flex items-center justify-center transition-all opacity-80 hover:opacity-100 hover:scale-110 active:scale-95"
            >
              {dir === "rtl" ? (
                <ChevronLeft className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
          </>
        )}

        {/* Thumbnail Dots Indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-3 start-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentIndex
                    ? "w-6 h-2 bg-gold-400 shadow-gold-sm"
                    : "w-2 h-2 bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4"
            onClick={() => setIsLightboxOpen(false)}
          >
            {/* Header with Title and Close Button */}
            <div className="absolute top-4 inset-x-4 flex items-center justify-between text-white z-50">
              <div>
                <h3 className="text-lg font-bold text-gold-400">{carName}</h3>
                <p className="text-xs text-neutral-400">
                  {currentIndex + 1} of {images.length}
                </p>
              </div>
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white hover:text-gold-400 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Main Lightbox Image */}
            <div
              className="relative w-full max-w-5xl h-[70vh] my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[currentIndex]}
                alt={`${carName} full preview`}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Prev/Next controls */}
            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute start-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-gold-500 hover:text-black text-white transition-all"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute end-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-gold-500 hover:text-black text-white transition-all"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Thumbnails Row */}
            <div
              className="flex items-center gap-2 overflow-x-auto p-2 max-w-xl z-50 bg-black/60 rounded-xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative w-16 h-12 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${
                    idx === currentIndex
                      ? "border-gold-400 scale-105"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`thumb ${idx}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
