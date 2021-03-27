/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from 'react';
import { isMobile } from 'react-device-detect';
import Link from 'next/link';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import SidebarOverlay from '../../components/SidebarOverlay';

export const getStaticProps = () => ({
  props: {
    title: 'Unused Audio',
    id: 'unused-audio',
  },
});

export default function UnusedAudio(page) {
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
                  <h1 className="content-title">Unused Audio</h1>
                </div>
                <div className="card">
                  <a id="npe-turret-activate" href="#" style={{ visibility: 'hidden' }} />
                  NPE_Turret_Activate (Unknown Origins)
                  <br />
                  <audio
                    controls="controls"
                  >
                    <source
                      src="/audio/NPE_Turret_Activate.wav"
                      type="audio/wav"
                    />
                  </audio>
                  <br />
                  <a id="npe-drone-shoot" href="#" style={{ visibility: 'hidden' }} />
                  {' '}
                  NPE_Drone_Shoot (Farmbot Pesticide
                  Gun Shoot?)
                  <br />
                  <audio controls="controls">
                    <source
                      src="/audio/NPE_Drone_Shoot.wav"
                      type="audio/wav"
                    />
                  </audio>
                  <br />
                  <a id="moving-water" href="#" style={{ visibility: 'hidden' }} />
                  {' '}
                  Moving Water?
                  <br />
                  <small>
                    water_movement_big
                  </small>
                  <br />
                  <audio controls="controls">
                    <source
                      src="/audio/water_movement_big.wav"
                      type="audio/wav"
                    />
                  </audio>
                  <br />
                  <small>water_movement_small</small>
                  <br />
                  <audio
                    controls="controls"
                  >
                    <source
                      src="/audio/water_movement_small.wav"
                      type="audio/wav"
                    />
                  </audio>
                  <br />
                  <br />
                  <a id="caves" href="#" style={{ visibility: 'hidden' }} />
                  Caves? (Has been confirmed in
                  {' '}
                  <Link prefetch={false} href="/devblog/20#underground"><a href="/devblog/20#underground">Devblog 20</a></Link>
                  )
                  <br />
                  <small>
                    amb_2D_cave_base
                  </small>
                  <br />
                  <audio controls="controls">
                    <source
                      src="/audio/amb_2D_cave_base.wav"
                      type="audio/wav"
                    />
                  </audio>
                  <br />
                  <small>amb_2D_cave_waterdrip_intense</small>
                  <br />
                  <audio
                    controls="controls"
                  >
                    <source
                      src="/audio/amb_2D_cave_waterdrip_intense.wav"
                      type="audio/wav"
                    />
                  </audio>
                  <br />
                  <small>amb_2D_cave_waterdrip_single</small>
                  <br />
                  <audio
                    controls="controls"
                  >
                    <source
                      src="/audio/amb_2D_cave_waterdrip_single.wav"
                      type="audio/wav"
                    />
                  </audio>
                  <br />
                  <a id="other" href="#" style={{ visibility: 'hidden' }} />
                  {' '}
                  Other
                  {' '}
                  <br />
                  <small>
                    painttool_eraseslurp
                  </small>
                  <br />
                  <audio controls="controls">
                    <source
                      src="/audio/painttool_eraseslurp.wav"
                      type="audio/wav"
                    />
                  </audio>
                  <br />
                  <small>encrypter_on</small>
                  <br />
                  <audio
                    controls="controls"
                  >
                    <source
                      src="/audio/encrypter_on.wav"
                      type="audio/wav"
                    />
                  </audio>
                  <br />
                  <small>encrypter_off</small>
                  <br />
                  <audio
                    controls="controls"
                  >
                    <source
                      src="/audio/encrypter_off.wav"
                      type="audio/wav"
                    />
                  </audio>
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
