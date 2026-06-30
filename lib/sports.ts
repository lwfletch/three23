export type Sport = {
  slug: string;
  name: string;
  emoji: string;
  category: "recreation" | "travel";
  href: string;
  tagline: string;
  season: string;
  ages: string;
  intro: string;
  highlights: { title: string; body: string }[];
  schedule: { label: string; detail: string }[];
};

export const sports: Record<string, Sport> = {
  basketball: {
    slug: "basketball",
    name: "Basketball",
    emoji: "🏀",
    category: "recreation",
    href: "/recreation/basketball",
    tagline: "Faith, fundamentals, and a whole lot of hustle.",
    season: "Season runs November – February",
    ages: "Boys & girls, grades K–12",
    intro:
      "Three23 Basketball is where players grow their game and their faith at the same time. Every practice blends skill development with a short devotional, so athletes leave knowing how to play hard and live well. [Placeholder copy — replace with your program's story.]",
    highlights: [
      {
        title: "Skill Development",
        body: "Position-specific coaching for ball handling, shooting, and defense at every level. [Placeholder]",
      },
      {
        title: "Team Devotions",
        body: "Each session opens or closes with a short, age-appropriate devotional tied to that week's theme. [Placeholder]",
      },
      {
        title: "Game Days",
        body: "Weekend league games where players put it all together in a positive, encouraging environment. [Placeholder]",
      },
    ],
    schedule: [
      { label: "Registration opens", detail: "October 1 [Placeholder]" },
      { label: "Practices", detail: "Tuesday & Thursday evenings [Placeholder]" },
      { label: "Games", detail: "Saturday mornings [Placeholder]" },
    ],
  },
  "flag-football": {
    slug: "flag-football",
    name: "Flag Football",
    emoji: "🏈",
    category: "recreation",
    href: "/recreation/flag-football",
    tagline: "Fast-paced, no-contact fun for every athlete.",
    season: "Season runs September – November",
    ages: "Boys & girls, grades K–8",
    intro:
      "Three23 Flag Football delivers all the excitement of the game in a safe, no-contact format. Players learn routes, defense, and teamwork while growing in character and faith. [Placeholder copy — replace with your program's story.]",
    highlights: [
      {
        title: "Skill Development",
        body: "Throwing, catching, route-running, and flag-pulling taught for every skill level. [Placeholder]",
      },
      {
        title: "Team Devotions",
        body: "Each session includes a short, age-appropriate devotional tied to that week's theme. [Placeholder]",
      },
      {
        title: "Game Days",
        body: "Weekend league games in a positive, encouraging environment. [Placeholder]",
      },
    ],
    schedule: [
      { label: "Registration opens", detail: "August 1 [Placeholder]" },
      { label: "Practices", detail: "Tuesday & Thursday evenings [Placeholder]" },
      { label: "Games", detail: "Saturday mornings [Placeholder]" },
    ],
  },
  baseball: {
    slug: "baseball",
    name: "Baseball",
    emoji: "⚾",
    category: "travel",
    href: "/travel/baseball",
    tagline: "Building character one at-bat at a time.",
    season: "Season runs March – June",
    ages: "Boys & girls, ages 5–14",
    intro:
      "Three23 Baseball teaches the timeless fundamentals of the game while pointing players toward a deeper purpose. From tee-ball to the big diamond, we coach with patience, encouragement, and a Christ-centered example. [Placeholder copy — replace with your program's story.]",
    highlights: [
      {
        title: "Fundamentals First",
        body: "Hitting, fielding, and base running taught in a way that meets each player where they are. [Placeholder]",
      },
      {
        title: "Character on the Field",
        body: "We emphasize sportsmanship, teamwork, and integrity in every inning. [Placeholder]",
      },
      {
        title: "Family Atmosphere",
        body: "A welcoming community for the whole family, on and off the field. [Placeholder]",
      },
    ],
    schedule: [
      { label: "Registration opens", detail: "January 15 [Placeholder]" },
      { label: "Practices", detail: "Monday & Wednesday evenings [Placeholder]" },
      { label: "Games", detail: "Saturday afternoons [Placeholder]" },
    ],
  },
  volleyball: {
    slug: "volleyball",
    name: "Volleyball",
    emoji: "🏐",
    category: "travel",
    href: "/travel/volleyball",
    tagline: "Serving others, on the court and beyond.",
    season: "Season runs August – October",
    ages: "Girls & boys, grades 4–12",
    intro:
      "Three23 Volleyball helps players develop their skills, confidence, and faith in a supportive team setting. We focus on the fundamentals of the game and the foundations of a life well lived. [Placeholder copy — replace with your program's story.]",
    highlights: [
      {
        title: "Skill Clinics",
        body: "Passing, setting, hitting, and serving taught by encouraging coaches. [Placeholder]",
      },
      {
        title: "Teamwork & Faith",
        body: "Devotions and team-building woven into every practice. [Placeholder]",
      },
      {
        title: "Competitive Play",
        body: "League matches that challenge players to grow while keeping it fun. [Placeholder]",
      },
    ],
    schedule: [
      { label: "Registration opens", detail: "July 1 [Placeholder]" },
      { label: "Practices", detail: "Tuesday & Thursday evenings [Placeholder]" },
      { label: "Matches", detail: "Saturday mornings [Placeholder]" },
    ],
  },
};

export const sportList = Object.values(sports);
export const recreationSports = sportList.filter(
  (s) => s.category === "recreation",
);
export const travelSports = sportList.filter((s) => s.category === "travel");
