export const WHATSAPP_PHONE_NUMBER = "201003829853";
export const DISPLAY_PHONE_NUMBER = "01003829853";
export const INT_DISPLAY_PHONE_NUMBER = "+20 100 382 9853";

export interface BookingDetails {
  serviceType: string;
  carModel?: string;
  pickupLocation: string;
  dropoffLocation?: string;
  pickupDate: string;
  pickupTime: string;
  withChauffeur?: boolean;
  customerName: string;
  customerPhone: string;
  notes?: string;
}

export function generateWhatsAppMessage(details: BookingDetails, lang: "ar" | "en" = "ar"): string {
  if (lang === "en") {
    let msg = `✨ *New Booking Request - Muhand Car* ✨\n\n`;
    msg += `👤 *Client Name:* ${details.customerName}\n`;
    msg += `📱 *Phone Number:* ${details.customerPhone}\n`;
    msg += `🚘 *Service:* ${details.serviceType}\n`;
    if (details.carModel) {
      msg += `🏎️ *Selected Vehicle:* ${details.carModel}\n`;
    }
    msg += `📍 *Pick-up Location:* ${details.pickupLocation}\n`;
    if (details.dropoffLocation) {
      msg += `🏁 *Destination / Drop-off:* ${details.dropoffLocation}\n`;
    }
    msg += `📅 *Date:* ${details.pickupDate}\n`;
    msg += `⏰ *Time:* ${details.pickupTime}\n`;
    msg += `👨‍✈️ *Chauffeur Option:* ${details.withChauffeur !== false ? "With Professional Chauffeur" : "Self-Drive / Direct Rental"}\n`;
    if (details.notes && details.notes.trim() !== "") {
      msg += `📝 *Special Notes:* ${details.notes}\n`;
    }
    msg += `\n🌟 *Sent via Muhand Car Online Booking Portal*`;
    return msg;
  }

  // Arabic message
  let msg = `✨ *طلب حجز جديد - مكتب مهند كار لإيجار السيارات* ✨\n\n`;
  msg += `👤 *اسم العميل:* ${details.customerName}\n`;
  msg += `📱 *رقم الهاتف:* ${details.customerPhone}\n`;
  msg += `🚘 *نوع الخدمة:* ${details.serviceType}\n`;
  if (details.carModel) {
    msg += `🏎️ *السيارة المطلوبة:* ${details.carModel}\n`;
  }
  msg += `📍 *مكان التحرك:* ${details.pickupLocation}\n`;
  if (details.dropoffLocation) {
    msg += `🏁 *الوجهة / مكان الوصول:* ${details.dropoffLocation}\n`;
  }
  msg += `📅 *التاريخ:* ${details.pickupDate}\n`;
  msg += `⏰ *الوقت:* ${details.pickupTime}\n`;
  msg += `👨‍✈️ *خيار السائق:* ${details.withChauffeur !== false ? "مع سائق محترف" : "إيجار مباشر / بدون سائق"}\n`;
  if (details.notes && details.notes.trim() !== "") {
    msg += `📝 *ملاحظات خاصة:* ${details.notes}\n`;
  }
  msg += `\n🌟 *تم الإرسال عبر منصة مهند كار الإلكترونية*`;
  return msg;
}

export function getWhatsAppBookingUrl(details: BookingDetails, lang: "ar" | "en" = "ar"): string {
  const message = generateWhatsAppMessage(details, lang);
  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getQuickWhatsAppChatUrl(customMessage?: string, lang: "ar" | "en" = "ar"): string {
  const defaultMsg = lang === "ar" 
    ? "مرحباً مكتب مهند كار، أود الاستفسار عن حجز سيارة والأسعار المتاحة."
    : "Hello Muhand Car, I would like to inquire about car rentals, availability, and pricing.";
  const text = customMessage || defaultMsg;
  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
}
