/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

// next imports
import Link from 'next/link';
import Image from 'next/image';
import type { GetStaticPropsResult } from 'next';

// other imports
import usernames from '../../other/usernames';

// image imports
import PumpkinFront from '../../public/images/other/pumpkin_front.png';
import PumpkinBack from '../../public/images/other/pumpkin_back.png';
import Piston2 from '../../public/images/other/piston2.png';
import CarParts from '../../public/images/other/car-parts.png';

export function getStaticProps():GetStaticPropsResult<{
  title:string
  id:string
}> {
  return {
    props: {
      title: 'Unused Parts',
      id: 'unused-parts',
    },
  };
}

export default function UnusedParts() {
  return (
    <div>
      <div className="content">
        <h1 className="content-title">Unused Parts</h1>
      </div>
      <div className="card">
        <a
          id="plastic-pumpkin"
          href="#"
          style={{ visibility: 'hidden' }}
          aria-hidden="true"
        />
        <figure>
          <Image
            alt="plastic-pumpkin-front"
            src={PumpkinFront}
            placeholder="blur"
            loading="lazy"
            priority={false}
            width={300}
            height={300}
          />
          <Image
            alt="plastic-pumpkin-back"
            src={PumpkinBack}
            placeholder="blur"
            loading="lazy"
            priority={false}
            width={300}
            height={300}
          />
          <figcaption>
            Plastic Pumpkin
            <br />
            <small>
              Found by
              {' '}
              {usernames.turbo}
              , Files from
              {' '}
              {usernames.nick}
              , Rendered
              by
              {' '}
              {usernames.charging}
            </small>
          </figcaption>
        </figure>
        <a
          id="piston2"
          href="#"
          style={{ visibility: 'hidden' }}
          aria-hidden="true"
        />
        <figure>
          <Image
            alt="piston2"
            src={Piston2}
            placeholder="blur"
            loading="lazy"
            priority={false}
            width={400}
            height={(400 / Piston2.width) * Piston2.height}
          />
          <figcaption>
            Piston 2
            <br />
            <small>
              Found by
              {' '}
              {usernames.turbo}
              , Image by
              {' '}
              {usernames.ivan}
            </small>
          </figcaption>
        </figure>
        <a
          id="car-parts"
          href="#"
          style={{ visibility: 'hidden' }}
          aria-hidden="true"
        />
        <figure>
          <Image
            alt="car-parts"
            src={CarParts}
            placeholder="blur"
            loading="lazy"
            priority={false}
            width={500}
            height={(500 / CarParts.width) * CarParts.height}
          />
          <figcaption>
            Survival Car Parts (From
            {' '}
            <Link scroll href="/devblog/7#survival-cars" prefetch={false}>
              <a>Devblog 7</a>
            </Link>
            )
            <br />
            <small>
              Image by
              {' '}
              {usernames.bananaCat}
            </small>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
