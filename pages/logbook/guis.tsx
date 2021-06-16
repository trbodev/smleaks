/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

// next imports
import Image from 'next/image';
import type { GetStaticPropsResult } from 'next';

// other imports
import usernames from '../../other/usernames';

// image imports
import LogbookGui from '../../public/images/logbook/gui.png';
import WaypointGui from '../../public/images/logbook/waypoint-gui.png';
import LogbookGuiMockup from '../../public/images/logbook/gui-mockup.png';

export function getStaticProps():GetStaticPropsResult<{
    title:string
    id:string
}> {
  return {
    props: {
      title: 'Logbook GUIs',
      id: 'logbook-guis',
    },
  };
}

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
            <Image
              alt="logbook-gui"
              src={LogbookGui}
              placeholder="blur"
              loading="lazy"
              priority={false}
              width={500}
              height={(500 / LogbookGui.width) * LogbookGui.height}
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
            <Image
              alt="waypoint-gui"
              src={WaypointGui}
              placeholder="blur"
              loading="lazy"
              priority={false}
              width={400}
              height={(400 / WaypointGui.width) * WaypointGui.height}
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
            <Image
              alt="logbook-gui-mockup"
              src={LogbookGuiMockup}
              placeholder="blur"
              loading="lazy"
              priority={false}
              width={500}
              height={(500 / LogbookGuiMockup.width) * LogbookGuiMockup.height}
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
