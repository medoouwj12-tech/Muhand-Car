"use client";

import React, { createContext, useContext, useState } from "react";

export interface BookingModalState {
  isOpen: boolean;
  selectedCarId?: string;
  selectedCarName?: string;
  selectedService?: string;
}

interface BookingContextType {
  modalState: BookingModalState;
  openBookingModal: (carId?: string, carName?: string, service?: string) => void;
  closeBookingModal: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [modalState, setModalState] = useState<BookingModalState>({
    isOpen: false,
  });

  const openBookingModal = (carId?: string, carName?: string, service?: string) => {
    setModalState({
      isOpen: true,
      selectedCarId: carId,
      selectedCarName: carName,
      selectedService: service,
    });
  };

  const closeBookingModal = () => {
    setModalState({
      isOpen: false,
      selectedCarId: undefined,
      selectedCarName: undefined,
      selectedService: undefined,
    });
  };

  return (
    <BookingContext.Provider value={{ modalState, openBookingModal, closeBookingModal }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
}
