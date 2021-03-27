import 'halfmoon/css/halfmoon.min.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import ProgressBar from '@badrap/bar-of-progress';
import Router from 'next/router';

config.autoAddCss = false;

const progress = new ProgressBar({
  size: 4,
  color: '#3e4247',
  className: 'bar-of-progress',
  delay: 100,
});

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
