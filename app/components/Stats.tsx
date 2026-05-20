import { stats } from "@/lib/projects";
import Reveal from "./Reveal";

export default function Stats() {
  return (
    <section className="px-6 md:px-10 py-24 md:py-32">
      <Reveal>
        <div className="eyebrow mb-8">Receipts / by the numbers</div>
      </Reveal>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 border-t border-line">
        {stats.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 70}
            className="border-b border-line md:border-b-0 md:border-r last:border-r-0 px-4 py-7 group hover:bg-ink-2/40 transition-colors duration-500"
          >
            <div className="font-display text-cream text-4xl md:text-5xl leading-none tracking-tight">
              {s.value}
            </div>
            <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-mute">
              {s.label}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
