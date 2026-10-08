import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/data";
import { ArrowUpRight } from "./icons";

export default function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <Link href={`/work/${project.slug}`} className="group block" aria-label={`${project.name} case study`}>
      <div className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_1px_0_rgba(12,12,14,0.04)] transition duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_30px_60px_-25px_rgba(12,12,14,0.35)]">
        <Image
          src={project.image}
          alt={`${project.name} website design`}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 560px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium text-ink shadow-sm backdrop-blur">
          {project.type}
        </span>
        <span className="absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-ink text-paper opacity-0 shadow-lg transition duration-300 group-hover:opacity-100">
          <ArrowUpRight />
        </span>
      </div>
      <div className="mt-5">
        <h3 className="flex flex-wrap items-center gap-x-2 gap-y-1 text-lg font-semibold tracking-tight transition group-hover:text-accent">
          <span className="size-2 shrink-0 rounded-full" style={{ background: project.accent }} />
          {project.name}
          <span className="text-sm font-normal text-muted">· {project.sector}</span>
        </h3>
        <p className="mt-1.5 max-w-md text-[15px] leading-relaxed text-muted">{project.tagline}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.services.slice(0, 3).map((s) => (
            <span key={s} className="rounded-full border border-line px-2.5 py-1 text-[11px] text-muted">
              {s}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
