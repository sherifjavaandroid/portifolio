import { profile } from "@/lib/projects";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5 flex items-center justify-between mix-blend-difference">
      <a href="#top" className="flex items-center gap-3 text-cream">
        <span className="font-display text-xl tracking-tight">AS</span>
        <span className="hidden md:inline-block w-px h-4 bg-cream/40" />
        <span className="hidden md:inline-block font-mono text-[10px] uppercase tracking-[0.25em] text-cream/80">
          Ahmed Sherif / Index
        </span>
      </a>
      <nav className="flex items-center gap-5 md:gap-8 font-mono text-[10px] uppercase tracking-[0.22em] text-cream/85">
        <a href="#work" className="u-link hidden sm:inline">
          Work
        </a>
        <a href="#stack" className="u-link hidden md:inline">
          Stack
        </a>
        <a href="#contact" className="u-link">
          Contact
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="u-link"
        >
          GitHub ↗
        </a>
      </nav>
    </header>
  );
}
