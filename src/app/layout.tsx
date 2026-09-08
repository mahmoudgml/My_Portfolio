import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mahmoud Gamal - Data Engineering",
  description:
    "Senior MIS student building high-performance web applications. Experience delivering cross-platform solutions for clients across the GCC region. Explore my portfolio of full-stack projects.",
  keywords: [
    "Bahaa Mohamed",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Flutter",
    "Portfolio",
  ],
  openGraph: {
    title: "Bahaa Mohamed Abdelmoty — Full-Stack & App Developer",
    description:
      "Building realiable pipelines & intelligent data systems. Explore my portfolio.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
