import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  dark = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  dark?: boolean;
}) {
  return (
    <Reveal className="max-w-2xl">
      <p className={`text-xs font-medium uppercase tracking-[0.2em] ${dark ? "text-accent" : "text-accent"}`}>{eyebrow}</p>
      <h2
        className={`mt-3 text-3xl font-semibold leading-[1.1] tracking-tight sm:text-[2.6rem] ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {intro && <p className={`mt-4 text-base leading-relaxed sm:text-lg ${dark ? "text-white/65" : "text-muted"}`}>{intro}</p>}
    </Reveal>
  );
}
