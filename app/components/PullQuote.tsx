"use client";

import { ui } from "@/lib/i18n";
import { useI18n } from "../providers";
import Reveal from "./Reveal";

export default function PullQuote() {
  const { lang } = useI18n();
  const q = ui.pullQuote;

  // Build the quote with two italic emphasis pieces inserted into the body
  const body = q.quote[lang];
  const liveTxt = q.italicLive[lang];
  const countsTxt = q.italicCounts[lang];

  const renderWithEmphasis = (txt: string) => {
    // Split on the italic phrases (in order); insert italic spans
    const parts: (string | { italic: string; accent?: boolean })[] = [];
    let rest = txt;
    [liveTxt, countsTxt].forEach((phrase, i) => {
      const idx = rest.indexOf(phrase);
      if (idx >= 0) {
        if (idx > 0) parts.push(rest.slice(0, idx));
        parts.push({ italic: phrase, accent: i === 1 });
        rest = rest.slice(idx + phrase.length);
      }
    });
    if (rest) parts.push(rest);
    return parts.map((p, i) =>
      typeof p === "string" ? (
        <span key={i}>{p}</span>
      ) : (
        <span
          key={i}
          className={`font-display-italic ${p.accent ? "" : ""}`}
        >
          {p.italic}
        </span>
      ),
    );
  };

  return (
    <section
      id="work"
      className="relative px-6 md:px-10 py-28 md:py-40 border-y border-line"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, var(--fg) 0 1px, transparent 1px 80px)",
        }}
      />
      <div className="relative grid grid-cols-12 gap-6 items-end">
        <div className="col-span-12 md:col-span-2">
          <Reveal>
            <div className="section-no">— § {q.section[lang]}</div>
          </Reveal>
        </div>
        <div className="col-span-12 md:col-span-10">
          <Reveal delay={120}>
            <blockquote className="font-display text-cream text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-[-0.025em]">
              <span className="font-display-italic text-rust">&ldquo;</span>
              {renderWithEmphasis(body)}
              <span className="font-display-italic text-rust">&rdquo;</span>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
