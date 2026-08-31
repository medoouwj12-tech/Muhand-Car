"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { FleetSection } from "@/components/home/FleetSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { BookingSection } from "@/components/home/BookingSection";
import { LocationContact } from "@/components/home/LocationContact";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { BookingModal } from "@/components/booking/BookingModal";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-obsidian-950 text-neutral-100 transition-colors duration-300 relative">
      {/* Top Navbar */}
      <Navbar />

      {/* Hero Section with Quick Bar */}
      <HeroSection />

      {/* Key Services Section */}
      <ServicesSection />

      {/* Car Fleet Showcase with Multi-Image Slider */}
      <FleetSection />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Customer Reviews Section */}
      <TestimonialsSection />

      {/* Interactive Booking Section */}
      <BookingSection />

      {/* Location & Embedded Google Map Section */}
      <LocationContact />

      {/* Luxury Footer */}
      <Footer />

      {/* Floating WhatsApp Action Widget */}
      <FloatingWhatsApp />

      {/* Global Interactive Booking Modal */}
      <BookingModal />
    </main>
  );
}
