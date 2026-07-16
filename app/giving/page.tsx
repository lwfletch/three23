import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giving",
  description:
    "Support Three23 Sports Ministry — helping provide equipment, scholarships, and gospel-centered coaching for local athletes.",
};

export default function GivingPage() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-ink text-paper">
      <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-pink/20 blur-3xl" />
      <div className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-carolina/20 blur-3xl" />
      <div className="relative mx-auto max-w-3xl px-4 py-24 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-carolina">
          Giving
        </p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl">
          Giving
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-lg text-paper/80">
          Partner with Three23 and help provide equipment, scholarships, and
          gospel-centered coaching for local athletes. Every gift makes a
          difference.
        </p>
        <a
          href="https://three23-sports-511216.churchcenter.com/giving"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center justify-center rounded-full bg-pink px-8 py-3.5 text-lg font-semibold text-paper transition-colors hover:bg-pink-dark"
        >
          Give Now
        </a>
      </div>
    </section>
  );
}
