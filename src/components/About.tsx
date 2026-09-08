"use client";
import { useEffect, useRef } from "react";
import { ABOUT } from "@/data/portfolioData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-content",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
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
    <section ref={sectionRef} id="about" style={{ paddingTop: "8rem" }}>
      <div className="section-container">
        <div className="about-content">
          <span className="section-label">00. Introduction</span>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              marginBottom: "2rem",
              color: "var(--color-text-primary)",
            }}
          >
            {ABOUT.headline}
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {ABOUT.paragraphs.map((para, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: 1.8,
                    color: "var(--color-text-secondary)",
                  }}
                >
                  {para}
                </p>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
              {ABOUT.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="data-card"
                  style={{
                    padding: "1.5rem",
                    borderRadius: "0.5rem",
                    textAlign: "center",
                  }}
                >
                  <div
                    className="font-mono text-gradient-name"
                    style={{
                      fontSize: "2rem",
                      fontWeight: 700,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
