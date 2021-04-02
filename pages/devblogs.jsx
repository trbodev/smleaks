/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { isMobile } from 'react-device-detect';
import moment from 'moment';
import Link from 'next/link';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import SidebarOverlay from '../components/SidebarOverlay';
import devblogs from '../other/devblog_descriptions';

export const getStaticProps = () => ({
  props: {
    title: 'Devblogs',
    id: 'devblogs',
    description: 'All the Scrap Mechanic devblogs in one convenient place!',
  },
});

export default function Devblogs(page) {
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
                  <h1 className="content-title">Devblogs</h1>
                </div>
                <div className="card">
                  <ul>
                    {
                  Object.keys(devblogs)
                    .map((e) => e.replace('devblog', ''))
                    .sort((a, b) => b - a)
                    .map((devblogId) => {
                      const devblog = devblogs[`devblog${devblogId}`];
                      return (
                        <li id={`devblog-${devblogId}`} key={`devblog-${devblogId}`}>
                          <Link prefetch={false} href={`/devblog/${devblogId}`}>
                            <a id={`devblog-${devblogId}`}>
                              Devblog
                              {' '}
                              {devblogId}
                            </a>
                          </Link>
                          <small>
                            {' '}
                            -
                            {' '}
                            { devblog.date_manual || moment(devblog.date,
                              'MM/DD/YYYY').format('MMMM Do, YYYY') }
                          </small>
                          <br />
                          <small>
                            -
                            {' '}
                            {devblog.description}
                          </small>
                        </li>
                      );
                    })
                  }
                  </ul>
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
