/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  basePath: "/zimgro",
  assetPrefix: "/zimgro/",

  images: {
    unoptimized: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
