"use client";

import type { Project, LinkKind } from "@/lib/projects";
import { ui } from "@/lib/i18n";
import { useI18n } from "../providers";

function LinkIcon({ kind }: { kind: LinkKind }) {
  const map: Record<LinkKind, string> = {
    play: "▶",
    ios: "",
    web: "↗",
    udemy: "◉",
    youtube: "▶",
    facebook: "f",
  };
  return (
    <span aria-hidden className="font-mono text-[10px] opacity-70">
      {map[kind] ?? "↗"}
    </span>
  );
}

const LINK_LABEL: Record<LinkKind, keyof typeof ui.link> = {
  play: "googlePlay",
  ios: "appStore",
  web: "website",
  udemy: "udemy",
  youtube: "youtube",
  facebook: "facebook",
};

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const { lang } = useI18n();
  const pad = String(index + 1).padStart(2, "0");
  const showArabicFirst = lang === "ar" && !!project.arabic;

  const primaryName = showArabicFirst ? project.arabic! : project.name;
  const secondaryName = showArabicFirst ? project.name : project.arabic;

  return (
    <article className="card group border-t border-line py-7 md:py-9 px-2 md:px-4 grid grid-cols-12 gap-y-4 gap-x-4 items-baseline">
      <div className="col-span-2 md:col-span-1">
        <span className="idx text-3xl md:text-4xl">{pad}</span>
      </div>

      <div className="col-span-10 md:col-span-4">
        <h3
          className="font-display text-cream text-3xl md:text-4xl leading-[0.95] tracking-[-0.02em]"
          dir={showArabicFirst ? "rtl" : "ltr"}
          lang={showArabicFirst ? "ar" : undefined}
        >
          {primaryName}
          {secondaryName && (
            <span
              dir={showArabicFirst ? "ltr" : "rtl"}
              lang={showArabicFirst ? undefined : "ar"}
              className="mx-3 align-baseline text-cream/55 text-xl md:text-2xl font-display-italic"
            >
              {secondaryName}
            </span>
          )}
        </h3>
        <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-mute">
          {project.tagline[lang]}
          {project.region && (
            <>
              <span className="mx-2 text-mute-2">/</span>
              <span className="text-cream-2">{project.region[lang]}</span>
            </>
          )}
        </div>
        {project.highlight && (
          <div className="mt-3 chip chip-acid">{project.highlight[lang]}</div>
        )}
      </div>

      <p className="col-span-12 md:col-span-4 text-cream-2/90 text-[15px] leading-relaxed">
        {project.description[lang]}
      </p>

      <div className="col-span-6 md:col-span-1 flex flex-col items-start md:items-end">
        {project.downloads ? (
          <>
            <span className="font-display text-cream text-2xl md:text-3xl leading-none tracking-tight">
              {project.downloads}
            </span>
            <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.18em] text-mute">
              {ui.card.installs[lang]}
            </span>
          </>
        ) : (
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-mute-2">
            —
          </span>
        )}
      </div>

      <div className="col-span-6 md:col-span-2 flex md:flex-col items-end md:items-end gap-2 md:gap-1.5 md:text-right">
        {project.links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-cream/85 hover:text-rust transition-colors"
          >
            <LinkIcon kind={l.kind} />
            <span className="u-link">{ui.link[LINK_LABEL[l.kind]][lang]}</span>
          </a>
        ))}
        <span
          aria-hidden
          className="arrow ml-auto md:ml-0 mt-1 font-display text-rust text-2xl leading-none"
        >
          ↗
        </span>
      </div>
    </article>
  );
}
