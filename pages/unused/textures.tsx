/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

// next imports
import Image from 'next/image';
import type { GetStaticPropsResult } from 'next';

// other imports
import usernames from '../../other/usernames';

// image imports
import OutfitPackage from '../../public/images/other/outfitpackge.png';
import DeadDuckHead from '../../public/images/other/deadduckhead.png';
import MechanicStationBillboardAlt from '../../public/images/other/mechanicstationbillboardalt.png';

export function getStaticProps():GetStaticPropsResult<{
  title:string
  id:string
}> {
  return {
    props: {
      title: 'Unused Textures',
      id: 'unused-textures',
    },
  };
}

export default function UnusedTextures() {
  return (
    <div>
      <div className="content">
        <h1 className="content-title">Unused Textures</h1>
      </div>
      <div className="card">
        <a
          id="outfitpackage"
          href="#"
          style={{ visibility: 'hidden' }}
          aria-hidden="true"
        />
        <figure>
          <Image
            alt="outfitpackage"
            src={OutfitPackage}
            placeholder="blur"
            loading="lazy"
            priority={false}
            width={400}
            height={(400 / OutfitPackage.width) * OutfitPackage.height}
          />
          <figcaption>
            Outfit Package Unused Textures
            <br />
            <small>
              Found by
              {' '}
              {usernames.turbo}
            </small>
          </figcaption>
        </figure>
        <a
          id="dead-duck"
          href="#"
          style={{ visibility: 'hidden' }}
          aria-hidden="true"
        />
        <figure>
          <Image
            alt="dead-duck"
            src={DeadDuckHead}
            placeholder="blur"
            loading="lazy"
            priority={false}
            width={300}
            height={(300 / DeadDuckHead.width) * DeadDuckHead.height}
          />
          <figcaption>
            Dead Duck
            <br />
            <small>
              Found by
              {' '}
              {usernames.turbo}
            </small>
          </figcaption>
        </figure>
        <a
          id="mechanic-station-billboard"
          href="#"
          style={{ visibility: 'hidden' }}
          aria-hidden="true"
        />
        <figure>
          <Image
            alt="mechanic-station-billboard-alt"
            src={MechanicStationBillboardAlt}
            placeholder="blur"
            loading="lazy"
            priority={false}
            width={500}
            height={(500 / MechanicStationBillboardAlt.width) * MechanicStationBillboardAlt.height}
          />
          <figcaption>
            Mechanic Station Billboard Unused Alt Texture
            <br />
            <small>
              Found by
              {' '}
              {usernames.turbo}
            </small>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
