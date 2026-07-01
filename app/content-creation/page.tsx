import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Content Creation",
  description:
    "Content creation at Three23 — telling stories of faith and sport through video, photo, and media. Coming soon.",
};

export default function ContentCreationPage() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-ink text-paper">
      <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-pink/20 blur-3xl" />
      <div className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-carolina/20 blur-3xl" />
      <div className="relative mx-auto max-w-3xl px-4 py-24 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-carolina">
          Three23 Media
        </p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl">
          Content Creation
        </h1>
        <p className="mt-6 inline-block rounded-full border border-paper/20 bg-paper/5 px-5 py-2 text-sm font-bold uppercase tracking-[0.2em] text-paper/90">
          Coming Soon
        </p>
        <p className="mx-auto mt-8 max-w-xl text-lg text-paper/80">
          We&rsquo;re building something special — telling stories of faith and
          sport through video, photo, and media. Check back soon for how you can
          be part of it.
        </p>
      </div>
    </section>
  );
}
