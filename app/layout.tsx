import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ahmed Sherif — Portfolio of Published Applications",
  description:
    "21+ production applications shipped across web and mobile over 5+ years. Flutter, Laravel, Next.js, Vue.js — serving Egypt, KSA, Kuwait, Bahrain, the UAE, and the MENA region.",
  metadataBase: new URL("https://ahmedsherif.dev"),
  openGraph: {
    title: "Ahmed Sherif — Full Stack Developer",
    description:
      "21+ production applications across web and mobile, serving the MENA region.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT,WONK@0,9..144,300..900,30..100,0..1;1,9..144,300..900,30..100,0..1&family=Hanken+Grotesk:wght@300..800&family=JetBrains+Mono:wght@300..600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
