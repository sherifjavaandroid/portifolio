import type { Lang } from "@/app/providers";

export type Bi = { en: string; ar: string };

export const pick = (b: Bi, lang: Lang) => b[lang];

export const ui = {
  nav: {
    work: { en: "Work", ar: "الأعمال" },
    stack: { en: "Stack", ar: "التقنيات" },
    contact: { en: "Contact", ar: "تواصل" },
    github: { en: "GitHub ↗", ar: "جيت‑هَب ↗" },
    index: { en: "Ahmed Sherif / Index", ar: "أحمد شريف / فهرس" },
  },

  hero: {
    eyebrowVol: { en: "Portfolio / vol. 01 / 2020 — 2026", ar: "مجموعة الأعمال / المجلد ٠١ / ٢٠٢٠ — ٢٠٢٦" },
    eyebrowLoc: { en: "Cairo · Riyadh · Remote — UTC+3", ar: "القاهرة · الرياض · عن بُعد — UTC+3" },
    no: { en: "№ 001 — ahmed sherif", ar: "رقم ٠٠١ — أحمد شريف" },
    h1a: { en: "Nineteen", ar: "تسعة عشر" },
    h1b1: { en: "apps,", ar: "تطبيقاً،" },
    h1b2: { en: "shipped", ar: "تم إطلاقها" },
    h1b3: { en: ".", ar: "." },
    h1c1: { en: "Five countries.", ar: "خمس دول." },
    h1c2: { en: "One craft.", ar: "حرفةٌ واحدة." },
    available: { en: "Available — Q3 / 2026", ar: "متاح للعمل — الربع الثالث ٢٠٢٦" },
    aboutMeta1: { en: "Full Stack Developer", ar: "مطوّر كامل المكدس" },
    aboutMeta2: { en: "Web · iOS · Android", ar: "ويب · iOS · أندرويد" },
    aboutMeta3: { en: "Flutter · Laravel · Next.js", ar: "Flutter · Laravel · Next.js" },
    about: {
      en: "A curated portfolio of 19 production applications shipped across web and mobile over 5+ years — serving users in Egypt, KSA, Bahrain, the UAE, and the wider MENA region. Ranked below by live Google Play install counts.",
      ar: "مجموعة مختارة من ١٩ تطبيقاً في الإنتاج، تم إطلاقها على الويب والموبايل خلال أكثر من ٥ سنوات — تخدم مستخدمين في مصر والسعودية والبحرين والإمارات وعموم منطقة الشرق الأوسط وشمال أفريقيا. مرتّبة أدناه بحسب إحصائيات تنزيلات جوجل بلاي الحيّة.",
    },
  },

  stats: {
    heading: { en: "Receipts / by the numbers", ar: "المؤشرات / بالأرقام" },
    items: [
      { en: "Production apps", ar: "تطبيقات في الإنتاج" },
      { en: "Countries served", ar: "دول تخدم" },
      { en: "Combined installs", ar: "إجمالي التنزيلات" },
      { en: "Top app installs", ar: "أعلى تطبيق" },
      { en: "Udemy students", ar: "طلاب يوديمي" },
      { en: "YouTube subs", ar: "مشتركو يوتيوب" },
      { en: "Years shipping", ar: "سنوات في الميدان" },
    ] as Bi[],
  },

  marquee: {
    aria: { en: "Technical stack", ar: "المكدس التقني" },
  },

  pullQuote: {
    section: { en: "Selected work", ar: "أعمال مختارة" },
    quote: {
      en: "Every entry below is live in production — not a deck slide, not a side experiment. One ranked list, nineteen apps, ordered by live Play Store install counts.",
      ar: "كل مدخل تجده أدناه تطبيقٌ حيٌّ في الإنتاج — ليس شريحة عرض، ولا تجربة جانبية. قائمةٌ واحدة، تسعة عشر تطبيقاً، مرتّبة بحسب إحصائيات تنزيلات بلاي ستور الحيّة.",
    },
    italicLive: { en: "live in production", ar: "حيٌّ في الإنتاج" },
    italicCounts: { en: "live Play Store install counts", ar: "إحصائيات بلاي ستور الحيّة" },
  },

  card: {
    installs: { en: "installs", ar: "تنزيل" },
    none: { en: "—", ar: "—" },
  },

  category: {
    chapter: { en: "Chapter", ar: "الفصل" },
    entries: { en: "entries", ar: "مدخلات" },
  },

  footer: {
    section: { en: "Colophon / Get in touch", ar: "تنويه / للتواصل" },
    cta1: { en: "Let's build the", ar: "لنبنِ" },
    cta2: { en: "next twenty", ar: "العشرين القادمة" },
    cta3: { en: ".", ar: "." },
    youtube: { en: "YouTube · CODELIX ↗", ar: "يوتيوب · CODELIX ↗" },
    udemy: { en: "Udemy Course ↗", ar: "دورة يوديمي ↗" },
    rights: {
      en: "© 2020—2026 / Ahmed Sherif / All rights reserved",
      ar: "© ٢٠٢٠—٢٠٢٦ / أحمد شريف / جميع الحقوق محفوظة",
    },
    set: {
      en: "Set in Fraunces & Hanken Grotesk",
      ar: "أُعدّ بخطّي أميري وأي بي إم بلكس",
    },
  },

  toggle: {
    toEn: { en: "EN", ar: "EN" },
    toAr: { en: "عربي", ar: "عربي" },
    dark: { en: "Dark", ar: "داكن" },
    light: { en: "Light", ar: "فاتح" },
  },

  link: {
    googlePlay: { en: "Google Play", ar: "جوجل بلاي" },
    appStore: { en: "App Store", ar: "آب ستور" },
    website: { en: "Website", ar: "الموقع" },
    udemy: { en: "View on Udemy", ar: "اعرض على يوديمي" },
    youtube: { en: "Visit Channel", ar: "زر القناة" },
    facebook: { en: "Facebook Page", ar: "صفحة فيسبوك" },
  },
};
