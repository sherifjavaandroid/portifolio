import type { Category } from "@/lib/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function ProjectCategory({
  category,
  startIndex,
}: {
  category: Category;
  startIndex: number;
}) {
  return (
    <section
      id={category.id}
      className="px-6 md:px-10 py-16 md:py-24 grid grid-cols-12 gap-8"
    >
      {/* sticky left column */}
      <aside className="col-span-12 md:col-span-3 sticky-col">
        <Reveal>
          <div className="section-no">— Chapter {category.index}</div>
          <h2 className="mt-4 font-display text-cream text-4xl md:text-5xl leading-[0.95] tracking-[-0.02em]">
            {category.label}
          </h2>
          <p className="mt-4 max-w-xs text-mute text-sm font-display-italic">
            {category.kicker}.
          </p>
          <div className="mt-6 chip">
            <span className="text-rust">●</span>
            {category.projects.length} entries
          </div>
        </Reveal>
      </aside>

      {/* project list */}
      <div className="col-span-12 md:col-span-9">
        {category.projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 40}>
            <ProjectCard project={p} index={startIndex + i} />
          </Reveal>
        ))}
        <div className="border-t border-line" />
      </div>
    </section>
  );
}
