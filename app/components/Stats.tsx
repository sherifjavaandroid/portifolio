"use client";

import { ui } from "@/lib/i18n";
import { statValues } from "@/lib/projects";
import { useI18n } from "../providers";
import Reveal from "./Reveal";

export default function Stats() {
  const { lang } = useI18n();
  return (
    <section className="px-6 md:px-10 py-24 md:py-32">
      <Reveal>
        <div className="eyebrow mb-8">{ui.stats.heading[lang]}</div>
      </Reveal>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 border-t border-line">
        {ui.stats.items.map((label, i) => (
          <Reveal
            key={label.en}
            delay={i * 70}
            className="border-b border-line md:border-b-0 md:border-r last:border-r-0 px-4 py-7 group hover:bg-ink-2/40 transition-colors duration-500"
          >
            <div className="font-display text-cream text-4xl md:text-5xl leading-none tracking-tight">
              {statValues[i]}
            </div>
            <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-mute">
              {label[lang]}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
