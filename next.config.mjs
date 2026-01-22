/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // static export

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },

  // Correct settings for GitHub Pages
  basePath: '/zimgro',      // <-- your repo name
  assetPrefix: '/zimgro/',  // <-- ensures CSS, JS, images use correct path
}

export default nextConfig;
