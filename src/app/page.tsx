import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const metadata = {
  title: `${PERSONAL_INFO.name} | ${PERSONAL_INFO.title}`,
  description: PERSONAL_INFO.bio,
};

export default function Home() {
  return (
    <main style={{ position: "relative" }}>
      <div className="bg-grid" />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ExperienceTimeline />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}