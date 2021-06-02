import 'halfmoon/css/halfmoon.min.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import ProgressBar from '@badrap/bar-of-progress';
import Router from 'next/router';

import { useState } from 'react';
import { isMobile } from 'react-device-detect';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import SidebarOverlay from '../components/SidebarOverlay';

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
  const [sidebar, toggleSidebar] = useState(isMobile ? { 'data-sidebar-hidden': 'hidden' } : {});
  return (
    <div>
      <Header {...pageProps} />
      <div
        id="page-wrapper"
        className="dark-mode page-wrapper with-transitions with-navbar with-sidebar with-navbar-fixed-bottom with-custom-webkit-scrollbars with-custom-css-scrollbars"
        data-sidebar-type="overlayed-sm-and-down"
        {...sidebar}
      >
        <Navbar {...{
          toggleSidebar, sidebar,
        }}
        />
        <SidebarOverlay {...{
          toggleSidebar, sidebar,
        }}
        />
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
