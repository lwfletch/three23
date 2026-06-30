import type { Metadata } from "next";
import { SportPage } from "@/app/components/SportPage";
import { sports } from "@/lib/sports";

export const metadata: Metadata = {
  title: "Flag Football",
  description: sports["flag-football"].tagline,
};

export default function FlagFootballPage() {
  return <SportPage sport={sports["flag-football"]} />;
}
