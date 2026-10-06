import {
  about,
  availability,
  earlierProjects,
  education,
  identity,
  principles,
  projects,
  roles,
  skills,
  thesis,
} from "@/content/profile";

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-line py-14">
      <h2 className="mb-8 text-xs font-medium uppercase tracking-[0.2em] text-muted">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-line px-2 py-0.5 text-xs text-muted">
      {children}
    </span>
  );
}

function ExtLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="underline decoration-line underline-offset-4 transition hover:decoration-foreground"
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
      <header className="flex items-center justify-between gap-6 py-6 text-sm">
        <span className="font-medium">{identity.short}</span>
        <nav className="flex gap-5 text-muted">
          <a className="hover:text-foreground" href="#work">Work</a>
          <a className="hover:text-foreground" href="#experience">Experience</a>
          <a className="hover:text-foreground" href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="pb-14 pt-10 sm:pt-16">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-xs text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          {availability.status} · {identity.location}
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          {identity.name}
        </h1>
        <p className="mt-2 text-lg text-muted">
          {identity.title} · {identity.years} years
        </p>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed">{thesis}</p>
        <div className="mt-8 flex flex-wrap gap-3 text-sm">
          <a
            href={identity.resumePath}
            className="rounded-full bg-foreground px-5 py-2.5 font-medium text-background transition hover:opacity-80"
          >
            Resume
          </a>
          <a
            href={`mailto:${identity.email}`}
            className="rounded-full border border-line px-5 py-2.5 font-medium transition hover:bg-surface"
          >
            Email
          </a>
          <a
            href={identity.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-line px-5 py-2.5 font-medium transition hover:bg-surface"
          >
            GitHub
          </a>
          <a
            href={identity.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-line px-5 py-2.5 font-medium transition hover:bg-surface"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* About */}
      <Section id="about" title="About">
        <div className="space-y-4 leading-relaxed text-foreground/90">
          {about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </Section>

      {/* Work */}
      <Section id="work" title="Selected work">
        <div className="space-y-10">
          {projects.map((p) => (
            <article key={p.name}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <span className="text-sm text-muted">
                  {p.role ? `${p.role} · ` : ""}
                  {p.period}
                </span>
              </div>
              {p.status && <p className="mt-1 text-xs text-muted">{p.status}</p>}
              <p className="mt-3 leading-relaxed">{p.summary}</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground/80">
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {p.tech.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
                {(p.repo || p.demo) && <span className="mx-1 text-line">|</span>}
                {p.demo && (
                  <span className="text-sm">
                    <ExtLink href={p.demo}>Live</ExtLink>
                  </span>
                )}
                {p.repo && (
                  <span className="text-sm">
                    <ExtLink href={p.repo}>Code</ExtLink>
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        <h3 className="mb-4 mt-14 text-sm font-medium text-muted">Earlier</h3>
        <ul className="divide-y divide-line border-y border-line text-sm">
          {earlierProjects.map((p) => (
            <li key={p.name} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-3">
              <span>
                <span className="font-medium">{p.name}</span>
                <span className="text-muted"> · {p.blurb}</span>
              </span>
              <span className="shrink-0 text-muted">
                {p.year} · <ExtLink href={p.repo}>Code</ExtLink>
              </span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience">
        <div className="space-y-10">
          {roles.map((r) => (
            <article key={r.company}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-xl font-semibold">
                  {r.company}
                  <span className="font-normal text-muted"> · {r.title}</span>
                </h3>
                <span className="text-sm text-muted">{r.period}</span>
              </div>
              <p className="mt-1 text-xs text-muted">{r.location}</p>
              <p className="mt-3">{r.summary}</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground/80">
                {r.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      {/* Principles */}
      <Section id="principles" title="How I work">
        <dl className="grid gap-6 sm:grid-cols-2">
          {principles.map((p) => (
            <div key={p.claim} className="rounded-xl border border-line bg-surface p-5">
              <dt className="font-medium">{p.claim}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted">{p.body}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills">
        <dl className="space-y-5">
          {skills.map((g) => (
            <div key={g.label} className="grid gap-2 sm:grid-cols-[160px_1fr]">
              <dt className="text-sm font-medium">{g.label}</dt>
              <dd className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* Education */}
      <Section id="education" title="Education">
        <ul className="space-y-5">
          {education.map((e) => (
            <li key={e.degree} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <div>
                <p className="font-medium">{e.degree}</p>
                <p className="text-sm text-muted">
                  {e.school} · {e.detail}
                </p>
              </div>
              <span className="text-sm text-muted">{e.period}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <p className="max-w-xl leading-relaxed">{availability.detail}</p>
        <p className="mt-4">
          <a
            href={`mailto:${identity.email}`}
            className="text-lg underline decoration-line underline-offset-4 hover:decoration-foreground"
          >
            {identity.email}
          </a>
        </p>
      </Section>

      <footer className="flex flex-wrap items-center justify-between gap-2 border-t border-line py-8 text-xs text-muted">
        <span>© 2026 {identity.name}</span>
        <span>
          Next.js on Vercel ·{" "}
          <a className="hover:text-foreground" href="/api/profile">
            /api/profile
          </a>
        </span>
      </footer>
    </div>
  );
}
