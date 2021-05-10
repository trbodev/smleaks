// next.config.js
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withPreact = require('next-plugin-preact');
require('preact');

module.exports = withPlugins([
  [
    optimizedImages,
    {
      images: {
        handleImages: ['png', 'webp', 'jpeg'],
        outputPath: 'static/images/',
        publicPath: '/_next/static/images/',
      },
    },
  ],
  [
    withPreact,
    {
      experimental: {
        modern: true,
      },
    },
  ],
], {
  webpack: (config, {
    webpack,
  }) => {
    config.plugins.push(new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en/));
    return config;
  },
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.gg/AsPKp9r',
        permanent: true,
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/scrapbot_',
        permanent: true,
      },
      {
        source: '/blog',
        destination: 'https://blog.smleaks.com/',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/arc-sw.js',
        destination: 'https://arc.io/arc-sw.js',
      },
    ];
  },
});
