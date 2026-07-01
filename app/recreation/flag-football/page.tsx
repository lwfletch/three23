import type { Metadata } from "next";
import { SportPage } from "@/app/components/SportPage";
import { sports } from "@/lib/sports";

export const metadata: Metadata = {
  title: "Flag Football",
  description: sports["flag-football"].tagline,
};

export default function FlagFootballPage() {
  return (
    <>
      {/* Flag football registration banner */}
      <a
        href="https://three23sports.com/home"
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-carolina text-center text-paper transition-colors hover:bg-carolina-dark"
      >
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-2 gap-y-1 px-4 py-3 text-sm font-semibold sm:text-base">
          <span>🏈 Flag Football registration is open through August 6th!</span>
          <span className="font-bold underline underline-offset-2">
            Register now →
          </span>
        </div>
      </a>

      <SportPage sport={sports["flag-football"]} />
    </>
  );
}
