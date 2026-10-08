import { profile } from "@/lib/data";
import { ArrowUpRight, Download, Github, Linkedin, Mail, Phone, Pin } from "./icons";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer id="contact" className="bg-night text-white">
      <div className="mx-auto max-w-6xl px-5 pb-10 pt-24 sm:px-8 sm:pt-32">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Contact</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            Let&apos;s build something that{" "}
            <span className="font-display text-[1.1em] font-normal italic text-white/90">works</span> for your team.
          </h2>
          <p className="mt-6 max-w-xl text-lg text-white/60">
            Open to full time roles and select projects. The fastest way to reach me is email.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-4 font-medium text-ink transition hover:bg-accent hover:text-white"
          >
            <Mail /> {profile.email}
            <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-night-line px-6 py-4 font-medium text-white transition hover:border-white/40"
          >
            Download resume <Download />
          </a>
        </Reveal>

        <Reveal delay={150} className="mt-16 grid gap-6 border-t border-night-line pt-10 text-sm sm:grid-cols-3">
          <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-white/70 transition hover:text-white">
            <Mail className="size-4 text-accent" /> {profile.email}
          </a>
          <a href={`tel:${profile.phoneHref}`} className="flex items-center gap-3 text-white/70 transition hover:text-white">
            <Phone className="size-4 text-accent" /> {profile.phone}
          </a>
          <span className="flex items-center gap-3 text-white/70">
            <Pin className="size-4 text-accent" /> {profile.location} (GMT+8)
          </span>
        </Reveal>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 text-xs text-white/40 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {profile.fullName}. Designed and built with Next.js.
          </p>
          <div className="flex items-center gap-4">
            {profile.linkedin && (
              <a href={profile.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn" className="hover:text-white">
                <Linkedin />
              </a>
            )}
            {profile.github && (
              <a href={profile.github} target="_blank" rel="noopener" aria-label="GitHub" className="hover:text-white">
                <Github />
              </a>
            )}
            <a href="#top" className="hover:text-white">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
