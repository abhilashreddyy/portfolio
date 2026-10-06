"use client";

import { useState } from "react";

type Hello = {
  message: string;
  time: string;
  region: string;
  runtime: string;
};

export default function Home() {
  const [data, setData] = useState<Hello | null>(null);
  const [loading, setLoading] = useState(false);

  async function callApi() {
    setLoading(true);
    try {
      const res = await fetch("/api/hello", { cache: "no-store" });
      setData((await res.json()) as Hello);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-8 px-6 py-16 text-center">
      <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
        Deployed on Vercel
      </p>
      <h1 className="text-4xl font-semibold sm:text-6xl">Hi, I&apos;m Abhilash.</h1>
      <p className="max-w-xl text-lg text-neutral-600 dark:text-neutral-400">
        Backend and ML engineer. This page is a static Next.js route served from
        Vercel&apos;s CDN. The button below calls a Vercel Function.
      </p>

      <button
        onClick={callApi}
        disabled={loading}
        className="rounded-full bg-foreground px-6 py-3 font-medium text-background transition hover:opacity-80 disabled:opacity-50"
      >
        {loading ? "Calling…" : "Call /api/hello"}
      </button>

      {data && (
        <pre className="w-full max-w-xl overflow-x-auto rounded-xl border border-neutral-200 bg-neutral-50 p-4 text-left text-sm dark:border-neutral-800 dark:bg-neutral-900">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}

      <nav className="flex gap-6 text-sm text-neutral-500">
        <a className="hover:underline" href="https://github.com/abhilashreddyy">
          GitHub
        </a>
        <a className="hover:underline" href="https://www.linkedin.com/in/yabhilashreddy/">
          LinkedIn
        </a>
        <a className="hover:underline" href="https://abhilashreddyy.github.io/llm-inference-lab/">
          LLM inference lab
        </a>
      </nav>
    </main>
  );
}
