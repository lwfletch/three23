import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The project lives in ~/Documents, which iCloud "Desktop & Documents" sync
  // scans continuously. iCloud races the dev server's rapid writes into the
  // build dir, evicting/moving files mid-build (ENOENT, missing manifests,
  // "Cannot find module ...chunk"). Anything ending in ".nosync" is ignored by
  // iCloud, so writing build output there keeps it off iCloud's radar.
  distDir: ".next.nosync",
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
