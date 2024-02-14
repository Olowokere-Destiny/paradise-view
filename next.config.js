/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.bstatic.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
