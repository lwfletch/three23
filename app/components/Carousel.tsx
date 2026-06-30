"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export function Carousel({
  images,
  label,
}: {
  images: string[];
  label: string;
}) {
  const [index, setIndex] = useState(0);
  const count = images.length;

  const go = useCallback(
    (n: number) => setIndex((n % count + count) % count),
    [count],
  );

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + count) % count);
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % count);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [count]);

  if (count === 0) return null;

  return (
    <div className="mx-auto max-w-4xl">
      <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-ink shadow-lg sm:aspect-[16/9]">
        <Image
          key={images[index]}
          src={images[index]}
          alt={`${label} photo ${index + 1} of ${count}`}
          fill
          sizes="(max-width: 768px) 100vw, 896px"
          priority={index === 0}
          className="object-contain animate-[fadein_400ms_ease]"
        />

        {count > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous photo"
              onClick={() => go(index - 1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-paper/85 text-ink shadow transition hover:bg-paper focus:opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="m15 18-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next photo"
              onClick={() => go(index + 1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-paper/85 text-ink shadow transition hover:bg-paper focus:opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="absolute bottom-3 right-3 rounded-full bg-ink/70 px-3 py-1 text-xs font-semibold text-paper">
              {index + 1} / {count}
            </div>
          </>
        )}
      </div>

      {count > 1 && count <= 12 && (
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              aria-label={`Go to photo ${i + 1}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition-all ${
                i === index ? "w-6 bg-carolina" : "w-2.5 bg-ink/20 hover:bg-ink/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
