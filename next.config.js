/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  output: "standalone",
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "openweathermap.org",
        port: "",
        pathname: "/img/wn/**",
      },
    ],
  },
};

module.exports = {
  ...nextConfig,
  env: {
    OPENWEATHERMAP_API_URL: "https://api.openweathermap.org",
    OPENWEATHERMAP_API_KEY: "539a92a71fbb1b6ee46f8afdfc95bb2e",
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};
