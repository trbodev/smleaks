/**
 * @type {import('next/dist/next-server/server/config-shared').NextConfig}
 */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['i.imgur.com', 'cdn.discordapp.com'],
  },
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
        source: '/github',
        destination: 'https://github.com/trbodev/smleaks',
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
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: 'upgrade-insecure-requests',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains;  preload',
          },
          {
            key: 'X-Xss-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Permissions-Policy',
            value: 'interest-cohort=()',
          },
        ],
      },
    ];
  },
};
