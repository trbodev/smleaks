import { useState } from 'react';
import { isMobile } from 'react-device-detect';
import Link from 'next/link';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import SidebarOverlay from '../components/SidebarOverlay';

export const getStaticProps = () => ({
  props: {
    title: 'Credits',
    id: 'credits',
    description: 'The important people who have helped make this project possible!',
  },
});

export default function Credits(page) {
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
                  <h1 className="content-title">Credits</h1>
                </div>
                <div className="card">
                  <article>
                    <div>
                      <ul>
                        <li>
                          <a href="https://trbo.sh">Turbo Biscuit</a>
                          {' '}
                          - Creator and Maintainter of SMLeaks
                        </li>
                        <li>
                          IvanCoHe - OG Survival Predictionist
                        </li>
                        <li>
                          ChargingTurnip - Rendered the
                          {' '}
                          <Link href="/logbook/items#logbook-items">
                            <a href="/logbook/items#logbook-items">SMLeaks Logo</a>
                          </Link>
                        </li>
                        <li>
                          <a href="https://github.com/technologicnick">
                            Technologic Nick

                          </a>
                          - Found the files for the
                          {' '}
                          <Link href="/unused/parts#plastic-pumpkin"><a href="/unused/parts#plastic-pumpkin">Plastic Pumpkin</a></Link>
                        </li>
                        <li>
                          Rockstar Modder - Current Survial Predictionist
                        </li>
                        <li>FutureMapper</li>
                        <li>
                          <a href="https://twitter.com/_QuestionableM_">
                            Question Mark
                          </a>
                        </li>
                        <li>BananaCat</li>
                        <li>ModGamer29</li>
                      </ul>
                      <small>
                        (you have contributed to SMLeaks in any way
                        please contact me on discord so I can add you to this list!)
                      </small>
                    </div>
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
