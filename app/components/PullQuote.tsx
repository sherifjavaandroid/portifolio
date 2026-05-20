import Reveal from "./Reveal";

export default function PullQuote() {
  return (
    <section
      id="work"
      className="relative px-6 md:px-10 py-28 md:py-40 border-y border-line"
    >
      <div className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, var(--color-cream) 0 1px, transparent 1px 80px)",
        }}
      />
      <div className="relative grid grid-cols-12 gap-6 items-end">
        <div className="col-span-12 md:col-span-2">
          <Reveal>
            <div className="section-no">— § Selected work</div>
          </Reveal>
        </div>
        <div className="col-span-12 md:col-span-10">
          <Reveal delay={120}>
            <blockquote className="font-display text-cream text-4xl md:text-6xl lg:text-7xl leading-[1.02] tracking-[-0.025em]">
              <span className="font-display-italic text-rust">&ldquo;</span>
              Every entry below is{" "}
              <span className="font-display-italic">live in production</span> —
              not a deck slide, not a side experiment. One ranked list,
              nineteen apps, ordered by{" "}
              <span className="font-display-italic">live Play Store install
              counts</span>.
              <span className="font-display-italic text-rust">&rdquo;</span>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
