/* eslint-disable react/no-danger */
/* eslint-disable import/no-unresolved */
import Head from 'next/head';
import config from '../other/config';
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
      {image?.enabled ? (
        <meta
          property="og:image"
          content={image?.src || generateURL('http', config.domain.name, config.domain.secure, Logo.src)}
        />
      ) : <link />}
      {image?.enabled ? (
        <meta
          property="twitter:image"
          content={image?.src || generateURL('http', config.domain.name, config.domain.secure, Logo.src)}
        />
      ) : <link />}
      {image?.enabled && image?.large ? <meta name="twitter:card" content="summary_large_image" /> : <link /> }

      {/* Embed/Navbar Color */}
      <meta name="theme-color" content="#E67E22" />
      <meta name="msapplication-navbutton-color" content="#E67E22" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#E67E22" />

      {/* Analytics/CDN (FLAGS) */}
      {config.cdn.arc.enabled ? (
        <script
          async
          src={`https://arc.io/widget.min.js#${config.cdn.arc.id}`}
        />
      ) : <link />}
      {config.analytics.cloudflare.enabled
        ? (
          <script
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={`{"token": "${config.analytics.cloudflare.token}", "spa": true}`}
            async
          />
        ) : <link />}
      {config.analytics.umami.enabled
        ? (
          <script
            async
            data-website-id={config.analytics.umami.id}
            src={generateURL(
              'http',
              config.analytics.umami.domain.name,
              config.analytics.umami.domain.secure,
              '/umami.js',
            )}
          />
        ) : <link />}
    </Head>
  );
}
