/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '',
  images: {
    loader: 'akamai',
    path: '/',
  },
};

module.exports = nextConfig;
