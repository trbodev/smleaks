/* eslint-disable react/jsx-props-no-spreading */

// style imports
import 'halfmoon/css/halfmoon.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';

// next imports
import Router from 'next/router';
import type { AppProps } from 'next/app';

// other module imports
import ProgressBar from '@badrap/bar-of-progress';

// component imports
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import SidebarOverlay from '../components/SidebarOverlay';

const progress = new ProgressBar({
  size: 4,
  color: '#3e4247',
  className: 'bar-of-progress',
  delay: 100,
});

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header {...pageProps} />
      <div
        id="page-wrapper"
        className="dark-mode page-wrapper with-transitions with-navbar with-sidebar with-navbar-fixed-bottom with-custom-webkit-scrollbars with-custom-css-scrollbars"
        data-sidebar-type="overlayed-sm-and-down"
      >
        <Navbar />
        <SidebarOverlay />
        <Sidebar {...pageProps} />
        <div className="content-wrapper">
          <div className="container-fluid">
            <div className="row row-eq-spacing-lg">
              <div className="col-lg-9">
                <Component {...pageProps} />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}