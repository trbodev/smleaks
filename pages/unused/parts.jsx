/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { useState } from 'react';
import { isMobile } from 'react-device-detect';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Link from 'next/link';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import SidebarOverlay from '../../components/SidebarOverlay';
import usernames from '../../other/usernames';

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
                        Found by
                        {' '}
                        {usernames.turbo}
                        , Files from
                        {' '}
                        {usernames.nick}
                        ,
                        Rendered by
                        {' '}
                        {usernames.charging}
                      </small>
                    </figcaption>
                  </figure>
                  <a id="piston2" href="#" style={{ visibility: 'hidden' }} aria-hidden="true" />
                  <figure>
                    <a href="/images/other/piston2.png">
                      <LazyLoadImage
                        alt="piston2"
                        src={require('../../public/images/other/piston2.png?webp&width=400&url')}
                        placeholderSrc={require('../../public/images/other/piston2.png?webp&lqip')}
                        style={{ maxWidth: 400, width: '100%' }}
                      />
                    </a>
                    <figcaption>
                      Piston 2
                      <br />
                      <small>
                        Found by
                        {' '}
                        {usernames.turbo}
                        , Image by
                        {' '}
                        {usernames.ivan}
                      </small>
                    </figcaption>
                  </figure>
                  <a id="car-parts" href="#" style={{ visibility: 'hidden' }} aria-hidden="true" />
                  <figure>
                    <a href="/images/other/car-parts.png">
                      <LazyLoadImage
                        alt="piston2"
                        src={require('../../public/images/other/car-parts.png?webp&width=500&url')}
                        placeholderSrc={require('../../public/images/other/car-parts.png?webp&lqip')}
                        style={{ maxWidth: 500, width: '100%' }}
                      />
                    </a>
                    <figcaption>
                      Survival Car Parts (From
                      {' '}
                      <Link href="/devblog/7#survival-cars">
                        <a href="/devblog/7#survival-cars">
                          Devblog 7
                        </a>
                      </Link>
                      )
                      <br />
                      <small>
                        Image by
                        {' '}
                        {usernames.bananaCat}
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
