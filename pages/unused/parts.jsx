/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { useState } from 'react';
import { isMobile } from 'react-device-detect';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import SidebarOverlay from '../../components/SidebarOverlay';

export const getStaticProps = () => ({
  props: {
    title: 'Unused Parts',
    id: 'unused-parts',
  },
});

export default function UnusedParts(page) {
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
                  <h1 className="content-title">Unused Parts</h1>
                </div>
                <div className="card">
                  <a id="plastic-pumpkin" href="#" style={{ visibility: 'hidden' }} aria-hidden="true" />
                  <figure>
                    <a href="/images/other/pumpkin_front.png">
                      <LazyLoadImage
                        alt="plastic-pumpkin-front"
                        src={require('../../public/images/other/pumpkin_front.png?webp&width=300&url')}
                        placeholderSrc={require('../../public/images/other/pumpkin_front.png?webp&lqip')}
                        style={{ maxWidth: 300, width: '100%' }}
                      />
                    </a>
                    <a href="/images/other/pumpkin_back.png">
                      <LazyLoadImage
                        alt="plastic-pumpkin-back"
                        src={require('../../public/images/other/pumpkin_back.png?webp&width=300&url')}
                        placeholderSrc={require('../../public/images/other/pumpkin_back.png?webp&lqip')}
                        style={{ maxWidth: 300, width: '100%' }}
                      />
                    </a>
                    <figcaption>
                      Plastic Pumpkin
                      <br />
                      <small>
                        Found by Turbo Biscuit, Files from TechnologicNick#4045,
                        Rendered by ChargingTurnip#9832
                      </small>
                    </figcaption>
                  </figure>
                  <a id="piston2" href="#" style={{ visibility: 'hidden' }} aria-hidden="true" />
                  <figure>
                    <a href="/images/other/piston2.png">
                      <LazyLoadImage
                        alt="piston2"
                        src={require('../../public/images/other/piston2.png?webp&width=300&url')}
                        placeholderSrc={require('../../public/images/other/piston2.png?webp&lqip')}
                        style={{ maxWidth: 300, width: '100%' }}
                      />
                    </a>
                    <figcaption>
                      Piston 2
                      <br />
                      <small>
                        Found by Turbo Biscuit, Image by IvanCoHe
                      </small>
                    </figcaption>
                  </figure>
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
