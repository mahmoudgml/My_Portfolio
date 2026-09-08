"use client";
import { useEffect, useRef } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Mail, ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-content",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".contact-content", start: "top 85%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" style={{ paddingTop: "8rem", paddingBottom: "8rem" }}>
      <div className="section-container">
        <div
          className="contact-content glass-card"
          style={{
            opacity: 0,
            position: "relative",
            padding: "4rem 2rem",
            textAlign: "center",
            overflow: "hidden",
          }}
        >
          {/* Ambient gradient glow */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.2,
              pointerEvents: "none",
              background:
                "radial-gradient(ellipse at 50% 50%, var(--color-accent-glow), transparent 70%)",
            }}
          />

          <div style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem" }}>
            <span className="section-label" style={{ justifyContent: "center" }}>Get In Touch</span>
            <h2
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "var(--color-text-primary)",
              }}
            >
              Let&apos;s build something{" "}
              <span className="text-gradient">together.</span>
            </h2>
            <p
              style={{
                maxWidth: "36rem",
                fontSize: "1.1rem",
                lineHeight: 1.7,
                color: "var(--color-text-secondary)",
              }}
            >
              I&apos;m currently open to new opportunities, freelance client
              work, and high-impact engineering projects. Let&apos;s connect.
            </p>

            {/* CTA */}
            <div style={{ paddingTop: "1rem" }}>
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-magnetic btn-primary"
                style={{ fontSize: "1.1rem" }}
              >
                <Mail size={20} />
                Send an Email
                <ArrowUpRight size={18} />
              </a>
            </div>

            {/* Social */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", paddingTop: "1rem" }}>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="social-icon"
              >
                <SiGithub size={18} />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="social-icon"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className="social-icon"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}