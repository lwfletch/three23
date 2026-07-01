import type { Metadata } from "next";
import { Carousel } from "@/app/components/Carousel";
import { getSportPhotos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Basketball",
  description:
    "Three23 recreation basketball — photos, program information, and sign-ups.",
};

const campCards = [
  {
    title: "Little Ballers Camp",
    age: "Ages 5–8",
    body: "A high-energy introduction to the game. Players learn dribbling, passing, and shooting through fun games and drills.",
  },
  {
    title: "Skills & Drills Camp",
    age: "Ages 9–12",
    body: "Focused sessions on fundamentals, footwork, and basketball IQ to take young players to the next level.",
  },
  {
    title: "Summer All-Sports Camp",
    age: "Ages 6–14",
    body: "A week of basketball, games, and team-building wrapped around daily devotions and a whole lot of fun.",
  },
];

// Toggle to bring the Kids Camps section (and its hero link) back.
const SHOW_KIDS_CAMPS = false;

export default function BasketballPage() {
  const photos = getSportPhotos("basketball");

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <div className="absolute inset-0 bg-gradient-to-br from-carolina/25 via-ink to-ink" />
        <div className="relative mx-auto max-w-6xl px-4 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-carolina">
            Three23 Recreation
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl">
            Basketball
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-pink">
            Faith, fundamentals, and a whole lot of hustle.
          </p>
          {SHOW_KIDS_CAMPS && (
            <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold">
              <a
                href="#camps"
                className="rounded-full bg-paper/10 px-5 py-2.5 text-paper/90 transition-colors hover:bg-paper/20"
              >
                Kids Camps
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Photos */}
      {photos.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="mb-8 text-center text-3xl font-extrabold tracking-tight">
            Photos
          </h2>
          <Carousel images={photos} label="Basketball" />
        </section>
      )}

      {/* Information */}
      <section className="bg-carolina-light">
        <div className="mx-auto max-w-4xl px-4 py-16">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Information
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink/80">
            <p>
              Three23 recreation basketball brings kids and families together to
              grow their game and their faith at the same time. Every practice
              blends skill development with a short devotional, so athletes
              leave knowing how to play hard and live well.
            </p>
            <p>
              Our programs are open to boys and girls across a range of ages and
              skill levels, in a positive, encouraging environment built around
              character, competition, and the Great Commission.
            </p>
          </div>

          <dl className="mt-10 divide-y divide-black/10 overflow-hidden rounded-2xl border border-black/10 bg-paper">
            {[
              { label: "Season", detail: "November – February" },
              { label: "Ages", detail: "Boys & girls, grades K–12" },
              { label: "Practices", detail: "Tuesday & Thursday evenings" },
              { label: "Games", detail: "Saturday mornings" },
              { label: "Registration fee", detail: "$ TBD" },
            ].map((row) => (
              <div
                key={row.label}
                className="flex flex-col gap-1 px-6 py-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <dt className="font-semibold text-ink">{row.label}</dt>
                <dd className="text-ink/70">{row.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Kids camps */}
      {SHOW_KIDS_CAMPS && (
      <section id="camps" className="bg-carolina-light">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-center text-3xl font-extrabold tracking-tight">
            Kids Camps
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-ink/70">
            Seasonal and summer camps designed to grow skills, confidence, and
            faith — all while having a blast.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {campCards.map((camp) => (
              <div
                key={camp.title}
                className="rounded-2xl border border-black/5 bg-paper p-8 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-wide text-carolina">
                  {camp.age}
                </p>
                <h3 className="mt-2 text-xl font-bold text-carolina-dark">
                  {camp.title}
                </h3>
                <p className="mt-3 text-ink/70">{camp.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}
    </>
  );
}
