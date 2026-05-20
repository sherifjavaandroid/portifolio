"use client";

import { ui } from "@/lib/i18n";
import { useI18n } from "../providers";
import Reveal from "./Reveal";

export default function Hero() {
  const { lang } = useI18n();
  const h = ui.hero;
  const p = (b: { en: string; ar: string }) => b[lang];

  return (
    <section
      id="top"
      className="relative px-6 md:px-10 pt-36 md:pt-48 pb-24 md:pb-36"
    >
      <Reveal className="flex items-center justify-between mb-12 md:mb-20">
        <div className="eyebrow">{p(h.eyebrowVol)}</div>
        <div className="eyebrow hidden sm:block">{p(h.eyebrowLoc)}</div>
      </Reveal>

      <div className="grid grid-cols-12 gap-y-8 gap-x-6 items-end">
        <Reveal delay={50} className="col-span-12 md:col-span-2">
          <div className="font-mono text-mute text-xs tracking-[0.2em]">
            {p(h.no)}
          </div>
        </Reveal>

        <div className="col-span-12 md:col-span-10">
          <h1 className="font-display text-cream leading-[0.92] tracking-[-0.035em] text-[14vw] md:text-[10.5vw] lg:text-[9.2rem]">
            <Reveal delay={120}>
              <span className="block">{p(h.h1a)}</span>
            </Reveal>
            <Reveal delay={220}>
              <span className="block">
                {p(h.h1b1)}{" "}
                <span className="font-display-italic text-rust">
                  {p(h.h1b2)}
                </span>
                {p(h.h1b3)}
              </span>
            </Reveal>
            <Reveal delay={320}>
              <span className="block">
                {p(h.h1c1)}{" "}
                <span className="font-display-italic">{p(h.h1c2)}</span>
              </span>
            </Reveal>
          </h1>
        </div>

        <div className="col-span-12 md:col-start-3 md:col-span-7 mt-8 md:mt-14">
          <Reveal delay={420}>
            <p className="text-cream-2 text-lg md:text-xl leading-relaxed max-w-prose">
              {p(h.about)}
            </p>
          </Reveal>
        </div>

        <div className="col-span-12 md:col-span-3 mt-4 md:mt-14 flex flex-col gap-3">
          <Reveal delay={500}>
            <div className="chip chip-rust">
              <span className="block w-1.5 h-1.5 rounded-full bg-rust" />
              {p(h.available)}
            </div>
          </Reveal>
          <Reveal delay={580}>
            <div className="font-mono text-xs text-mute leading-relaxed">
              {p(h.aboutMeta1)}
              <br />
              {p(h.aboutMeta2)}
              <br />
              {p(h.aboutMeta3)}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
