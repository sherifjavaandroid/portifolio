import { categories } from "@/lib/projects";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TechMarquee from "./components/TechMarquee";
import Stats from "./components/Stats";
import PullQuote from "./components/PullQuote";
import ProjectCategory from "./components/ProjectCategory";
import Footer from "./components/Footer";

export default function Home() {
  let cursor = 0;
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TechMarquee />
        <Stats />
        <PullQuote />
        {categories.map((cat) => {
          const node = (
            <ProjectCategory
              key={cat.id}
              category={cat}
              startIndex={cursor}
            />
          );
          cursor += cat.projects.length;
          return node;
        })}
        <Footer />
      </main>
    </>
  );
}
