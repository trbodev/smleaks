/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { LazyLoadImage } from 'react-lazy-load-image-component';
import usernames from '../../other/usernames';

export const getStaticProps = () => ({
  props: {
    title: 'Logbook GUIs',
    id: 'logbook-guis',
  },
});

export default function LogbookGUIs() {
  return (
    <div>
      <div className="content">
        <h1 className="content-title">Log Book GUIs</h1>
      </div>
      <div className="card">
        <div
          className="alert"
          style={{
            backgroundColor: '#302c19',
            backgroundImage: 'none',
            borderColor: '#8c790e',
          }}
        >
          <h6 className="alert-heading">
            <b>Note:</b>
          </h6>
          Most of this stuff has been added to the game in the 0.4.8 update.
        </div>
        <figure>
          <a
            id="logbook-gui"
            href="#"
            style={{ visibility: 'hidden' }}
            aria-hidden="true"
          />
          <a href="/images/logbook/gui.png">
            <LazyLoadImage
              alt="logbook-gui"
              src={require('../../public/images/logbook/gui.png?webp&width=400&url')}
              placeholderSrc={require('../../public/images/logbook/gui.png?webp&lqip')}
              style={{ maxWidth: 400, width: '100%' }}
            />
          </a>
          <figcaption>
            Log Book GUI
            <br />
            <small>
              Found by
              {' '}
              {usernames.futureMapper}
            </small>
          </figcaption>
        </figure>
        <figure>
          <a
            id="waypoint-gui"
            href="#"
            style={{ visibility: 'hidden' }}
            aria-hidden="true"
          />
          <a href="/images/logbook/waypoint-gui.png">
            <LazyLoadImage
              alt="waypoint-gui"
              src={require('../../public/images/logbook/waypoint-gui.png?webp&width=300&url')}
              placeholderSrc={require('../../public/images/logbook/waypoint-gui.png?webp&lqip')}
              style={{ maxWidth: 300, width: '100%' }}
            />
          </a>
          <figcaption>
            Waypoint GUI
            <br />
            <small>
              Found by
              {' '}
              {usernames.futureMapper}
            </small>
          </figcaption>
        </figure>
        <figure>
          <a
            id="logbook-gui-mockup"
            href="#"
            style={{ visibility: 'hidden' }}
            aria-hidden="true"
          />
          <a href="/images/logbook/gui-mockup.png">
            <LazyLoadImage
              alt="logbook-gui-mockup"
              src={require('../../public/images/logbook/gui-mockup.png?webp&width=400&url')}
              placeholderSrc={require('../../public/images/logbook/gui-mockup.png?webp&lqip')}
              style={{ maxWidth: 400, width: '100%' }}
            />
          </a>
          <figcaption>
            Log Book GUI Mockup
            <br />
            <small>
              Created by
              {' '}
              {usernames.rockstar}
            </small>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
