import { profile } from "@/lib/projects";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative px-6 md:px-10 pt-24 md:pt-36 pb-12 border-t border-line"
    >
      <Reveal>
        <div className="eyebrow mb-10">— Colophon / Get in touch</div>
      </Reveal>

      <div className="grid grid-cols-12 gap-y-12 gap-x-6 items-end">
        <div className="col-span-12 md:col-span-8">
          <Reveal>
            <p className="font-display text-cream text-[12vw] md:text-[7.5vw] leading-[0.92] tracking-[-0.03em]">
              Let&apos;s build the{" "}
              <span className="font-display-italic text-rust">
                next twenty
              </span>
              .
            </p>
          </Reveal>
        </div>
        <div className="col-span-12 md:col-span-4 flex flex-col gap-4 md:items-end md:text-right font-mono text-xs uppercase tracking-[0.18em] text-cream-2/90">
          <a
            href={`mailto:${profile.email}`}
            className="u-link text-cream text-base normal-case tracking-normal font-display"
          >
            {profile.email}
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="u-link">
            {profile.phone}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="u-link"
          >
            GitHub ↗
          </a>
          <a
            href={profile.youtube}
            target="_blank"
            rel="noreferrer"
            className="u-link"
          >
            YouTube · CODELIX ↗
          </a>
          <a
            href={profile.udemy}
            target="_blank"
            rel="noreferrer"
            className="u-link"
          >
            Udemy Course ↗
          </a>
        </div>
      </div>

      <div className="mt-24 pt-6 border-t border-line flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
        <div>
          © 2020—2026 / {profile.name} / All rights reserved
        </div>
        <div className="flex items-center gap-3">
          <span className="cursor">Set in Fraunces &amp; Hanken Grotesk</span>
        </div>
      </div>
    </footer>
  );
}
