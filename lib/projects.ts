import type { Bi } from "./i18n";

export type LinkKind =
  | "play"
  | "ios"
  | "web"
  | "udemy"
  | "youtube"
  | "facebook";

export type Link = {
  kind: LinkKind;
  href: string;
};

export type Project = {
  name: string;       // brand name (English)
  arabic?: string;    // Arabic name where applicable
  tagline: Bi;
  region?: Bi;
  downloads?: string; // numeric, language-neutral
  highlight?: Bi;
  description: Bi;
  links: Link[];
};

export type Category = {
  id: string;
  index: string;
  label: Bi;
  kicker: Bi;
  projects: Project[];
};

export const profile = {
  name: { en: "Ahmed Sherif", ar: "أحمد شريف" } as Bi,
  email: "engahmedsherif39@gmail.com",
  phone: "+20 102 358 1657",
  github: "https://github.com/sherifjavaandroid",
  youtube: "https://www.youtube.com/@Codelix-v4t",
  udemy:
    "https://www.udemy.com/course/flutter-advanced-course-architectures-in-flutter/",
};

export const statValues: string[] = [
  "19",
  "05",
  "1.4M+",
  "500K+",
  "6.5K",
  "10.3K",
  "05+",
];

export const techStack: string[] = [
  "PHP",
  "Laravel",
  "Node.js",
  "JavaScript",
  "Vue.js",
  "Next.js",
  "React",
  "Flutter",
  "Dart",
  "MySQL",
  "MariaDB",
  "REST APIs",
  "Tailwind",
  "Sass",
  "Git",
  "Docker",
  "CI/CD",
  "Agile",
];

// Sorted descending by live Play Store install count (fetched 2026-05-20).
export const categories: Category[] = [
  {
    id: "ranked",
    index: "01",
    label: {
      en: "Apps — ranked by installs",
      ar: "التطبيقات — مرتّبة بحسب التنزيلات",
    },
    kicker: {
      en: "Live Google Play install counts, descending",
      ar: "إحصائيات تنزيلات جوجل بلاي الحيّة، تنازلياً",
    },
    projects: [
      {
        name: "Direct",
        arabic: "دايركت",
        tagline: { en: "Travel & Booking", ar: "سفر وحجوزات" },
        region: { en: "Bahrain", ar: "البحرين" },
        downloads: "500K+",
        description: {
          en: "Travel booking platform for the Bahrain market with flights, hotels, and complete itinerary management.",
          ar: "منصّة حجوزات سفر للسوق البحريني — تذاكر طيران، فنادق، وإدارة كاملة لخطّة الرحلة.",
        },
        links: [
          { kind: "play", href: "https://play.google.com/store/apps/details?id=com.direct.travel&hl=en_US" },
          { kind: "ios", href: "https://apps.apple.com/bh/app/direct-%D8%AF%D8%A7%D9%8A%D8%B1%D9%83%D8%AA/id1270140475" },
        ],
      },
      {
        name: "Ma3ak",
        arabic: "معاك",
        tagline: { en: "Roadside Assistance Platform", ar: "منصّة مساعدة الطريق" },
        region: { en: "Egypt", ar: "مصر" },
        downloads: "100K+",
        description: {
          en: "Real-time roadside service platform: tow trucks, battery jumpstart, fuel delivery, and substitute vehicles with geolocation-based dispatch.",
          ar: "منصّة خدمات طريق فوريّة: ونش، شحن بطّاريات، توصيل وقود، وسيّارة بديلة، مع توزيع المهام بناءً على الموقع الجغرافي.",
        },
        links: [
          { kind: "play", href: "https://play.google.com/store/apps/details?id=com.m3ak.m3ak&hl=ar" },
          { kind: "ios", href: "https://apps.apple.com/ma/app/ma3ak-%D9%85%D8%B9%D8%A7%D9%83/id6758354892" },
        ],
      },
      {
        name: "FilKhedma",
        arabic: "في الخدمة",
        tagline: { en: "Home Services Platform", ar: "منصّة خدمات منزليّة" },
        region: { en: "Egypt", ar: "مصر" },
        downloads: "100K+",
        description: {
          en: "On-demand home services connecting customers with skilled technicians for plumbing, electrical, carpentry, AC, and more.",
          ar: "خدمات منزليّة عند الطلب، تربط العملاء بفنّيين محترفين في السباكة والكهرباء والنجارة والتكييف وغيرها.",
        },
        links: [
          { kind: "play", href: "https://play.google.com/store/apps/details?id=com.filkhedma.customer" },
          { kind: "ios", href: "https://apps.apple.com/eg/app/filkhedma-home-services/id1473742608?l=ar" },
        ],
      },
      {
        name: "B8ak",
        arabic: "بضائعك",
        tagline: { en: "Service Marketplace", ar: "سوق للخدمات" },
        region: { en: "KSA", ar: "السعودية" },
        downloads: "100K+",
        description: {
          en: "Service marketplace connecting customers with verified providers across home maintenance, cleaning, and repair categories.",
          ar: "سوق خدمات يربط العملاء بمزوّدين موثّقين في الصيانة المنزليّة والتنظيف والإصلاح.",
        },
        links: [
          { kind: "play", href: "https://play.google.com/store/apps/details?id=com.b8ak.b8akapp" },
          { kind: "ios", href: "https://apps.apple.com/us/app/%D8%AE%D8%AF%D9%85%D8%A7%D8%AA-%D9%85%D9%86%D8%B2%D9%84%D9%8A%D8%A9-b8ak-%D8%A8%D9%8A%D8%AA%D9%83/id1017413686?l=ar" },
        ],
      },
      {
        name: "Fanni",
        arabic: "فني",
        tagline: { en: "Technical Services", ar: "خدمات فنّية" },
        region: { en: "KSA", ar: "السعودية" },
        downloads: "100K+",
        description: {
          en: "Platform for booking technical and home maintenance specialists with in-app requests, scheduling, and payment.",
          ar: "منصّة لحجز فنّيين متخصّصين في الصيانة الفنّية والمنزليّة، مع طلبات وجدولة ودفع داخل التطبيق.",
        },
        links: [
          { kind: "play", href: "https://play.google.com/store/apps/details?id=com.cloudtech.fanniapp" },
          { kind: "ios", href: "https://apps.apple.com/us/app/fanni-%D9%81%D9%86%D9%8A/id1136144566" },
        ],
      },
      {
        name: "Taskty",
        arabic: "تاسكتي",
        tagline: { en: "Task & Service App", ar: "تطبيق مهامّ وخدمات" },
        downloads: "100K+",
        description: {
          en: "On-demand task and service application connecting customers with providers for various daily needs.",
          ar: "تطبيق خدمات ومهامّ عند الطلب يربط العملاء بمزوّدين لمختلف الاحتياجات اليوميّة.",
        },
        links: [
          { kind: "play", href: "https://play.google.com/store/apps/details?id=com.tasktyapp.taskty" },
          { kind: "ios", href: "https://apps.apple.com/sa/app/taskty-cleaning-maintenance/id1486080094" },
        ],
      },
      {
        name: "Maharah",
        arabic: "مهارة",
        tagline: { en: "Skills & Services Platform", ar: "منصّة مهارات وخدمات" },
        downloads: "100K+",
        description: {
          en: "Platform matching skilled professionals with customers for handyman, cleaning, and personal-care services.",
          ar: "منصّة تربط أصحاب المهارات بالعملاء في خدمات الصنعة اليدويّة والتنظيف والعناية الشخصيّة.",
        },
        links: [
          { kind: "play", href: "https://play.google.com/store/apps/details?id=com.maharah.maharahApp" },
          { kind: "ios", href: "https://apps.apple.com/us/app/maharah-%D9%85%D9%87%D8%A7%D8%B1%D8%A9-maintenance/id1044631951" },
        ],
      },
      {
        name: "HomeRun",
        tagline: { en: "Customer Service App", ar: "تطبيق خدمة العملاء" },
        downloads: "100K+",
        description: {
          en: "Customer-facing application for booking on-demand services with real-time tracking and order management.",
          ar: "تطبيق موجَّه للعميل لحجز الخدمات عند الطلب، مع تتبّع فوريّ وإدارة كاملة للطلبات.",
        },
        links: [
          { kind: "play", href: "https://play.google.com/store/apps/details?id=com.homerun.customer" },
          { kind: "ios", href: "https://apps.apple.com/us/app/homerun-get-things-done/id1506390428" },
        ],
      },
      {
        name: "LinkOut",
        tagline: { en: "Networking Platform", ar: "منصّة تواصل مهنيّ" },
        downloads: "100K+",
        description: {
          en: "Networking and professional connections platform — Flutter frontend with a Laravel REST backend.",
          ar: "منصّة تواصل واتّصالات مهنيّة — واجهة Flutter مع خلفيّة Laravel REST.",
        },
        links: [
          { kind: "play", href: "https://play.google.com/store/apps/details?id=com.xapps.linkout" },
          { kind: "ios", href: "https://apps.apple.com/eg/app/linkout/id6444288176" },
        ],
      },
      {
        name: "Aqar Ya Masr",
        arabic: "عقار يا مصر",
        tagline: { en: "Real Estate Marketplace", ar: "سوق عقارات" },
        region: { en: "Egypt", ar: "مصر" },
        downloads: "10K+",
        description: {
          en: "Egyptian real estate platform with listings, search, and lead generation for both agents and individual buyers/sellers.",
          ar: "منصّة عقاريّة مصريّة بقوائم وبحث وتوليد فرص للوسطاء والمشترين والبائعين على حدٍّ سواء.",
        },
        links: [
          { kind: "play", href: "https://play.google.com/store/apps/details?id=aqar.ya.masr&hl=ar" },
          { kind: "ios", href: "https://apps.apple.com/us/app/%D8%B9%D9%82%D8%A7%D8%B1-%D9%8A%D8%A7-%D9%85%D8%B5%D8%B1-aqar-ya-masr/id1572629063" },
        ],
      },
      {
        name: "FRA (LuminSoft)",
        tagline: { en: "Enterprise Mobile Solution", ar: "حلٌّ مؤسّسيّ للموبايل" },
        downloads: "10K+",
        description: {
          en: "Enterprise-grade mobile application with secure authentication, encrypted data handling, and backend system integration.",
          ar: "تطبيق موبايل بمستوى المؤسّسات — مصادقة آمنة، معالجة بيانات مشفّرة، وتكامل مع الأنظمة الخلفيّة.",
        },
        links: [
          { kind: "play", href: "https://play.google.com/store/apps/details?id=com.luminsoft.fra" },
        ],
      },
      {
        name: "Khazyn",
        arabic: "خزين",
        tagline: { en: "Inventory Management", ar: "إدارة مخزون" },
        downloads: "10K+",
        description: {
          en: "Full-stack inventory system with a Vue.js admin dashboard and Flutter mobile clients. Real-time stock tracking and barcode scanning.",
          ar: "نظام مخزون كامل بلوحة تحكّم Vue.js وعملاء موبايل بـ Flutter — تتبّع فوريّ للمخزون ومسح للباركود.",
        },
        links: [
          { kind: "play", href: "https://play.google.com/store/apps/details?id=com.khazyn&hl=ar" },
          { kind: "ios", href: "https://apps.apple.com/eg/app/khazyn-%D8%AE%D8%B2%D9%8A%D9%86/id6462788369" },
        ],
      },
      {
        name: "Eram Home Services",
        tagline: { en: "Home Services", ar: "خدمات منزليّة" },
        region: { en: "KSA", ar: "السعودية" },
        downloads: "5K+",
        description: {
          en: "Home services application by Eram Group offering cleaning, maintenance, and repair across Saudi Arabia.",
          ar: "تطبيق خدمات منزليّة من مجموعة إرم يقدّم خدمات التنظيف والصيانة والإصلاح في عموم المملكة العربيّة السعوديّة.",
        },
        links: [
          { kind: "play", href: "https://play.google.com/store/apps/details?id=com.eramgroupsa.home_service" },
          { kind: "ios", href: "https://apps.apple.com/eg/app/home-service-%D9%87%D9%88%D9%85-%D8%B3%D9%8A%D8%B1%D9%81%D8%B3/id6624303709" },
        ],
      },
      {
        name: "Coupon EG",
        tagline: { en: "E-commerce & Shopping", ar: "تجارة إلكترونيّة وتسوّق" },
        region: { en: "Egypt", ar: "مصر" },
        downloads: "5K+",
        highlight: { en: "4.6★", ar: "٤٫٦★" },
        description: {
          en: "E-commerce platform for electronics shopping in Egypt by Tabex Series. Product catalog, ordering flow, and delivery tracking.",
          ar: "منصّة تجارة إلكترونيّة لتسوّق الإلكترونيّات في مصر من Tabex Series — كتالوج منتجات وتدفّق طلبات وتتبّع توصيل.",
        },
        links: [
          { kind: "web", href: "https://coupon-eg.com" },
          { kind: "play", href: "https://play.google.com/store/apps/details?id=com.tabex.series.coupon" },
        ],
      },
      {
        name: "AutoMark",
        arabic: "أوتومارك",
        tagline: { en: "Automated Grading System", ar: "نظام تصحيح آليّ" },
        region: { en: "KSA", ar: "السعودية" },
        downloads: "5K+",
        description: {
          en: "Mobile platform for automated exam grading using OCR and image processing. Used by educational institutions across Saudi Arabia.",
          ar: "منصّة موبايل لتصحيح الامتحانات آلياً عبر OCR ومعالجة الصور — تستخدمها مؤسّسات تعليميّة في عموم السعوديّة.",
        },
        links: [
          { kind: "play", href: "https://play.google.com/store/apps/details?id=com.secItDevelopers.auto_mark_app&hl=ar" },
          { kind: "ios", href: "https://apps.apple.com/ae/app/automark-%D8%A7%D9%88%D8%AA%D9%88%D9%85%D8%A7%D8%B1%D9%83/id6473959588" },
        ],
      },
      {
        name: "MENASIM",
        tagline: { en: "eSIM Travel Telecom", ar: "اتّصالات eSIM للسفر" },
        region: { en: "Global", ar: "عالميّ" },
        downloads: "1K+",
        highlight: { en: "150+ countries", ar: "أكثر من ١٥٠ دولة" },
        description: {
          en: "eSIM marketplace allowing travelers to purchase and activate data plans for 150+ countries via telecom provider API integration.",
          ar: "سوق eSIM يتيح للمسافرين شراء وتفعيل باقات البيانات في أكثر من ١٥٠ دولة عبر التكامل مع واجهات مزوّدي الاتّصالات.",
        },
        links: [
          { kind: "play", href: "https://play.google.com/store/apps/details?id=com.mena.esim.travel&hl=ar" },
          { kind: "ios", href: "https://apps.apple.com/us/app/menasim-esim-travel-internet/id6462143799" },
        ],
      },
      {
        name: "GARO",
        tagline: { en: "Service Marketplace", ar: "سوق للخدمات" },
        region: { en: "KSA", ar: "السعودية" },
        downloads: "1K+",
        description: {
          en: "Service marketplace for the Saudi market with provider matching, booking, and payment integration.",
          ar: "سوق خدمات للسوق السعودي مع مطابقة المزوّدين وحجز وتكامل دفع.",
        },
        links: [
          { kind: "play", href: "https://play.google.com/store/apps/details?id=com.garo.ksa" },
          { kind: "ios", href: "https://apps.apple.com/eg/app/garo/id1533064818?l=ar" },
        ],
      },
      {
        name: "Saudi Ophthalmology",
        tagline: { en: "Medical Conference", ar: "مؤتمر طبّي" },
        region: { en: "KSA", ar: "السعودية" },
        downloads: "1+",
        highlight: {
          en: "Closed-audience event app",
          ar: "تطبيق فعّاليّة لجمهور مغلق",
        },
        description: {
          en: "Conference application for the Saudi Ophthalmology event with schedules, speaker profiles, and session management. Distributed to event attendees only.",
          ar: "تطبيق مؤتمر طبّ العيون السعودي — جداول وملفّات متحدّثين وإدارة جلسات، يُوزَّع على حضور الفعّاليّة فقط.",
        },
        links: [
          { kind: "play", href: "https://play.google.com/store/apps/details?id=com.plevents.saudi_event&hl=en" },
          { kind: "ios", href: "https://apps.apple.com/us/app/saudi-ophthalmollogy/id6469462310" },
        ],
      },
      {
        name: "Khaymat Zaman",
        arabic: "خيمة زمان",
        tagline: { en: "Restaurant & Delivery", ar: "مطعم وتوصيل" },
        downloads: "—",
        highlight: { en: "iOS only", ar: "iOS فقط" },
        description: {
          en: "Restaurant ordering and delivery application with menu management, order tracking, and integrated payment.",
          ar: "تطبيق طلبات وتوصيل لمطعم — إدارة قائمة طعام وتتبّع طلبات ودفع متكامل.",
        },
        links: [
          { kind: "ios", href: "https://apps.apple.com/ae/app/khaymat-zaman-%D8%AE%D9%8A%D9%85%D8%A9-%D8%B2%D9%85%D8%A7%D9%86/id1512642490" },
        ],
      },
    ],
  },
  {
    id: "teaching",
    index: "02",
    label: {
      en: "Teaching & Content Creation",
      ar: "التعليم وصناعة المحتوى",
    },
    kicker: {
      en: "Courses, channels, technical writing",
      ar: "دورات، قنوات، وكتابة تقنيّة",
    },
    projects: [
      {
        name: "CODELIX",
        tagline: {
          en: "YouTube Channel — Founder & Creator",
          ar: "قناة يوتيوب — المؤسّس والصانع",
        },
        highlight: {
          en: "10.3K subscribers · 460K+ views",
          ar: "١٠٫٣ آلاف مشترك · أكثر من ٤٦٠ ألف مشاهدة",
        },
        description: {
          en: "Educational YouTube channel focused on advanced Flutter, software architecture, and best practices.",
          ar: "قناة يوتيوب تعليميّة متخصّصة في Flutter المتقدّم ومعماريّة البرمجيّات وأفضل الممارسات.",
        },
        links: [
          { kind: "youtube", href: "https://www.youtube.com/@Codelix-v4t" },
        ],
      },
      {
        name: "Flutter Advanced Course",
        tagline: {
          en: "Architectures in Flutter — Udemy Instructor",
          ar: "معماريّات Flutter — مدرّب يوديمي",
        },
        highlight: {
          en: "6,581 students · 4.6★",
          ar: "٦٬٥٨١ طالباً · ٤٫٦★",
        },
        description: {
          en: "Advanced Flutter architectures course in Arabic covering clean architecture, state management, and production-grade patterns.",
          ar: "دورة متقدّمة في معماريّات Flutter باللغة العربيّة تغطّي المعماريّة النظيفة وإدارة الحالة وأنماط بمستوى الإنتاج.",
        },
        links: [
          {
            kind: "udemy",
            href: "https://www.udemy.com/course/flutter-advanced-course-architectures-in-flutter/",
          },
        ],
      },
      {
        name: "Tech Page",
        tagline: {
          en: "Facebook Content Creator",
          ar: "صانع محتوى على فيسبوك",
        },
        highlight: {
          en: "4K+ views per post",
          ar: "أكثر من ٤ آلاف مشاهدة لكل منشور",
        },
        description: {
          en: "Regular technical posts and code reviews reaching a developer audience across the MENA region.",
          ar: "منشورات تقنيّة منتظمة ومراجعات كود تصل إلى جمهور المطوّرين في عموم منطقة الشرق الأوسط وشمال أفريقيا.",
        },
        links: [
          { kind: "facebook", href: "https://www.facebook.com/devsherif/" },
        ],
      },
    ],
  },
];
