/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/AboutMe',
  assetPrefix: '/AboutMe/',
};

module.exports = nextConfig;
