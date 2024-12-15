/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Tell Next.js to use the 'src' folder for pages
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  webpack(config) {
    config.resolve.modules.push(__dirname + '/src');
    return config;
  },
};

module.exports = nextConfig;
