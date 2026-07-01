import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giving",
  description:
    "Support Three23 Sports Ministry. Your gift helps provide equipment, scholarships, and gospel-centered coaching for local athletes.",
};

const tiers = [
  {
    amount: "$25",
    title: "Equip a Player",
    body: "Helps provide a jersey and gear for one athlete.",
  },
  {
    amount: "$100",
    title: "Sponsor a Season",
    body: "Covers registration for a child who couldn't otherwise play.",
    featured: true,
  },
  {
    amount: "$500",
    title: "Back a Team",
    body: "Supports equipment, facilities, and coaching for an entire team.",
  },
];

const ways = [
  {
    title: "Give Online",
    body: "Make a secure one-time or recurring gift.",
  },
  {
    title: "Give by Check",
    body: "Mail checks payable to Three23 Sports Ministry, PO Box 000, Your City, State.",
  },
  {
    title: "Volunteer",
    body: "Give your time as a coach, mentor, or event helper. Email volunteer@three23.org.",
  },
];

export default function GivingPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-pink/20 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-4 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-carolina">
            Giving
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Your gift keeps kids in the game.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-paper/80">
            Three23 runs on the generosity of people who believe in building
            athletes in body, character, and faith. Every dollar goes toward
            equipment, scholarships, and gospel-centered coaching.
          </p>
        </div>
      </section>

      {/* Tiers */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-center text-3xl font-extrabold tracking-tight">
          Ways Your Gift Helps
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.amount}
              className={`rounded-2xl border p-8 shadow-sm ${
                tier.featured
                  ? "border-pink bg-pink/5 ring-2 ring-pink"
                  : "border-black/10 bg-paper"
              }`}
            >
              <div className="text-4xl font-extrabold text-carolina-dark">
                {tier.amount}
              </div>
              <h3 className="mt-3 text-xl font-bold">{tier.title}</h3>
              <p className="mt-2 text-ink/70">{tier.body}</p>
              <button
                type="button"
                className={`mt-6 w-full rounded-full px-5 py-3 font-semibold text-paper transition-colors ${
                  tier.featured
                    ? "bg-pink hover:bg-pink-dark"
                    : "bg-carolina hover:bg-carolina-dark"
                }`}
              >
                Give {tier.amount}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Other ways */}
      <section className="bg-carolina-light">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h2 className="text-center text-3xl font-extrabold tracking-tight">
            More Ways to Give
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {ways.map((way) => (
              <div
                key={way.title}
                className="rounded-2xl border border-black/5 bg-paper p-8 shadow-sm"
              >
                <h3 className="text-xl font-bold text-carolina-dark">
                  {way.title}
                </h3>
                <p className="mt-3 text-ink/70">{way.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verse */}
      <section className="mx-auto max-w-4xl px-4 py-16 text-center">
        <p className="text-xl font-semibold text-ink sm:text-2xl">
          &ldquo;Each of you should give what you have decided in your heart to
          give... for God loves a cheerful giver.&rdquo;
        </p>
        <p className="mt-3 font-bold uppercase tracking-wide text-carolina-dark">
          2 Corinthians 9:7
        </p>
      </section>
    </>
  );
}
