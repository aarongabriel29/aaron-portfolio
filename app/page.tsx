import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import PipelineDiagram from "@/components/PipelineDiagram";
import { ArrowRight, ArrowUpRight, Check, Download } from "@/components/icons";
import { education, experience, process, profile, projects, rotating, skills, stats, tools } from "@/lib/data";

export default function Home() {
  const featured = projects.find((p) => p.featured)!;
  const others = projects.filter((p) => !p.featured);

  return (
    <>
      <Nav />
      <main id="top">
        {/* HERO */}
        <section className="relative overflow-hidden pt-24 sm:pt-32">
          <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden />
          <div className="aurora pointer-events-none absolute inset-0" aria-hidden>
            <span className="aurora-a" />
            <span className="aurora-b" />
          </div>
          <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-12">
              <div className="min-w-0">
                <Reveal>
                  <div className="inline-flex max-w-full items-center gap-3 rounded-full border border-line bg-surface/80 py-1.5 pl-1.5 pr-4 shadow-sm backdrop-blur">
                    <span className="relative size-10 shrink-0 overflow-hidden rounded-full bg-[#e9eaec] ring-2 ring-surface sm:size-11">
                      <Image src={profile.photo} alt={`Portrait of ${profile.name}`} fill priority sizes="44px" className="object-cover object-top" />
                    </span>
                    <span className="min-w-0 leading-tight">
                      <span className="block truncate text-sm font-semibold">{profile.fullName}</span>
                      <span className="flex items-center gap-1.5 text-xs text-muted">
                        <span className="relative flex size-1.5">
                          <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-70" />
                          <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
                        </span>
                        Open to new opportunities
                      </span>
                    </span>
                  </div>
                </Reveal>
                <Reveal delay={60}>
                  <h1 className="mt-7 text-[2.55rem] font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-[4.4rem]">
                    Senior Web Developer <span className="text-muted/60">&amp;</span>{" "}
                    <span className="font-display font-normal italic tracking-[-0.01em] text-accent">Designer</span>
                  </h1>
                </Reveal>
                <Reveal delay={100}>
                  <p className="mt-5 text-lg font-medium tracking-tight text-ink-soft sm:text-2xl">
                    WordPress &amp; Elementor sites that{" "}
                    <span className="rotator" aria-hidden>
                      <span className="rotator-track">
                        {[...rotating, rotating[0]].map((w, i) => (
                          <span key={i} className="rotator-word">{w}</span>
                        ))}
                      </span>
                    </span>
                    <span className="sr-only">{rotating.join(", ")}</span>
                  </p>
                </Reveal>
                <Reveal delay={140}>
                  <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{profile.intro}</p>
                </Reveal>
                <Reveal delay={180} className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="#work"
                    className="btn-shine group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 font-medium text-paper shadow-[0_10px_30px_-10px_rgba(12,12,14,0.6)] transition hover:-translate-y-0.5 hover:bg-accent"
                  >
                    View selected work
                    <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
                  </Link>
                  <a
                    href={profile.resume}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-surface px-6 py-3.5 font-medium transition hover:-translate-y-0.5 hover:border-ink/30"
                  >
                    Download resume <Download />
                  </a>
                </Reveal>
              </div>

              {/* Floating work preview (desktop) */}
              <Reveal delay={160} className="relative hidden h-[480px] lg:block" >
                <div className="float-a absolute right-0 top-0 w-[90%] overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_40px_80px_-30px_rgba(12,12,14,0.45)]">
                  <div className="relative aspect-[3/2]">
                    <Image src={projects[0].image} alt="" fill priority sizes="380px" className="object-cover" />
                  </div>
                </div>
                <div className="float-b absolute -left-6 bottom-0 w-[66%] overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_40px_80px_-30px_rgba(12,12,14,0.45)]">
                  <div className="relative aspect-[3/2]">
                    <Image src={projects[2].image} alt="" fill priority sizes="300px" className="object-cover" />
                  </div>
                </div>
                <div className="float-c absolute bottom-16 -right-2 rounded-2xl border border-line bg-surface/90 px-4 py-3 shadow-xl backdrop-blur">
                  <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">Lead pipeline</p>
                  <p className="mt-1 flex items-center gap-2 text-sm font-semibold">
                    <span className="size-2 rounded-full bg-emerald-500" /> Form → NetSuite → Iterable
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Tools marquee */}
            <Reveal delay={220} className="mt-14 sm:mt-16">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">Tools I build with</p>
              <div className="marquee mt-4">
                <div className="marquee-track">
                  {[...tools, ...tools].map((t, i) => (
                    <span
                      key={i}
                      aria-hidden={i >= tools.length}
                      className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium ${
                        t === "Elementor" || t === "WordPress"
                          ? "border-accent/30 bg-accent-soft text-accent"
                          : "border-line bg-surface text-ink-soft"
                      }`}
                    >
                      <span className={`size-1.5 rounded-full ${t === "Elementor" || t === "WordPress" ? "bg-accent" : "bg-ink/25"}`} />
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Stats */}
            <Reveal delay={240} className="mt-10 grid grid-cols-2 overflow-hidden rounded-2xl border border-line bg-surface/90 backdrop-blur lg:grid-cols-4">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`group relative p-5 sm:p-7 ${i % 2 === 1 ? "border-l border-line" : ""} ${i > 1 ? "border-t border-line lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""}`}
                >
                  <div className="text-3xl font-semibold tracking-tight tabular-nums sm:text-[2.6rem]">
                    {s.value}
                    <span className="text-accent">{s.suffix}</span>
                  </div>
                  <p className="mt-1.5 text-[13px] leading-snug text-muted sm:text-sm">{s.label}</p>
                  <span className="absolute inset-x-5 bottom-0 h-0.5 origin-left scale-x-0 bg-accent transition duration-500 group-hover:scale-x-100 sm:inset-x-7" />
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* FEATURED CASE STUDY */}
        <section id="work" className="relative mt-20 overflow-hidden bg-night py-20 text-white sm:mt-28 sm:py-28">
          <div className="glow-red pointer-events-none absolute inset-0" aria-hidden />
          <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
            <SectionHeading
              dark
              eyebrow="Featured case study"
              title={
                <>
                  Access Modular: design, build and a{" "}
                  <span className="font-display font-normal italic text-white/90">connected</span> lead pipeline
                </>
              }
              intro={featured.summary}
            />

            <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-10">
              <Reveal>
                <Link href={`/work/${featured.slug}`} className="group block">
                  <div className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-night-line">
                    <Image
                      src={featured.image}
                      alt="Access Modular website design on desktop and mobile"
                      fill
                      sizes="(min-width: 1024px) 560px, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                </Link>
              </Reveal>
              <Reveal delay={100} className="flex flex-col justify-center">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/45">What I delivered</p>
                <ul className="mt-5 space-y-4">
                  {featured.highlights.map((h) => (
                    <li key={h} className="flex gap-3 border-b border-night-line pb-4 text-[1.05rem] text-white/85">
                      <Check className="mt-1 size-4 shrink-0 text-accent" /> {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {featured.stack.map((s) => (
                    <span key={s} className="rounded-full border border-night-line px-3 py-1 text-xs text-white/65">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={`/work/${featured.slug}`}
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-medium text-ink transition hover:bg-accent hover:text-white"
                  >
                    Read the case study <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
                  </Link>
                  {featured.url && (
                    <a
                      href={featured.url}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-night-line px-6 py-3.5 font-medium transition hover:border-white/40"
                    >
                      Visit live site <ArrowUpRight />
                    </a>
                  )}
                </div>
              </Reveal>
            </div>
            <Reveal className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-night-line bg-night-line lg:grid-cols-4">
              {featured.impact.map((m) => (
                <div key={m.label} className="bg-night-2 p-5 sm:p-6">
                  <div className="text-3xl font-semibold tracking-tight text-white tabular-nums sm:text-4xl">{m.value}</div>
                  <p className="mt-2 text-[13px] leading-snug text-white/55 sm:text-sm">{m.label}</p>
                </div>
              ))}
            </Reveal>
            <Reveal className="mt-6">
              <PipelineDiagram />
            </Reveal>
          </div>
        </section>

        {/* SELECTED WORK */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <SectionHeading
                eyebrow="Selected work"
                title="Websites built to convert"
                intro="Redesigns and ground up builds, each taken from Figma to a responsive, launch ready website."
              />
            </div>
            <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2">
              {others.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 2) * 80}>
                  <ProjectCard project={p} priority={i < 2} />
                </Reveal>
              ))}
              {others.length % 2 === 1 && (
                <Reveal delay={80} className="hidden sm:block">
                  <div className="flex aspect-[3/2] flex-col justify-between rounded-2xl border border-dashed border-ink/15 p-8">
                    <p className="font-display text-4xl italic leading-tight text-ink-soft">
                      Plus 30 brand websites managed in house.
                    </p>
                    <div>
                      <p className="max-w-sm text-sm leading-relaxed text-muted">
                        Most of my day to day work lives inside a multi brand portfolio. Happy to walk through more examples in an interview.
                      </p>
                      <Link
                        href="#contact"
                        className="group mt-5 inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-accent"
                      >
                        Get in touch <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              )}
            </div>
          </div>
        </section>

        {/* ABOUT + PROCESS */}
        <section className="border-y border-line bg-surface py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <div>
              <SectionHeading eyebrow="About" title={profile.headline} />
              <Reveal delay={80} className="mt-6 space-y-4 text-[1.05rem] leading-relaxed text-muted">
                {profile.about.map((p) => (
                  <p key={p.slice(0, 20)}>{p}</p>
                ))}
              </Reveal>
            </div>
            <div className="grid content-start gap-4 sm:grid-cols-2">
              {process.map((p, i) => (
                <Reveal key={p.step} delay={i * 70} className="rounded-2xl border border-line bg-paper p-6">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-3xl italic text-accent">{p.step}</span>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold tracking-tight">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <SectionHeading eyebrow="Experience" title="Where I've done the work" />
            <ol className="mt-12 border-t border-line">
              {experience.map((job, i) => (
                <Reveal as="li" key={job.company} delay={i * 60} className="grid gap-4 border-b border-line py-10 lg:grid-cols-[280px_1fr] lg:gap-12">
                  <div>
                    <p className="text-sm font-medium text-accent">{job.period}</p>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight">{job.company}</h3>
                    <p className="mt-1 text-sm text-muted">{job.location}</p>
                  </div>
                  <div>
                    <p className="text-lg font-medium tracking-tight">{job.role}</p>
                    <ul className="mt-4 space-y-3">
                      {job.points.map((pt) => (
                        <li key={pt.slice(0, 24)} className="flex gap-3 leading-relaxed text-muted">
                          <span className="mt-[0.6rem] size-1.5 shrink-0 rounded-full bg-ink/30" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="pb-20 sm:pb-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <SectionHeading eyebrow="Capabilities" title="Design, development and the systems behind them" />
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((group, i) => (
                <Reveal key={group.title} delay={(i % 3) * 70} className="rounded-2xl border border-line bg-surface p-6">
                  <h3 className="font-semibold tracking-tight">{group.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((s) => (
                      <span key={s} className="rounded-full bg-paper px-3 py-1.5 text-[13px] text-ink-soft">
                        {s}
                      </span>
                    ))}
                  </div>
                </Reveal>
              ))}
              <Reveal delay={140} className="rounded-2xl border border-accent/20 bg-accent-soft p-6">
                <h3 className="font-semibold tracking-tight">Education & certifications</h3>
                <p className="mt-4 text-sm font-medium">{education.degree}</p>
                <p className="text-sm text-muted">{education.school}</p>
                <ul className="mt-4 space-y-2">
                  {education.certifications.map((c) => (
                    <li key={c} className="flex gap-2 text-sm text-ink-soft">
                      <Check className="mt-0.5 size-4 shrink-0 text-accent" /> {c}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
