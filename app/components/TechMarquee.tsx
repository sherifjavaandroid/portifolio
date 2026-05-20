import { techStack } from "@/lib/projects";

export default function TechMarquee() {
  const items = [...techStack, ...techStack];
  return (
    <section
      id="stack"
      aria-label="Technical stack"
      className="relative border-y border-line py-6 overflow-hidden bg-ink-2/30"
    >
      <div className="flex whitespace-nowrap marquee-track">
        {items.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="font-display text-cream/85 text-3xl md:text-5xl px-6 md:px-10 flex items-center gap-6"
          >
            {t}
            <span className="text-rust text-xl md:text-2xl font-display-italic">
              ✦
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}
