export type Link = {
  label: string;
  href: string;
  kind: "play" | "ios" | "web" | "udemy" | "youtube" | "facebook";
};

export type Project = {
  name: string;
  arabic?: string;
  tagline: string;
  region?: string;
  downloads?: string;
  highlight?: string;
  description: string;
  links: Link[];
};

export type Category = {
  id: string;
  index: string;
  label: string;
  kicker: string;
  projects: Project[];
};

export const profile = {
  name: "Ahmed Sherif",
  role: "Full Stack Developer",
  subRole: "Web & Mobile Applications",
  email: "engahmedsherif39@gmail.com",
  phone: "+20 102 358 1657",
  github: "https://github.com/sherifjavaandroid",
  youtube: "https://www.youtube.com/@Codelix-v4t",
  udemy:
    "https://www.udemy.com/course/flutter-advanced-course-architectures-in-flutter/",
  about:
    "A curated portfolio of 19 production applications shipped across web and mobile over 5+ years — serving users in Egypt, KSA, Bahrain, the UAE, and the wider MENA region. Ranked below by live Google Play install counts.",
};

export const stats: { label: string; value: string }[] = [
  { label: "Production apps", value: "19" },
  { label: "Countries served", value: "05" },
  { label: "Combined installs", value: "1.4M+" },
  { label: "Top app installs", value: "500K+" },
  { label: "Udemy students", value: "6.5K" },
  { label: "YouTube subs", value: "10.3K" },
  { label: "Years shipping", value: "05+" },
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
// Ties preserved in original section order.
export const categories: Category[] = [
  {
    id: "ranked",
    index: "01",
    label: "Apps — ranked by installs",
    kicker: "Live Google Play install counts, descending",
    projects: [
      {
        name: "Direct",
        arabic: "دايركت",
        tagline: "Travel & Booking",
        region: "Bahrain",
        downloads: "500K+",
        description:
          "Travel booking platform for the Bahrain market with flights, hotels, and complete itinerary management.",
        links: [
          {
            label: "Google Play",
            href: "https://play.google.com/store/apps/details?id=com.direct.travel&hl=en_US",
            kind: "play",
          },
          {
            label: "App Store",
            href: "https://apps.apple.com/bh/app/direct-%D8%AF%D8%A7%D9%8A%D8%B1%D9%83%D8%AA/id1270140475",
            kind: "ios",
          },
        ],
      },
      {
        name: "Ma3ak",
        arabic: "معاك",
        tagline: "Roadside Assistance Platform",
        region: "Egypt",
        downloads: "100K+",
        description:
          "Real-time roadside service platform: tow trucks, battery jumpstart, fuel delivery, and substitute vehicles with geolocation-based dispatch.",
        links: [
          {
            label: "Google Play",
            href: "https://play.google.com/store/apps/details?id=com.m3ak.m3ak&hl=ar",
            kind: "play",
          },
          {
            label: "App Store",
            href: "https://apps.apple.com/ma/app/ma3ak-%D9%85%D8%B9%D8%A7%D9%83/id6758354892",
            kind: "ios",
          },
        ],
      },
      {
        name: "FilKhedma",
        arabic: "في الخدمة",
        tagline: "Home Services Platform",
        region: "Egypt",
        downloads: "100K+",
        description:
          "On-demand home services connecting customers with skilled technicians for plumbing, electrical, carpentry, AC, and more.",
        links: [
          {
            label: "Google Play",
            href: "https://play.google.com/store/apps/details?id=com.filkhedma.customer",
            kind: "play",
          },
          {
            label: "App Store",
            href: "https://apps.apple.com/eg/app/filkhedma-home-services/id1473742608?l=ar",
            kind: "ios",
          },
        ],
      },
      {
        name: "B8ak",
        arabic: "بضائعك",
        tagline: "Service Marketplace",
        region: "KSA",
        downloads: "100K+",
        description:
          "Service marketplace connecting customers with verified providers across home maintenance, cleaning, and repair categories.",
        links: [
          {
            label: "Google Play",
            href: "https://play.google.com/store/apps/details?id=com.b8ak.b8akapp",
            kind: "play",
          },
          {
            label: "App Store",
            href: "https://apps.apple.com/us/app/%D8%AE%D8%AF%D9%85%D8%A7%D8%AA-%D9%85%D9%86%D8%B2%D9%84%D9%8A%D8%A9-b8ak-%D8%A8%D9%8A%D8%AA%D9%83/id1017413686?l=ar",
            kind: "ios",
          },
        ],
      },
      {
        name: "Fanni",
        arabic: "فني",
        tagline: "Technical Services",
        region: "KSA",
        downloads: "100K+",
        description:
          "Platform for booking technical and home maintenance specialists with in-app requests, scheduling, and payment.",
        links: [
          {
            label: "Google Play",
            href: "https://play.google.com/store/apps/details?id=com.cloudtech.fanniapp",
            kind: "play",
          },
          {
            label: "App Store",
            href: "https://apps.apple.com/us/app/fanni-%D9%81%D9%86%D9%8A/id1136144566",
            kind: "ios",
          },
        ],
      },
      {
        name: "Taskty",
        arabic: "تاسكتي",
        tagline: "Task & Service App",
        downloads: "100K+",
        description:
          "On-demand task and service application connecting customers with providers for various daily needs.",
        links: [
          {
            label: "Google Play",
            href: "https://play.google.com/store/apps/details?id=com.tasktyapp.taskty",
            kind: "play",
          },
          {
            label: "App Store",
            href: "https://apps.apple.com/sa/app/taskty-cleaning-maintenance/id1486080094",
            kind: "ios",
          },
        ],
      },
      {
        name: "Maharah",
        arabic: "مهارة",
        tagline: "Skills & Services Platform",
        downloads: "100K+",
        description:
          "Platform matching skilled professionals with customers for handyman, cleaning, and personal-care services.",
        links: [
          {
            label: "Google Play",
            href: "https://play.google.com/store/apps/details?id=com.maharah.maharahApp",
            kind: "play",
          },
          {
            label: "App Store",
            href: "https://apps.apple.com/us/app/maharah-%D9%85%D9%87%D8%A7%D8%B1%D8%A9-maintenance/id1044631951",
            kind: "ios",
          },
        ],
      },
      {
        name: "HomeRun",
        tagline: "Customer Service App",
        downloads: "100K+",
        description:
          "Customer-facing application for booking on-demand services with real-time tracking and order management.",
        links: [
          {
            label: "Google Play",
            href: "https://play.google.com/store/apps/details?id=com.homerun.customer",
            kind: "play",
          },
          {
            label: "App Store",
            href: "https://apps.apple.com/us/app/homerun-get-things-done/id1506390428",
            kind: "ios",
          },
        ],
      },
      {
        name: "LinkOut",
        tagline: "Networking Platform",
        downloads: "100K+",
        description:
          "Networking and professional connections platform — Flutter frontend with a Laravel REST backend.",
        links: [
          {
            label: "Google Play",
            href: "https://play.google.com/store/apps/details?id=com.xapps.linkout",
            kind: "play",
          },
          {
            label: "App Store",
            href: "https://apps.apple.com/eg/app/linkout/id6444288176",
            kind: "ios",
          },
        ],
      },
      {
        name: "Aqar Ya Masr",
        arabic: "عقار يا مصر",
        tagline: "Real Estate Marketplace",
        region: "Egypt",
        downloads: "10K+",
        description:
          "Egyptian real estate platform with listings, search, and lead generation for both agents and individual buyers/sellers.",
        links: [
          {
            label: "Google Play",
            href: "https://play.google.com/store/apps/details?id=aqar.ya.masr&hl=ar",
            kind: "play",
          },
          {
            label: "App Store",
            href: "https://apps.apple.com/us/app/%D8%B9%D9%82%D8%A7%D8%B1-%D9%8A%D8%A7-%D9%85%D8%B5%D8%B1-aqar-ya-masr/id1572629063",
            kind: "ios",
          },
        ],
      },
      {
        name: "FRA (LuminSoft)",
        tagline: "Enterprise Mobile Solution",
        downloads: "10K+",
        description:
          "Enterprise-grade mobile application with secure authentication, encrypted data handling, and backend system integration.",
        links: [
          {
            label: "Google Play",
            href: "https://play.google.com/store/apps/details?id=com.luminsoft.fra",
            kind: "play",
          },
        ],
      },
      {
        name: "Khazyn",
        arabic: "خزين",
        tagline: "Inventory Management",
        downloads: "10K+",
        description:
          "Full-stack inventory system with a Vue.js admin dashboard and Flutter mobile clients. Real-time stock tracking and barcode scanning.",
        links: [
          {
            label: "Google Play",
            href: "https://play.google.com/store/apps/details?id=com.khazyn&hl=ar",
            kind: "play",
          },
          {
            label: "App Store",
            href: "https://apps.apple.com/eg/app/khazyn-%D8%AE%D8%B2%D9%8A%D9%86/id6462788369",
            kind: "ios",
          },
        ],
      },
      {
        name: "Eram Home Services",
        tagline: "Home Services",
        region: "KSA",
        downloads: "5K+",
        description:
          "Home services application by Eram Group offering cleaning, maintenance, and repair across Saudi Arabia.",
        links: [
          {
            label: "Google Play",
            href: "https://play.google.com/store/apps/details?id=com.eramgroupsa.home_service",
            kind: "play",
          },
          {
            label: "App Store",
            href: "https://apps.apple.com/eg/app/home-service-%D9%87%D9%88%D9%85-%D8%B3%D9%8A%D8%B1%D9%81%D8%B3/id6624303709",
            kind: "ios",
          },
        ],
      },
      {
        name: "Coupon EG",
        tagline: "E-commerce & Shopping",
        region: "Egypt",
        downloads: "5K+",
        highlight: "4.6★",
        description:
          "E-commerce platform for electronics shopping in Egypt by Tabex Series. Product catalog, ordering flow, and delivery tracking.",
        links: [
          { label: "Website", href: "https://coupon-eg.com", kind: "web" },
          {
            label: "Google Play",
            href: "https://play.google.com/store/apps/details?id=com.tabex.series.coupon",
            kind: "play",
          },
        ],
      },
      {
        name: "AutoMark",
        arabic: "أوتومارك",
        tagline: "Automated Grading System",
        region: "KSA",
        downloads: "5K+",
        description:
          "Mobile platform for automated exam grading using OCR and image processing. Used by educational institutions across Saudi Arabia.",
        links: [
          {
            label: "Google Play",
            href: "https://play.google.com/store/apps/details?id=com.secItDevelopers.auto_mark_app&hl=ar",
            kind: "play",
          },
          {
            label: "App Store",
            href: "https://apps.apple.com/ae/app/automark-%D8%A7%D9%88%D8%AA%D9%88%D9%85%D8%A7%D8%B1%D9%83/id6473959588",
            kind: "ios",
          },
        ],
      },
      {
        name: "MENASIM",
        tagline: "eSIM Travel Telecom",
        region: "Global",
        downloads: "1K+",
        highlight: "150+ countries",
        description:
          "eSIM marketplace allowing travelers to purchase and activate data plans for 150+ countries via telecom provider API integration.",
        links: [
          {
            label: "Google Play",
            href: "https://play.google.com/store/apps/details?id=com.mena.esim.travel&hl=ar",
            kind: "play",
          },
          {
            label: "App Store",
            href: "https://apps.apple.com/us/app/menasim-esim-travel-internet/id6462143799",
            kind: "ios",
          },
        ],
      },
      {
        name: "GARO",
        tagline: "Service Marketplace",
        region: "KSA",
        downloads: "1K+",
        description:
          "Service marketplace for the Saudi market with provider matching, booking, and payment integration.",
        links: [
          {
            label: "Google Play",
            href: "https://play.google.com/store/apps/details?id=com.garo.ksa",
            kind: "play",
          },
          {
            label: "App Store",
            href: "https://apps.apple.com/eg/app/garo/id1533064818?l=ar",
            kind: "ios",
          },
        ],
      },
      {
        name: "Saudi Ophthalmology",
        tagline: "Medical Conference",
        region: "KSA",
        downloads: "1+",
        highlight: "Closed-audience event app",
        description:
          "Conference application for the Saudi Ophthalmology event with schedules, speaker profiles, and session management. Distributed to event attendees only.",
        links: [
          {
            label: "Google Play",
            href: "https://play.google.com/store/apps/details?id=com.plevents.saudi_event&hl=en",
            kind: "play",
          },
          {
            label: "App Store",
            href: "https://apps.apple.com/us/app/saudi-ophthalmollogy/id6469462310",
            kind: "ios",
          },
        ],
      },
      {
        name: "Khaymat Zaman",
        arabic: "خيمة زمان",
        tagline: "Restaurant & Delivery",
        downloads: "—",
        highlight: "iOS only",
        description:
          "Restaurant ordering and delivery application with menu management, order tracking, and integrated payment.",
        links: [
          {
            label: "App Store",
            href: "https://apps.apple.com/ae/app/khaymat-zaman-%D8%AE%D9%8A%D9%85%D8%A9-%D8%B2%D9%85%D8%A7%D9%86/id1512642490",
            kind: "ios",
          },
        ],
      },
    ],
  },
  {
    id: "teaching",
    index: "02",
    label: "Teaching & Content Creation",
    kicker: "Courses, channels, technical writing",
    projects: [
      {
        name: "CODELIX",
        tagline: "YouTube Channel — Founder & Creator",
        highlight: "10.3K subscribers · 460K+ views",
        description:
          "Educational YouTube channel focused on advanced Flutter, software architecture, and best practices.",
        links: [
          {
            label: "Visit Channel",
            href: "https://www.youtube.com/@Codelix-v4t",
            kind: "youtube",
          },
        ],
      },
      {
        name: "Flutter Advanced Course",
        tagline: "Architectures in Flutter — Udemy Instructor",
        highlight: "6,581 students · 4.6★",
        description:
          "Advanced Flutter architectures course in Arabic covering clean architecture, state management, and production-grade patterns.",
        links: [
          {
            label: "View on Udemy",
            href: "https://www.udemy.com/course/flutter-advanced-course-architectures-in-flutter/",
            kind: "udemy",
          },
        ],
      },
      {
        name: "Tech Page",
        tagline: "Facebook Content Creator",
        highlight: "4K+ views per post",
        description:
          "Regular technical posts and code reviews reaching a developer audience across the MENA region.",
        links: [
          {
            label: "Facebook Page",
            href: "https://www.facebook.com/devsherif/",
            kind: "facebook",
          },
        ],
      },
    ],
  },
];
