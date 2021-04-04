import { useState } from 'react';
import { isMobile } from 'react-device-detect';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import SidebarOverlay from '../components/SidebarOverlay';

export const getStaticProps = () => ({
  props: {
    title: 'Links',
    id: 'links',
    description: 'Some useful links related to SMLeaks.',
  },
});

export default function Links(page) {
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
                  <h1 className="content-title">Links</h1>
                </div>
                <div className="card">
                  <article>
                    <ul>
                      <li>
                        Scrap Mechanic
                        <ul>
                          <li>
                            <a href="https://scrapmechanic.com">Website</a>
                          </li>
                          <li>
                            <a href="https://twitter.com/scrapmechanic">
                              Twitter
                            </a>
                          </li>
                          <li>
                            <a href="https://facebook.com/scrapmechanic">Facebook</a>
                          </li>
                          <li>
                            <a href="https://store.steampowered.com/app/387990/">Steam Store</a>
                          </li>
                          <li>
                            <a href="https://steamcommunity.com/app/387990/">Steam Community</a>
                          </li>
                          <li>
                            <a href="https://steamdb.info/app/387990">SteamDB</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        Axolot Games
                        <ul>
                          <li>
                            <a href="https://axolotgames.com">
                              Website
                            </a>
                          </li>
                          <li>
                            <a href="https://github.com/AxolotGames">
                              Github
                            </a>
                          </li>
                          <li>
                            <a href="https://twitter.com/AxolotGames">Twitter</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://steamdb.info">SteamDB</a>
                      </li>
                    </ul>
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
