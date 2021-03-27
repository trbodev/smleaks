/* eslint-disable jsx-a11y/media-has-caption */
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
    title: 'Unused Particles',
    id: 'unused-particles',
  },
});

export default function UnusedParticles(page) {
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
                  <h1 className="content-title">Unused Particles</h1>
                </div>
                <div className="card">
                  <a id="encryptor-turn-on" href="#" style={{ visibility: 'hidden' }} aria-hidden="true" />
                  <figure>
                    <a href="/images/other/encryptorblast.png">
                      <LazyLoadImage
                        alt="encryptor-turn-on"
                        src={require('../../public/images/other/encryptorblast.png?webp&width=300&url')}
                        placeholderSrc={require('../../public/images/other/encryptorblast.png?webp&lqip')}
                        style={{ maxWidth: 300, width: '100%' }}
                        sizes={[300]}
                      />
                    </a>
                    <figcaption>
                      Encryptor Turn On
                      <br />
                      <small>Found By Turbo Biscuit</small>
                    </figcaption>
                  </figure>
                  <a id="encryptor-particle" href="#" style={{ visibility: 'hidden' }} aria-hidden="true" />
                  <figure>
                    <video
                      src="/videos/encryptorparticle.mp4"
                      controls="controls"
                      style={{ maxWidth: 600, width: '100%' }}
                    />
                    <figcaption>
                      Encryptor Particle Showcase
                      <br />
                      <small>
                        By 🍅Tomatech#5591
                      </small>
                    </figcaption>
                  </figure>
                  <a id="audio-log-particles" href="#" style={{ visibility: 'hidden' }} aria-hidden="true" />
                  <figure>
                    <video
                      src="/videos/audio-log-particle.mp4"
                      controls="controls"
                      style={{ maxWidth: 600, width: '100%' }}
                    />
                    <figcaption>
                      Audio Log Particle
                      <br />
                      <small>
                        Found By Question Mark#2071
                      </small>
                    </figcaption>
                  </figure>
                  <figure>
                    <video
                      src="/videos/audio-log-pickup-particle.mp4"
                      controls="controls"
                      style={{ maxWidth: 600, width: '100%' }}
                    />
                    <figcaption>
                      Audio Log Pickup Particle
                      <br />
                      <small>
                        Found By Question Mark#2071
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
