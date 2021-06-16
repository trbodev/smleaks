/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

// next imports
import Image from 'next/image';
import type { GetStaticPropsResult } from 'next';

// other imports
import usernames from '../../other/usernames';

// styles imports
import HoverBlur from '../../styles/HoverBlur.module.css';

// image imports
import HangingCharacter from '../../public/images/pre-survival/hanging-character.png';
import IndestructableBlock from '../../public/images/pre-survival/indestructable-block.png';
import InsulationBlock from '../../public/images/pre-survival/insulation-block.png';
import SpaceshipBlock from '../../public/images/pre-survival/spaceship-block.png';
import ShipTile from '../../public/images/pre-survival/ship-tile.png';

export function getStaticProps():GetStaticPropsResult<{
  title:string
  id:string
}> {
  return {
    props: {
      title: 'Unused Pre-Survival',
      id: 'unused-pre-survival',
    },
  };
}

export default function UnusedPreSurvival() {
  return (
    <div>
      <div className="content">
        <h1 className="content-title">Unused Pre-Survival</h1>
      </div>
      <div className="card">
        <a
          id="hanging-character"
          href="#"
          style={{ visibility: 'hidden' }}
          aria-hidden="true"
        />
        <figure>
          <Image
            alt="hanging-character"
            src={HangingCharacter}
            className={HoverBlur['hover-blur']}
            placeholder="blur"
            loading="lazy"
            priority={false}
            width={300}
            height={(300 / HangingCharacter.width) * HangingCharacter.height}
          />
          <figcaption>
            Hanging Character
            <br />
            <small>
              Image by
              {' '}
              {usernames.dartFrog}
            </small>
          </figcaption>
        </figure>
        <a
          id="indestructable-block"
          href="#"
          style={{ visibility: 'hidden' }}
          aria-hidden="true"
        />
        <figure>
          <Image
            alt="indestructable-block"
            src={IndestructableBlock}
            placeholder="blur"
            loading="lazy"
            priority={false}
            width={200}
            height={(200 / IndestructableBlock.width) * IndestructableBlock.height}
          />
          <br />
          <video
            src="https://thumbs.gfycat.com/PoshAdmirableIberianbarbel-mobile.mp4"
            autoPlay
            muted
            loop
            style={{ maxWidth: 500, width: '100%' }}
          />
          <br />
          <video
            src="https://thumbs.gfycat.com/ReliableImmaterialAmericanalligator-mobile.mp4"
            autoPlay
            muted
            loop
            style={{ maxWidth: 500, width: '100%' }}
          />
          <br />
          <video
            src="https://thumbs.gfycat.com/ClosedRemorsefulBedlingtonterrier-mobile.mp4"
            autoPlay
            muted
            loop
            style={{ maxWidth: 500, width: '100%' }}
          />
          <br />
          <figcaption>
            Indestructable Block
            <br />
            <small>
              &quot;Commented out in 0.1.16, Wasn&apos;t actually irremovable.
              It disappeared from the files in 0.2 or earlier. Nowadays we have
              a successor to this block called the Framework Block, it&apos;s
              used heavily in the warehouses and is permanently encrypted.&quot;
              <br />
              Images by
              {' '}
              {usernames.dartFrog}
            </small>
          </figcaption>
        </figure>
        <a
          id="insulation-block"
          href="#"
          style={{ visibility: 'hidden' }}
          aria-hidden="true"
        />
        <figure>
          <Image
            alt="insulation-block"
            src={InsulationBlock}
            placeholder="blur"
            loading="lazy"
            priority={false}
            width={200}
            height={(200 / InsulationBlock.width) * InsulationBlock.height}
          />
          <br />
          <video
            src="https://thumbs.gfycat.com/UncomfortableRichHarpyeagle-mobile.mp4"
            autoPlay
            muted
            loop
            style={{ maxWidth: 500, width: '100%' }}
          />
          <br />
          <video
            src="https://thumbs.gfycat.com/CraftyWillingHapuka-mobile.mp4"
            autoPlay
            muted
            loop
            style={{ maxWidth: 500, width: '100%' }}
          />
          <br />
          <video
            src="https://thumbs.gfycat.com/AgitatedVigorousHog-mobile.mp4"
            autoPlay
            muted
            loop
            style={{ maxWidth: 500, width: '100%' }}
          />
          <br />
          <figcaption>
            Insulation Block
            <br />
            <small>
              &quot;Was commented out in the files and removed in 0.2 or
              earlier. An updated version of this block has been added to the
              game in the Survival Update (0.4.0)&quot;
              <br />
              Images by
              {' '}
              {usernames.dartFrog}
            </small>
          </figcaption>
        </figure>
        <a
          id="spaceship-block"
          href="#"
          style={{ visibility: 'hidden' }}
          aria-hidden="true"
        />
        <figure>
          <Image
            alt="spaceship-block"
            src={SpaceshipBlock}
            placeholder="blur"
            loading="lazy"
            priority={false}
            width={200}
            height={(200 / SpaceshipBlock.width) * SpaceshipBlock.height}
          />
          <br />
          <video
            src="https://thumbs.gfycat.com/DizzyAjarFly-mobile.mp4"
            autoPlay
            muted
            loop
            style={{ maxWidth: 500, width: '100%' }}
          />
          <br />
          <video
            src="https://thumbs.gfycat.com/BriskGratefulBream-mobile.mp4"
            autoPlay
            muted
            loop
            style={{ maxWidth: 500, width: '100%' }}
          />
          <br />
          <video
            src="https://thumbs.gfycat.com/SparklingRepentantDipper-mobile.mp4"
            autoPlay
            muted
            loop
            style={{ maxWidth: 500, width: '100%' }}
          />
          <br />
          <figcaption>
            Beta Spaceship Block
            <br />
            <small>
              &quot;Was commented out in the files and removed in 0.2 or
              earlier. Unlike the other 2 commented blocks, it had no
              description or name in the inventory, and it&apos;s preview was
              larger than all other blocks. It was officially added to the game
              in version 0.2.11&quot;
              <br />
              Images by
              {' '}
              {usernames.dartFrog}
            </small>
          </figcaption>
        </figure>
        <a
          id="ship-tile"
          href="#"
          style={{ visibility: 'hidden' }}
          aria-hidden="true"
        />
        <figure>
          <Image
            alt="ship-tile"
            src={ShipTile}
            placeholder="blur"
            loading="lazy"
            priority={false}
            width={500}
            height={(500 / ShipTile.width) * ShipTile.height}
          />
          <br />
          <figcaption>
            Ship Tile
            <br />
            <small>
              Image by
              {' '}
              {usernames.dartFrog}
            </small>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
