export interface ServiceItem {
  id: string;
  key: string;
  iconName: "HeartHandshake" | "Crown" | "PlaneTakeoff" | "Briefcase" | "Car" | "ShieldCheck";
  titleAr: string;
  titleEn: string;
  taglineAr: string;
  taglineEn: string;
  descriptionAr: string;
  descriptionEn: string;
  featuresAr: string[];
  featuresEn: string[];
  recommendedCarId?: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "wedding-service",
    key: "wedding",
    iconName: "HeartHandshake",
    titleAr: "سيارات زفاف وتجهيز العرسان",
    titleEn: "Luxury Wedding Cars & Bridal Escort",
    taglineAr: "ليلة العمر تستحق أفخم إطلالة",
    taglineEn: "Your Dream Day Deserves Royal Elegance",
    descriptionAr: "نوفر أحدث سيارات الزفاف الملكية المجهزة بأرقى باقات وتصميمات الورود، مع سائقين في قمة اللباقة والالتزام بالمواعيد، لضمان زفة أسطورية تليق بكم.",
    descriptionEn: "We provide the latest luxury royal wedding cars decorated with bespoke floral arrangements, driven by uniformed courteous chauffeurs for a truly unforgettable entrance.",
    featuresAr: [
      "تزيين بزهور طبيعية أو صناعية فاخرة",
      "سائق مخصص بزي رسمي متفرغ للزفة",
      "جلسات تصوير وفوتوسيشن احترافي",
      "التزام دقيق 100% بالمواعيد",
    ],
    featuresEn: [
      "Custom luxury floral decoration styling",
      "Dedicated uniformed bridal chauffeur",
      "Photography & video convoy setup",
      "100% Punctual arrival guarantee",
    ],
    recommendedCarId: "wedding-mercedes-bridal",
  },
  {
    id: "vip-service",
    key: "vip",
    iconName: "Crown",
    titleAr: "مشاوير VIP وانتقالات داخلية",
    titleEn: "Direct VIP City Trips & Executive Rides",
    taglineAr: "تنقل راقٍ لكبار الشخصيات ورجال الأعمال",
    taglineEn: "Elite Chauffeur Mobility for Business Leaders",
    descriptionAr: "خدمة تنقل فاخرة ومخصصة داخل محافظة المنيا والمناطق المحيطة بها للشخصيات الهامة، المؤتمرات، والزيارات الرسمية بأعلى درجات الخصوصية والأمان.",
    descriptionEn: "Tailored luxury mobility across Minya and nearby governorates for executives, VIP guests, and official visits with absolute discretion and serenity.",
    featuresAr: [
      "أحدث طرازات السيارات الفاخرة المظللة",
      "أقصى درجات الخصوصية والهدوء",
      "تكييف هواء فائق ومقاعد جلدية مريحة",
      "سائقون محترفون وذوو لباقة عالية",
    ],
    featuresEn: [
      "Latest flagship tinted luxury models",
      "Maximum privacy and serene cabin",
      "Multi-zone climate control & leather",
      "Discreet and highly trained chauffeurs",
    ],
    recommendedCarId: "mercedes-s-class-vip",
  },
  {
    id: "travel-airport-service",
    key: "travel",
    iconName: "PlaneTakeoff",
    titleAr: "سفر ورحلات بين المحافظات والمطارات",
    titleEn: "Long-Distance & Airport Transfers",
    taglineAr: "سفر مريح وسريع لجميع مطارات ومحافظات مصر",
    taglineEn: "Comfortable, Safe Rides to All Egyptian Airports",
    descriptionAr: "خدمات سفر آمنة ومريحة لجميع مطارات الجمهورية (مطار القاهرة الدولي، مطار برج العرب، مطار أسيوط) والرحلات بين المحافظات مع متسع كبير للحقائب والأمتعة.",
    descriptionEn: "Dependable, seamless transfers to all international airports in Egypt (Cairo, Borg El Arab, Assiut) and all governorates with generous luggage capacity.",
    featuresAr: [
      "استقبال وتوصيل من وإلى صالات المطار",
      "مساحة واسعة للحقائب والأمتعة العائلية",
      "سيارات مفحوصة خصيصاً للرحلات الطويلة",
      "توفير الراحة التامة على مدار الطريق",
    ],
    featuresEn: [
      "Airport terminal meet-and-greet pickup",
      "Spacious trunks for full luggage sets",
      "Vehicles safety-inspected for highways",
      "Smooth ride with continuous refreshments",
    ],
    recommendedCarId: "luxury-suv-travel-special",
  },
  {
    id: "corporate-rental-service",
    key: "corporate",
    iconName: "Briefcase",
    titleAr: "إيجار يومي وتعاقدات الشركات",
    titleEn: "Daily Rentals & Corporate Fleets",
    taglineAr: "حلول مرنة للمدد الطويلة والقصيرة",
    taglineEn: "Flexible Mobility for Short & Long Terms",
    descriptionAr: "باقات إيجار يومية، أسبوعية، وشهرية تلائم احتياجات الشركات والمؤسسات والأفراد بأسعار خاصة وعقود رسمية موثقة وخدمة دعم فني متواصل.",
    descriptionEn: "Comprehensive daily, weekly, and monthly rental contracts for corporate enterprises and private clients with preferred business rates and 24/7 support.",
    featuresAr: [
      "عقود رسمية معتمدة وإجراءات سريعة",
      "خيارات قيادة ذاتية أو بسائق خاص",
      "تأمين شامل وصيانة دورية مستمرة",
      "خصومات حصرية على الاشتراكات والمدد",
    ],
    featuresEn: [
      "Official certified contracts with fast handovers",
      "Self-drive or dedicated chauffeur choices",
      "Comprehensive insurance & maintenance",
      "Exclusive volume & long-term discounts",
    ],
    recommendedCarId: "executive-bmw-series",
  },
];
