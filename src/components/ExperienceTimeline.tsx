"use client";
import { useEffect, useRef } from "react";
import { EXPERIENCE } from "@/data/portfolioData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceTimeline() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".timeline-item",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
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

  return (
    <section ref={sectionRef} id="experience" style={{ paddingTop: "8rem" }}>
      <div className="section-container">
        <span className="section-label">03. Background</span>
        <h2
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700,
            marginBottom: "3rem",
            color: "var(--color-text-primary)",
          }}
        >
          Training & Activities
        </h2>

        <div style={{ position: "relative", paddingLeft: "2rem", borderLeft: "2px solid var(--color-border)" }}>
          {EXPERIENCE.map((item, index) => (
            <div
              key={item.id}
              className="timeline-item"
              style={{
                position: "relative",
                paddingBottom: index !== EXPERIENCE.length - 1 ? "3rem" : "0",
              }}
            >
              {/* Timeline dot */}
              <div
                style={{
                  position: "absolute",
                  left: "-2.4rem",
                  top: "0.25rem",
                  width: "0.75rem",
                  height: "0.75rem",
                  borderRadius: "50%",
                  backgroundColor: "var(--color-bg)",
                  border: "2px solid var(--color-accent)",
                }}
              />

              <div className="data-card" style={{ padding: "1.5rem", borderRadius: "0.5rem" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem" }}>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 600, color: "var(--color-accent-light)" }}>
                      {item.title}
                    </h3>
                    <span className="font-mono" style={{ fontSize: "0.85rem", color: "var(--color-accent-secondary)", backgroundColor: "rgba(16, 185, 129, 0.1)", padding: "0.25rem 0.75rem", borderRadius: "1rem" }}>
                      {item.period}
                    </span>
                  </div>
                  <div style={{ fontSize: "1rem", fontWeight: 500, color: "var(--color-text-primary)" }}>
                    {item.organization}
                    <span style={{ marginLeft: "0.5rem", fontSize: "0.8rem", color: "var(--color-text-muted)", textTransform: "uppercase" }}>[{item.type}]</span>
                  </div>
                </div>
                <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
