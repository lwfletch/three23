import Link from "next/link";
import type { Sport } from "@/lib/sports";

export function SportHub({
  eyebrow,
  title,
  tagline,
  intro,
  sports,
}: {
  eyebrow: string;
  title: string;
  tagline: string;
  intro: string;
  sports: Sport[];
}) {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <div className="absolute inset-0 bg-gradient-to-br from-carolina/25 via-ink to-ink" />
        <div className="relative mx-auto max-w-6xl px-4 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-carolina">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-pink">{tagline}</p>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-4 py-16">
        <p className="text-lg leading-relaxed text-ink/80">{intro}</p>
      </section>

      {/* Cards */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="grid gap-6 sm:grid-cols-2">
          {sports.map((sport) => (
            <Link
              key={sport.slug}
              href={sport.href}
              className="group rounded-2xl border border-black/10 bg-paper p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-carolina hover:shadow-lg"
            >
              <div className="text-5xl">{sport.emoji}</div>
              <h2 className="mt-4 text-2xl font-bold">{sport.name}</h2>
              <p className="mt-2 text-ink/70">{sport.tagline}</p>
              <p className="mt-4 text-sm font-semibold text-carolina-dark">
                {sport.season}
              </p>
              <span className="mt-6 inline-flex items-center gap-1 font-semibold text-pink group-hover:gap-2">
                Explore {sport.name} →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
