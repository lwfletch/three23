import type { Metadata } from "next";
import { SportHub } from "@/app/components/SportHub";
import { travelSports } from "@/lib/sports";

export const metadata: Metadata = {
  title: "Travel Sports",
  description:
    "Three23 travel sports — competitive baseball and volleyball teams built on character, competition, and the Great Commission.",
};

export default function TravelPage() {
  return (
    <SportHub
      eyebrow="Three23 Travel"
      title="Travel Sports"
      tagline="Competitive teams that develop athletes in skill, character, and faith."
      intro="Three23 Travel Sports gives athletes the chance to compete at a higher level without leaving their faith on the sideline. Our travel teams pursue excellence on the field and discipleship off it. Pick a sport below to learn more."
      sports={travelSports}
    />
  );
}
