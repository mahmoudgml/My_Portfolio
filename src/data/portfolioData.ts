export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface ExperienceItem {
  id: string;
  type: "training" | "activity" | "education";
  title: string;
  organization: string;
  period: string;
  description: string;
}

export const PERSONAL_INFO = {
  name: "Mahmoud Gamal",
  firstName: "Mahmoud",
  title: "Data Engineer",
  location: "Cairo, Egypt",
  bio: "Final-year Computer Science student focused on Data Engineering, with hands-on experience building and automating data pipelines and processing real-world datasets through academic projects and technical training.",
  shortBio: "Building reliable data solutions and high-quality workflows that support analytics and business needs.",
  email: "mahmoud.gamal.fci@gmail.com",
  phone: "+20 102 287 2509",
  github: "https://github.com/mahmoudgml",
  linkedin: "https://linkedin.com/in/mahmoudgamalsaad",
  resumeUrl: "/Mahmoud_Gamal_CV.pdf",
};

export const NAVIGATION = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const ABOUT = {
  headline: "Architecting Data Pipelines",
  paragraphs: [
    "I'm a final-year Computer Science student at Mansoura University with a strong foundation in data engineering concepts.",
    "My focus is on developing reliable data solutions, building automated ETL pipelines, and working with modern data stacks including Apache Airflow, Azure, and Python to process real-world datasets.",
  ],
  stats: [
    { value: "2+", label: "Data Pipelines Built" },
    { value: "Azure", label: "Certified" },
    { value: "ETL", label: "Specialization" },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: "stock-market-pipeline",
    title: "Stock Market Data Pipeline",
    description:
      "Built a daily incremental ETL pipeline for 8 public companies using Python and Yahoo Finance, with PostgreSQL as the analytical database and a Star Schema for structured reporting. Automated with Apache Airflow using incremental upserts and retries.",
    tags: ["Python", "Airflow", "PostgreSQL", "Docker", "ETL"],
    githubUrl: "https://github.com/mahmoudgml",
    featured: true,
  },
  {
    id: "retail-store-pipeline",
    title: "Retail Store Data Pipeline",
    description:
      "Built an end-to-end ETL pipeline to clean, transform, and load 9 raw CSV files containing 10,000+ records into SQL Server. Designed a 3NF database and executed 11+ analytical queries.",
    tags: ["Python", "Pandas", "SQL Server", "Data Modeling"],
    githubUrl: "https://github.com/mahmoudgml",
    featured: true,
  },
];

export const SKILLS = {
  programming: ["Python (Pandas, NumPy, Matplotlib, Seaborn)", "SQL"],
  dataEngineering: ["ETL/ELT", "Data Pipelines", "Data Warehousing", "Dimensional Modeling", "Apache Airflow"],
  bigData: ["Hadoop", "Apache Spark", "Apache Kafka"],
  cloud: ["Microsoft Azure", "Microsoft Fabric (OneLake, Lakehouse)"],
  databases: ["PostgreSQL", "SQL Server", "Excel", "Power BI"],
  devops: ["Docker", "Git", "Linux (Bash)"],
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "depi-internship",
    type: "training",
    title: "Microsoft Data Engineer Internship",
    organization: "Digital Egypt Pioneers Initiative (DEPI)",
    period: "Jul 2026 – Present",
    description:
      "Covered database development, data warehousing, Python programming, data analysis, Azure data fundamentals, and data engineering concepts through hands-on coursework and a capstone project.",
  },
  {
    id: "nti-internship",
    type: "training",
    title: "Big Data Summer Internship",
    organization: "National Telecommunication Institute (NTI)",
    period: "Aug 2026 – Sep 2026",
    description:
      "Worked on distributed data processing and streaming workflows through practical exercises and a hands-on big data project.",
  },
  {
    id: "ms-ambassador",
    type: "activity",
    title: "Associate Student Ambassador",
    organization: "Microsoft",
    period: "Jul 2026 – Present",
    description:
      "Part of Microsoft's global student ambassador program, learning Microsoft technologies, engaging with the developer community, and contributing through technical activities.",
  },
  {
    id: "ms-club",
    type: "activity",
    title: "Data Engineer Member",
    organization: "Microsoft Student Club, KFS",
    period: "Oct 2025 – Aug 2026",
    description:
      "Learned and applied Data Engineering through practical tasks, hands-on projects, and technical reviews; selected as Best Member, and my project was awarded Best Project.",
  },
  {
    id: "university",
    type: "education",
    title: "B.S. in Computer Science",
    organization: "Mansoura University",
    period: "Oct 2023 – May 2027",
    description:
      "Relevant Coursework: Data Structures and Algorithms, Operating Systems, Database Systems, Object-Oriented Programming.",
  },
];

export const CERTIFICATIONS = [
  {
    id: "dp-900",
    title: "Microsoft Certified: Azure Data Fundamentals (DP-900)",
    issuer: "Microsoft",
    date: "2024",
  }
];