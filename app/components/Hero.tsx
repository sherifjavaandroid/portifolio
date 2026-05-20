import { profile } from "@/lib/projects";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative px-6 md:px-10 pt-36 md:pt-48 pb-24 md:pb-36"
    >
      {/* meta strip */}
      <Reveal className="flex items-center justify-between mb-12 md:mb-20">
        <div className="eyebrow">Portfolio / vol. 01 / 2020 — 2026</div>
        <div className="eyebrow hidden sm:block">
          Cairo · Riyadh · Remote — UTC+3
        </div>
      </Reveal>

      <div className="grid grid-cols-12 gap-y-8 gap-x-6 items-end">
        {/* index number */}
        <Reveal delay={50} className="col-span-12 md:col-span-2">
          <div className="font-mono text-mute text-xs tracking-[0.2em]">
            № 001 — ahmed&nbsp;sherif
          </div>
        </Reveal>

        {/* gigantic display headline */}
        <div className="col-span-12 md:col-span-10">
          <h1 className="font-display text-cream leading-[0.92] tracking-[-0.035em] text-[15vw] md:text-[11vw] lg:text-[9.6rem]">
            <Reveal delay={120}>
              <span className="block">Nineteen</span>
            </Reveal>
            <Reveal delay={220}>
              <span className="block">
                apps,{" "}
                <span className="font-display-italic text-rust">shipped</span>.
              </span>
            </Reveal>
            <Reveal delay={320}>
              <span className="block">
                Five countries.{" "}
                <span className="font-display-italic">One craft.</span>
              </span>
            </Reveal>
          </h1>
        </div>

        {/* sub */}
        <div className="col-span-12 md:col-start-3 md:col-span-7 mt-8 md:mt-14">
          <Reveal delay={420}>
            <p className="text-cream-2 text-lg md:text-xl leading-relaxed max-w-prose">
              {profile.about}
            </p>
          </Reveal>
        </div>

        {/* side meta */}
        <div className="col-span-12 md:col-span-3 mt-4 md:mt-14 flex flex-col gap-3">
          <Reveal delay={500}>
            <div className="chip chip-rust">
              <span className="block w-1.5 h-1.5 rounded-full bg-rust" />
              Available — Q3 / 2026
            </div>
          </Reveal>
          <Reveal delay={580}>
            <div className="font-mono text-xs text-mute leading-relaxed">
              Full Stack Developer
              <br />
              Web · iOS · Android
              <br />
              Flutter · Laravel · Next.js
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
