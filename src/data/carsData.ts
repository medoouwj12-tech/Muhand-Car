export interface CarSpecs {
  passengers: number;
  transmission: string;
  ac: boolean;
  chauffeur: boolean;
  doors: number;
  luggage: number;
}

export interface Car {
  id: string;
  nameAr: string;
  nameEn: string;
  brand: string;
  modelYear: string;
  category: "wedding" | "vip" | "travel" | "suv";
  images: string[];
  badgeAr?: string;
  badgeEn?: string;
  priceNoteAr: string;
  priceNoteEn: string;
  specs: CarSpecs;
  featuresAr: string[];
  featuresEn: string[];
  descriptionAr: string;
  descriptionEn: string;
}

export const carsData: Car[] = [
  {
    id: "mercedes-s-class-vip",
    nameAr: "مرسيدس بنز الفئة S الفاخرة (VIP)",
    nameEn: "Mercedes-Benz S-Class Luxury VIP",
    brand: "Mercedes-Benz",
    modelYear: "2024",
    category: "vip",
    badgeAr: "قمة الفخامة والـ VIP",
    badgeEn: "Ultra Luxury VIP",
    priceNoteAr: "أفضل سعر VIP بالمنيا",
    priceNoteEn: "Best VIP Rate in Minya",
    images: [
      "/images/cars/0bcd3ce1-cad4-4d1b-a386-897ebf720402.jpeg",
      "/images/cars/da15e762-1641-49b9-b66f-a4ee8580cefd.jpeg",
      "/images/cars/286225a7-79a9-46a8-ae70-0a52e23c344a.jpeg",
      "/images/cars/5cf5217c-8e7c-420c-9b49-6e73967bf7d7.jpeg",
    ],
    specs: {
      passengers: 4,
      transmission: "أوتوماتيك / 9G-Tronic",
      ac: true,
      chauffeur: true,
      doors: 4,
      luggage: 3,
    },
    featuresAr: [
      "مقاعد جلد طبيعي تدفئة ومساج",
      "إضاءة محيطية تفاعلية بـ 64 لوناً",
      "نظام صوتي محيطي فائق النقاء",
      "عزل صوتي كامل لراحة تامة",
      "سائق VIP بزي رسمي أنيق",
    ],
    featuresEn: [
      "Heated & massaging premium leather seats",
      "Interactive 64-color ambient lighting",
      "Burmester high-end surround sound",
      "Acoustic comfort double glazing",
      "Uniformed professional VIP chauffeur",
    ],
    descriptionAr: "السيارة الأرقى لرجال الأعمال، كبار الشخصيات، والمناسبات الرسمية الفاخرة داخل المنيا وعلى الطرق السريعة.",
    descriptionEn: "The pinnacle of executive luxury for VIPs, corporate summits, and high-end celebrations.",
  },
  {
    id: "wedding-mercedes-bridal",
    nameAr: "مرسيدس بنز زفاف ملكي (تجهيز عرسان)",
    nameEn: "Mercedes-Benz Royal Wedding Edition",
    brand: "Mercedes-Benz",
    modelYear: "2024",
    category: "wedding",
    badgeAr: "الخيار الأول للأعراس 💍",
    badgeEn: "Bride & Groom Choice 💍",
    priceNoteAr: "شامل التزيين الفاخر",
    priceNoteEn: "Includes Floral Styling",
    images: [
      "/images/cars/73ed1fd4-e9f4-44f2-a912-ece979976dc4.jpeg",
      "/images/cars/99ec6baf-0f97-4b85-a841-6fb950719e27.jpeg",
      "/images/cars/7173abc4-d57b-4f4b-aa6b-05d00acfb75b.jpeg",
      "/images/cars/79cb0578-ee54-44eb-bc53-ba9d12c6ac21.jpeg",
    ],
    specs: {
      passengers: 4,
      transmission: "أوتوماتيك",
      ac: true,
      chauffeur: true,
      doors: 4,
      luggage: 3,
    },
    featuresAr: [
      "تزيين بزهور فاخرة حسب اختيار العروسين",
      "سائق أنيق ومحترف متفرغ للزفة بالكامل",
      "مجهزة لجلسات التصوير والفوتوسيشن",
      "سقف بانورامي ومساحة خلفية رحبة لفستان الزفاف",
      "التزام تام بالمواعيد وضمان ليلة استثنائية",
    ],
    featuresEn: [
      "Custom floral bridal arrangement",
      "Charming uniformed chauffeur dedicated for the night",
      "Perfect backdrop for photography and video sessions",
      "Panoramic glass roof with spacious rear legroom",
      "Guaranteed punctual arrival and royal treatment",
    ],
    descriptionAr: "اصنع ليلة لا تُنسى في زفافك مع أرقى سيارات الزفاف المجهزة بأعلى لمسات الفخامة والزينة الساحرة.",
    descriptionEn: "Make your wedding night unforgettable with a royally decorated bridal car driven by a courteous chauffeur.",
  },
  {
    id: "hyundai-elantra-luxury",
    nameAr: "هيونداي إلنترا الحديثة (أعراس & مشاوير)",
    nameEn: "Hyundai Elantra Modern Luxury",
    brand: "Hyundai",
    modelYear: "2024",
    category: "wedding",
    badgeAr: "أناقة عصرية وسعر متميز",
    badgeEn: "Modern Style & Value",
    priceNoteAr: "باقات زفاف ومشاوير مرنة",
    priceNoteEn: "Flexible Wedding & Trip Rates",
    images: [
      "/images/cars/cba2ca38-6e37-46dd-bab7-4d4c72a0a9ba.jpeg",
      "/images/cars/ccd97bce-6f47-454f-b781-87aa6f635e1e.jpeg",
      "/images/cars/6e794284-da5e-4731-af5d-1f2e43501bb1.jpeg",
      "/images/cars/3b0bd1c2-f1fe-4ea2-8603-8c382446df7b.jpeg",
    ],
    specs: {
      passengers: 4,
      transmission: "أوتوماتيك ذكي",
      ac: true,
      chauffeur: true,
      doors: 4,
      luggage: 3,
    },
    featuresAr: [
      "تصميم خارجي انسيابي وعصري يلفت الأنظار",
      "تكييف أمامي وخلفي قوي جداً",
      "شاشات تحكم حديثة ومنافذ شحن متعددة",
      "صالون واسع ومريح جداً للمشاوير والزفات",
      "خيار الإيجار بسائق أو قيادة مباشرة",
    ],
    featuresEn: [
      "Striking aerodynamic and sleek modern exterior",
      "Powerful dual-zone climate control",
      "Touchscreen infotainment with smartphone sync",
      "Spacious ergonomic seating for trips and events",
      "Available with chauffeur or self-drive",
    ],
    descriptionAr: "خيار رائع وعصري يجمع بين الجمال والحداثة لمناسبات الزفاف ومشاوير المحافظات اليومية.",
    descriptionEn: "A stylish and modern sedan combining sleek aesthetics and comfort for events and trips.",
  },
  {
    id: "luxury-suv-travel-special",
    nameAr: "سيارات الدفع الرباعي الفاخرة (SUV & سفر)",
    nameEn: "Luxury SUV Executive Travel Edition",
    brand: "Luxury SUV",
    modelYear: "2024",
    category: "suv",
    badgeAr: "مثالية للمطارات والسفر ✈️",
    badgeEn: "Airport & Intercity Special ✈️",
    priceNoteAr: "راحة تامة على الطرق السريعة",
    priceNoteEn: "Superior Highway Ride",
    images: [
      "/images/cars/fa33419f-3510-42a2-9708-bec4ae6e32e5.jpeg",
      "/images/cars/ffe05c13-1978-4ae7-a3f3-805ec3b41a09.jpeg",
      "/images/cars/f9ac4d64-154f-4a1c-bf77-79f7cec11635.jpeg",
      "/images/cars/d5db2ba4-fcc0-4cce-980b-be658a9c7449.jpeg",
    ],
    specs: {
      passengers: 5,
      transmission: "أوتوماتيك 4x4",
      ac: true,
      chauffeur: true,
      doors: 5,
      luggage: 5,
    },
    featuresAr: [
      "مساحة حقائب ضخمة لجميع أمتعة السفر والمطارات",
      "ثبات عالي جداً على الطرق السريعة والمنعطفات",
      "تكييف متعدد المناطق لكامل الركاب",
      "مقاعد مريحة مصممة لرحلات السفر الطويلة",
      "سائقين ذوي خبرة في السفر لجميع المحافظات",
    ],
    featuresEn: [
      "Expansive cargo space for luggage and suitcases",
      "Supreme high-speed stability and safety",
      "Multi-zone air conditioning for all seats",
      "Long-distance ergonomic comfort seating",
      "Experienced chauffeurs for all Egypt routes",
    ],
    descriptionAr: "السيارة المثالية لرحلات مطار القاهرة، مطار أسيوط، مطار برج العرب، والرحلات العائلية الطويلة.",
    descriptionEn: "The ultimate choice for airport transfers, intercity long-distance journeys, and family luggage travel.",
  },
  {
    id: "executive-bmw-series",
    nameAr: "بي إم دبليو الفئة الفاخرة (VIP & رجال أعمال)",
    nameEn: "BMW Executive Luxury Sedan",
    brand: "BMW",
    modelYear: "2024",
    category: "vip",
    badgeAr: "هيبة وقوة الأداء",
    badgeEn: "Prestige & Dynamics",
    priceNoteAr: "إيجار بالساعة أو المشوار",
    priceNoteEn: "Hourly & Trip Packages",
    images: [
      "/images/cars/d4b7d3c9-6444-4c6a-adda-cb1cd9681d2a.jpeg",
      "/images/cars/2c348d22-5dd8-4edc-b3cf-878e797c7170.jpeg",
      "/images/cars/8456402b-9a36-4d64-a5ba-4ac4ca07aaf4.jpeg",
      "/images/cars/9f0f2350-bbe2-4d92-b762-3a92e0dcfc31.jpeg",
    ],
    specs: {
      passengers: 4,
      transmission: "أوتوماتيك Steptronic",
      ac: true,
      chauffeur: true,
      doors: 4,
      luggage: 3,
    },
    featuresAr: [
      "شخصية رياضية فاخرة تعكس الهيبة والتميز",
      "صالون جلدي ألماني فاخر مع تحكم ذكي",
      "أنظمة أمان متطورة وفرامل تفاعلية",
      "نظام ترفيه عالي المستوى وتوصيل بلوتوث فوري",
      "خدمة VIP مخصصة لرجال الأعمال والمناسبات",
    ],
    featuresEn: [
      "Commanding sporty executive road presence",
      "German crafted luxury leather cockpit",
      "Advanced active safety & driver assist systems",
      "Premium multimedia entertainment system",
      "Bespoke VIP service for business leaders",
    ],
    descriptionAr: "تجمع بين الأداء الديناميكي الألماني والراحة المطلقة للتنقل في المنيا والمحافظات بأعلى درجات الوجاهة.",
    descriptionEn: "German engineering at its finest, tailored for prestigious executive rides and high-profile arrivals.",
  },
  {
    id: "kia-sportage-intercity",
    nameAr: "كيا سبورتاج الحديثة (سفر وعائلات)",
    nameEn: "Kia Sportage All-New Travel Edition",
    brand: "Kia",
    modelYear: "2024",
    category: "travel",
    badgeAr: "راحة السفر العائلي",
    badgeEn: "Family Travel Comfort",
    priceNoteAr: "أسعار خاصة للمحافظات والمطارات",
    priceNoteEn: "Special Airport & City Rates",
    images: [
      "/images/cars/5034fdb3-f8cd-48cf-b5f6-13e29b472f1f.jpeg",
      "/images/cars/15924052-8171-479e-be55-25d60e8f6618.jpeg",
      "/images/cars/a2286a7c-2ff9-4cec-94bd-76af37d4e96e.jpeg",
      "/images/cars/cf43f3bf-2285-4c57-b839-2ef7e9e87437.jpeg",
      "/images/cars/127f2763-a0bb-4277-8139-337d9155150c.jpeg",
    ],
    specs: {
      passengers: 5,
      transmission: "أوتوماتيك ذكي",
      ac: true,
      chauffeur: true,
      doors: 5,
      luggage: 4,
    },
    featuresAr: [
      "ارتفاع ممتاز عن الأرض لراحة كاملة على جميع الطرق",
      "اتساع كابينة الركاب ومساحة للأرجل في المقاعد الخلفية",
      "شنطة سفر رحبة تكفي جميع الحقائب العائلية",
      "استهلاك وقود اقتصادي وسعر إيجار منافس جداً",
      "مجهزة لرحلات الساحل، الإسكندرية، والقاهرة",
    ],
    featuresEn: [
      "High ground clearance for comfortable road manners",
      "Generous rear passenger headroom and legroom",
      "Spacious cargo capacity for full family luggage",
      "Exceptional fuel efficiency and competitive rates",
      "Ready for Alexandria, North Coast, and Cairo trips",
    ],
    descriptionAr: "السيارة الأنسب للسفر العائلي والمشاوير الطويلة بين المحافظات بأقصى درجات الأمان والاعتمادية.",
    descriptionEn: "The premier family crossover for dependable, smooth, and spacious cross-country travel.",
  },
];
