import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The project lives in ~/Documents, which iCloud "Desktop & Documents" sync
  // scans continuously. iCloud races the dev server's rapid writes into the
  // build dir, evicting/moving files mid-build (ENOENT, missing manifests,
  // "Cannot find module ...chunk"). Anything ending in ".nosync" is ignored by
  // iCloud, so we build there locally. On Vercel (no iCloud) use the default
  // ".next", which Vercel's Next.js builder requires.
  distDir: process.env.VERCEL ? ".next" : ".next.nosync",
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
