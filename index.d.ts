/// <reference types="node" />
/// <reference types="react" />

// eslint-disable-next-line no-unused-vars
declare namespace NodeJS {
  // eslint-disable-next-line no-unused-vars
  interface ProcessEnv {
    readonly NEXT_PUBLIC_DOMAIN: string;
    readonly NEXT_PUBLIC_DOMAIN_SECURE: string | 'true' | 'false';
    readonly NEXT_PUBLIC_DOMAIN_DEV: string | 'true' | 'false';

    readonly NEXT_PUBLIC_VIEWERS_ENABLED: string | 'true' | 'false';
    readonly NEXT_PUBLIC_VIEWERS_DOMAIN: string;
    readonly NEXT_PUBLIC_VIEWERS_DOMAIN_SECURE: string;

    readonly NEXT_PUBLIC_UMAMI_ANALYTICS_ENABLED: string | 'true' | 'false';
    readonly NEXT_PUBLIC_UMAMI_ANALYTICS_ID: string;
    readonly NEXT_PUBLIC_UMAMI_ANALYTICS_DOMAIN: string;
    readonly NEXT_PUBLIC_UMAMI_ANALYTICS_DOMAIN_SECURE:
      | string
      | 'true'
      | 'false';

    readonly NEXT_PUBLIC_CLOUDFLARE_WEB_ANALYTICS_ENABLED:
      | string
      | 'true'
      | 'false';
    readonly NEXT_PUBLIC_CLOUDFLARE_WEB_ANALYTICS_TOKEN: string;

    readonly NEXT_PUBLIC_ARC_IO_ENABLED: string | 'true' | 'false';
    readonly NEXT_PUBLIC_ARC_IO_ID: string;

    readonly NEXT_PUBLIC_COMMENTS_ENABLED: string | 'true' | 'false';
    readonly NEXT_PUBLIC_COMMENTS_REPO: string;
  }
}

declare module 'nextjs-websocket' {
  interface WebSocketProps {
    url: string;
    onMessage: Function;
    onClose: Function;
    reconnect: boolean | undefined;
    debug: boolean | undefined;
  }
  // eslint-disable-next-line no-unused-vars, no-undef
  function WebSocket(props: WebSocketProps): JSX.Element;
}

declare module 'utterances-react';
