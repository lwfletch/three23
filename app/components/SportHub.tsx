import Link from "next/link";
import type { Sport } from "@/lib/sports";

export function SportHub({
  eyebrow,
  title,
  tagline,
  intro,
  sports,
}: {
  eyebrow?: string;
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
          {eyebrow && (
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-carolina">
              {eyebrow}
            </p>
          )}
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
            <div
              key={sport.slug}
              className="group flex flex-col items-center rounded-2xl border border-black/10 bg-paper p-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-carolina hover:shadow-lg"
            >
              <Link href={sport.href} className="flex flex-col items-center">
                <h2 className="text-2xl font-bold">{sport.name}</h2>
                <p className="mt-2 text-ink/70">{sport.tagline}</p>
              </Link>

              {sport.category === "recreation" &&
                sport.schedule.some((row) => row.detail) && (
                <dl className="mt-6 w-full space-y-2 border-t border-black/10 pt-6 text-left text-sm">
                  {sport.schedule
                    .filter((row) => row.detail)
                    .map((row) => (
                      <div
                        key={row.label}
                        className="flex items-baseline justify-between gap-4"
                      >
                        <dt className="text-ink/60">{row.label}</dt>
                        <dd className="font-semibold text-ink">{row.detail}</dd>
                      </div>
                    ))}
                </dl>
              )}

              <Link
                href={sport.href}
                className="mt-6 inline-flex items-center gap-1 font-semibold text-pink group-hover:gap-2"
              >
                Explore {sport.name}
              </Link>
              {sport.slug === "flag-football" && (
                <a
                  href="https://three23sports.com/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-fit items-center justify-center rounded-full bg-pink px-5 py-2.5 font-semibold text-paper transition-colors hover:bg-pink-dark"
                >
                  Register Now
                </a>
              )}
              {sport.slug === "basketball" && (
                <p className="mt-6 text-lg font-semibold text-carolina-dark">
                  Registration Opens November 1st
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
