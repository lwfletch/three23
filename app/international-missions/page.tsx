import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "International Missions",
  description:
    "International missions with Three23 — sharing the gospel and serving communities around the world through sport.",
};

export default function InternationalMissionsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-carolina">
            Three23 Missions
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            International Missions
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-paper/80">
            [Placeholder — describe Three23&rsquo;s international missions work
            and how sport opens doors to share the gospel.]
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-4xl px-4 py-20">
        <div className="space-y-4 text-lg leading-relaxed text-ink/80">
          <p>[Placeholder copy — replace with details about this program.]</p>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-20 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight">
          Want to get involved?
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
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
