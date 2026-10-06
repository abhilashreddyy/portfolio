// Single source of truth for the site. The page and /api/profile both read
// from here. Edit facts here only.

export const identity = {
  name: "Abhilash Reddy Yammanuru",
  short: "Abhilash",
  title: "Backend & ML Engineer",
  years: "5+",
  location: "San Jose, CA",
  email: "abhilashreddyy123@gmail.com",
  github: "https://github.com/abhilashreddyy",
  linkedin: "https://www.linkedin.com/in/yabhilashreddy/",
  resumePath: "/Abhilash_Reddy_Yammanuru_Resume.pdf",
};

export const availability = {
  status: "Available now",
  detail: "Open to backend, ML infrastructure, and applied LLM roles. Bay Area or remote. Also taking scoped freelance work.",
};

export const thesis =
  "I build backend and LLM systems that hold up in production: distributed services on AWS, agentic pipelines with strict data contracts, and the latency and cost work that makes them affordable to run.";

export const about = [
  "Five-plus years across backend and machine learning. The last three were at AXYO AI, where I owned containerized FastAPI services on AWS EKS, the platform auth layer, the Airflow pipelines underneath, and the LLM features on top.",
  "Recently I have been on the other side of the agent story: building a coding agent on an open-weight model, evaluating it properly, and fine-tuning it. The honest result was that the model, not the harness, was the ceiling. I write that down too.",
  "Before AXYO: a gRPC client SDK for a distributed streaming platform at Grainite, and NLP for medical text at Simbo.ai. M.S. in Computer Science from Arizona State, 4.0 GPA.",
];

export interface Project {
  name: string;
  period: string;
  role?: string;
  status?: string;
  summary: string;
  points: string[];
  tech: string[];
  repo?: string;
  demo?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    name: "LLM Inference Lab",
    period: "2026",
    status: "Open source · live dashboard",
    featured: true,
    summary:
      "A reproducible harness that deploys open-source LLMs, applies inference optimizations one at a time, and measures what each one actually buys you.",
    points: [
      "Six models benchmarked on HumanEval-164 and GSM8K-100 for real task quality, not just tokens per second.",
      "Quantization, KV-cache precision, batching, and speculative decoding measured independently and combined, every timing a mean with standard deviation.",
      "Fixed metrics schema, so swapping engine or hardware is a config change. Client-side dashboard auto-publishes on every push.",
    ],
    tech: ["Python", "PyTorch", "MLX", "transformers", "GitHub Actions"],
    repo: "https://github.com/abhilashreddyy/llm-inference-lab",
    demo: "https://abhilashreddyy.github.io/llm-inference-lab/",
  },
  {
    name: "Jobbive",
    period: "2026",
    role: "Founder",
    status: "In production",
    featured: true,
    summary:
      "A job-matching platform that reads the whole market every day and scores it against your resume.",
    points: [
      "Scrapes 300K+ live postings a day from 2,900+ companies across 20 applicant-tracking systems.",
      "An encoder parses each posting once into structured requirements; a deterministic rubric does the scoring. LLM where necessary, deterministic everywhere else.",
      "Runs unattended in production with Redis-backed workers and a FastAPI backend.",
    ],
    tech: ["Python", "FastAPI", "PostgreSQL", "Redis", "LLM parsing"],
  },
  {
    name: "Coding agent on Gemma 4",
    period: "Sep–Oct 2026",
    status: "Kaggle competition · ongoing",
    featured: true,
    summary:
      "An agent that fixes bugs in Python repositories it has never seen, under a hard budget of 60 tool calls and about five minutes per task, graded on hidden repos.",
    points: [
      "Phased design (scout, planner, fixer, finalizer) with skill scripts for search and code structure, a ledger of ruled-out paths so no phase re-explores a dead end, and repo-agnostic discovery at runtime.",
      "Every task runs in its own Docker sandbox. Evaluation on 50+ tasks or repeated runs, because single runs swing by two or three tasks.",
      "Same tools, different model: Opus solved 9 of 13, Gemma 4 of 13. Built a LoRA fine-tuning pipeline, trained a fixer adapter on a rented A100, A/B'd it on 74 tasks, measured no gain, and shelved it.",
    ],
    tech: ["Python", "vLLM", "Docker", "LoRA / PEFT", "Kaggle"],
  },
  {
    name: "Spectra to structure (CASMI 2026)",
    period: "Oct 2026",
    status: "Kaggle competition · ongoing",
    summary:
      "Predicting molecular structures from mass spectra. A fingerprint network plus library search, fused with a LambdaRank ranker.",
    points: [
      "Identity-disjoint validation folds after finding the public holdout was far easier than the hidden test.",
      "One knob per submission, every dead end recorded.",
    ],
    tech: ["PyTorch", "RDKit", "LightGBM"],
  },
];

export const earlierProjects = [
  {
    name: "Algorithmic trading bot",
    year: "2022",
    blurb: "Event-driven strategy evaluation on live market data with a backtesting engine.",
    repo: "https://github.com/abhilashreddyy/Trading-Bot",
  },
  {
    name: "Neural style transfer",
    year: "2020",
    blurb: "CNN style transfer from the paper: content and style losses, Gram matrices, the optimization loop.",
    repo: "https://github.com/abhilashreddyy/Neural-Style-Transfer",
  },
  {
    name: "Self-driving car via Q-learning",
    year: "2019",
    blurb: "A reinforcement-learning agent that learns a driving policy in simulation.",
    repo: "https://github.com/abhilashreddyy/Self-Driving-car-using-Reinforcenent-Learning/tree/main/Q-Learning",
  },
];

export interface Role {
  company: string;
  title: string;
  location: string;
  period: string;
  summary: string;
  points: string[];
}

export const roles: Role[] = [
  {
    company: "AXYO AI",
    title: "Backend & ML Engineer",
    location: "Tempe, AZ",
    period: "Jul 2023 – Jul 2026",
    summary:
      "Owned the platform's services, auth layer, data pipelines, and LLM features.",
    points: [
      "Built and deployed containerized FastAPI services on AWS EKS via CI/CD, horizontally scaled behind a load balancer for fault-tolerant production traffic.",
      "Cut API latency from ~3 s to ~300 ms via profiling, bulk authorization checks, a multi-component fetch API, and PostgreSQL query optimization.",
      "Built an agentic data-transformation pipeline: LLM agents generate transformation configs, executed through an MCP server over a Pandas engine, rendered as KPIs, tables, and charts.",
      "Built an LLM-powered synthetic data pipeline where models infer schema semantics and relationships, with structured-output validation and decision-tree segmentation that preserves source statistics.",
      "Built a metadata RAG layer over the data catalog to ground model answers and cut hallucination.",
      "Owned the auth layer: OAuth 2.0 bearer-token validation, RBAC and ABAC, SSO, audit logging. Contributed access-control evidence for SOC 2.",
      "Built and ran Airflow (MWAA) pipelines with event-driven S3-to-Lambda triggers coordinating isolated environments, monitored in CloudWatch. Provisioned services with Terraform across dev, test, and prod.",
      "Enforced schema-driven Pydantic data contracts across APIs, pipelines, and LLM workflows.",
    ],
  },
  {
    company: "Grainite",
    title: "Software Engineer Intern",
    location: "Santa Clara, CA",
    period: "May 2022 – Aug 2022",
    summary:
      "Built the Python client SDK for a distributed streaming and event-processing platform.",
    points: [
      "gRPC and protocol-buffer client SDK enabling low-latency, high-throughput ingestion for downstream consumers.",
      "Concurrent event-loop batch processing to lift ingestion throughput.",
      "Automated library testing and packaging in CI/CD with Bazel.",
    ],
  },
  {
    company: "Simbo.ai",
    title: "Machine Learning Engineer",
    location: "Bengaluru, India",
    period: "Jun 2019 – Jun 2021",
    summary: "NLP for medical text, and the data tooling that fed it.",
    points: [
      "Modified CRF++ at the decoding level to emit n-best sequences instead of a single path, improving extraction coverage.",
      "Built a full-stack annotation platform (Django, React) that produced 1M+ labeled data points.",
      "ETL pipelines over 18M+ records from 5 sources; models deployed on AWS for reliable inference.",
    ],
  },
];

export const education = [
  {
    degree: "M.S. Computer Science",
    school: "Arizona State University",
    detail: "4.0 / 4.0 GPA · Graduate Teaching Assistant for Web Development and Design Patterns",
    period: "2021 – 2023",
  },
  {
    degree: "B.Tech. Computer Science and Engineering",
    school: "Savitribai Phule Pune University",
    detail: "8.52 / 10 GPA",
    period: "2015 – 2019",
  },
];

export const principles = [
  {
    claim: "Schema contracts are the highest-leverage thing in an LLM pipeline.",
    body: "Pydantic at every boundary turns \"the model said something weird\" into a caught validation error instead of a corrupted downstream write.",
  },
  {
    claim: "Budget every agent loop, and record dead ends.",
    body: "An agent without a tool-call budget wanders. An agent that re-greps the same thing is burning money. A ledger of ruled-out paths fixes both.",
  },
  {
    claim: "Evals are statistics.",
    body: "Single runs are noise. Compare on large sets or repeated runs, and replay real failing traces instead of toy tests.",
  },
  {
    claim: "Latency is never one problem.",
    body: "3 s to 300 ms was four things each costing a few hundred milliseconds. Profile, fix one, look for the next.",
  },
  {
    claim: "An optimization you have not measured is a rumor.",
    body: "Quantization, KV-cache, batching, and speculative decoding all sound free. Measured against task quality, two of them cost more than they advertise.",
  },
];

export const skills = [
  {
    label: "Backend & systems",
    items: ["Python", "TypeScript", "FastAPI", "Django", "gRPC", "PostgreSQL", "Redis", "REST", "Microservices", "Event-driven pipelines"],
  },
  {
    label: "Cloud & infra",
    items: ["AWS (EKS, Lambda, S3, MWAA, CloudWatch, SageMaker)", "Kubernetes", "Docker", "Terraform", "CI/CD", "Airflow"],
  },
  {
    label: "LLM & agents",
    items: ["Agent harnesses", "Tool calling", "MCP", "Structured output", "RAG", "LangChain / LangGraph", "Evals", "LoRA fine-tuning", "vLLM"],
  },
  {
    label: "ML",
    items: ["PyTorch", "Inference optimization", "Quantization", "NLP", "Time-series forecasting", "LightGBM"],
  },
  {
    label: "Security",
    items: ["OAuth 2.0 / OIDC", "RBAC / ABAC", "Audit logging", "SOC 2"],
  },
];
