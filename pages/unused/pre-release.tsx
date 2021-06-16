/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

// next imports
import Image from 'next/image';
import type { GetStaticPropsResult } from 'next';

// other imports
import usernames from '../../other/usernames';

// image imports
import GasPump from '../../public/images/pre-release/gas-pump.png';
import Mechanical from '../../public/images/pre-release/mechanical.png';
import TiledRedMetal from '../../public/images/pre-release/tiled-red-metal.png';
import SuperHeavyConcrete from '../../public/images/pre-release/super-heavy-concrete.png';
import StrongSteel from '../../public/images/pre-release/strong-steel.png';
import SuperStrongSteel from '../../public/images/pre-release/super-strong-steel.png';
import Ice from '../../public/images/pre-release/ice.png';
import Coal from '../../public/images/pre-release/coal.png';
import Copper from '../../public/images/pre-release/copper.png';
import GalvanizedMetal from '../../public/images/pre-release/galvanized-metal.png';
import TapedPlaster from '../../public/images/pre-release/taped-plaster.png';

export function getStaticProps():GetStaticPropsResult<{
  title:string
  id:string
}> {
  return {
    props: {
      title: 'Unused Survival Pre-Release',
      id: 'unused-pre-release',
    },
  };
}

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
          <Image
            alt="gas-pump"
            src={GasPump}
            placeholder="blur"
            loading="lazy"
            priority={false}
            width={500}
            height={(500 / GasPump.width) * GasPump.height}
          />
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
          <Image
            alt="mechanical-block"
            src={Mechanical}
            placeholder="blur"
            loading="lazy"
            priority={false}
            width={500}
            height={(500 / Mechanical.width) * Mechanical.height}
          />
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
          <Image
            alt="tiled-red-metal-block"
            src={TiledRedMetal}
            placeholder="blur"
            loading="lazy"
            priority={false}
            width={500}
            height={(500 / TiledRedMetal.width) * TiledRedMetal.height}
          />
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
          <Image
            alt="super-heavy-concrete-block"
            src={SuperHeavyConcrete}
            placeholder="blur"
            loading="lazy"
            priority={false}
            width={500}
            height={(500 / SuperHeavyConcrete.width) * SuperHeavyConcrete.height}
          />
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
          <Image
            alt="strong-steel-block"
            src={StrongSteel}
            placeholder="blur"
            loading="lazy"
            priority={false}
            width={500}
            height={(500 / StrongSteel.width) * StrongSteel.height}
          />
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
          <Image
            alt="super-strong-steel-block"
            src={SuperStrongSteel}
            placeholder="blur"
            loading="lazy"
            priority={false}
            width={500}
            height={(500 / SuperStrongSteel.width) * SuperStrongSteel.height}
          />
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
          <Image
            alt="ice-block"
            src={Ice}
            placeholder="blur"
            loading="lazy"
            priority={false}
            width={500}
            height={(500 / Ice.width) * Ice.height}
          />
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
          <Image
            alt="coal-block"
            src={Coal}
            placeholder="blur"
            loading="lazy"
            priority={false}
            width={500}
            height={(500 / Coal.width) * Coal.height}
          />
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
          <Image
            alt="copper-block"
            src={Copper}
            placeholder="blur"
            loading="lazy"
            priority={false}
            width={500}
            height={(500 / Copper.width) * Copper.height}
          />
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
          <Image
            alt="galvanized-metal-block"
            src={GalvanizedMetal}
            placeholder="blur"
            loading="lazy"
            priority={false}
            width={500}
            height={(500 / GalvanizedMetal.width) * GalvanizedMetal.height}
          />
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
          <Image
            alt="taped-plaster-block"
            src={TapedPlaster}
            placeholder="blur"
            loading="lazy"
            priority={false}
            width={500}
            height={(500 / TapedPlaster.width) * TapedPlaster.height}
          />
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
