import { useState } from 'react';
import { isMobile } from 'react-device-detect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import SidebarOverlay from '../components/SidebarOverlay';

export const getStaticProps = () => ({
  props: {
    title: 'Technical Info',
    id: 'technical-info',
    description: 'The tech that makes SMLeaks possible!',
  },
});

export default function Home(page) {
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
                <div className="card">
                  <h2 className="card-title">Technical Info</h2>
                  <p style={{ marginTop: -10 }}>
                    Here is some technical info about how and what makes SMLeaks run.
                  </p>
                  <article>
                    <ul>
                      <li>
                        <b>Main Website</b>
                        {' '}
                        <div className="badge badge-sm badge-primary" style={{ marginRight: 10 }}>v2.2.0</div>
                        <a href="https://github.com/TurboBiscuit/smleaks">
                          <div className="badge badge-sm">
                            <FontAwesomeIcon icon={faGithub} />
                            {' '}
                            Github
                          </div>
                        </a>
                        <ul style={{ marginTop: 8, marginBottom: 0 }}>
                          <li>
                            <a href="https://nextjs.org/">NextJS</a>
                            {' '}
                            (
                            <a href="https://reactjs.org/">React</a>
                            {' '}
                            ramework)
                          </li>
                          <li>
                            <a href="https://preactjs.com/">Preact</a>
                            {' '}
                            (Lightweight
                            {' '}
                            <a href="https://reactjs.org/">React</a>
                            {' '}
                            Alternitive)
                          </li>
                          <li>
                            <a href="https://gethalfmoon.com/">Halfmoon CSS</a>
                            {' '}
                            (UI Style)
                          </li>
                          <li>
                            <a href="https://fontawesome.com/">Font Awesome</a>
                            {' '}
                            (Icons)
                          </li>
                          <li>
                            <a href="https://pages.cloudflare.com/">Cloudflare Pages</a>
                            {' '}
                            (Hosting)
                          </li>
                          <li>
                            <a href="https://vercel.com">Vercel</a>
                            {' '}
                            (
                            <a href="https://dev.smleaks.com">Development Version</a>
                            {' '}
                            Hosting)
                          </li>
                          <pre>
                            <li>
                              npm packages
                              <ul>
                                {
                                  [
                                    'moment',
                                    '@fortawesome/fontawesome-svg-core',
                                    '@fortawesome/react-fontawesome',
                                    'next-compose-plugins',
                                    'next-google-fonts',
                                    'next-optimized-images',
                                    'next-plugin-preact',
                                    'react-device-detect',
                                    'react-lazy-load-image-component',
                                    '@badrap/bar-of-progress',
                                  ].map((npmPackage) => (
                                    <li>
                                      <a href={`https://npmjs.org/package/${npmPackage}`}>{npmPackage}</a>
                                    </li>
                                  ))
                                }
                              </ul>
                            </li>
                          </pre>
                        </ul>
                      </li>
                      <li>
                        <b><a href="https://blog.smleaks.com/">Blog</a></b>
                        <ul style={{ marginTop: 8, marginBottom: 0 }}>
                          <li>
                            <a href="https://ghost.org/">Ghost CMS</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <b><a href="https://status.smleaks.com/">Status Page</a></b>
                        <ul style={{ marginTop: 8, marginBottom: 0 }}>
                          <li>
                            <a href="https://instatus.com/">Instatus</a>
                          </li>
                          <li>
                            <a href="https://uptimerobot.com/">UptimeRobot</a>
                            {' '}
                            (Automated Status Check)
                          </li>
                        </ul>
                      </li>
                      <li>
                        <b>Scrap Bot</b>
                        {' '}
                        <div className="badge badge-sm badge-primary" style={{ marginRight: 10 }}>v3.0.0</div>
                        <a href="https://github.com/TurboBiscuit/scrap-bot">
                          <div className="badge badge-sm">
                            <FontAwesomeIcon icon={faGithub} />
                            {' '}
                            Github
                          </div>
                        </a>
                        <pre>
                          <ul>
                            <li>
                              npm packages
                              <ul>
                                {
                                  [
                                    'steam-user',
                                    'discord.js',
                                    'twit',
                                  ].map((npmPackage) => (
                                    <li>
                                      <a href={`https://npmjs.org/package/${npmPackage}`}>{npmPackage}</a>
                                    </li>
                                  ))
                                }
                              </ul>
                            </li>
                          </ul>
                        </pre>
                      </li>
                      <li>
                        <b>Other</b>
                        <ul>
                          <li>
                            <a href="https://cloudflare.com/">Cloudflare</a>
                            {' '}
                            (DNS, Registrar, DDoS Protection, Web Analytics)
                          </li>
                          <li>
                            <a href="https://contabo.com">Contabo</a>
                            {' '}
                            (VPS Hosting)
                          </li>
                          <li>
                            <a href="https://arc.io">Arc.IO</a>
                            {' '}
                            (Ads Alternitive)
                          </li>
                          <li>
                            <a href="https://docker.io">Docker</a>
                          </li>
                          <li>
                            <a href="https://caprover.com/">CapRover</a>
                            {' '}
                            (PaaS Docker WebGUI)
                          </li>
                          <li>
                            <a href="https://nginx.org/">NGINX</a>
                            {' '}
                            (Reverse Proxy)
                          </li>
                        </ul>
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
