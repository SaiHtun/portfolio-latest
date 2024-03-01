import Experiences from "./components/experiences";
import Hero from "./components/hero";
import MainHeader from "~/components/main-header";
import Projects from "./components/projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-y-40 px-6">
      <MainHeader />
      <Hero />
      <Experiences />
      <Projects />
      <div className="mb-auto"></div>
      <div className="h-20 bg-zinc-100"></div>
    </main>
  );
}
