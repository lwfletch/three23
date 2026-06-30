import fs from "fs";
import path from "path";

export function getSportPhotos(slug: string): string[] {
  const dir = path.join(process.cwd(), "public", "photos", slug);
  let files: string[] = [];
  try {
    files = fs.readdirSync(dir);
  } catch {
    return [];
  }
  return files
    .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
    .sort((a, b) => {
      const na = parseInt(a.match(/(\d+)/)?.[1] ?? "0", 10);
      const nb = parseInt(b.match(/(\d+)/)?.[1] ?? "0", 10);
      return na - nb;
    })
    .map((f) => `/photos/${slug}/${f}`);
}
