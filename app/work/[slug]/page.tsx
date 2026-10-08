import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import PipelineDiagram from "@/components/PipelineDiagram";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "@/components/icons";
import { projects } from "@/lib/data";

type Params = Promise<{ slug: string }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} case study`,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: { title: `${project.name} case study`, description: project.summary, images: [project.image] },
  };
}

function Label({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">{children}</p>;
}

export default async function CaseStudy({ params }: { params: Params }) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  const isFigma = project.type === "Figma design";

  return (
    <>
      <Nav />
      <main id="top" className="overflow-hidden pt-24 sm:pt-32">
        <article>
          {/* Intro */}
          <header className="relative mx-auto max-w-6xl px-5 sm:px-8">
            <div
              className="pointer-events-none absolute -top-40 right-0 size-[420px] rounded-full opacity-25 blur-[90px]"
              style={{ background: project.accent }}
              aria-hidden
            />
            <Reveal>
              <Link href="/#work" className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm text-muted transition hover:text-ink">
                <ArrowLeft /> All work
              </Link>
            </Reveal>
            <Reveal delay={60} className="relative mt-8">
              <p className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted">
                <span className="size-2 rounded-full" style={{ background: project.accent }} />
                {project.sector}
                <span className="text-line">/</span>
                {project.type}
              </p>
              <h1 className="mt-4 text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-7xl">{project.name}</h1>
              <p className="mt-5 max-w-3xl font-display text-2xl italic leading-snug text-ink-soft sm:text-[2rem]">{project.tagline}</p>
            </Reveal>
            <Reveal delay={120} className="mt-8 flex flex-col gap-3 sm:flex-row">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener"
                  className="btn-shine group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 font-medium text-paper transition hover:-translate-y-0.5 hover:bg-accent"
                >
                  {project.linkLabel}
                  <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-surface px-6 py-3.5 font-medium transition hover:-translate-y-0.5 hover:border-ink/30"
              >
                Talk to me about this project
              </Link>
            </Reveal>
          </header>

          {/* Meta */}
          <Reveal delay={140} className="mx-auto mt-12 max-w-6xl px-5 sm:px-8">
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
              {[
                ["Client", project.client],
                ["My role", project.role],
                ["Services", project.services.join(", ")],
                ["Tools", project.stack.join(", ")],
              ].map(([k, v]) => (
                <div key={k} className="min-w-0 bg-surface p-4 sm:p-6">
                  <dt className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">{k}</dt>
                  <dd className="mt-2 text-[13px] font-medium leading-snug sm:text-[15px]">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          {/* Hero image */}
          <Reveal delay={100} className="mx-auto mt-6 max-w-6xl px-5 sm:px-8">
            <div className="relative aspect-[3/2] max-w-full overflow-hidden rounded-3xl border border-line bg-surface shadow-[0_40px_90px_-40px_rgba(12,12,14,0.45)]">
              <Image src={project.image} alt={`${project.name} website design`} fill priority sizes="(min-width: 1152px) 1088px, 100vw" className="object-cover" />
            </div>
          </Reveal>

          {/* Impact */}
          <section className="relative mt-16 bg-night py-14 text-white sm:mt-20 sm:py-20">
            <div className="pointer-events-none absolute inset-0 opacity-60" style={{ background: `radial-gradient(600px circle at 90% 0%, ${project.accent}40, transparent 60%)` }} aria-hidden />
            <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
              <Reveal>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">Impact at a glance</p>
                <p className="mt-4 max-w-3xl text-lg leading-relaxed text-white/85 sm:text-2xl">{project.summary}</p>
              </Reveal>
              <div className={`mt-10 grid gap-px overflow-hidden rounded-2xl border border-night-line bg-night-line ${project.impact.length > 3 ? "grid-cols-2 lg:grid-cols-4" : "grid-cols-1 sm:grid-cols-3"}`}>
                {project.impact.map((m, i) => (
                  <Reveal key={m.label} delay={i * 70} className="min-w-0 bg-night-2 p-5 sm:p-7">
                    <div className="text-3xl font-semibold tracking-tight tabular-nums sm:text-5xl">
                      {m.value}
                    </div>
                    <p className="mt-3 text-sm leading-snug text-white/60">{m.label}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Overview, challenge, goals */}
          <section className="mx-auto mt-20 grid max-w-6xl gap-12 px-5 sm:mt-28 sm:px-8 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <div className="min-w-0 space-y-12">
              <Reveal>
                <Label>Overview</Label>
                <p className="mt-4 text-lg leading-relaxed text-ink-soft sm:text-xl">{project.overview}</p>
              </Reveal>
              <Reveal>
                <Label>The challenge</Label>
                <p className="mt-4 text-lg leading-relaxed text-muted">{project.challenge}</p>
              </Reveal>
            </div>
            <Reveal className="h-fit rounded-3xl border border-line bg-surface p-6 sm:p-8 lg:sticky lg:top-28">
              <Label>Goals</Label>
              <ul className="mt-5 space-y-4">
                {project.goals.map((g) => (
                  <li key={g} className="flex gap-3 leading-snug">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full text-white" style={{ background: project.accent }}>
                      <Check className="size-3" />
                    </span>
                    {g}
                  </li>
                ))}
              </ul>
            </Reveal>
          </section>

          {/* Process */}
          <section className="mx-auto mt-20 max-w-6xl px-5 sm:mt-28 sm:px-8">
            <Reveal>
              <Label>{isFigma ? "Design process" : "How I delivered it"}</Label>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">From brief to {isFigma ? "final design" : "launch"}</h2>
            </Reveal>
            <ol className={`mt-10 grid gap-4 sm:grid-cols-2 ${project.process.length === 5 ? "lg:grid-cols-5" : "lg:grid-cols-4"}`}>
              {project.process.map((step, i) => (
                <Reveal as="li" key={step.phase} delay={i * 70} className="group relative rounded-2xl border border-line bg-surface p-6 transition hover:-translate-y-1 hover:shadow-[0_25px_50px_-30px_rgba(12,12,14,0.4)]">
                  <div className="flex items-center gap-3">
                    <span className="grid size-8 place-items-center rounded-full bg-paper font-display text-lg italic text-accent">{i + 1}</span>
                    <span className="h-px flex-1 bg-line" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight">{step.phase}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{step.text}</p>
                </Reveal>
              ))}
            </ol>
          </section>

          {/* Features */}
          <section className="mx-auto mt-20 max-w-6xl px-5 sm:mt-28 sm:px-8">
            <Reveal>
              <Label>Key features</Label>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">What makes it work</h2>
            </Reveal>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.features.map((f, i) => (
                <Reveal key={f.title} delay={(i % 3) * 70} className="rounded-2xl border border-line bg-surface p-6 sm:p-7">
                  <span className="block h-1 w-10 rounded-full" style={{ background: project.accent }} />
                  <h3 className="mt-5 text-lg font-semibold tracking-tight">{f.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{f.text}</p>
                </Reveal>
              ))}
            </div>
          </section>

          {project.slug === "access-modular" && (
            <Reveal as="section" className="mx-auto mt-20 max-w-6xl px-5 sm:mt-28 sm:px-8">
              <div className="relative overflow-hidden rounded-3xl bg-night p-5 text-white sm:p-10">
                <div className="glow-red pointer-events-none absolute inset-0" aria-hidden />
                <div className="relative">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Integration architecture</p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">How an enquiry flows</h2>
                  <p className="mt-3 max-w-2xl text-white/60">
                    Every quote request is written to a queue first, then delivered to NetSuite and Iterable, while a privacy safe event is sent to GA4.
                  </p>
                  <div className="mt-8">
                    <PipelineDiagram />
                  </div>
                </div>
              </div>
            </Reveal>
          )}

          {/* Result + deliverables */}
          <section className="mx-auto mt-20 grid max-w-6xl gap-12 px-5 sm:mt-28 sm:px-8 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <Reveal className="min-w-0">
              <Label>The result</Label>
              <p className="mt-5 text-xl font-medium leading-snug tracking-tight sm:text-2xl">{project.outcome}</p>
            </Reveal>
            <Reveal className="h-fit rounded-3xl border border-line bg-surface p-6 sm:p-8">
              <Label>Deliverables</Label>
              <ul className="mt-5 divide-y divide-line">
                {project.deliverables.map((d) => (
                  <li key={d} className="py-3 text-[15px] leading-snug first:pt-0 last:pb-0">
                    {d}
                  </li>
                ))}
              </ul>
            </Reveal>
          </section>
        </article>

        {/* Next project */}
        <section className="mx-auto mt-24 max-w-6xl px-5 pb-24 sm:px-8">
          <Link href={`/work/${next.slug}`} className="group grid items-center gap-6 rounded-3xl border border-line bg-surface p-4 transition hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(12,12,14,0.35)] sm:grid-cols-[1fr_1.2fr] sm:p-6">
            <div className="p-2 sm:p-4">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">Next project</p>
              <p className="mt-3 text-3xl font-semibold tracking-tight transition group-hover:text-accent sm:text-4xl">{next.name}</p>
              <p className="mt-2 text-muted">{next.tagline}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
                View case study <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </span>
            </div>
            <div className="relative aspect-[3/2] max-w-full overflow-hidden rounded-2xl">
              <Image src={next.image} alt="" fill sizes="(min-width: 640px) 560px, 100vw" className="object-cover transition duration-700 group-hover:scale-[1.04]" />
            </div>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
