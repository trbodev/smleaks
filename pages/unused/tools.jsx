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

export const getStaticProps = () => ({
  props: {
    title: 'Unused Tools',
    id: 'unused-tools',
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
                  <h1 className="content-title">Unused Tools</h1>
                </div>
                <div className="card">
                  <a id="lift-remote" href="#" style={{ visibility: 'hidden' }} aria-hidden="true" />
                  <figure>
                    <a href="/images/tools/liftremote.png">
                      <LazyLoadImage
                        alt="lift-remote"
                        src={require('../../public/images/tools/liftremote.png?webp&width=300&url')}
                        placeholderSrc={require('../../public/images/tools/liftremote.png?webp&lqip')}
                        style={{ maxWidth: 300, width: '100%' }}
                      />
                    </a>
                    <figcaption>
                      Lift Remote - (Mentioned in
                      {' '}
                      <Link href="/devblog/17#new-lift-concept"><a href="/devblog/17#new-lift-concept">Devblog 17</a></Link>
                      )
                      <br />
                      <small>
                        Found and Rendered By ChargingTurnip#9832 on
                        Discord
                      </small>
                    </figcaption>
                  </figure>
                  <br />
                  <figure>
                    <iframe title="Lift Remote Animation Mockup" src="https://www.youtube.com/embed/2BlEAF-f6j0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    <figcaption>
                      Lift Remote Animation Mockup
                      <br />
                      <small>
                        Animated and Rendered By
                        {' '}
                        <a href="https://www.youtube.com/channel/UCqWxNkrT4EmoL7O1pY2w3xw">Rager</a>
                        {' '}
                        on Youtube
                      </small>
                    </figcaption>
                  </figure>
                  <br />
                  <a id="garden-shovel" href="#" style={{ visibility: 'hidden' }} aria-hidden="true" />
                  <figure>
                    <a href="/images/tools/garden-shovel-hand.png">
                      <LazyLoadImage
                        alt="garden-shovel"
                        src={require('../../public/images/tools/garden-shovel-hand.png?webp&width=300&url')}
                        placeholderSrc={require('../../public/images/tools/garden-shovel-hand.png?webp&lqip')}
                        style={{ maxWidth: 300, width: '100%' }}
                      />
                    </a>
                    <a href="/images/tools/garden-shovel-color.png">
                      <LazyLoadImage
                        alt="garden-shovel"
                        src={require('../../public/images/tools/garden-shovel-color.png?webp&width=300&url')}
                        placeholderSrc={require('../../public/images/tools/garden-shovel-color.png?webp&lqip')}
                        style={{ maxWidth: 180, width: '100%', marginLeft: 20 }}
                      />
                    </a>
                    <figcaption>
                      Garden Shovel
                      <br />
                      <small>
                        Found by ChargingTurnip#9832, Image by rockstar modder#8706 on
                        Discord
                      </small>
                    </figcaption>
                  </figure>
                  <br />
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
