import Intro from "@/components/Intro";
import About from "@/components/About";
import Work from "@/components/Work";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import { DockDemo } from "@/components/DockDemo";
import { GithubStats } from "@/components/GithubStats";

export default function Home() {
  return (
    <div>
      <Intro />
      <About />
      <Work />
      <Education />
      <Skills />
      <Projects />
      <Certificates />
      <GithubStats />
      <DockDemo />
    </div>
  );
}
