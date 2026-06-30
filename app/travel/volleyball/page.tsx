import type { Metadata } from "next";
import { SportPage } from "@/app/components/SportPage";
import { sports } from "@/lib/sports";

export const metadata: Metadata = {
  title: "Volleyball",
  description: sports.volleyball.tagline,
};

export default function VolleyballPage() {
  return <SportPage sport={sports.volleyball} />;
}
