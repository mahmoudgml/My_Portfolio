"use client";
import { useEffect, useRef } from "react";
import { PROJECTS } from "@/data/portfolioData";
import { FolderGit2, ExternalLink } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" style={{ paddingTop: "8rem" }}>
      <div className="section-container">
        <span className="section-label">02. Work</span>
        <h2
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700,
            marginBottom: "3rem",
            color: "var(--color-text-primary)",
          }}
        >
          Data Pipelines
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem" }}>
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="project-card data-card"
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "2rem",
                borderRadius: "0.5rem",
                position: "relative",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                <FolderGit2 size={32} color="var(--color-accent)" />
                <div style={{ display: "flex", gap: "1rem" }}>
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors">
                      <FaGithub size={20} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <h3 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "1rem" }}>
                {project.title}
              </h3>
              
              <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: "2rem", flexGrow: 1 }}>
                {project.description}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono"
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--color-accent-secondary)",
                      backgroundColor: "rgba(16, 185, 129, 0.1)",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "1rem",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}