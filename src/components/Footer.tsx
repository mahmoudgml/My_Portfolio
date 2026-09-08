"use client";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer style={{ paddingTop: "3rem", paddingBottom: "3rem", position: "relative", zIndex: 2 }}>
      <div className="section-container">
        {/* Gradient divider */}
        <div
          style={{
            height: "1px",
            marginBottom: "2.5rem",
            background:
              "linear-gradient(to right, transparent, var(--color-accent-glow), transparent)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.5rem",
          }}
        >
          {/* Copyright */}
          <div style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
            <span className="font-mono">©</span>{" "}
            {new Date().getFullYear()}{" "}
            <span style={{ color: "var(--color-text-secondary)" }}>
              {PERSONAL_INFO.name}
            </span>
            . Built with Next.js.
          </div>

          {/* Back to Top */}
          <button
            onClick={handleBackToTop}
            className="social-icon"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
