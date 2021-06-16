/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
// eslint-disable-next-line import/no-unresolved
import { LazyLoadImage } from 'react-lazy-load-image-component';
import usernames from '../../other/usernames';

export const getStaticProps = () => ({
  props: {
    title: 'Logbook Items',
    id: 'logbook-items',
  },
});

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
          <a href="/images/logfiles/image.png">
            <LazyLoadImage
              alt="logbook-item-image"
              src={require('../../public/images/logfiles/image.png?webp&width=200&url')}
              placeholderSrc={require('../../public/images/logfiles/image.png?webp&lqip')}
              effect="blur"
              style={{ maxWidth: 200, width: '100%', aspectRatio: '1/1' }}
            />
          </a>
          <a href="/images/logfiles/audio.png">
            <LazyLoadImage
              alt="logbook-item-audio"
              src={require('../../public/images/logfiles/audio.png?webp&width=200&url')}
              placeholderSrc={require('../../public/images/logfiles/audio.png?webp&lqip')}
              effect="blur"
              style={{ maxWidth: 200, width: '100%', aspectRatio: '1/1' }}
            />
          </a>
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
          <a href="/images/other/openterminal.png">
            <LazyLoadImage
              alt="openterminal"
              src={require('../../public/images/other/openterminal.png?webp&width=300&url')}
              placeholderSrc={require('../../public/images/other/openterminal.png?webp&lqip')}
              effect="blur"
              style={{ maxWidth: 300, width: '100%', aspectRatio: '1/1' }}
            />
          </a>
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
          <a href="/images/logbook/open-ingame-1.png">
            <LazyLoadImage
              alt="open-logbook-1"
              src={require('../../public/images/logbook/open-ingame-1.png?webp&width=300&url')}
              placeholderSrc={require('../../public/images/logbook/open-ingame-1.png?webp&lqip')}
              effect="blur"
              style={{ maxWidth: 300, width: '100%', aspectRatio: '16/9' }}
            />
          </a>
          <a href="/images/logbook/open-ingame-2.png">
            <LazyLoadImage
              alt="open-logbook-2"
              src={require('../../public/images/logbook/open-ingame-2.png?webp&width=300&url')}
              placeholderSrc={require('../../public/images/logbook/open-ingame-2.png?webp&lqip')}
              effect="blur"
              style={{ maxWidth: 300, width: '100%', aspectRatio: '16/9' }}
            />
          </a>
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
          <a href="/images/logbook/render.png">
            <LazyLoadImage
              alt="logbook-rendered"
              src={require('../../public/images/logbook/render.png?webp&width=400&url')}
              placeholderSrc={require('../../public/images/logbook/render.png?webp&lqip')}
              effect="blur"
              style={{ maxWidth: 400, width: '100%', aspectRatio: '841/481' }}
            />
          </a>
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
          <a href="/images/logbook/icons.png">
            <LazyLoadImage
              alt="logbook-icons"
              src={require('../../public/images/logbook/icons.png?webp&width=300&url')}
              placeholderSrc={require('../../public/images/logbook/icons.png?webp&lqip')}
              effect="blur"
              style={{ maxWidth: 300, width: '100%', aspectRatio: '2/1' }}
            />
          </a>
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
