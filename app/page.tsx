import Link from "next/link";
import { sportList } from "@/lib/sports";

const convictions = [
  {
    word: "Character",
    body: "Who an athlete becomes is more important than any trophy they win.",
  },
  {
    word: "Competition",
    body: "Excellence is an act of worship when pursued for God's glory.",
  },
  {
    word: "Commission",
    body: "Every practice, game, and tournament is an opportunity to represent Christ and share the gospel.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Flag football registration banner */}
      <a
        href="https://three23sports.com/home"
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-pink text-center text-paper transition-colors hover:bg-pink-dark"
      >
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-2 gap-y-1 px-4 py-3 text-sm font-semibold sm:text-base">
          <span>🏈 Flag Football registration is open through August 6th!</span>
          <span className="font-bold underline underline-offset-2">
            Register now →
          </span>
        </div>
      </a>

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <div className="absolute inset-0 bg-gradient-to-br from-carolina/30 via-ink to-ink" />
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-pink/20 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-carolina">
            Sports Ministry
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            Play hard. Live well.{" "}
            <span className="text-pink">Glorify God.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-paper/80">
            Three23 brings kids and families together through sports — developing athletes in body, character,
            and faith.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/about"
              className="rounded-full bg-carolina px-6 py-3 font-semibold text-paper transition-colors hover:bg-carolina-dark"
            >
              Learn About Us
            </Link>
            <Link
              href="/giving"
              className="rounded-full bg-pink px-6 py-3 font-semibold text-paper transition-colors hover:bg-pink-dark"
            >
              Support the Ministry
            </Link>
          </div>
        </div>
      </section>

      {/* Why Three23 */}
      <section className="mx-auto max-w-5xl px-4 pb-20 pt-10">
        <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
          Why THREE23 Sports?
        </h2>

        <div className="mx-auto mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-ink/80">
          <p>
            Today&rsquo;s families are often forced to choose between two
            extremes in youth sports. Competitive travel ball can demand so much
            time and pressure that athletes and families experience burnout.
            Recreational and church leagues often provide community and fun but
            lack the competition and development many athletes desire.
          </p>
          <p className="text-xl font-bold text-carolina-dark">
            We believe there is a better way.
          </p>
          <p>
            THREE23 Sports was created to bridge the gap between competitive
            athletics and Christ-centered discipleship. We believe young athletes
            can pursue excellence without losing their joy, develop their skills
            without sacrificing their faith, and compete at a high level while
            growing in Christlike character.
          </p>
        </div>

        <p className="mt-14 text-center text-lg font-semibold text-ink">
          Our ministry is built on three core convictions:
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {convictions.map((item) => (
            <div
              key={item.word}
              className="rounded-2xl border border-black/10 bg-carolina-light p-8 text-center shadow-sm"
            >
              <h3 className="text-2xl font-extrabold text-carolina-dark">
                {item.word}
              </h3>
              <p className="mt-3 text-ink/75">{item.body}</p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-14 max-w-3xl text-center text-lg leading-relaxed text-ink/80">
          THREE23 Sports exists because we believe athletes shouldn&rsquo;t have
          to choose between athletic development and spiritual growth.{" "}
          <span className="font-bold text-pink">They can have both.</span>
        </p>
      </section>

      {/* Sports */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Our Sports
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-ink/70">
            Recreation and travel programs, one mission. Find the program that
            fits your athlete.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {sportList.map((sport) => (
            <Link
              key={sport.slug}
              href={sport.href}
              className="group rounded-2xl border border-black/10 bg-paper p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-carolina hover:shadow-lg"
            >
              <div className="text-5xl">{sport.emoji}</div>
              <h3 className="mt-4 text-2xl font-bold">{sport.name}</h3>
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

      {/* CTA */}
      <section className="bg-ink text-paper">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-16 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Ready to get in the game?
            </h2>
            <p className="mt-2 max-w-xl text-paper/70">
              Whether you want to play, volunteer, or give, there&rsquo;s a place
              for you at Three23.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
