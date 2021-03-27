import { useState } from 'react';
import { isMobile } from 'react-device-detect';
import Link from 'next/link';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import SidebarOverlay from '../components/SidebarOverlay';

export const getStaticProps = () => ({
  props: {
    title: 'Page Not Found',
    id: 'not-found',
    description: 'Page Not Found',
  },
});

export default function FourOhFour(page) {
  const [sidebar, toggleSidebar] = useState(isMobile ? { 'data-sidebar-hidden': 'hidden' } : {});
  return (
    <div>
      <Header {...page} />
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
        <Sidebar {...page} />
        <div className="content-wrapper">
          <div className="container-fluid">
            <div className="row row-eq-spacing-lg">
              <div className="col-lg-9">
                <div className="content">
                  <h1 className="content-title">Page Not Found</h1>
                </div>
                <div className="card">
                  <h2 className="card-title">Seems like you&apos;re a bit lost!</h2>
                  <Link prefetch={false} href="/">
                    <a href="/">
                      <button
                        className="btn btn-primary btn-sm"
                        type="button"
                      >
                        Go Home
                      </button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
