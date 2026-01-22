/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/zimgro",
  assetPrefix: "/zimgro/",
  images: { unoptimized: true },
  typescript: { ignoreBuildErrors: true },
  trailingSlash: true
};

export default nextConfig;
