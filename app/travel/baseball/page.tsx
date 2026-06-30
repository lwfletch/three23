import type { Metadata } from "next";
import { SportPage } from "@/app/components/SportPage";
import { sports } from "@/lib/sports";

export const metadata: Metadata = {
  title: "Baseball",
  description: sports.baseball.tagline,
};

export default function BaseballPage() {
  return <SportPage sport={sports.baseball} />;
}
