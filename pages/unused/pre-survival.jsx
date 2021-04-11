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
    title: 'Unused Pre-Survival',
    id: 'unused-pre-survival',
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
                  <h1 className="content-title">Unused Pre-Survival</h1>
                </div>
                <div className="card">
                  <a id="hanging-character" href="#" style={{ visibility: 'hidden' }} aria-hidden="true" />
                  <figure>
                    <a href="/images/pre-survival/hanging-character.png">
                      <LazyLoadImage
                        alt="hanging-character"
                        src={require('../../public/images/pre-survival/hanging-character.png?webp&width=300&url')}
                        placeholderSrc={require('../../public/images/pre-survival/hanging-character.png?webp&lqip')}
                        style={{ maxWidth: 300, width: '100%' }}
                        effect="blur"
                      />
                    </a>
                    <figcaption>
                      Hanging Character
                      <br />
                      <small>
                        Image by
                        {' '}
                        {usernames.dartFrog}
                      </small>
                    </figcaption>
                  </figure>
                  <a id="indestructable-block" href="#" style={{ visibility: 'hidden' }} aria-hidden="true" />
                  <figure>
                    <a href="/images/pre-survival/indestructable-block.png">
                      <LazyLoadImage
                        alt="indestructable-block"
                        src={require('../../public/images/pre-survival/indestructable-block.png?webp&width=200&url')}
                        placeholderSrc={require('../../public/images/pre-survival/indestructable-block.png?webp&lqip')}
                        style={{ maxWidth: 200, width: '100%' }}
                        effect="blur"
                      />
                    </a>
                    <br />
                    <video
                      src="https://thumbs.gfycat.com/PoshAdmirableIberianbarbel-mobile.mp4"
                      autoPlay
                      muted
                      loop
                      style={{ maxWidth: 500, width: '100%' }}
                    />
                    <br />
                    <video
                      src="https://thumbs.gfycat.com/ReliableImmaterialAmericanalligator-mobile.mp4"
                      autoPlay
                      muted
                      loop
                      style={{ maxWidth: 500, width: '100%' }}
                    />
                    <br />
                    <video
                      src="https://thumbs.gfycat.com/ClosedRemorsefulBedlingtonterrier-mobile.mp4"
                      autoPlay
                      muted
                      loop
                      style={{ maxWidth: 500, width: '100%' }}
                    />
                    <br />
                    <figcaption>
                      Indestructable Block
                      <br />
                      <small>
                        Images by
                        {' '}
                        {usernames.dartFrog}
                      </small>
                    </figcaption>
                  </figure>
                  <a id="insulation-block" href="#" style={{ visibility: 'hidden' }} aria-hidden="true" />
                  <figure>
                    <a href="/images/pre-survival/insulation-block.png">
                      <LazyLoadImage
                        alt="insulation-block"
                        src={require('../../public/images/pre-survival/insulation-block.png?webp&width=200&url')}
                        placeholderSrc={require('../../public/images/pre-survival/insulation-block.png?webp&lqip')}
                        style={{ maxWidth: 200, width: '100%' }}
                        effect="blur"
                      />
                    </a>
                    <br />
                    <video
                      src="https://thumbs.gfycat.com/UncomfortableRichHarpyeagle-mobile.mp4"
                      autoPlay
                      muted
                      loop
                      style={{ maxWidth: 500, width: '100%' }}
                    />
                    <br />
                    <video
                      src="https://thumbs.gfycat.com/CraftyWillingHapuka-mobile.mp4"
                      autoPlay
                      muted
                      loop
                      style={{ maxWidth: 500, width: '100%' }}
                    />
                    <br />
                    <video
                      src="https://thumbs.gfycat.com/AgitatedVigorousHog-mobile.mp4"
                      autoPlay
                      muted
                      loop
                      style={{ maxWidth: 500, width: '100%' }}
                    />
                    <br />
                    <figcaption>
                      Insulation Block
                      <br />
                      <small>
                        Images by
                        {' '}
                        {usernames.dartFrog}
                      </small>
                    </figcaption>
                  </figure>
                  <a id="spaceship-block" href="#" style={{ visibility: 'hidden' }} aria-hidden="true" />
                  <figure>
                    <a href="/images/pre-survival/spaceship-block.png">
                      <LazyLoadImage
                        alt="spaceship-block"
                        src={require('../../public/images/pre-survival/spaceship-block.png?webp&width=200&url')}
                        placeholderSrc={require('../../public/images/pre-survival/spaceship-block.png?webp&lqip')}
                        style={{ maxWidth: 200, width: '100%' }}
                        effect="blur"
                      />
                    </a>
                    <br />
                    <video
                      src="https://thumbs.gfycat.com/DizzyAjarFly-mobile.mp4"
                      autoPlay
                      muted
                      loop
                      style={{ maxWidth: 500, width: '100%' }}
                    />
                    <br />
                    <video
                      src="https://thumbs.gfycat.com/BriskGratefulBream-mobile.mp4"
                      autoPlay
                      muted
                      loop
                      style={{ maxWidth: 500, width: '100%' }}
                    />
                    <br />
                    <video
                      src="https://thumbs.gfycat.com/SparklingRepentantDipper-mobile.mp4"
                      autoPlay
                      muted
                      loop
                      style={{ maxWidth: 500, width: '100%' }}
                    />
                    <br />
                    <figcaption>
                      Spaceship Block
                      <br />
                      <small>
                        Images by
                        {' '}
                        {usernames.dartFrog}
                      </small>
                    </figcaption>
                  </figure>
                  <a id="ship-tile" href="#" style={{ visibility: 'hidden' }} aria-hidden="true" />
                  <figure>
                    <a href="/images/pre-survival/ship-tile.png">
                      <LazyLoadImage
                        alt="ship-tile"
                        src={require('../../public/images/pre-survival/ship-tile.png?webp&width=500&url')}
                        placeholderSrc={require('../../public/images/pre-survival/ship-tile.png?webp&lqip')}
                        style={{ maxWidth: 500, width: '100%' }}
                        effect="blur"
                      />
                    </a>
                    <br />
                    <figcaption>
                      Insulation Block
                      <br />
                      <small>
                        Images by
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
