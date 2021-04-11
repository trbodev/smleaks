import { useState } from 'react';
import { isMobile } from 'react-device-detect';
import Link from 'next/link';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import SidebarOverlay from '../components/SidebarOverlay';
import usernames from '../other/usernames';

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
                          <a href="https://trbo.sh">{usernames.turbo}</a>
                          {' '}
                          - Creator and Maintainter of SMLeaks
                        </li>
                        <li>
                          {usernames.ivan}
                          {' '}
                          - OG Survival Predictionist
                        </li>
                        <li>
                          {usernames.charging}
                          {' '}
                          - Rendered the
                          {' '}
                          <Link href="/logbook/items#logbook-items">
                            <a href="/logbook/items#logbook-items">SMLeaks Logo</a>
                          </Link>
                        </li>
                        <li>
                          <a href="https://github.com/technologicnick">
                            {usernames.nick}

                          </a>
                          - Found the files for the
                          {' '}
                          <Link href="/unused/parts#plastic-pumpkin"><a href="/unused/parts#plastic-pumpkin">Plastic Pumpkin</a></Link>
                        </li>
                        <li>
                          {usernames.rockstar}
                          {' '}
                          - Current Survial Predictionist
                        </li>
                        <li>{usernames.futureMapper}</li>
                        <li>
                          <a href="https://twitter.com/_QuestionableM_">
                            {usernames.questionMark}
                          </a>
                        </li>
                        <li>{usernames.bananaCat}</li>
                        <li>{usernames.modGamer}</li>
                        <li>{usernames.dartFrog}</li>
                        <li>{usernames.nothingMod}</li>
                        <li>{usernames.redBoi}</li>
                        <li>{usernames.vajdani}</li>
                        <li>{usernames.lolg}</li>
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
