import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Three23 Sports Ministry — our mission, values, and the story behind the name.",
};

const values = [
  {
    title: "Faith",
    body: "We point every athlete toward Jesus, weaving the gospel into the way we coach, compete, and care for one another. [Placeholder]",
  },
  {
    title: "Character",
    body: "Sports reveal and shape who we are. We develop integrity, humility, and perseverance that last well beyond the final whistle. [Placeholder]",
  },
  {
    title: "Community",
    body: "We build a welcoming family where players, parents, and coaches grow together. [Placeholder]",
  },
  {
    title: "Excellence",
    body: "We work at our craft with all our heart — coaching skill and effort as an act of worship. [Placeholder]",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-carolina">
            About Three23
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Built on a verse. Driven by a mission.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-paper/80">
            Three23 takes its name from Colossians 3:23 — a reminder that
            everything we do, on and off the field, is done wholeheartedly for
            the Lord. [Placeholder — replace with your ministry&rsquo;s story.]
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-4xl px-4 py-20">
        <h2 className="text-3xl font-extrabold tracking-tight">Our Mission</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink/80">
          <p>
            Three23 exists to use the platform of sports to share the love of
            Christ with kids and families in our community. Through basketball,
            baseball, and volleyball, we help young athletes grow in their
            skills, their character, and their faith. [Placeholder]
          </p>
          <p>
            Every coach is a mentor, every practice is a chance to invest, and
            every game is an opportunity to model what it looks like to compete
            with joy and integrity. [Placeholder]
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-carolina-light">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h2 className="text-center text-3xl font-extrabold tracking-tight">
            What We Value
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-black/5 bg-paper p-8 shadow-sm"
              >
                <h3 className="text-xl font-bold text-carolina-dark">
                  {value.title}
                </h3>
                <p className="mt-3 text-ink/70">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-20 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight">
          Want to be part of the team?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-ink/70">
          Sign your athlete up, volunteer as a coach, or help us keep the
          ministry going.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/recreation"
            className="rounded-full bg-carolina px-6 py-3 font-semibold text-paper transition-colors hover:bg-carolina-dark"
          >
            See Our Sports
          </Link>
          <Link
            href="/giving"
            className="rounded-full bg-pink px-6 py-3 font-semibold text-paper transition-colors hover:bg-pink-dark"
          >
            Give Today
          </Link>
        </div>
      </section>
    </>
  );
}
