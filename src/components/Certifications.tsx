"use client";
import { useEffect, useRef } from "react";
import { CERTIFICATIONS } from "@/data/portfolioData";
import { Award } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Certifications() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cert-card",
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.2)",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="certifications" style={{ paddingTop: "8rem" }}>
      <div className="section-container">
        <span className="section-label">04. Credentials</span>
        <h2
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700,
            marginBottom: "3rem",
            color: "var(--color-text-primary)",
          }}
        >
          Certifications
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="cert-card data-card"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
                padding: "1.5rem",
                borderRadius: "0.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "3rem",
                  height: "3rem",
                  borderRadius: "0.5rem",
                  backgroundColor: "rgba(6, 182, 212, 0.1)",
                  color: "var(--color-accent)",
                  flexShrink: 0,
                }}
              >
                <Award size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "0.25rem" }}>
                  {cert.title}
                </h3>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <span style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)" }}>{cert.issuer}</span>
                  <span style={{ color: "var(--color-border)" }}>|</span>
                  <span className="font-mono" style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>{cert.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
