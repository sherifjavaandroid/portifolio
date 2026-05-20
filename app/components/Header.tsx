"use client";

import { useI18n } from "../providers";
import { ui } from "@/lib/i18n";
import { profile } from "@/lib/projects";
import Toggles from "./Toggles";

export default function Header() {
  const { lang } = useI18n();
  const t = (k: keyof typeof ui.nav) => ui.nav[k][lang];

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-6 md:px-10 py-5 flex items-center justify-between header-blend">
      <a href="#top" className="flex items-center gap-3 text-cream">
        <span className="font-display text-xl tracking-tight">
          {lang === "ar" ? "أ. ش" : "AS"}
        </span>
        <span className="hidden md:inline-block w-px h-4 bg-cream/40" />
        <span className="hidden md:inline-block font-mono text-[10px] uppercase tracking-[0.25em] text-cream/85">
          {t("index")}
        </span>
      </a>
      <nav className="flex items-center gap-4 md:gap-6 font-mono text-[10px] uppercase tracking-[0.22em] text-cream/85">
        <a href="#work" className="u-link hidden sm:inline">
          {t("work")}
        </a>
        <a href="#stack" className="u-link hidden md:inline">
          {t("stack")}
        </a>
        <a href="#contact" className="u-link">
          {t("contact")}
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="u-link hidden md:inline"
        >
          {t("github")}
        </a>
        <Toggles />
      </nav>
    </header>
  );
}
