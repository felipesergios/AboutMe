/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/AboutMe',
  assetPrefix: '/AboutMe',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
