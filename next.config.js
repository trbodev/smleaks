// next.config.js
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  [optimizedImages, {
    images: {
      handleImages: ['png', 'webp', 'jpeg'],
      outputPath: 'static/images/',
      publicPath: '/_next/static/images/',
    },
  }],
], {
  webpack: (config, {
    webpack,
  }) => {
    config.plugins.push(new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en/));
    return config;
  },
});
