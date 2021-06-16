/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { LazyLoadImage } from 'react-lazy-load-image-component';
import usernames from '../../other/usernames';
import HoverBlur from '../../styles/HoverBlur.module.css';

export const getStaticProps = () => ({
  props: {
    title: 'Unused Pre-Survival',
    id: 'unused-pre-survival',
  },
});

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
          <a href="/images/pre-survival/hanging-character.png">
            <LazyLoadImage
              alt="hanging-character"
              src={require('../../public/images/pre-survival/hanging-character.png?webp&width=300&url')}
              placeholderSrc={require('../../public/images/pre-survival/hanging-character.png?webp&lqip')}
              style={{ maxWidth: 300, width: '100%', aspectRatio: '443/646' }}
              className={HoverBlur['hover-blur']}
              effect="blur"
            />
          </a>
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
          <a href="/images/pre-survival/indestructable-block.png">
            <LazyLoadImage
              alt="indestructable-block"
              src={require('../../public/images/pre-survival/indestructable-block.png?webp&width=200&url')}
              placeholderSrc={require('../../public/images/pre-survival/indestructable-block.png?webp&lqip')}
              style={{ maxWidth: 200, width: '100%', aspectRatio: '214/467' }}
              effect="blur"
            />
          </a>
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
          <a href="/images/pre-survival/insulation-block.png">
            <LazyLoadImage
              alt="insulation-block"
              src={require('../../public/images/pre-survival/insulation-block.png?webp&width=200&url')}
              placeholderSrc={require('../../public/images/pre-survival/insulation-block.png?webp&lqip')}
              style={{ maxWidth: 200, width: '100%', aspectRatio: '234/476' }}
              effect="blur"
            />
          </a>
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
          <a href="/images/pre-survival/spaceship-block.png">
            <LazyLoadImage
              alt="spaceship-block"
              src={require('../../public/images/pre-survival/spaceship-block.png?webp&width=200&url')}
              placeholderSrc={require('../../public/images/pre-survival/spaceship-block.png?webp&lqip')}
              style={{ maxWidth: 200, width: '100%', aspectRatio: '235/481' }}
              effect="blur"
            />
          </a>
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
          <a href="/images/pre-survival/ship-tile.png">
            <LazyLoadImage
              alt="ship-tile"
              src={require('../../public/images/pre-survival/ship-tile.png?webp&width=500&url')}
              placeholderSrc={require('../../public/images/pre-survival/ship-tile.png?webp&lqip')}
              style={{ maxWidth: 500, width: '100%', aspectRatio: '1459/781' }}
              effect="blur"
            />
          </a>
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
