/* eslint-disable react/no-danger */
/* eslint-disable import/no-unresolved */
import Head from 'next/head';
import Script from 'next/script';
import { flag } from '../helpers/env';
import { generateURL } from '../helpers/urls';
import Logo from '../public/images/logfiles/image.png';

export default function Header({
  title,
  description,
  image,
  type,
}: {
  title:string,
  description:string
  type: string | undefined
  image: {
    enabled: boolean,
    src: string,
    large: boolean
  } | undefined
}) {
  return (
    <Head>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta
        content="width=device-width, initial-scale=1.0"
        name="viewport"
      />

      {/* Icon & Title */}
      <title>{`SMLeaks ${title ? `| ${title}` : ''}`}</title>

      {/* SEO */}
      <meta name="keywords" content="Scrap Mechanic, Video Game Leaks" />
      <meta name="description" content={description || 'Community run leaking website for Scrap Mechanic'} />

      {/* OG Tags */}
      <meta property="og:type" content={type || 'website'} />
      <meta property="og:url" content="https://smleaks.com" />
      <meta property="og:title" content={`SMLeaks ${title ? `| ${title}` : ''}`} />
      <meta property="og:description" content={description || 'Community run leaking website for Scrap Mechanic'} />
      {
        image?.enabled === false
          ? (
            <>
              <meta
                property="og:image"
                content={
                image?.src
                || generateURL(
                  'http',
                  process.env.NEXT_PUBLIC_DOMAIN,
                  process.env.NEXT_PUBLIC_DOMAIN_SECURE === 'true',
                  Logo.src,
                )
              }
              />
              <meta
                property="twitter:image"
                content={
                image?.src
                || generateURL(
                  'http',
                  process.env.NEXT_PUBLIC_DOMAIN,
                  process.env.NEXT_PUBLIC_DOMAIN_SECURE === 'true',
                  Logo.src,
                )
              }
              />
              {
                image?.large ? <meta name="twitter:card" content="summary_large_image" /> : <></>
              }
            </>
          )
          : <></>
      }

      {/* Embed/Navbar Color */}
      <meta name="theme-color" content="#E67E22" />
      <meta name="msapplication-navbutton-color" content="#E67E22" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#E67E22" />

      {/* Analytics/CDN (FLAGS) */}
      {flag(
        'ARC_IO_ENABLED',
        <Script
          async
          src={`https://arc.io/widget.min.js#${process.env.NEXT_PUBLIC_ARC_IO_ID}`}
          strategy="lazyOnload"
        />,
      )}
      {flag(
        'CLOUDFLARE_WEB_ANALYTICS_ENABLED',
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon={`{"token": "${process.env.NEXT_PUBLIC_CLOUDFLARE_WEB_ANALYTICS_TOKEN}", "spa": true}`}
          strategy="lazyOnload"
        />,
      )}
      {flag(
        'UMAMI_ANALYTICS_ENABLED',
        <script
          async
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_ANALYTICS_ID}
          src={generateURL(
            'http',
            process.env.NEXT_PUBLIC_UMAMI_ANALYTICS_DOMAIN,
            process.env.NEXT_PUBLIC_UMAMI_ANALYTICS_DOMAIN_SECURE === 'true',
            '/umami.js',
          )}
        />,
      )}
    </Head>
  );
}
