/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

// next imports
import Image from 'next/image';
import type { GetStaticPropsResult } from 'next';

// other imports
import usernames from '../../other/usernames';

// image imports
import ImageLogfile from '../../public/images/logfiles/image.png';
import AudioLogfile from '../../public/images/logfiles/audio.png';
import OpenTerminal from '../../public/images/other/openterminal.png';
import OpenIngame1 from '../../public/images/logbook/open-ingame-1.png';
import OpenIngame2 from '../../public/images/logbook/open-ingame-2.png';
import LogbookRender from '../../public/images/logbook/render.png';
import LogbookIcons from '../../public/images/logbook/icons.png';

export function getStaticProps():GetStaticPropsResult<{
    title:string
    id:string
}> {
  return {
    props: {
      title: 'Logbook Items',
      id: 'logbook-items',
    },
  };
}

export default function LogbookItems() {
  return (
    <div>
      <div className="content">
        <h1 className="content-title">Log Book Items</h1>
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
            <b>
              Note:
            </b>
          </h6>
          Most of this stuff
          has been added to the game in the 0.4.8 update.
        </div>
        <figure>
          <a id="logbook-items" href="#" style={{ visibility: 'hidden' }} aria-hidden="true" />
          <Image
            alt="logbook-item-image"
            src={ImageLogfile}
            placeholder="blur"
            loading="lazy"
            priority={false}
            width={200}
            height={(200 / ImageLogfile.width) * ImageLogfile.height}
          />
          <Image
            alt="logbook-item-audio"
            src={AudioLogfile}
            placeholder="blur"
            loading="lazy"
            priority={false}
            width={200}
            height={(200 / AudioLogfile.width) * AudioLogfile.height}
          />
          <figcaption>
            Log Items
            {' '}
            <br />
            <small>
              Found and Rendered by
              {' '}
              {usernames.charging}
            </small>
          </figcaption>
        </figure>
        <br />
        <a id="open-terminal" href="#" style={{ visibility: 'hidden' }} aria-hidden="true" />
        <figure>
          <Image
            alt="openterminal"
            src={OpenTerminal}
            placeholder="blur"
            loading="lazy"
            priority={false}
            width={350}
            height={(350 / OpenTerminal.width) * OpenTerminal.height}
          />
          <figcaption>
            Open Terminal
            <br />
            <small>
              Found and Rendered by
              {' '}
              {usernames.charging}
            </small>
          </figcaption>
        </figure>
        <br />
        <a id="open-logbook" href="#" style={{ visibility: 'hidden' }} aria-hidden="true" />
        <figure>
          <Image
            alt="open-logbook-1"
            src={OpenIngame1}
            placeholder="blur"
            loading="lazy"
            priority={false}
            width={400}
            height={(400 / OpenIngame1.width) * OpenIngame1.height}
          />
          <Image
            alt="open-logbook-2"
            src={OpenIngame2}
            placeholder="blur"
            loading="lazy"
            priority={false}
            width={400}
            height={(400 / OpenIngame2.width) * OpenIngame2.height}
          />
          <figcaption>
            Open Log Book (In-Game)
            <br />
            <small>
              Images by
              {' '}
              {usernames.rockstar}
            </small>
          </figcaption>
        </figure>
        <br />
        <a id="logbook" href="#" style={{ visibility: 'hidden' }} aria-hidden="true" />
        <figure>
          <Image
            alt="logbook-rendered"
            src={LogbookRender}
            placeholder="blur"
            loading="lazy"
            priority={false}
            width={450}
            height={(450 / LogbookRender.width) * LogbookRender.height}
          />
          <figcaption>
            Log Book
            <br />
            <small>
              Found by
              {' '}
              {usernames.modGamer}
              , Image by
              {' '}
              {usernames.tomatech}
            </small>
          </figcaption>
        </figure>
        <br />
        <a id="log-item-icons" href="#" style={{ visibility: 'hidden' }} aria-hidden="true" />
        <figure>
          <Image
            alt="logbook-icons"
            src={LogbookIcons}
            placeholder="blur"
            loading="lazy"
            priority={false}
            width={300}
            height={(300 / LogbookIcons.width) * LogbookIcons.height}
          />
          <figcaption>
            Log Item Icons
            <br />
            <small>
              Found By
              {' '}
              {usernames.modGamer}
            </small>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
