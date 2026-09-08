"use client";
import { useEffect, useRef } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ArrowRight, Terminal } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main content animation
      gsap.fromTo(
        ".hero-element",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          delay: 0.2,
        }
      );

      // Scroll indicator float
      gsap.fromTo(
        scrollRef.current,
        { opacity: 0, y: -10 },
        {
          opacity: 0.7,
          y: 0,
          duration: 1,
          delay: 1.5,
          ease: "power2.out",
          onComplete: () => {
            gsap.to(scrollRef.current, {
              y: 8,
              repeat: -1,
              yoyo: true,
              duration: 1.5,
              ease: "sine.inOut",
            });
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        position: "relative",
      }}
    >
      <div className="section-container" style={{ paddingTop: "6rem" }}>
        
        {/* Terminal Badge */}
        <div
          className="hero-element"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            backgroundColor: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            padding: "0.5rem 1rem",
            borderRadius: "0.25rem",
            marginBottom: "2rem",
          }}
        >
          <Terminal size={16} color="var(--color-accent-secondary)" />
          <span className="font-mono" style={{ fontSize: "0.85rem", color: "var(--color-accent-light)" }}>
            ~/{PERSONAL_INFO.title.toLowerCase().replace(" ", "-")}
          </span>
        </div>

        {/* Name */}
        <div className="hero-element" style={{ marginBottom: "1.5rem" }}>
          <h1
            style={{
              fontSize: "clamp(3rem, 8vw, 5rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "var(--color-text-primary)",
              marginBottom: "0.5rem",
            }}
          >
            {PERSONAL_INFO.firstName}{" "}
            <span className="text-gradient-name">Gamal.</span>
          </h1>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
              fontWeight: 600,
              color: "var(--color-text-secondary)",
              lineHeight: 1.2,
            }}
          >
            Building reliable data pipelines.
          </h2>
        </div>

        {/* Bio */}
        <p
          className="hero-element"
          style={{
            maxWidth: "36rem",
            fontSize: "1.1rem",
            lineHeight: 1.7,
            color: "var(--color-text-muted)",
            marginBottom: "2.5rem",
          }}
        >
          {PERSONAL_INFO.shortBio}
        </p>

        {/* Actions */}
        <div
          className="hero-element"
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <a href="#projects" className="btn-primary">
            View Projects
            <ArrowRight size={18} />
          </a>
          <div style={{ display: "flex", gap: "0.75rem" }}>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="social-icon"
            >
              <SiGithub size={18} />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-icon"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollRef}
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "2rem",
          opacity: 0,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
          <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, var(--color-accent), transparent)" }} />
          <span className="font-mono" style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", writingMode: "vertical-rl" }}>
            SCROLL
          </span>
        </div>
      </div>
    </section>
  );
}