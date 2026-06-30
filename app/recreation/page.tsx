import type { Metadata } from "next";
import { SportHub } from "@/app/components/SportHub";
import { recreationSports } from "@/lib/sports";

export const metadata: Metadata = {
  title: "Recreation",
  description:
    "Three23 recreation sports — basketball and flag football leagues blending skill, character, and faith.",
};

export default function RecreationPage() {
  return (
    <SportHub
      eyebrow="Three23 Recreation"
      title="Recreation Sports"
      tagline="Faith, fundamentals, and a whole lot of fun for the whole family."
      intro="Three23 Recreation Sports brings kids and families together to grow their game and their faith at the same time. Every practice blends skill development with a short devotional, so athletes leave knowing how to play hard and live well. Pick a sport below to learn more and sign up. [Placeholder copy — replace with your program's story.]"
      sports={recreationSports}
    />
  );
}
