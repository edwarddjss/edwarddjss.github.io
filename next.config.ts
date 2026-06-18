import type { NextConfig } from 'next';

// Static export so the whole site is plain HTML/CSS/JS that GitHub Pages can serve.
// Served from a custom apex/root domain, so no basePath/assetPrefix is needed.
const nextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,
  // Pin the workspace root; a stray lockfile in $HOME otherwise confuses inference.
  turbopack: {
    root: process.cwd(),
  },
  images: {
    // GitHub Pages has no image-optimization server; ship the originals.
    unoptimized: true,
  },
};

export default nextConfig;
