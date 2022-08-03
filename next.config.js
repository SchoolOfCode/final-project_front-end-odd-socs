const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["m.media-amazon.com", "image.tmdb.org"],
  },

  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(ttf|woff|woff2|mp4|pdf|webm)$/,
      type: "asset",
      generator: {
        filename: "static/chunks/[path][name].[hash][ext]",
      },
    });
    return config;
  },
};

const withImages = require("next-images");
module.exports = withImages();

module.exports = nextConfig;
