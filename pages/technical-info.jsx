/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export const getStaticProps = () => ({
  props: {
    title: 'Technical Info',
    id: 'technical-info',
    description: 'The tech that makes SMLeaks possible!',
  },
});

export default function TechnicalInfo() {
  const [showPricing, setShowPricing] = useState(false);
  return (
    <div>
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
              <div
                className="badge badge-sm badge-primary"
                style={{ marginRight: 10 }}
              >
                v3.0.0
              </div>
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
                  {' '}
                  {showPricing ? (
                    <div
                      className="badge badge-primary"
                      style={{ color: 'rgba(255,255,255,.8)' }}
                    >
                      Free &amp; Open Source
                    </div>
                  ) : null}
                </li>
                <li>
                  <a href="https://preactjs.com/">Preact</a>
                  {' '}
                  (Lightweight
                  {' '}
                  <a href="https://reactjs.org/">React</a>
                  {' '}
                  Alternitive)
                  {' '}
                  {showPricing ? (
                    <div
                      className="badge badge-primary"
                      style={{ color: 'rgba(255,255,255,.8)' }}
                    >
                      Free &amp; Open Source
                    </div>
                  ) : null}
                </li>
                <li>
                  <a href="https://gethalfmoon.com/">Halfmoon CSS</a>
                  {' '}
                  (UI Style)
                  {' '}
                  {showPricing ? (
                    <div
                      className="badge badge-primary"
                      style={{ color: 'rgba(255,255,255,.8)' }}
                    >
                      Free &amp; Open Source
                    </div>
                  ) : null}
                </li>
                <li>
                  <a href="https://fontawesome.com/">Font Awesome</a>
                  {' '}
                  (Icons)
                  {' '}
                  {showPricing ? (
                    <div
                      className="badge badge-primary"
                      style={{ color: 'rgba(255,255,255,.8)' }}
                    >
                      Free &amp; Paid Options
                    </div>
                  ) : null}
                </li>
                <li>
                  <a href="https://vercel.com">Vercel</a>
                  {' '}
                  (Main &amp;
                  {' '}
                  <a href="https://dev.smleaks.com">Development Version</a>
                  {' '}
                  Hosting)
                  {' '}
                  {showPricing ? (
                    <div
                      className="badge badge-primary"
                      style={{ color: 'rgba(255,255,255,.8)' }}
                    >
                      Free &amp; Paid Options
                    </div>
                  ) : null}
                </li>
                <pre>
                  <li>
                    npm packages
                    <ul>
                      {[
                        'moment',
                        '@fortawesome/fontawesome-svg-core',
                        '@fortawesome/react-fontawesome',
                        'next-compose-plugins',
                        'next-google-fonts',
                        'next-optimized-images',
                        'next-plugin-preact',
                        'nextjs-websocket',
                        'react-device-detect',
                        'react-lazy-load-image-component',
                        '@badrap/bar-of-progress',
                      ].map((npmPackage) => (
                        <li>
                          <a href={`https://npmjs.org/package/${npmPackage}`}>
                            {npmPackage}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                </pre>
              </ul>
            </li>
            <li>
              <b>
                <a href="https://status.smleaks.com/">Status Page</a>
              </b>
              <ul style={{ marginTop: 8, marginBottom: 0 }}>
                <li>
                  <a href="https://instatus.com/">Instatus</a>
                  {' '}
                  {showPricing ? (
                    <div
                      className="badge badge-primary"
                      style={{ color: 'rgba(255,255,255,.8)' }}
                    >
                      Free &amp; Paid Options
                    </div>
                  ) : null}
                </li>
              </ul>
            </li>
            <li>
              <b>Scrap Bot</b>
              {' '}
              <div
                className="badge badge-sm badge-primary"
                style={{ marginRight: 10 }}
              >
                v3.0.0
              </div>
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
                      {['steam-user', 'discord.js', 'twit'].map(
                        (npmPackage) => (
                          <li>
                            <a href={`https://npmjs.org/package/${npmPackage}`}>
                              {npmPackage}
                            </a>
                          </li>
                        ),
                      )}
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
                  (DNS,
                  Registrar, DDoS Protection, Web Analytics)
                  {' '}
                  {showPricing ? (
                    <div
                      className="badge badge-primary"
                      style={{ color: 'rgba(255,255,255,.8)' }}
                    >
                      Free &amp; Paid Options
                    </div>
                  ) : null}
                </li>
                <li>
                  <a href="https://railway.app/">Railway</a>
                  {' '}
                  (Infrastructure Hosting)
                  {' '}
                  {showPricing ? (
                    <div
                      className="badge badge-primary"
                      style={{ color: 'rgba(255,255,255,.8)' }}
                    >
                      Free &amp; Paid Options
                    </div>
                  ) : null}
                </li>
                <li>
                  <a href="https://umami.is/">Umami</a>
                  {' '}
                  (Web Analytics)
                  {' '}
                  {showPricing ? (
                    <div
                      className="badge badge-primary"
                      style={{ color: 'rgba(255,255,255,.8)' }}
                    >
                      Free &amp; Open Source
                    </div>
                  ) : null}
                </li>
                <li>
                  <a href="https://contabo.com">Contabo</a>
                  {' '}
                  (VPS Hosting)
                  {' '}
                  {showPricing ? (
                    <div
                      className="badge badge-primary"
                      style={{ color: 'rgba(255,255,255,.8)' }}
                    >
                      Paid Only
                    </div>
                  ) : null}
                </li>
                <li>
                  <a href="https://arc.io">Arc.IO</a>
                  {' '}
                  (Ads Alternitive)
                  {' '}
                  {showPricing ? (
                    <div
                      className="badge badge-primary"
                      style={{ color: 'rgba(255,255,255,.8)' }}
                    >
                      Free &amp; Paid Options
                    </div>
                  ) : null}
                </li>
                <li>
                  <a href="https://docker.io">Docker</a>
                  {' '}
                  {showPricing ? (
                    <div
                      className="badge badge-primary"
                      style={{ color: 'rgba(255,255,255,.8)' }}
                    >
                      Free &amp; Open Source
                    </div>
                  ) : null}
                </li>
                <li>
                  <a href="https://caprover.com/">CapRover</a>
                  {' '}
                  (PaaS Docker
                  WebGUI)
                  {' '}
                  {showPricing ? (
                    <div
                      className="badge badge-primary"
                      style={{ color: 'rgba(255,255,255,.8)' }}
                    >
                      Free &amp; Open Source
                    </div>
                  ) : null}
                </li>
                <li>
                  <a href="https://nginx.org/">NGINX</a>
                  {' '}
                  (Reverse Proxy)
                  {' '}
                  {showPricing ? (
                    <div
                      className="badge badge-primary"
                      style={{ color: 'rgba(255,255,255,.8)' }}
                    >
                      Free &amp; Paid Options
                    </div>
                  ) : null}
                </li>
              </ul>
            </li>
          </ul>
          <div
            className="alert alert-success"
            style={{
              color: 'rgba(255,255,255,.8)',
            }}
          >
            <h6 className="alert-heading">
              <b>Cool Note:</b>
            </h6>
            A majority of these producs are free and don&apos;t require a credit
            card or PayPal payment to sign-up or use!
            <br />
            <div
              className="form-group"
              style={{ marginBottom: 0, marginTop: 5 }}
            >
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">Show Pricing</span>
                </div>
                <input
                  type="button"
                  className={`btn ${showPricing ? 'btn-primary' : ''} btn-sm`}
                  onClick={() => {
                    setShowPricing(!showPricing);
                  }}
                  value={showPricing ? '✔' : '✖'}
                  style={{
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                  }}
                />
              </div>
            </div>
          </div>
          <br />
        </article>
      </div>
    </div>
  );
}
