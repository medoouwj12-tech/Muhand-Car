import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import { BookingProvider } from "@/context/BookingContext";

export const metadata: Metadata = {
  title: "مهند كار | مكتب إيجار سيارات فاخرة بالمنيا - Muhand Car Rental",
  description: "مكتب مهند كار لإيجار أحدث سيارات الزفاف الفاخرة، مشاوير الـ VIP، والرحلات الخاصة بين المحافظات والمطارات بالمنيا ومصر. حجز مباشر عبر واتساب: 01003829853",
  keywords: [
    "مهند كار",
    "إيجار سيارات المنيا",
    "سيارات زفاف المنيا",
    "ايجار سيارات زفة",
    "سيارات VIP المنيا",
    "مشاوير مطار القاهرة من المنيا",
    "Muhand Car",
    "Car Rental Minya",
    "Wedding Cars Minya",
    "Luxury Car Rental Egypt"
  ],
  authors: [{ name: "Muhand Car" }],
  openGraph: {
    title: "مهند كار | الفخامة والراحة لكل رحلة - Muhand Car Luxury Rental",
    description: "أحدث أسطول سيارات زفاف فاخرة ومشاوير VIP وسفر مطارات بالمنيا ومصر. احجز فورا عبر واتساب 01003829853",
    url: "https://muhandcar.com",
    siteName: "Muhand Car",
    locale: "ar_EG",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="dark scroll-smooth" suppressHydrationWarning>
      <body className="bg-obsidian-950 text-neutral-100 dark:bg-obsidian-950 dark:text-neutral-100 selection:bg-gold-500 selection:text-black antialiased transition-colors duration-300">
        <ThemeProvider>
          <LanguageProvider>
            <BookingProvider>
              {children}
            </BookingProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
