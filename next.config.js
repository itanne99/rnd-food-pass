/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  basePath: '/rnd-food-pass',
  assetPrefix: '/rnd-food-pass'
}

module.exports = nextConfig
