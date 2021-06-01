/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { LazyLoadImage } from 'react-lazy-load-image-component';
import usernames from '../../other/usernames';

export const getStaticProps = () => ({
  props: {
    title: 'Unused Survival Pre-Release',
    id: 'unused-pre-release',
  },
});

export default function UnusedPreRelease() {
  return (
    <div>
      <div className="content">
        <h1 className="content-title">Unused Survival Pre-Release</h1>
      </div>
      <div className="card">
        <a
          id="gas-pump"
          href="#"
          style={{ visibility: 'hidden' }}
          aria-hidden="true"
        />
        <figure>
          <a href="/images/pre-release/gas-pump.png">
            <LazyLoadImage
              alt="ship-tile"
              src={require('../../public/images/pre-release/gas-pump.png?webp&width=500&url')}
              placeholderSrc={require('../../public/images/pre-release/gas-pump.png?webp&lqip')}
              style={{ maxWidth: 500, width: '100%' }}
              effect="blur"
            />
          </a>
          <br />
          <figcaption>
            Mechanic Station Gas Pump
            <br />
            <small>
              Image by
              {' '}
              {usernames.redBoi}
            </small>
          </figcaption>
        </figure>
        <a
          id="mechanical"
          href="#"
          style={{ visibility: 'hidden' }}
          aria-hidden="true"
        />
        <figure>
          <a href="/images/pre-release/mechanical.png">
            <LazyLoadImage
              alt="ship-tile"
              src={require('../../public/images/pre-release/mechanical.png?webp&width=500&url')}
              placeholderSrc={require('../../public/images/pre-release/mechanical.png?webp&lqip')}
              style={{ maxWidth: 500, width: '100%' }}
              effect="blur"
            />
          </a>
          <br />
          <figcaption>
            Mechanical Block
            <br />
            <small>
              Found by
              {' '}
              {usernames.dartFrog}
              , Images by
              {' '}
              {usernames.redBoi}
            </small>
          </figcaption>
        </figure>
        <a
          id="tiled-red-metal"
          href="#"
          style={{ visibility: 'hidden' }}
          aria-hidden="true"
        />
        <figure>
          <a href="/images/pre-release/tiled-red-metal.png">
            <LazyLoadImage
              alt="ship-tile"
              src={require('../../public/images/pre-release/tiled-red-metal.png?webp&width=500&url')}
              placeholderSrc={require('../../public/images/pre-release/tiled-red-metal.png?webp&lqip')}
              style={{ maxWidth: 500, width: '100%' }}
              effect="blur"
            />
          </a>
          <br />
          <figcaption>
            Tiled Red Metal
            <br />
            <small>
              Found by
              {' '}
              {usernames.redBoi}
            </small>
          </figcaption>
        </figure>
        <a
          id="super-heavy-concrete"
          href="#"
          style={{ visibility: 'hidden' }}
          aria-hidden="true"
        />
        <figure>
          <a href="/images/pre-release/super-heavy-concrete.png">
            <LazyLoadImage
              alt="ship-tile"
              src={require('../../public/images/pre-release/super-heavy-concrete.png?webp&width=500&url')}
              placeholderSrc={require('../../public/images/pre-release/super-heavy-concrete.png?webp&lqip')}
              style={{ maxWidth: 500, width: '100%' }}
              effect="blur"
            />
          </a>
          <br />
          <figcaption>
            Super Heavy Concrete
            <br />
            <small>
              Found by
              {' '}
              {usernames.dartFrog}
              , Images by
              {' '}
              {usernames.redBoi}
            </small>
          </figcaption>
        </figure>
        <a
          id="strong-steel"
          href="#"
          style={{ visibility: 'hidden' }}
          aria-hidden="true"
        />
        <figure>
          <a href="/images/pre-release/strong-steel.png">
            <LazyLoadImage
              alt="ship-tile"
              src={require('../../public/images/pre-release/strong-steel.png?webp&width=500&url')}
              placeholderSrc={require('../../public/images/pre-release/strong-steel.png?webp&lqip')}
              style={{ maxWidth: 500, width: '100%' }}
              effect="blur"
            />
          </a>
          <br />
          <figcaption>
            Strong Steel
            <br />
            <small>
              Found by
              {' '}
              {usernames.dartFrog}
              , Images by
              {' '}
              {usernames.redBoi}
            </small>
          </figcaption>
        </figure>
        <a
          id="super-strong-steel"
          href="#"
          style={{ visibility: 'hidden' }}
          aria-hidden="true"
        />
        <figure>
          <a href="/images/pre-release/super-strong-steel.png">
            <LazyLoadImage
              alt="ship-tile"
              src={require('../../public/images/pre-release/super-strong-steel.png?webp&width=500&url')}
              placeholderSrc={require('../../public/images/pre-release/super-strong-steel.png?webp&lqip')}
              style={{ maxWidth: 500, width: '100%' }}
              effect="blur"
            />
          </a>
          <br />
          <figcaption>
            Super Strong Steel
            <br />
            <small>
              Found by
              {' '}
              {usernames.dartFrog}
              , Images by
              {' '}
              {usernames.redBoi}
            </small>
          </figcaption>
        </figure>
        <a
          id="ice"
          href="#"
          style={{ visibility: 'hidden' }}
          aria-hidden="true"
        />
        <figure>
          <a href="/images/pre-release/ice.png">
            <LazyLoadImage
              alt="ship-tile"
              src={require('../../public/images/pre-release/ice.png?webp&width=500&url')}
              placeholderSrc={require('../../public/images/pre-release/ice.png?webp&lqip')}
              style={{ maxWidth: 500, width: '100%' }}
              effect="blur"
            />
          </a>
          <br />
          <figcaption>
            Ice
            <br />
            <small>
              Found by
              {' '}
              {usernames.dartFrog}
              , Images by
              {' '}
              {usernames.redBoi}
            </small>
          </figcaption>
        </figure>
        <a
          id="coal"
          href="#"
          style={{ visibility: 'hidden' }}
          aria-hidden="true"
        />
        <figure>
          <a href="/images/pre-release/coal.png">
            <LazyLoadImage
              alt="ship-tile"
              src={require('../../public/images/pre-release/coal.png?webp&width=500&url')}
              placeholderSrc={require('../../public/images/pre-release/coal.png?webp&lqip')}
              style={{ maxWidth: 500, width: '100%' }}
              effect="blur"
            />
          </a>
          <br />
          <figcaption>
            Coal
            <br />
            <small>
              Found by
              {' '}
              {usernames.dartFrog}
              , Images by
              {' '}
              {usernames.redBoi}
            </small>
          </figcaption>
        </figure>
        <a
          id="copper"
          href="#"
          style={{ visibility: 'hidden' }}
          aria-hidden="true"
        />
        <figure>
          <a href="/images/pre-release/copper.png">
            <LazyLoadImage
              alt="ship-tile"
              src={require('../../public/images/pre-release/copper.png?webp&width=500&url')}
              placeholderSrc={require('../../public/images/pre-release/copper.png?webp&lqip')}
              style={{ maxWidth: 500, width: '100%' }}
              effect="blur"
            />
          </a>
          <br />
          <figcaption>
            Copper
            <br />
            <small>
              Found by
              {' '}
              {usernames.dartFrog}
              , Images by
              {' '}
              {usernames.redBoi}
            </small>
          </figcaption>
        </figure>
        <a
          id="galvanized-metal"
          href="#"
          style={{ visibility: 'hidden' }}
          aria-hidden="true"
        />
        <figure>
          <a href="/images/pre-release/galvanized-metal.png">
            <LazyLoadImage
              alt="ship-tile"
              src={require('../../public/images/pre-release/galvanized-metal.png?webp&width=500&url')}
              placeholderSrc={require('../../public/images/pre-release/galvanized-metal.png?webp&lqip')}
              style={{ maxWidth: 500, width: '100%' }}
              effect="blur"
            />
          </a>
          <br />
          <figcaption>
            Galvanized Metal
            <br />
            <small>
              Found by
              {' '}
              {usernames.redBoi}
            </small>
          </figcaption>
        </figure>
        <a
          id="taped-plaster"
          href="#"
          style={{ visibility: 'hidden' }}
          aria-hidden="true"
        />
        <figure>
          <a href="/images/pre-release/taped-plaster.png">
            <LazyLoadImage
              alt="ship-tile"
              src={require('../../public/images/pre-release/taped-plaster.png?webp&width=500&url')}
              placeholderSrc={require('../../public/images/pre-release/taped-plaster.png?webp&lqip')}
              style={{ maxWidth: 500, width: '100%' }}
              effect="blur"
            />
          </a>
          <br />
          <figcaption>
            Taped Plaster
            <br />
            <small>
              Found by
              {' '}
              {usernames.dartFrog}
              , Images by
              {' '}
              {usernames.redBoi}
            </small>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
