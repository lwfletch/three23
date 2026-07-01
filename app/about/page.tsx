import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Three23 Sports Ministry — our mission, values, and the story behind the name.",
};

const ways = [
  {
    title: "Pray",
    body: "The foundation of this ministry is prayer. We know that unless God builds it, our efforts are in vain. Pray for our athletes, coaches, families, churches, and ministry leaders as we seek to honor Christ through sports.",
  },
  {
    title: "Give",
    body: "Your financial partnership helps make this vision a reality. Through faithful monthly support and strategic one-time gifts, you help us develop coaches, disciple athletes, create resources, launch teams, and expand gospel-centered sports ministry both locally and globally.",
  },
  {
    title: "Adopt",
    body: "We invite churches to partner with THREE23 Sports by adopting our Christ-centered model for recreation leagues, sports outreach, and athlete discipleship. Together, we can use sports as a powerful tool for evangelism and spiritual formation in our communities.",
  },
  {
    title: "Coach",
    body: "Great coaches shape more than athletes—they shape lives. Whether at the recreation, club, or travel level, we are seeking coaches who are committed to developing both athletic excellence and Christlike character.",
  },
  {
    title: "Provide",
    body: "As the ministry grows, we will need facilities, fields, gymnasiums, equipment, and strategic partnerships to expand our impact. Every resource entrusted to this ministry becomes a platform for discipleship and gospel influence.",
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
            the Lord.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-4xl px-4 py-20">
        <h2 className="text-3xl font-extrabold tracking-tight">Our Story</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink/80">
          <p>
            As youth sports became increasingly polarized between
            burnout-driven travel ball and underdeveloped recreational leagues,
            a vision emerged for a different approach. We observed that many
            travel ball programs demanded an intense level of competition and
            commitment, leaving athletes and families exhausted, while many
            church leagues provided community and fun but lacked the competitive
            environment and skill development that athletes desired. We believed
            there was a better way.
          </p>
          <p>
            THREE23 Sports was born out of a conviction that young athletes
            should not have to choose between competitive excellence, healthy
            balance, and spiritual growth. Inspired by Colossians 3:23, we
            created a Christ-centered model that bridges the gap between travel
            ball and church league sports. Our goal is to provide an environment
            where athletes can enjoy the game, develop their skills, compete at
            a high level, and grow in Christlike character.
          </p>
          <p>
            More than a sports program, THREE23 Sports is a discipleship
            ministry that uses athletics as a platform to shape hearts,
            strengthen families, and advance the gospel. We are committed to
            raising up young athletes who honor God through character,
            competition, and commission&mdash;learning not only how to play the
            game well, but how to follow Jesus faithfully in every area of life.
          </p>
        </div>
      </section>

      {/* Join the Movement */}
      <section className="bg-carolina-light">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h2 className="text-center text-3xl font-extrabold tracking-tight">
            Join the Movement
          </h2>
          <div className="mx-auto mt-6 max-w-3xl space-y-4 text-center text-lg leading-relaxed text-ink/80">
            <p>
              THREE23 Sports is bigger than a league, a team, or a tournament.
              It is a movement to use the influence of sports to develop
              Christlike athletes, strengthen families, equip coaches, and
              advance the gospel.
            </p>
            <p>
              We believe God is calling people from every background to join
              this mission.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {ways.map((way, index) => (
              <div
                key={way.title}
                className={`rounded-2xl border border-black/5 bg-paper p-8 shadow-sm ${
                  index === ways.length - 1
                    ? "sm:col-span-2 sm:mx-auto sm:w-1/2"
                    : ""
                }`}
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
    </>
  );
}
