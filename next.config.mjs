/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/zimgro",
  assetPrefix: "/zimgro/",  // <-- important trailing slash
  images: { unoptimized: true },
  trailingSlash: true
};

export default nextConfig;
