import { useState } from 'react';
import { isMobile } from 'react-device-detect';
import Link from 'next/link';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import SidebarOverlay from '../components/SidebarOverlay';
import usernames from '../other/usernames';

export const getStaticProps = () => ({
  props: {
    title: 'Home',
    id: 'home',
  },
});

export default function Home(page) {
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
                  <h1 className="content-title">Home</h1>
                </div>
                <div className="card">
                  <h2 className="card-title">Welcome to SMLeaks!</h2>
                  <article>
                    The community run leaking website for
                    {' '}
                    <a href="https://store.steampowered.com/app/387990/">Scrap Mechanic</a>
                    .
                    <br />
                    This is currently being run and maintained by
                    {' '}
                    <a href="https://trbo.sh">{usernames.turbo}</a>
                    .
                    <br />
                    You can also check out our
                    {' '}
                    <Link href="/discord">
                      <a href="/discord">Discord</a>
                    </Link>
                    !
                    <br />
                  </article>
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
