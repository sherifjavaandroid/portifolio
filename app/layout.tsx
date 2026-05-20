import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Ahmed Sherif — Portfolio of Published Applications",
  description:
    "19 production applications shipped across web and mobile over 5+ years. Flutter, Laravel, Next.js, Vue.js — serving Egypt, KSA, Bahrain, the UAE, and the wider MENA region.",
  metadataBase: new URL("https://portifolio-ebon-chi.vercel.app"),
  openGraph: {
    title: "Ahmed Sherif — Full Stack Developer",
    description:
      "19 production applications across web and mobile, serving the MENA region.",
    type: "website",
  },
};

// Inline pre-paint script: reads localStorage, sets lang/dir/theme attributes on <html>
// before first paint to avoid any flash of wrong language or theme.
const noFlashScript = `
(function() {
  try {
    var l = localStorage.getItem('lang');
    if (l !== 'en' && l !== 'ar') l = 'ar';
    var t = localStorage.getItem('theme');
    if (t !== 'light' && t !== 'dark') t = 'dark';
    var h = document.documentElement;
    h.setAttribute('lang', l);
    h.setAttribute('dir', l === 'ar' ? 'rtl' : 'ltr');
    h.setAttribute('data-lang', l);
    h.setAttribute('data-theme', t);
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Default before the inline script runs (e.g. JS disabled): Arabic + dark.
  return (
    <html
      lang="ar"
      dir="rtl"
      data-lang="ar"
      data-theme="dark"
      suppressHydrationWarning
    >
      <head>
        <script
          // pre-paint, must run synchronously before body renders
          dangerouslySetInnerHTML={{ __html: noFlashScript }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT,WONK@0,9..144,300..900,30..100,0..1;1,9..144,300..900,30..100,0..1&family=Hanken+Grotesk:wght@300..800&family=JetBrains+Mono:wght@300..600&family=Amiri:ital,wght@0,400;0,700;1,400;1,700&family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
