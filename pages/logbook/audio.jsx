/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/media-has-caption */
import { useState } from 'react';
import { isMobile } from 'react-device-detect';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import SidebarOverlay from '../../components/SidebarOverlay';

export const getStaticProps = () => ({
  props: {
    title: 'Logbook Audio',
    id: 'logbook-audio',
  },
});

export default function LogbookAudio(page) {
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
                  <h1 className="content-title">Log Book Audio</h1>
                </div>
                <div className="card">
                  {Array(12).fill(0).map((_, index) => {
                    // eslint-disable-next-line no-param-reassign
                    index += 1;
                    return (
                      <div id={`logfile-${index}`} key={`logfile-${index}`}>
                        VO_Straggler_
                        {index > 9 ? index : `0${index}`}
                        <br />
                        <audio
                          controls="controls"
                        >
                          <source
                            src={`/audio/VO_Straggler_${index > 9 ? index : `0${index}`}.wav`}
                            type="audio/wav"
                          />
                          <source
                            src={`/audio/VO_Straggler_${index > 9 ? index : `0${index}`}.mp3`}
                            type="audio/mp3"
                          />
                        </audio>
                        <br />
                      </div>
                    );
                  })}
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
