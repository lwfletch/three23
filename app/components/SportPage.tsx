import type { Sport } from "@/lib/sports";
import { Carousel } from "./Carousel";
import { getSportPhotos } from "@/lib/photos";

export function SportPage({ sport }: { sport: Sport }) {
  const photos = getSportPhotos(sport.slug);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <div className="absolute inset-0 bg-gradient-to-br from-carolina/25 via-ink to-ink" />
        <div className="relative mx-auto max-w-6xl px-4 py-20">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            {sport.name}
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-pink">{sport.tagline}</p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
            <span className="rounded-full bg-carolina/20 px-4 py-2 text-carolina">
              {sport.season}
            </span>
            <span className="rounded-full bg-paper/10 px-4 py-2 text-paper/80">
              {sport.ages}
            </span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-4 py-16">
        <h2 className="text-3xl font-extrabold tracking-tight">
          About the Program
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-ink/80">
          {sport.intro}
        </p>
      </section>

      {/* Gallery */}
      {photos.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 pb-16">
          <h2 className="mb-8 text-center text-3xl font-extrabold tracking-tight">
            {sport.name} in Action
          </h2>
          <Carousel images={photos} label={sport.name} />
        </section>
      )}

      {/* Highlights */}
      <section className="bg-carolina-light">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-center text-3xl font-extrabold tracking-tight">
            What to Expect
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {sport.highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-black/5 bg-paper p-8 shadow-sm"
              >
                <h3 className="text-xl font-bold text-carolina-dark">
                  {item.title}
                </h3>
                <p className="mt-3 text-ink/70">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="mx-auto max-w-4xl px-4 py-16">
        <h2 className="text-3xl font-extrabold tracking-tight">
          Season &amp; Schedule
        </h2>
        <dl className="mt-8 divide-y divide-black/10 overflow-hidden rounded-2xl border border-black/10">
          {sport.schedule.map((row) => (
            <div
              key={row.label}
              className="flex flex-col gap-1 px-6 py-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <dt className="font-semibold text-ink">{row.label}</dt>
              <dd className="text-ink/70">
                {row.href ? (
                  <a
                    href={row.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-pink underline underline-offset-2 hover:text-pink-dark"
                  >
                    Register Now
                  </a>
                ) : (
                  row.detail
                )}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* CTA */}
      <section className="bg-ink text-paper">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-16 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Join {sport.name} at Three23
            </h2>
            <p className="mt-2 max-w-xl text-paper/70">
              Registration details and contact info coming soon.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
