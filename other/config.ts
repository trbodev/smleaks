export default {
  domain: {
    name: process.env.NEXT_PUBLIC_DOMAIN || '127.0.0.1:3000',
    secure: process.env.NEXT_PUBLIC_DOMAIN_SECURE === 'true',
    development: process.env.NEXT_PUBLIC_DOMAIN_DEV === 'true',
  },
  live_viewers: {
    enabled: process.env.NEXT_PUBLIC_VIEWERS_ENABLED === 'true',
    domain: {
      name: process.env.NEXT_PUBLIC_VIEWERS_DOMAIN || '127.0.0.1:3001',
      secure: process.env.NEXT_PUBLIC_VIEWERS_DOMAIN_SECURE === 'true',
    },
  },
  analytics: {
    umami: {
      enabled: process.env.NEXT_PUBLIC_UMAMI_ANALYTICS_ENABLED === 'true',
      id: process.env.NEXT_PUBLIC_UMAMI_ANALYTICS_ID,
      domain: {
        name: process.env.NEXT_PUBLIC_UMAMI_ANALYTICS_DOMAIN,
        secure: process.env.NEXT_PUBLIC_UMAMI_ANALYTICS_DOMAIN_SECURE === 'true',
      },
    },
    cloudflare: {
      enabled: process.env.NEXT_PUBLIC_CLOUDFLARE_WEB_ANALYTICS_ENABLED === 'true',
      token: process.env.NEXT_PUBLIC_CLOUDFLARE_WEB_ANALYTICS_TOKEN,
    },
  },
  cdn: {
    arc: {
      enabled: process.env.NEXT_PUBLIC_ARC_IO_ENABLED === 'true',
      id: process.env.NEXT_PUBLIC_ARC_IO_ID,
    },
  },
};
