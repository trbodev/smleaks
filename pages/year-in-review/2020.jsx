import { useState } from 'react';
import { isMobile } from 'react-device-detect';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import SidebarOverlay from '../../components/SidebarOverlay';

export const getStaticProps = () => ({
  props: {
    title: 'Year In Review | 2020',
    id: 'year-in-review-2020',
    description: 'Whats happend in 2020 on SMLeaks?',
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
                  <h1 className="content-title">A year in review of SMLeaks - 2020</h1>
                </div>
                <div className="card">
                  <article>
                    My pride and joy, SMLeaks, the community that does everything
                    Scrap Mechanic...
                    {' '}
                    <bold>
                      <i>but closer</i>
                    </bold
                    >
                    .
                    <br />
                    Some backstory for you, SMLeaks started back in January of
                    2020 (the exact day of Scrap Mehcanic&apos;s 4th anniversary) as
                    a small project to see if i could track the internal steam
                    updates for the game, and it all started with Scrap Bot. The
                    first &quot;working&quot; prototypes of Scrap Bot wern&apos;t very good and
                    didnt actaully catch updates, this version was orignally
                    hosted on
                    {' '}
                    <a href="https://glitch.com">Glitch</a>
                    , then i got
                    banned from the SteamDB Realtime websocket (for reasons that i
                    still dont understand to this day), this forced me to use
                    {' '}
                    <a href="https://npmjs.org/package/steam-user">steam-user</a>
                    {' '}
                    on npm, this package unfortunately used way too much ram and
                    the bot would crash quite frequently, then glitch started
                    having problems and banned pinging projects (which killed
                    scrap bot), this forced me to buy a vps and after that
                    everything has been pretty stable. Now regarding the website,
                    it was made around when the first version of Scrap Bot was made, and
                    it was
                    {' '}
                    <i>very</i>
                    {' '}
                    crude. At the time i was using
                    {' '}
                    <a href="https://vuetify.io">Vuetify</a>
                    {' '}
                    for the design... and
                    it was very
                    {' '}
                    <a href="https://web.archive.org/web/*/https://smleaks.com">bad</a>
                    . I recently switched to using
                    {' '}
                    <a href="https://gethalfmoon.com">Halfmoon CSS</a>
                    {' '}
                    and
                    everything looks much nicer now!
                    <br />
                    We currently have over 200 members in the discord but
                    things have been dying down recently since the new survival
                    update and the developers pushing updates every couple months
                    or so.
                    <h5>
                      I want to give a super big shoutout to all the people who have
                      made this project possible and have helped with so much over
                      the past year, and hopefully the years to come!
                    </h5>
                    <ul>
                      <li>
                        IvanCoHe, the OG survial predictionist, and a dear friend
                        of everyone. He has moved on from SMLeaks but will not be
                        forgotten.
                      </li>
                      <li>
                        ChargingTurnip, a Blender Master (in my eyes), who
                        rendered the logo for SMLeaks.
                      </li>
                      <li>
                        Rockstar Modder, current survial predictionist and
                        generally just a cool dude overall.
                      </li>
                      <li>
                        Technologic Nick, awesome Scrap Mechanic modder/hacker
                        that has been breaking the game and our minds.
                      </li>
                    </ul>
                    Also a special thanks to all of the dataminers that have
                    helped too!
                    <ul>
                      <li>Question Mark</li>
                      <li>FutureMapper</li>
                      <li>BananaCat</li>
                      <li>ModGamer29</li>
                    </ul>
                    I hope the year to come will be much better (not just updates
                    wise), and i wish you all a happy new year!
                    {' '}
                    <br />
                    <br />
                    With Love (to you all)
                    <br />
                    {' '}
                    - Turbo Biscuit
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
