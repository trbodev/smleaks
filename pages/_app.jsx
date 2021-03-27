import 'halfmoon/css/halfmoon.min.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'react-lazy-load-image-component/src/effects/blur.css';

config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
