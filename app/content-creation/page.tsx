import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Content Creation",
  description:
    "Content creation at Three23 — telling stories of faith and sport through video, photo, and media.",
};

export default function ContentCreationPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-carolina">
            Three23 Media
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Content Creation
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-paper/80">
            [Placeholder — describe how Three23 tells stories of faith and sport
            through video, photo, and media.]
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
