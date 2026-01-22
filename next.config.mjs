/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // static export

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },

  // Add this for GitHub Pages
  basePath: '/react-site',      // <-- your repo name
  assetPrefix: '/react-site/',  // <-- ensures CSS, JS, images use correct path
}

export default nextConfig;
