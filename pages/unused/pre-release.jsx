/* eslint-disable jsx-a11y/iframe-has-title */
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
import usernames from '../../other/usernames';

export const getStaticProps = () => ({
  props: {
    title: 'Unused Survival Pre-Release',
    id: 'unused-pre-release',
  },
});

export default function UnusedTools(page) {
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
                  <h1 className="content-title">Unused Survival Pre-Release</h1>
                </div>
                <div className="card">
                  <a id="gas-pump" href="#" style={{ visibility: 'hidden' }} aria-hidden="true" />
                  <figure>
                    <a href="/images/pre-release/gas-pump.png">
                      <LazyLoadImage
                        alt="ship-tile"
                        src={require('../../public/images/pre-release/gas-pump.png?webp&width=500&url')}
                        placeholderSrc={require('../../public/images/pre-release/gas-pump.png?webp&lqip')}
                        style={{ maxWidth: 500, width: '100%' }}
                        effect="blur"
                      />
                    </a>
                    <br />
                    <figcaption>
                      Mechanic Station Gas Pump
                      <br />
                      <small>
                        Image by
                        {' '}
                        {usernames.redBoi}
                      </small>
                    </figcaption>
                  </figure>
                  <a id="mechanical" href="#" style={{ visibility: 'hidden' }} aria-hidden="true" />
                  <figure>
                    <a href="/images/pre-release/mechanical.png">
                      <LazyLoadImage
                        alt="ship-tile"
                        src={require('../../public/images/pre-release/mechanical.png?webp&width=500&url')}
                        placeholderSrc={require('../../public/images/pre-release/mechanical.png?webp&lqip')}
                        style={{ maxWidth: 500, width: '100%' }}
                        effect="blur"
                      />
                    </a>
                    <br />
                    <figcaption>
                      Mechanical Block
                      <br />
                      <small>
                        Image by
                        {' '}
                        {usernames.dartFrog}
                      </small>
                    </figcaption>
                  </figure>
                  <a id="tiled-red-metal" href="#" style={{ visibility: 'hidden' }} aria-hidden="true" />
                  <figure>
                    <a href="/images/pre-release/tiled-red-metal.png">
                      <LazyLoadImage
                        alt="ship-tile"
                        src={require('../../public/images/pre-release/tiled-red-metal.png?webp&width=500&url')}
                        placeholderSrc={require('../../public/images/pre-release/tiled-red-metal.png?webp&lqip')}
                        style={{ maxWidth: 500, width: '100%' }}
                        effect="blur"
                      />
                    </a>
                    <br />
                    <figcaption>
                      Tiled Red Metal
                      <br />
                      <small>
                        Image by
                        {' '}
                        {usernames.dartFrog}
                      </small>
                    </figcaption>
                  </figure>
                  <a id="super-heavy-concrete" href="#" style={{ visibility: 'hidden' }} aria-hidden="true" />
                  <figure>
                    <a href="/images/pre-release/super-heavy-concrete.png">
                      <LazyLoadImage
                        alt="ship-tile"
                        src={require('../../public/images/pre-release/super-heavy-concrete.png?webp&width=500&url')}
                        placeholderSrc={require('../../public/images/pre-release/super-heavy-concrete.png?webp&lqip')}
                        style={{ maxWidth: 500, width: '100%' }}
                        effect="blur"
                      />
                    </a>
                    <br />
                    <figcaption>
                      Super Heavy Concrete
                      <br />
                      <small>
                        Image by
                        {' '}
                        {usernames.dartFrog}
                      </small>
                    </figcaption>
                  </figure>
                  <a id="strong-steel" href="#" style={{ visibility: 'hidden' }} aria-hidden="true" />
                  <figure>
                    <a href="/images/pre-release/strong-steel.png">
                      <LazyLoadImage
                        alt="ship-tile"
                        src={require('../../public/images/pre-release/strong-steel.png?webp&width=500&url')}
                        placeholderSrc={require('../../public/images/pre-release/strong-steel.png?webp&lqip')}
                        style={{ maxWidth: 500, width: '100%' }}
                        effect="blur"
                      />
                    </a>
                    <br />
                    <figcaption>
                      Strong Steel
                      <br />
                      <small>
                        Image by
                        {' '}
                        {usernames.dartFrog}
                      </small>
                    </figcaption>
                  </figure>
                  <a id="super-strong-steel" href="#" style={{ visibility: 'hidden' }} aria-hidden="true" />
                  <figure>
                    <a href="/images/pre-release/super-strong-steel.png">
                      <LazyLoadImage
                        alt="ship-tile"
                        src={require('../../public/images/pre-release/super-strong-steel.png?webp&width=500&url')}
                        placeholderSrc={require('../../public/images/pre-release/super-strong-steel.png?webp&lqip')}
                        style={{ maxWidth: 500, width: '100%' }}
                        effect="blur"
                      />
                    </a>
                    <br />
                    <figcaption>
                      Super Strong Steel
                      <br />
                      <small>
                        Image by
                        {' '}
                        {usernames.dartFrog}
                      </small>
                    </figcaption>
                  </figure>
                  <a id="ice" href="#" style={{ visibility: 'hidden' }} aria-hidden="true" />
                  <figure>
                    <a href="/images/pre-release/ice.png">
                      <LazyLoadImage
                        alt="ship-tile"
                        src={require('../../public/images/pre-release/ice.png?webp&width=500&url')}
                        placeholderSrc={require('../../public/images/pre-release/ice.png?webp&lqip')}
                        style={{ maxWidth: 500, width: '100%' }}
                        effect="blur"
                      />
                    </a>
                    <br />
                    <figcaption>
                      Ice
                      <br />
                      <small>
                        Image by
                        {' '}
                        {usernames.dartFrog}
                      </small>
                    </figcaption>
                  </figure>
                  <a id="coal" href="#" style={{ visibility: 'hidden' }} aria-hidden="true" />
                  <figure>
                    <a href="/images/pre-release/coal.png">
                      <LazyLoadImage
                        alt="ship-tile"
                        src={require('../../public/images/pre-release/coal.png?webp&width=500&url')}
                        placeholderSrc={require('../../public/images/pre-release/coal.png?webp&lqip')}
                        style={{ maxWidth: 500, width: '100%' }}
                        effect="blur"
                      />
                    </a>
                    <br />
                    <figcaption>
                      Coal
                      <br />
                      <small>
                        Image by
                        {' '}
                        {usernames.dartFrog}
                      </small>
                    </figcaption>
                  </figure>
                  <a id="copper" href="#" style={{ visibility: 'hidden' }} aria-hidden="true" />
                  <figure>
                    <a href="/images/pre-release/copper.png">
                      <LazyLoadImage
                        alt="ship-tile"
                        src={require('../../public/images/pre-release/copper.png?webp&width=500&url')}
                        placeholderSrc={require('../../public/images/pre-release/copper.png?webp&lqip')}
                        style={{ maxWidth: 500, width: '100%' }}
                        effect="blur"
                      />
                    </a>
                    <br />
                    <figcaption>
                      Copper
                      <br />
                      <small>
                        Image by
                        {' '}
                        {usernames.dartFrog}
                      </small>
                    </figcaption>
                  </figure>
                  <a id="galvanized-metal" href="#" style={{ visibility: 'hidden' }} aria-hidden="true" />
                  <figure>
                    <a href="/images/pre-release/galvanized-metal.png">
                      <LazyLoadImage
                        alt="ship-tile"
                        src={require('../../public/images/pre-release/galvanized-metal.png?webp&width=500&url')}
                        placeholderSrc={require('../../public/images/pre-release/galvanized-metal.png?webp&lqip')}
                        style={{ maxWidth: 500, width: '100%' }}
                        effect="blur"
                      />
                    </a>
                    <br />
                    <figcaption>
                      Galvanized Metal
                      <br />
                      <small>
                        Image by
                        {' '}
                        {usernames.dartFrog}
                      </small>
                    </figcaption>
                  </figure>
                  <a id="taped-plaster" href="#" style={{ visibility: 'hidden' }} aria-hidden="true" />
                  <figure>
                    <a href="/images/pre-release/taped-plaster.png">
                      <LazyLoadImage
                        alt="ship-tile"
                        src={require('../../public/images/pre-release/taped-plaster.png?webp&width=500&url')}
                        placeholderSrc={require('../../public/images/pre-release/taped-plaster.png?webp&lqip')}
                        style={{ maxWidth: 500, width: '100%' }}
                        effect="blur"
                      />
                    </a>
                    <br />
                    <figcaption>
                      Taped Plaster
                      <br />
                      <small>
                        Image by
                        {' '}
                        {usernames.dartFrog}
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
