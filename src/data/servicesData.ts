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
    descriptionAr: "نوفر أحدث سيارات الزفاف الملكية (مرسيدس S450، كرايسلر ليموزين طويل بأبواب طيارة، كرايسلر 300C، إم جي سبورت) المجهزة بأرقى باقات وتصميمات الورود، مع سائقين في قمة اللباقة والالتزام بالمواعيد.",
    descriptionEn: "We provide royal wedding cars (Mercedes S450, Stretch Limousine with butterfly doors, Chrysler 300C, MG Sport) decorated with bespoke fresh flowers, driven by courteous uniformed chauffeurs.",
    featuresAr: [
      "تزيين بزهور طبيعية فاخرة حسب اختيار العروسين",
      "كرايسلر ليموزين طويل بأبواب طيارة هيدروليكية",
      "مرسيدس S-Class ملكية مجهزة بالكامل للزفة",
      "التزام دقيق 100% بالمواعيد في ليلة العمر",
    ],
    featuresEn: [
      "Bespoke fresh floral decoration tailored for the couple",
      "Presidential stretch limousine with Lambo butterfly doors",
      "Royal Mercedes S-Class fully styled for bridal convoys",
      "100% Punctual arrival guarantee for your special day",
    ],
    recommendedCarId: "mercedes-s450-wedding-vip",
  },
  {
    id: "vip-service",
    key: "vip",
    iconName: "Crown",
    titleAr: "مشاوير VIP وانتقالات داخلية",
    titleEn: "Direct VIP City Trips & Executive Rides",
    taglineAr: "تنقل راقٍ لكبار الشخصيات ورجال الأعمال",
    taglineEn: "Elite Chauffeur Mobility for Business Leaders",
    descriptionAr: "خدمة تنقل فاخرة ومخصصة داخل محافظة المنيا والمحافظات المجاورة مع سيارات دوج تشارجر SRT هيلكات وكرايسلر 300C المزودة بإضاءات نيون بأعلى درجات الخصوصية والأمان.",
    descriptionEn: "Tailored luxury mobility across Minya and Egypt featuring Dodge Charger SRT Hellcat and Crimson Neon Chrysler 300C with absolute discretion, power, and comfort.",
    featuresAr: [
      "دوج تشارجر SRT هيلكات بقوة وهيبة رياضية",
      "كرايسلر 300C حمراء بنيون بنفسجي سفلي ساحر",
      "أقصى درجات الخصوصية والراحة والأمان",
      "سائقون محترفون وذوو خبرة عالية في مسارات الطرق",
    ],
    featuresEn: [
      "Dodge Charger SRT Hellcat for commanding road presence",
      "Crimson Chrysler 300C with radiant purple underbody neon",
      "Maximum cabin privacy, comfort, and safety",
      "Experienced chauffeurs with complete route mastery",
    ],
    recommendedCarId: "dodge-charger-srt-hellcat",
  },
  {
    id: "travel-airport-service",
    key: "travel",
    iconName: "PlaneTakeoff",
    titleAr: "سفر ورحلات بين المحافظات والمطارات",
    titleEn: "Long-Distance & Airport Transfers",
    taglineAr: "سفر مريح وسريع لجميع مطارات ومحافظات مصر",
    taglineEn: "Comfortable, Safe Rides to All Egyptian Airports",
    descriptionAr: "خدمات سفر آمنة ومريحة لجميع مطارات الجمهورية (مطار القاهرة الدولي، مطار برج العرب، مطار أسيوط) مع سيارات هيونداي توسان SUV المتسعة للحقائب والأمتعة العائلية.",
    descriptionEn: "Dependable, seamless transfers to all international airports in Egypt (Cairo, Borg El Arab, Assiut) with our Hyundai Tucson SUV offering massive luggage capacity.",
    featuresAr: [
      "هيونداي توسان SUV حديثة ومفحوصة للسفر الطويل",
      "استقبال وتوصيل من وإلى صالات المطار بدقة",
      "مساحة واسعة جداً للحقائب والأمتعة العائلية",
      "تكييف هواء فائق وعزل صوتي مريح للرحلات الطويلة",
    ],
    featuresEn: [
      "Modern Hyundai Tucson SUV inspected for highways",
      "Airport terminal meet-and-greet pickup & drop-off",
      "Generous cargo volume for multiple large suitcases",
      "Dual climate control and acoustic insulation for long trips",
    ],
    recommendedCarId: "hyundai-tucson-black-suv",
  },
  {
    id: "corporate-rental-service",
    key: "corporate",
    iconName: "Briefcase",
    titleAr: "إيجار يومي وتعاقدات الشركات",
    titleEn: "Daily Rentals & Corporate Fleets",
    taglineAr: "حلول مرنة للمدد الطويلة والقصيرة",
    taglineEn: "Flexible Mobility for Short & Long Terms",
    descriptionAr: "باقات إيجار يومية، أسبوعية، وشهرية تلائم احتياجات الشركات والمؤسسات والأفراد مع سيارات هيونداي إلنترا وإم جي الحديثة بعقود رسمية موثقة ودعم فني 24 ساعة.",
    descriptionEn: "Comprehensive daily, weekly, and monthly rental contracts for corporate enterprises and private clients with Hyundai Elantra MD and MG sedans with full insurance.",
    featuresAr: [
      "عقود رسمية معتمدة وإجراءات استلام سريعة",
      "خيارات قيادة ذاتية أو بسائق خاص",
      "سيارات اقتصادية وعملية بأعلى درجات النظافة",
      "خصومات حصرية على الاشتراكات والمدد الطويلة",
    ],
    featuresEn: [
      "Official certified contracts with fast handovers",
      "Self-drive or dedicated chauffeur choices",
      "Economical and pristine vehicles in top condition",
      "Exclusive volume & long-term discounts",
    ],
    recommendedCarId: "hyundai-elantra-md-bronze",
  },
];
