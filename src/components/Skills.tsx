"use client";
import { useEffect, useRef } from "react";
import { SKILLS } from "@/data/portfolioData";
import { Database, Code2, Server, Cloud, BarChart3, Settings } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".skill-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skillCategories = [
    { title: "Programming", icon: <Code2 size={24} />, items: SKILLS.programming },
    { title: "Data Engineering", icon: <Server size={24} />, items: SKILLS.dataEngineering },
    { title: "Big Data", icon: <Database size={24} />, items: SKILLS.bigData },
    { title: "Cloud Platforms", icon: <Cloud size={24} />, items: SKILLS.cloud },
    { title: "Databases & BI", icon: <BarChart3 size={24} />, items: SKILLS.databases },
    { title: "DevOps & Tools", icon: <Settings size={24} />, items: SKILLS.devops },
  ];

  return (
    <section ref={sectionRef} id="skills" style={{ paddingTop: "8rem" }}>
      <div className="section-container">
        <span className="section-label">01. Technical Arsenal</span>
        <h2
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700,
            marginBottom: "3rem",
            color: "var(--color-text-primary)",
          }}
        >
          Skills & Technologies
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {skillCategories.map((category) => (
            <div key={category.title} className="skill-card data-card" style={{ padding: "2rem", borderRadius: "0.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                <div style={{ color: "var(--color-accent-secondary)" }}>{category.icon}</div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 600, color: "var(--color-text-primary)" }}>
                  {category.title}
                </h3>
              </div>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {category.items.map((skill) => (
                  <li
                    key={skill}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      color: "var(--color-text-secondary)",
                      fontSize: "0.95rem",
                    }}
                  >
                    <div style={{ width: "4px", height: "4px", backgroundColor: "var(--color-accent)", borderRadius: "50%" }} />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}