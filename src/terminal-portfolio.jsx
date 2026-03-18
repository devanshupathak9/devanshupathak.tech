import { useState, useEffect, useRef, useCallback } from "react";

// ─── RESUME TEXT ──────────────────────────────────────────────────────────────
const RESUME_TEXT = `DEVANSHU PATHAK
Phone: +91 9956794205 | Email: pathakdevanshu9@gmail.com
GitHub: github.com/devanshupathak9 | LinkedIn: linkedin.com/in/devanshu-pathak-39623b172

═══════════════════════════════════════════════════════════
PROFESSIONAL SUMMARY
═══════════════════════════════════════════════════════════
Software Engineer specializing in scalable backend and AI-driven systems,
with experience designing end-to-end service architectures, APIs, and
automation pipelines for real-world production applications. Strong interest
in system internals and networking, actively exploring low-level concepts
including operating systems, memory behavior, and hardware-software
interaction through systems programming and CTF-based security challenges.

═══════════════════════════════════════════════════════════
SKILLS
═══════════════════════════════════════════════════════════
Languages        : Python, C/C++, JavaScript, Bash
Frameworks       : Django, Flask, Express.js, PyTorch, LangChain, LangGraph
Databases/Search : PostgreSQL, MongoDB, OpenSearch, Vector Databases
Cloud & DevOps   : AWS (EC2, S3, Lambda, IAM, ECS, SNS, SQS), Docker, Git, CI/CD
AI & ML          : Pandas, NumPy, RAG Systems, LLM Applications, Prompt Engineering
Systems & Tools  : Linux, Distributed Systems, REST APIs, Postman

═══════════════════════════════════════════════════════════
EXPERIENCE
═══════════════════════════════════════════════════════════
DocLens.ai — Software Engineer / Founding Engineer
May 2024 - Present | Bengaluru, India
• Built the Claim and Demand Summary (core product): scalable end-to-end pipeline from Textract-based document parsing and layout-aware chunking to RAG-driven
  async population of structured summary responses via dependency-aware prompt bank, and dynamic HTML summary rendering.
• Architected a layout-aware RAG system using LangChain and AWS Textract with semantic chunking, rich metadata preservation, hybrid retrieval (keyword, metadata,
  semantic), reranking, and inline citation tracking for high-precision responses.
• Developed a database-driven prompt bank with self-referential relationships modeling complex question hierarchies; child questions dynamically inherit parent context.
  Designed dependency-aware question graph to compute minimal question sets and
  prevent redundant recomputation during summary updates.
• Built an event-driven impact analysis pipeline to detect claim-level changes from document additions/deletions, leveraging schedulers, message queues, and AWS Lambda
  to selectively regenerate affected summary sections.
• Implemented index management pipeline for real-time updates and deletions across OpenSearch indices, ensuring metadata consistency between doc store and search layer.

CASHe — Data Scientist
July 2023 - May 2024 | Hyderabad, India
• Developed data pipelines and Flask APIs to evaluate customer eligibility for co-lending partners, implementing
SQL-based financial checks and lender-specific filters to assess loan eligibility across multiple lending frameworks.
• Built an automated message delivery system to track daily performance metrics such as loans disbursed, queued
customers, loans under processing, load distribution, defaults, and failed eligibility cases using scheduled cron jobs.
• Developed the foundational framework for a Call Center Data Monitoring System, performing call diarization,
agent-customer voice separation, transcription, and agent behavioral analysis using raw audio feature extraction.


═══════════════════════════════════════════════════════════
PROJECTS
═══════════════════════════════════════════════════════════
Glens: AI-Powered Gmail Email Summarisation Chrome Extension
• Developed a zero-click Chrome Extension (Manifest V3) that auto-activates on Gmail
  load to extract and summarise email content using Gemini Nano for real-time,
  context-aware, on-device email processing.
• Engineered reliable email data extraction from Gmail's dynamic interface using DOM
  traversal, mutation observers, and adaptive selectors for robust parsing across
  asynchronous page loads and dynamically rendered email.

SastaKart: Real-Time Quick Commerce Price Comparison Platform
• Built a real-time price-comparison platform that detects user location, searches
  products across multiple quick commerce platforms, and aggregates product
  availability and pricing into a unified comparison engine.
• Developed automated data extraction pipelines using Puppeteer (headless Chromium)
  in Node.js, leveraging intelligent browser context pooling to reuse sessions.
• Designed scalable RESTful backend using Node.js and Express, containerized with
  Docker, deployed on AWS ECS Fargate with load balancing.

StreakHub: Cross-Platform Streak Tracking System (Ongoing)
• Building a centralized streak management platform to track daily tasks across
  multiple platforms through a unified dashboard.
• Designing scalable backend for task verification, streak validation logic,
  leaderboard computation, and real-time updates with competitive challenges support.

═══════════════════════════════════════════════════════════
PUBLICATIONS
═══════════════════════════════════════════════════════════
[1] Intelligent Approaches for Predicting Blast Fragmentation due to Blasting
    in Tropical Weathered Limestone
    Bhatawdekar R.M., Devanshu Pathak, Deepak Kumar, Saksarid Chang,
    Singh Trilok, Edy Tonnizam Mohamad
    Geotechnical Challenges in Mining, June 2022
    • Hybrid PSO-ANN model to predict mean rock fragment size using 105 field datasets.
    • R² = 0.818 (training), 0.70 (testing) vs MVR R² = 0.657 / 0.694.

[2] Analysing Product Attributes of Refurbished Laptops: A Machine Learning
    Approach to Circular Consumption
    Animesh Ghosh, Devanshu Pathak, Prabha Bhola, Debraj Bhattacharjee,
    Uthayasankar Sivarajah
    Annals of Operations Research (Springer), December 2023
    • NLP & ML pipeline analyzing 1,986 customer reviews.
    • SHAP analysis: Price, Utility, Brand → highest positive correlation.
    • Multinomial Logistic Regression: 57% accuracy in pattern prediction.

═══════════════════════════════════════════════════════════
EDUCATION
═══════════════════════════════════════════════════════════
IIT Kharagpur — Dual Degree (B.Tech + M.Tech) in Mining Engineering
Micro-Specialization in AI and Applications | July 2018 – April 2023 | CGPA: 8.40/10

New Public School, Lucknow — ISC Class XII | 2017 | 85.5%
New Public School, Lucknow — ICSE Class X  | 2015 | 90%
`;

// ─── BOOT LINES ───────────────────────────────────────────────────────────────
const BOOT_LINES = [
  "BIOS v2.4.1 -- Copyright (C) 2024, DevCorp Systems",
  "CPU: Devanshu Pathak Brain v8.4 @ 3.14GHz   [OK]",
  "RAM: Unlimited Curiosity Installed            [OK]",
  "Checking filesystem integrity...",
  "Loading modules: [backend] [AI] [systems]",
  "Mounting volumes... /home/devanshu            [OK]",
  "Starting portfolio daemon...                  [OK]",
  "",
  "╔═══════════════════════════════════════════════════════════╗",
  "║          DEVANSHU PATHAK  ::  PORTFOLIO v1.0              ║",
  "║   Software Engineer | AI | Low Level Systems Enthusiast   ║",
  "╚═══════════════════════════════════════════════════════════╝",
  "",
  "  Founding Engineer @ DocLens.ai | IIT Kharagpur ",
  "  Bengaluru, India",
  "",
  "  Type 'help' to see available commands.",
  "",
];

const DIR_PARENT = {
  "~": null,
  "~/about": "~", "~/skills": "~", "~/experience": "~",
  "~/projects": "~", "~/education": "~", "~/resume": "~",
  "~/blog": "~", "~/contact": "~", "~/publications": "~",
};

// ─── ROOT-ONLY SECTIONS (cd into these only from ~) ───────────────────────────
const ROOT_SECTIONS = new Set([
  "about","skills","experience","projects","education",
  "resume","blog","contact","publications",
]);

// ─── INLINE LINK PARSER ───────────────────────────────────────────────────────
function parseLine(text) {
  if (!text) return null;
  const re = /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g;
  const parts = [];
  let last = 0, m;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push({ t: "text", v: text.slice(last, m.index) });
    parts.push({ t: "link", label: m[1], href: m[2] });
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push({ t: "text", v: text.slice(last) });
  return parts.some(p => p.t === "link") ? parts : null;
}

// ─── SPECIAL RENDERERS: TABLE ─────────────────────────────────────────────────
// Sections can return { type: "table", headers, rows } or { type: "lines", lines: [...] }
// or just a plain string[] (treated as lines)

const SECTIONS = {
  help: () => ({ type: "lines", lines: [
    "┌──────────────────────────────────────────────────────────┐",
    "│  AVAILABLE COMMANDS                                      │",
    "├──────────────────────────────────────────────────────────┤",
    "│  help              →  Show this help menu                │",
    "│  ls                →  List sections here                 │",
    "│  cd <section>      →  Navigate into a section            │",
    "│  cd ..             →  Go back to parent                  │",
    "│  cd ~  /  cd home  →  Return to root                     │",
    "│  clear             →  Clear terminal                     │",
    "│  whoami            →  Quick identity                     │",
    "│  pwd               →  Show current path                  │",
    "│  resume            →  View my CV                         │",
    "├──────────────────────────────────────────────────────────┤",
    "│  SECTIONS:  about · skills · experience · projects       │",
    "│             education · publications · blog · contact    │",
    "└──────────────────────────────────────────────────────────┘",
  ]}),

  ls: (cwd) => {
    if (cwd === "~") return { type: "lines", lines: [
      "total 9 items",
      "drwxr-xr-x  about/",
      "drwxr-xr-x  skills/",
      "drwxr-xr-x  experience/",
      "drwxr-xr-x  projects/",
      "drwxr-xr-x  education/",
      "drwxr-xr-x  publications/",
      "drwxr-xr-x  blog/",
      "drwxr-xr-x  contact/",
      "drwxr-xr-x  resume/",
    ]};
    return { type: "lines", lines: ["(empty directory)"] };
  },

  whoami: () => ({ type: "lines", lines: [
    "uid=1000(devanshu pathak) gid=1000(software engineer)",
    "groups=backend, AI, systems, iit-kgp-alumni",
  ]}),

  about: () => ({ type: "mixed", parts: [
    { kind: "line", text: "── ~/about ──────────────────────────────────────────────────" },
    { kind: "line", text: "" },
    { kind: "prose", text:
            `I am a Software Engineer specializing in backend and AI-driven systems, with experience in designing end-to-end service architectures, APIs, and automation pipelines for real-world production applications.

I have a deep interest in understanding how systems actually work — going beyond abstractions to explore the fundamentals. I enjoy building things from scratch to truly understand them, including OS internals, memory behavior, database systems, and networking. It's a constant learning journey, and curiosity drives me to understand every layer.

I also enjoy problem-solving and exploring CTF challenges to deepen my understanding of systems and security.`

  },
    { kind: "line", text: "" },
    { kind: "line", text: "'cd ..' → back  |  'cd ~' → home" },
  ]}),

  skills: () => ({ type: "mixed", parts: [
    { kind: "line", text: "── ~/skills ──────────────────────────────────────────────────" },
    { kind: "line", text: "" },
    { kind: "table",
      headers: ["Category", "Technologia"],
      rows: [
        ["Languages",    "Python | C / C++ | JavaScript | Bash"],
        ["Frameworks",   "Django | Flask | Express.js | LangChain | LangGraph"],
        ["Databases",    "PostgreSQL | OpenSearch"],
        ["Cloud/DevOps", "AWS (EC2, S3, Lambda, IAM, ECS, SNS, SQS) | Docker | Git"],
        ["AI / ML",      "Pandas | NumPy | Neural Networks | RAG | LLMs | AI Agents"],
        ["Tools",        "Linux | Postman | GitHub"],
      ]
    },
    { kind: "line", text: "" },
    { kind: "line", text: "'cd ..' → back  |  'cd ~' → home" },
  ]}),

  // ─────────────────────────────────────────────────────────────────────────
  // EXPERIENCE
  // To add a new job: copy one { kind:"expcard", job:{...} } block,
  // paste it after the last expcard (before the closing line), fill in fields.
  // Fields: title, company, period, location, bullets (array of strings)
  // ─────────────────────────────────────────────────────────────────────────
  experience: () => ({ type: "mixed", parts: [
    { kind: "line", text: "── ~/experience ──────────────────────────────────────────────────" },
    { kind: "line", text: "" },

    // ── ADD / EDIT JOBS BELOW ────────────────────────────────────────────────
    { kind: "expcard", job: {
      title:    "Software Engineer / Founding Engineer",
      company:  "DocLens.ai",
      period:   "May 2024 - Present",
      location: "Bengaluru, India",
      bullets: [
        "Built the Claim and Demand Summary core product: an end-to-end pipeline from AWS Textract document parsing and layout-aware chunking to RAG-driven async generation of structured summaries with dynamic HTML rendering.",
        "Built a layout-aware RAG system using LangChain and AWS Textract with semantic chunking, metadata preservation, hybrid retrieval (keyword + semantic), reranking, and inline citation tracking for explainable responses.",
        "Designed a database-driven prompt bank with self-referential relationships modeling hierarchical questions, enabling parent-child context inheritance and dependency-aware execution to prevent redundant recomputation.",
        "Developed an event-driven impact analysis pipeline to detect claim-level changes from document additions or deletions, using schedulers, message queues, and AWS Lambda to selectively regenerate affected summary sections.",
        "Implemented an index management pipeline for real-time updates and deletions across OpenSearch indices, ensuring metadata consistency between the primary document store and search layer.",
],
    }},
    { kind: "line", text: "" },
    { kind: "expcard", job: {
      title:    "Data Scientist",
      company:  "CASHe",
      period:   "July 2023 - May 2024",
      location: "Hyderabad, India",
      bullets: [
        "Developed simple data pipelines and Flask-based APIs for evaluating customer eligibility for co-lending partners, implementing SQL-based financial checks and lender-specific filtering logic across multiple lending frameworks.",
        "Built an automated message delivery system tracking daily performance metrics: loans disbursed, queued customers, loans under processing, load distribution, defaults, and failed eligibility cases via scheduled cron jobs.",
        "Developed the foundational framework for a Call Center Data Monitoring System, enabling call diarization, agent-customer voice separation, transcription, and agent behavioral analysis using raw audio feature extraction.",
      ],
    }},
    // ── ADD MORE JOBS HERE ───────────────────────────────────────────────────

    { kind: "line", text: "" },
    { kind: "line", text: "  'cd ..' → back  |  'cd ~' → home" },
  ]}),

  // ─────────────────────────────────────────────────────────────────────────
  // PROJECTS
  // To add a new project: copy one { kind:"projcard", project:{...} } block,
  // paste it after the last projcard (before the closing line), fill in fields.
  // Fields: num, title, stack, period, status, link, bullets (array of strings)
  // ─────────────────────────────────────────────────────────────────────────
  projects: () => ({ type: "mixed", parts: [
    { kind: "line", text: "── ~/projects ──────────────────────────────────────────────────" },
    { kind: "line", text: "" },

    // ── ADD / EDIT PROJECTS BELOW ────────────────────────────────────────────
    { kind: "projcard", project: {
      num: "01", title: "Glens — AI-Powered Gmail Summarisation Extension",
      stack: "Chrome MV3 · Gemini Nano · JavaScript · DOM APIs",
      period: "2025",
      status: "● Shipped",
      link: "https://github.com/devanshupathak9/Glens",
      bullets: [
        "Developed a zero-click Chrome Extension using Manifest V3 that automatically activates on Gmail load to extract and summarise email content using Gemini Nano for real-time, context-aware, on-device email processing.",
        "Engineered reliable email data extraction from Gmails dynamic interface using DOM traversal, mutation observers and adaptive selectors to support robust parsing across asynchronous page loads and dynamically rendered email.",
      ],
    }},
    { kind: "line", text: "" },
    { kind: "projcard", project: {
      num: "02", title: "Sastamaal — Real-Time Quick Commerce Price Comparison",
      stack: "Node.js · Puppeteer · Docker · AWS ECS Fargate · Express",
      period: "2025",
      status: "● Shipped",
      link: "https://github.com/devanshupathak9/Sastamaal",
      bullets: [
        "Built a real-time price-comparison platform that detects user location, searches products across multiple quick commerce platforms, and aggregates product availability and pricing into a unified comparison engine.",
        "Developed automated data extraction pipelines using Puppeteer (headless Chromium) in Node.js, leveraging intelligent browser context pooling to reuse sessions while avoiding per-request browser overhead.",
        "Designed scalable RESTful backend services using Node.js and Express, containerized with Docker, and deployed on AWS ECS Fargate with load balancing to enable horizontal scaling and efficient concurrent request handling.",
      ],
    }},
    { kind: "line", text: "" },
    { kind: "projcard", project: {
      num: "03", title: "StreakArena — Cross-Platform Streak Tracking System",
      stack: "Backend Systems · REST APIs · Leaderboards · Real-time",
      period: "2026 - Present",
      status: "◌ In Progress",
      link: "https://github.com/devanshupathak9/StreakArena",
      bullets: [
        "Building a centralized streak management platform to track daily tasks across multiple platforms through a unified dashboard, enabling configurable streak definitions and integration support for external developer platforms.",
        "Designing a scalable backend system to handle task verification, streak validation logic, leaderboard computation, and real-time updates, enabling competitive challenges among friends and third-party integrations.",
      ],
    }},
    // ── ADD MORE PROJECTS HERE ───────────────────────────────────────────────

    { kind: "line", text: "" },
    { kind: "line", text: "'cd ..' → back  |  'cd ~' → home" },
  ]}),

  // ─────────────────────────────────────────────────────────────────────────
  // PUBLICATIONS
  // To add a new publication: copy one { kind:"pubcard", pub:{...} } block,
  // paste it below the last one (before the closing line), fill in your fields.
  // ─────────────────────────────────────────────────────────────────────────
  publications: () => ({ type: "mixed", parts: [
    { kind: "line", text: "─ ~/publications ──────────────────────────────────────────────────" },
    { kind: "line", text: "" },

    // ── ADD / EDIT PUBLICATIONS BELOW ────────────────────────────────────────
    { kind: "pubcard", pub: {
      num:     "01",
      title:   "Intelligent Approaches for Predicting Blast Fragmentation due to Blasting in Tropical Weathered Limestone",
      year:    "June 2022",
      authors: "Bhatawdekar R.M., Devanshu Pathak, Deepak Kumar, Saksarid Chang, Singh Trilok, Edy Tonnizam Mohamad",
      journal: "Geotechnical Challenges in Mining",
      link:    "https://www.researchgate.net/publication/361059946_Intelligent_Technique_for_Prediction_of_Blast_Fragmentation_Due_to_the_Blasting_in_Tropically_Weathered_Limestone",
      bullets: [
        "Designed and implemented a hybrid PSO-ANN (Particle Swarm Optimisation + Artificial Neural Network) model to predict mean rock fragment size using 105 real-world field datasets from a tropical limestone mine in Thailand.",
        "Analysed key rock and blasting parameters to understand their impact on rock fragmentation and blasting efficiency.",
        "Trained on 83 datasets, validated on remaining test data, achieving R² = 0.818 (training) and 0.70 (testing), outperforming Multivariate Regression Analysis (R² = 0.657 training, 0.694 testing).",
      ],
    }},
    { kind: "line", text: "" },
    { kind: "pubcard", pub: {
      num:     "02",
      title:   "Analysing Product Attributes of Refurbished Laptops: A Machine Learning Approach to Circular Consumption",
      year:    "Dec 2023",
      authors: "Animesh Ghosh, Devanshu Pathak, Prabha Bhola, Debraj Bhattacharjee, Uthayasankar Sivarajah",
      journal: "Annals of Operations Research (Springer)",
      link:    "https://www.researchgate.net/publication/376856044_Analysing_product_attributes_of_refurbished_laptops_based_on_customer_reviews_and_ratings_machine_learning_approach_to_circular_consumption",
      bullets: [
        "Developed an NLP and Machine Learning pipeline to analyze 1,986 customer reviews, using frequency and content analysis to identify key drivers of circular consumption in the refurbished laptop market.",
        "Applied SHAP (SHapley Additive exPlanations) and feature selection to discover that Price, Utility, and Brand exhibit the highest positive correlation with ratings, while Performance and Service trigger negative sentiments.",
        "Validated findings using Multinomial Logistic Regression (57\% accuracy in pattern prediction), providing strategic insights for reverse logistics and supporting UN Sustainable Development Goal 12 (Responsible Consumption).",
      ],
    }},
    // ── ADD MORE PUBLICATIONS HERE ────────────────────────────────────────────

    { kind: "line", text: "" },
    { kind: "line", text: "'cd ..' → back  |  'cd ~' → home" },
  ]}),

  // ─────────────────────────────────────────────────────────────────────────
  education: () => ({ type: "mixed", parts: [
    { kind: "line", text: "─ ~/education ──────────────────────────────────────────────────" },
    { kind: "line", text: "" },
    { kind: "table",
      headers: ["Institution", "Degree", "Year", "Grade"],
      rows: [
        ["IIT Kharagpur", "Dual Degree B.Tech + M.Tech in Mining Engineering\nMicro Specialization in AI", "2018-2023", "CGPA 8.40/10"],
        ["New Public School, Lucknow", "ISC — Class XII", "2017", "85.5%"],
        ["New Public School, Lucknow", "ICSE — Class X", "2015", "90%"],
      ]
    },
    { kind: "line", text: "" },
    { kind: "line", text: "'cd ..' → back  |  'cd ~' → home" },
  ]}),


  // ── BLOG: table without Tag column ────────────────────────────────────────
  blog: () => ({ type: "mixed", parts: [
    { kind: "line", text: "─ ~/blog ──────────────────────────────────────────────────" },
    { kind: "line", text: "" },
    { kind: "table",
      headers: ["#", "Title", "Link"],
      rows: [
        ["01", "Chrome Built-in AI Extension: Glens — Smart Gmail Summarizer", "[Read →](https://medium.com/@pathakdevanshu9/chrome-built-in-ai-extension-glens-smart-gmail-summarizer-2f4f25936c90)"],
        ["02", "How a Simple %61 Bypassed a Reverse Proxy: EHAX CTF Writeup",        "[Read →](https://medium.com/@pathakdevanshu9/how-a-simple-61-bypassed-a-reverse-proxy-ehax-ctf-writeup-eeec0bb82af1)"],
        ["03", "Demystifying DNS: From Root Servers to Connecting Hostinger with Vercel", "[Read →](https://medium.com/@pathakdevanshu9/demystifying-dns-from-root-servers-to-connecting-hostinger-with-vercel-027a18017454)"]
      ]
    },
    { kind: "line", text: "" },
    { kind: "line", text: "Profile → [medium.com/@pathakdevanshu9](https://medium.com/@pathakdevanshu9)" },
    { kind: "line", text: "'cd ..' → back  |  'cd ~' → home" },
  ]}),


resume: () => ({ type: "mixed", parts: [
    { kind: "line", text: "── ~/resume ──────────────────────────────────────────────" },
    { kind: "line", text: "" },
    { kind: "line", text: "📄  Devanshu_Pathak_CV" },
    { kind: "line", text: "" },
    { kind: "line", text: "View my CV online:" },
    { kind: "line", text: "[Google Drive](https://drive.google.com/drive/folders/1OpjYW5b6umHzRqTGCIYK1v88G4l49NYq?usp=sharing)" },
    { kind: "line", text: "" },
    { kind: "line", text: "Also available on:" },
    { kind: "line", text: "LinkedIn → [linkedin.com/in/devanshu-pathak-39623b172](https://linkedin.com/in/devanshu-pathak-39623b172)" },
    { kind: "line", text: "GitHub  → [github.com/devanshupathak9](https://github.com/devanshupathak9)" },
    { kind: "line", text: "" },
    { kind: "line", text: "'cd ..' → back  |  'cd ~' → home" },
  ]}),

  contact: () => ({ type: "mixed", parts: [
    { kind: "line", text: "── ~/contact ──────────────────────────────────────────────" },
    { kind: "line", text: "" },
    { kind: "table",
      headers: ["Channel", "Details"],
      rows: [
        ["📍 Location", "Bengaluru, Karnataka, India"],
        ["🐙 GitHub",   "[github.com/devanshupathak9](https://github.com/devanshupathak9)"],
        ["💼 LinkedIn", "[linkedin.com/in/devanshu-pathak-39623b172](https://linkedin.com/in/devanshu-pathak-39623b172)"],
        ["✍️  Medium",   "[medium.com/@pathakdevanshu9](https://medium.com/@pathakdevanshu9)"],
        ["✍️  Instagram",   "[instagram.com/devanshu9267](https://www.instagram.com/devanshu9267/)"],
        ["📧 Email",    "pathakdevanshu9@gmail.com"],
        ["📞 Phone",    "+91 9956794205"],
      ]
    },
    // { kind: "line", text: "" },
    // { kind: "prose", text: "Open to: Backend Engineering · AI/ML Engineering · Systems work\nFounding engineer roles · Stealth startups · Anything interesting" },
    { kind: "line", text: "" },
    { kind: "line", text: "'cd ..' → back  |  'cd ~' → home" },
  ]}),

  home: () => ({ type: "lines", lines: [
    "╔═══════════════════════════════════════════════════════════╗",
    "║          DEVANSHU PATHAK  ::  PORTFOLIO v1.0              ║",
    "║   Software Engineer | AI | Low Level Systems Enthusiast   ║",
    "╚═══════════════════════════════════════════════════════════╝",
    "",
    " Founding Engineer @ DocLens.ai | IIT Kharagpur  ",
    "  Bengaluru, India",
    "",
    "  Type 'help' to see available commands.",
  ]}),
};

// ─── RESUME DOWNLOAD ──────────────────────────────────────────────────────────
function downloadResume() {
  const blob = new Blob([RESUME_TEXT], { type: "text/plain;charset=utf-8" });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement("a");
  a.href = url; a.download = "Devanshu_Pathak_Resume.txt";
  document.body.appendChild(a); a.click();
  document.body.removeChild(a); URL.revokeObjectURL(url);
}

// ─── CD RESOLVER ─────────────────────────────────────────────────────────────
// Navigation rule: you can only cd into top-level sections FROM root (~).
// From inside a section, only cd .. and cd ~ / cd home are allowed.
function resolveCd(arg, cwd) {
  const a = arg.trim().toLowerCase();

  // Always allow going up or home from anywhere
  if (!a || a === "home" || a === "~" || a === "/") return { newCwd: "~", sectionKey: "home" };
  if (a === "..") {
    const parent = DIR_PARENT[cwd];
    if (parent === null || parent === undefined) return { newCwd: "~", sectionKey: "home" };
    return { newCwd: parent, sectionKey: parent === "~" ? "home" : parent.replace("~/", "") };
  }

  // Only allow navigating INTO sections from root
  if (cwd !== "~") return null; // blocked — must cd ~ first

  const MAP = {
    about:        { newCwd:"~/about",        sectionKey:"about" },
    skills:       { newCwd:"~/skills",       sectionKey:"skills" },
    experience:   { newCwd:"~/experience",   sectionKey:"experience" },
    projects:     { newCwd:"~/projects",     sectionKey:"projects" },
    education:    { newCwd:"~/education",    sectionKey:"education" },
    publications: { newCwd:"~/publications", sectionKey:"publications" },
    resume:       { newCwd:"~/resume",       sectionKey:"resume" },
    blog:         { newCwd:"~/blog",         sectionKey:"blog" },
    contact:      { newCwd:"~/contact",      sectionKey:"contact" },
  };
  return MAP[a] || null;
}

// ─── MATRIX RAIN (fills full viewport behind the box) ────────────────────────
function MatrixRain() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const FS   = 14;
    const CHARS = "アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEF<>{}[]|/*+-=_~";
    let animId, drops;

    const init = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      const cols = Math.floor(canvas.width / FS);
      drops = Array.from({ length: cols }, () => Math.random() * -(canvas.height / FS));
    };
    init();
    window.addEventListener("resize", init);

    const draw = () => {
      ctx.fillStyle = "rgba(0,0,0,0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < drops.length; i++) {
        const y    = drops[i] * FS;
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        if (Math.random() > 0.97) {
          ctx.fillStyle = "#e0ffe0"; ctx.font = `bold ${FS}px monospace`;
        } else {
          const g = Math.floor(Math.random() * 80 + 130);
          const a = (Math.random() * 0.45 + 0.12).toFixed(2);
          ctx.fillStyle = `rgba(0,${g},40,${a})`; ctx.font = `${FS}px monospace`;
        }
        ctx.fillText(char, i * FS, y);
        if (y > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i] += 0.46;
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", init); };
  }, []);
  return <canvas ref={canvasRef} style={{ position:"fixed", inset:0, width:"100%", height:"100%", zIndex:0, pointerEvents:"none" }} />;
}

// ─── MATRIX AUDIO ENGINE ─────────────────────────────────────────────────────
// Quiet hacking ambience: soft keystrokes, modem tones, low carrier hum.
// Master is deliberately very low (0.18) — subtle background texture only.
function useMatrixAudio() {
  const ctxRef   = useRef(null);
  const nodesRef = useRef([]);
  const [muted, setMuted] = useState(true);

  const start = useCallback(() => {
    if (ctxRef.current) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ac = new AC();
    ctxRef.current = ac;

    const master = ac.createGain();
    master.gain.setValueAtTime(0, ac.currentTime);
    master.gain.linearRampToValueAtTime(0.18, ac.currentTime + 3);
    master.connect(ac.destination);
    nodesRef.current.push(master);

    const comp = ac.createDynamicsCompressor();
    comp.threshold.value = -24; comp.ratio.value = 4;
    comp.connect(master);

    // 1. LOW CARRIER HUM — 60 Hz, barely audible
    const hum = ac.createOscillator();
    const humG = ac.createGain();
    hum.type = "sine"; hum.frequency.value = 60; humG.gain.value = 0.15;
    hum.connect(humG); humG.connect(comp); hum.start();
    nodesRef.current.push(hum, humG);
    const humLfo = ac.createOscillator();
    const humLfoG = ac.createGain();
    humLfo.frequency.value = 0.8; humLfoG.gain.value = 0.012;
    humLfo.connect(humLfoG); humLfoG.connect(humG.gain);
    humLfo.start(); nodesRef.current.push(humLfo, humLfoG);

    // 2. MODEM TONES — classic 1200/2200 Hz FSK, very faint
    [1200, 2200].forEach(f => {
      const o = ac.createOscillator();
      const g = ac.createGain();
      const filt = ac.createBiquadFilter();
      o.type = "sine"; o.frequency.value = f;
      filt.type = "bandpass"; filt.frequency.value = f; filt.Q.value = 12;
      g.gain.value = 0.035;
      o.connect(filt); filt.connect(g); g.connect(comp); o.start();
      nodesRef.current.push(o, g, filt);
    });

    // 3. KEYSTROKE TICKS — soft random clicks, bursts like typing
    const scheduleTick = () => {
      if (!ctxRef.current) return;
      const now = ac.currentTime;
      const buf = ac.createBuffer(1, Math.floor(ac.sampleRate * 0.012), ac.sampleRate);
      const d = buf.getChannelData(0);
      for (let i = 0; i < d.length; i++)
        d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / d.length, 3);
      const src = ac.createBufferSource(); src.buffer = buf;
      const filt = ac.createBiquadFilter();
      filt.type = "highpass"; filt.frequency.value = 2200;
      const g = ac.createGain(); g.gain.value = 0.18 + Math.random() * 0.14;
      src.connect(filt); filt.connect(g); g.connect(comp); src.start(now);
      nodesRef.current.push(src, filt, g);
      const burst = Math.random() > 0.65;
      setTimeout(scheduleTick, burst ? 55 + Math.random() * 110 : 280 + Math.random() * 1600);
    };
    setTimeout(scheduleTick, 600);

    // 4. SOFT TERMINAL BEEP — rare, quiet
    const scheduleBeep = () => {
      if (!ctxRef.current) return;
      const now = ac.currentTime;
      const beep = ac.createOscillator();
      const beepG = ac.createGain();
      beep.type = "sine";
      beep.frequency.value = [440, 660, 880][Math.floor(Math.random() * 3)];
      beepG.gain.setValueAtTime(0, now);
      beepG.gain.linearRampToValueAtTime(0.06, now + 0.005);
      beepG.gain.exponentialRampToValueAtTime(0.0001, now + 0.16);
      beep.connect(beepG); beepG.connect(comp);
      beep.start(now); beep.stop(now + 0.18);
      nodesRef.current.push(beep, beepG);
      setTimeout(scheduleBeep, 5000 + Math.random() * 9000);
    };
    setTimeout(scheduleBeep, 3000);

    // 5. MODEM CHIRP — descending tone, like handshake negotiation
    const scheduleChirp = () => {
      if (!ctxRef.current) return;
      const now = ac.currentTime;
      const chirp = ac.createOscillator();
      const chirpG = ac.createGain();
      chirp.type = "sine";
      chirp.frequency.setValueAtTime(1600, now);
      chirp.frequency.exponentialRampToValueAtTime(500, now + 0.09);
      chirpG.gain.setValueAtTime(0.055, now);
      chirpG.gain.exponentialRampToValueAtTime(0.0001, now + 0.1);
      chirp.connect(chirpG); chirpG.connect(comp);
      chirp.start(now); chirp.stop(now + 0.11);
      nodesRef.current.push(chirp, chirpG);
      setTimeout(scheduleChirp, 1500 + Math.random() * 5000);
    };
    setTimeout(scheduleChirp, 1200);

    // 6. FAINT STATIC TEXTURE — narrow bandpass noise bed
    const stBuf = ac.createBuffer(1, ac.sampleRate * 4, ac.sampleRate);
    const stData = stBuf.getChannelData(0);
    for (let i = 0; i < stData.length; i++) stData[i] = Math.random() * 2 - 1;
    const stSrc = ac.createBufferSource();
    stSrc.buffer = stBuf; stSrc.loop = true;
    const stF = ac.createBiquadFilter();
    stF.type = "bandpass"; stF.frequency.value = 1200; stF.Q.value = 0.7;
    const stG = ac.createGain(); stG.gain.value = 0.01;
    stSrc.connect(stF); stF.connect(stG); stG.connect(comp); stSrc.start();
    nodesRef.current.push(stSrc, stF, stG);

  }, []);

  const stop = useCallback(() => {
    if (!ctxRef.current) return;
    const master = nodesRef.current[0];
    if (master?.gain) master.gain.linearRampToValueAtTime(0, ctxRef.current.currentTime + 1.2);
    setTimeout(() => {
      nodesRef.current.forEach(n => { try { n.disconnect(); } catch(_){} });
      nodesRef.current = [];
      if (ctxRef.current) { ctxRef.current.close(); ctxRef.current = null; }
    }, 1400);
  }, []);

  const toggle = useCallback(() => {
    setMuted(m => { if (m) { start(); return false; } else { stop(); return true; } });
  }, [start, stop]);

  useEffect(() => () => { if (ctxRef.current) ctxRef.current.close(); }, []);
  return { muted, toggle };
}
function TermTable({ headers, rows }) {
  return (
    <div className="tt-wrap">
      <table className="tt">
        <thead>
          <tr>
            {headers.map((h, i) => <th key={i}>{h}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri}>
              {row.map((cell, ci) => {
                const parts = parseLine(cell);
                return (
                  <td key={ci}>
                    {parts
                      ? parts.map((p, pi) =>
                          p.t === "link"
                            ? <a key={pi} href={p.href} target="_blank" rel="noopener noreferrer" className="tlink">{p.label}</a>
                            : <span key={pi} style={{ whiteSpace:"pre-wrap" }}>{p.v}</span>
                        )
                      : <span style={{ whiteSpace:"pre-wrap" }}>{cell}</span>
                    }
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── LINE RENDERER ────────────────────────────────────────────────────────────
function RenderLine({ text, type }) {
  const isError  = /^(bash:|cd:|sh:)/.test(text || "");
  const isBorder = /^[┌└├╔╚╠║╗╝╣─═│]/.test(text || "");
  const cls = type === "boot" ? "line-boot"
    : isError  ? "line-out line-error"
    : isBorder ? "line-out line-border"
    : "line-out";
  const parts = parseLine(text);
  if (!parts) return <div className={cls}>{text}</div>;
  return (
    <div className={cls}>
      {parts.map((p, i) =>
        p.t === "link"
          ? <a key={i} href={p.href} target="_blank" rel="noopener noreferrer" className="tlink">{p.label}</a>
          : <span key={i}>{p.v}</span>
      )}
    </div>
  );
}

// ─── EXPERIENCE CARD ──────────────────────────────────────────────────────────
function ExpCard({ job }) {
  return (
    <div className="card">
      <div className="card-header">
        <span className="card-company">{job.company}</span>
        <span className="card-period">{job.period}</span>
      </div>
      <div className="card-title">{job.title}</div>
      <div className="card-location">📍 {job.location}</div>
      <ul className="card-bullets">
        {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
    </div>
  );
}

// ─── PROJECT CARD ─────────────────────────────────────────────────────────────
function ProjCard({ project }) {
  return (
    <div className="card">
      <div className="card-header">
        <span className="card-company">[{project.num}] {project.title}</span>
        <span className="card-period">{project.period}</span>
      </div>
      <div className="card-row">
        <span className="card-stack">{project.stack}</span>
        <span className="card-status">{project.status}</span>
      </div>
      <ul className="card-bullets">
        {project.bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
      <div className="card-link">
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="tlink">
          GitHub →
        </a>
      </div>
    </div>
  );
}

// ─── PUBLICATION CARD ─────────────────────────────────────────────────────────
function PubCard({ pub }) {
  return (
    <div className="card">
      <div className="card-header">
        <span className="card-company">[{pub.num}] {pub.title}</span>
        <span className="card-period">{pub.year}</span>
      </div>
      {pub.journal && <div className="card-title">📖 {pub.journal}</div>}
      <div className="card-location" style={{ marginBottom: 8 }}>👥 {pub.authors}</div>
      <ul className="card-bullets">
        {pub.bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
      {pub.link && (
        <div className="card-link">
          <a href={pub.link} target="_blank" rel="noopener noreferrer" className="tlink">
            View Paper →
          </a>
        </div>
      )}
    </div>
  );
}

// ─── OUTPUT BLOCK RENDERER ────────────────────────────────────────────────────
function OutputBlock({ data }) {
  if (!data) return null;
  if (data.type === "lines") {
    return <>{data.lines.map((t, i) => <RenderLine key={i} text={t} type="output" />)}</>;
  }
  if (data.type === "mixed") {
    return (
      <>
        {data.parts.map((p, i) => {
          if (p.kind === "table") return <TermTable key={i} headers={p.headers} rows={p.rows} />;
          if (p.kind === "prose") return (
            <div key={i} className="prose-block">
              {p.text.split("\n\n").map((para, pi) => (
                <p key={pi} className="prose-para">{para}</p>
              ))}
            </div>
          );
          if (p.kind === "expcard")  return <ExpCard key={i} job={p.job} />;
          if (p.kind === "projcard") return <ProjCard key={i} project={p.project} />;
          if (p.kind === "pubcard")  return <PubCard key={i} pub={p.pub} />;
          return <RenderLine key={i} text={p.text} type="output" />;
        })}
      </>
    );
  }
  return null;
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
export default function TerminalPortfolio() {
  const [entries,    setEntries]    = useState([]); // { id, kind: "input"|"output"|"boot", data }
  const [input,      setInput]      = useState("");
  const [bootIdx,    setBootIdx]    = useState(0);
  const [booting,    setBooting]    = useState(true);
  const [ready,      setReady]      = useState(false);
  const [cwd,        setCwd]        = useState("~");
  const [history,    setHistory]    = useState([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const { muted, toggle: toggleAudio } = useMatrixAudio();
  const inputRef  = useRef(null);
  const bottomRef = useRef(null);
  const idRef     = useRef(0);
  const newId     = () => ++idRef.current;

  // ── Boot ───────────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!booting) return;
    if (bootIdx >= BOOT_LINES.length) { setBooting(false); setReady(true); return; }
    const text  = BOOT_LINES[bootIdx];
    const delay = text === "" ? 35 : 60 + Math.random() * 50;
    const t = setTimeout(() => {
      setEntries(p => [...p, { id: newId(), kind: "boot", text }]);
      setBootIdx(i => i + 1);
    }, delay);
    return () => clearTimeout(t);
  }, [bootIdx, booting]);

  useEffect(() => { if (ready) setTimeout(() => inputRef.current?.focus(), 80); }, [ready]);
  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [entries]);

  // ── Command ────────────────────────────────────────────────────────────────
  const processCommand = useCallback((cmd, curCwd) => {
    const raw   = cmd.trim();
    const lower = raw.toLowerCase();
    const parts = lower.split(/\s+/);
    const base  = parts[0];
    const arg   = parts.slice(1).join(" ");

    if (!raw) return { outputData: null, newCwd: curCwd };
    if (lower === "clear") {
      // If at root, just clear. If inside a section, clear then re-show section.
      const sectionKey = curCwd === "~" ? null : curCwd.replace("~/", "");
      const fn = sectionKey ? SECTIONS[sectionKey] : null;
      return { outputData: "CLEAR", clearThen: fn ? fn() : null, newCwd: curCwd };
    }

    const simple = (lines) => ({ outputData: { type:"lines", lines }, newCwd: curCwd });

    if (lower === "help")    return { outputData: SECTIONS.help(),    newCwd: curCwd };
    if (lower === "ls")      return { outputData: SECTIONS.ls(curCwd), newCwd: curCwd };
    if (lower === "whoami")  return simple(SECTIONS.whoami().lines);
    if (lower === "pwd")     return simple([curCwd]);
    if (lower === "date")    return simple([new Date().toString()]);
    if (lower === "uname -a") return simple(["Linux portfolio 5.15.0-devanshu #1 SMP x86_64 GNU/Linux"]);
    if (lower === "neofetch") return simple([
      "        .          devanshu@portfolio",
      "       .:.         ------------------",
      "      .::.         OS: Portfolio Linux",
      "     .::::.        Kernel: Brain v8.4",
      "    .:::::.        Uptime: 5 yrs coding",
      "   .:::::::.       Shell: zsh",
      "  .::::::::.       Theme: Matrix Dark",
      " .:::::::::.       Stack: Python C++ JS",
    ]);

    if (lower === "sudo")
      return simple(["sudo: command not found"]);

    if (lower === "resume" || lower === "cat resume.txt" || lower === "cd resume") {
      return { outputData: SECTIONS.resume(), newCwd: curCwd };
    }

    if (base === "cd") {
      if (!arg) return simple(["cd: missing argument. Try 'ls' to see sections."]);
      const resolved = resolveCd(arg, curCwd);
      if (!resolved && curCwd !== "~") {
        return simple([
          `cd: cannot navigate to '${arg}' from inside a folder.`,
          `  Run 'cd ~' to return to root first, then 'cd ${arg}'.`,
        ]);
      }
      if (!resolved) return simple([`cd: ${arg}: No such directory. Type 'ls' to see sections.`]);
      const { newCwd, sectionKey } = resolved;
      const fn = SECTIONS[sectionKey];
      return { outputData: fn ? fn() : { type:"lines", lines:[`Entered ${newCwd}`] }, newCwd };
    }

    return simple([`bash: ${raw}: command not found. Type 'help' for commands.`]);
  }, []);

  // ── Submit ─────────────────────────────────────────────────────────────────
  const handleSubmit = useCallback(() => {
    if (!ready) return;
    const cmd = input.trim();
    const pp  = cwd === "~" ? "~" : cwd.replace("~/", "");
    setEntries(p => [...p, { id: newId(), kind: "input", text: cmd, promptPath: pp }]);
    setInput(""); setHistoryIdx(-1);
    if (cmd) {
      setHistory(p => [cmd, ...p].slice(0, 50));
      const { outputData, clearThen, newCwd } = processCommand(cmd, cwd);
      setCwd(newCwd);
      if (outputData === "CLEAR") {
        const pp = newCwd === "~" ? "~" : newCwd.replace("~/", "");
        const headerEntry = { id: newId(), kind: "clearheader", promptPath: pp };
        if (clearThen) setEntries([headerEntry, { id: newId(), kind: "output", data: clearThen }]);
        else setEntries([headerEntry]);
      }
      else if (outputData) { setEntries(p => [...p, { id: newId(), kind: "output", data: outputData }]); }
    }
  }, [input, ready, cwd, processCommand]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") { handleSubmit(); }
    else if (e.key === "ArrowUp") {
      e.preventDefault();
      const ni = Math.min(historyIdx + 1, history.length - 1);
      setHistoryIdx(ni); setInput(history[ni] || "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const ni = Math.max(historyIdx - 1, -1);
      setHistoryIdx(ni); setInput(ni === -1 ? "" : history[ni] || "");
    } else if (e.ctrlKey && e.key === "l") {
      e.preventDefault(); setEntries([]);
    } else if (e.ctrlKey && e.key === "c") {
      e.preventDefault();
      const pp = cwd === "~" ? "~" : cwd.replace("~/", "");
      setEntries(p => [...p, { id: newId(), kind: "input", text: input + "^C", promptPath: pp }]);
      setInput("");
    }
  };

  const curPath = cwd === "~" ? "~" : cwd.replace("~/", "");

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div className="root" onClick={() => inputRef.current?.focus()}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { overflow: hidden; background: #000; }

        /* ── Scrollbars ── */
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #00cc3c55; border-radius: 3px; }

        /* ── Root: full viewport, centers the terminal box ── */
        .root {
          position: fixed; inset: 0;
          display: flex; align-items: center; justify-content: center;
          font-family: 'Fira Code', 'Courier New', Courier, monospace;
          background: transparent;
        }

        /* ── Terminal outer shell ── */
        .terminal {
          position: relative; z-index: 20;
          width: min(860px, 96vw);
          height: min(680px, 92vh);
          display: flex; flex-direction: column;
          border-radius: 10px;
          box-shadow:
            0 0 0 1px #00ff4120,
            0 0 40px #00ff4112,
            0 0 80px #00ff4108,
            0 30px 60px rgba(0,0,0,0.7);
          overflow: hidden;
        }

        /* ── Title bar ── */
        .tbar {
          display: flex; align-items: center; gap: 8px;
          padding: 10px 16px; flex-shrink: 0;
          background: rgba(0,14,0,0.97);
          border-bottom: 1px solid #00ff4125;
          backdrop-filter: blur(8px);
        }
        .dot { width: 12px; height: 12px; border-radius: 50%; cursor: default; }
        .d-r { background: #ff5f57; } .d-y { background: #ffbd2e; } .d-g { background: #28ca41; }
        .tbar-title { color: #00ff4160; font-size: 12px; margin: 0 auto; letter-spacing: 2px; }
        .audio-btn {
          background: transparent;
          border: 1px solid #00ff4135;
          border-radius: 4px;
          color: #00ff4190;
          font-family: inherit;
          font-size: 11px;
          padding: 2px 8px;
          cursor: pointer;
          letter-spacing: 1px;
          transition: all .15s;
          flex-shrink: 0;
        }
        .audio-btn:hover {
          border-color: #00ff4170;
          color: #00ff41;
          background: rgba(0,255,65,0.07);
        }

        /* ── Scrollable body ── */
        .tbody {
          flex: 1; overflow-y: auto; overflow-x: hidden;
          background: rgba(0,5,0,0.93);
          padding: 18px 20px 8px;
          backdrop-filter: blur(4px);
        }

        /* ── Clear header ── */
        .clear-header { margin-bottom: 10px; }
        .clear-header-row { display: flex; align-items: center; gap: 0; padding: 4px 0 6px; }
        .clear-tag {
          margin-left: 10px;
          color: #00ff4145;
          font-size: 11px;
          letter-spacing: 1.5px;
          font-style: italic;
        }
        .clear-divider {
          height: 1px;
          background: linear-gradient(to right, #00ff4130, #00ff4108, transparent);
          margin-bottom: 4px;
        }

        /* ── Prompt ── */
        .prow { display: flex; align-items: center; flex-wrap: nowrap; padding: 2px 0; }
        .pu  { color: #69ff47; font-weight: 700; }
        .pat { color: #00ff41; }
        .ph  { color: #00e5ff; font-weight: 700; }
        .pco { color: #00ff4140; }
        .ppa { color: #ffd54f; }
        .pdl { color: #00ff41; font-weight: 700; margin-right: 8px; white-space: pre; }
        .tinput {
          background: transparent; border: none; outline: none;
          color: #00ff41; font-family: inherit; font-size: inherit;
          caret-color: #00ff41; flex: 1; min-width: 0;
        }
        .tinput::selection { background: #00ff4128; }

        /* ── Output lines ── */
        .line-out  { color: #b8ffca; line-height: 1.65; white-space: pre; font-size: 14px; }
        .line-boot { color: #00bb36; line-height: 1.52; white-space: pre; font-size: 14px; }
        .line-error  { color: #ff5555 !important; }
        .line-border { color: #008c3a !important; }
        .tlink { color: #29d9ff; text-decoration: underline; text-underline-offset: 3px; cursor: pointer; transition: color .15s; }
        .tlink:hover { color: #69ff47; }

        /* ── Cards (experience / projects) ── */
        .card {
          width: 100%;
          border: 1px solid #00ff4128;
          border-left: 3px solid #00ff4180;
          border-radius: 4px;
          padding: 12px 16px;
          margin-bottom: 2px;
          background: rgba(0,255,65,0.03);
        }
        .card:hover { background: rgba(0,255,65,0.055); transition: background .15s; }
        .card-header {
          display: flex; justify-content: space-between; align-items: flex-start;
          gap: 12px; flex-wrap: wrap; margin-bottom: 3px;
        }
        .card-company { color: #00ff41; font-weight: 700; font-size: 14px; }
        .card-period  { color: #ffd54f; font-size: 13px; white-space: nowrap; }
        .card-title   { color: #69ff47; font-size: 13px; margin-bottom: 2px; }
        .card-location{ color: #00e5ff88; font-size: 12px; margin-bottom: 8px; }
        .card-row {
          display: flex; justify-content: space-between; align-items: center;
          gap: 12px; flex-wrap: wrap; margin-bottom: 8px;
        }
        .card-stack  { color: #b8ffca99; font-size: 12px; }
        .card-status { color: #69ff47; font-size: 12px; white-space: nowrap; }
        .card-bullets {
          list-style: none; padding: 0; margin: 0 0 8px 0;
        }
        .card-bullets li {
          color: #b8ffca;
          font-size: 13px;
          line-height: 1.7;
          padding-left: 16px;
          position: relative;
          word-break: break-word;
        }
        .card-bullets li::before {
          content: "▸";
          position: absolute; left: 0;
          color: #00ff41;
        }
        .card-link { font-size: 13px; margin-top: 4px; }

        /* Make blog title column wrap */
        .tt td:nth-child(2) { white-space: normal; min-width: 180px; word-break: break-word; }

        /* ── Prose block (about, long text) ── */
        .prose-block {
          color: #b8ffca;
          font-size: 13px;
          line-height: 1.8;
          padding: 4px 0 4px 2px;
          max-width: 100%;
        }
        .prose-para {
          margin-bottom: 12px;
          white-space: pre-wrap;
          word-break: break-word;
        }
        .prose-para:last-child { margin-bottom: 0; }

        /* ── TABLE ── */
        .tt-wrap {
          width: 100%; overflow-x: auto;
          margin: 6px 0 4px;
        }
        .tt {
          border-collapse: collapse;
          width: 100%;
          font-size: 13px;
          color: #b8ffca;
        }
        .tt th {
          background: rgba(0,255,65,0.07);
          color: #00ff41;
          font-weight: 700;
          padding: 6px 12px;
          border: 1px solid #00ff4130;
          text-align: left;
          white-space: nowrap;
          letter-spacing: 0.5px;
        }
        .tt td {
          padding: 6px 12px;
          border: 1px solid #00ff4318;
          vertical-align: top;
          line-height: 1.5;
        }
        .tt tr:nth-child(even) td { background: rgba(0,255,65,0.03); }
        .tt tr:hover td { background: rgba(0,255,65,0.07); transition: background .12s; }

        /* ── Clear header ── */
        .clear-header { margin-bottom: 6px; }
        .clear-header-row {
          display: flex; align-items: center; gap: 0;
          padding: 6px 0 5px;
          font-size: 13px; font-family: inherit;
        }
        .clear-tag {
          color: #00ff4145;
          font-size: 11px;
          margin-left: 10px;
          letter-spacing: 1px;
        }
        .clear-divider {
          height: 1px;
          background: linear-gradient(to right, #00ff4130, transparent);
          margin-bottom: 4px;
        }

        /* ── Animations ── */
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        .cur { display: inline-block; animation: blink 1s step-end infinite; color: #00ff41; }

        @keyframes scanline { 0%{top:-4px} 100%{top:100%} }
        .scanline {
          position: absolute; left: 0; right: 0; height: 2px;
          background: rgba(0,255,65,0.028);
          animation: scanline 8s linear infinite;
          pointer-events: none; z-index: 5;
        }

        @keyframes flicker { 0%,89%,91%,93%,100%{opacity:1} 90%{opacity:.88} 92%{opacity:.96} }
        .flicker { animation: flicker 8s infinite; }

        /* ── CRT lines overlay (only inside terminal) ── */
        .crt-inner {
          position: absolute; inset: 0; pointer-events: none; z-index: 4;
          background: repeating-linear-gradient(
            0deg, transparent, transparent 2px,
            rgba(0,0,0,0.018) 2px, rgba(0,0,0,0.018) 4px
          );
          border-radius: inherit;
        }

        /* ── Vignette inside terminal ── */
        .vig-inner {
          position: absolute; inset: 0; pointer-events: none; z-index: 3;
          background: radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.55) 100%);
          border-radius: inherit;
        }

        /* ── Mobile ── */
        @media (max-width: 600px) {
          .terminal { width: 100vw; height: 100dvh; border-radius: 0; }
          .tbody { padding: 12px 12px 8px; }
          .line-out, .line-boot { font-size: 12px; white-space: pre-wrap; }
          .tt { font-size: 12px; }
          .tt th, .tt td { padding: 5px 8px; }
        }

        /* ── Large screen: cap and give breathing room ── */
        @media (min-width: 1400px) {
          .terminal { width: min(1000px, 72vw); height: min(760px, 85vh); }
        }
      `}</style>

      {/* Matrix rain fills entire viewport */}
      <MatrixRain />

      {/* Centered terminal box */}
      <div className="terminal flicker">
        <div className="crt-inner" />
        <div className="vig-inner" />
        <div className="scanline" />

        {/* Title bar */}
        <div className="tbar">
          <div className="dot d-r"/><div className="dot d-y"/><div className="dot d-g"/>
          <span className="tbar-title">devanshu@portfolio — {cwd} — zsh</span>
          <button
            onClick={e => { e.stopPropagation(); toggleAudio(); }}
            className="audio-btn"
            title={muted ? "Enable ambient sound" : "Mute ambient sound"}
          >
            {muted ? "♪ off" : "♪ on"}
          </button>
        </div>

        {/* Scrollable content */}
        <div className="tbody">
          {entries.map(e => {
            if (e.kind === "boot") return <RenderLine key={e.id} text={e.text} type="boot" />;
            if (e.kind === "clearheader") return (
              <div key={e.id} className="clear-header">
                <div className="clear-header-row">
                  <span className="pu">devanshu</span>
                  <span className="pat">@</span>
                  <span className="ph">terminal</span>
                  <span className="pco">:</span>
                  <span className="ppa">{e.promptPath}</span>
                  <span className="clear-tag">~ cleared</span>
                </div>
                <div className="clear-divider" />
              </div>
            );
            if (e.kind === "input") return (
              <div key={e.id} className="prow">
                <span className="pu">devanshu</span>
                <span className="pat">@</span>
                <span className="ph">portfolio</span>
                <span className="pco">:</span>
                <span className="ppa">{e.promptPath}</span>
                <span className="pdl">$ </span>
                <span style={{ color:"#00ff41" }}>{e.text}</span>
              </div>
            );
            if (e.kind === "output") return <OutputBlock key={e.id} data={e.data} />;
            return null;
          })}

          {/* Live input */}
          {ready && (
            <div className="prow" style={{ paddingTop: 4, paddingBottom: 20 }}>
              <span className="pu">devanshu</span>
              <span className="pat">@</span>
              <span className="ph">portfolio</span>
              <span className="pco">:</span>
              <span className="ppa">{curPath}</span>
              <span className="pdl">$ </span>
              <input
                ref={inputRef}
                className="tinput"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                spellCheck={false}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
              />
            </div>
          )}

          {booting && <div style={{ paddingBottom: 16 }}><span className="cur">█</span></div>}
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
}