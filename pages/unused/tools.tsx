/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link';
import Image from 'next/image';
import type { GetStaticPropsResult } from 'next';
import usernames from '../../other/usernames';
import LiftRemote from '../../public/images/tools/liftremote.png';
import GardenShovelHand from '../../public/images/tools/garden-shovel-hand.png';
import GardenShovelColor from '../../public/images/tools/garden-shovel-color.png';

export function getStaticProps():GetStaticPropsResult<{
    title:string
    id:string
}> {
  return {
    props: {
      title: 'Unused Tools',
      id: 'unused-tools',
    },
  };
}

export default function UnusedTools() {
  return (
    <div>
      <div className="content">
        <h1 className="content-title">Unused Tools</h1>
      </div>
      <div className="card">
        <a id="lift-remote" href="#" style={{ visibility: 'hidden' }} aria-hidden="true" />
        <figure>
          <div>
            <Image
              alt="lift-remote"
              src={LiftRemote}
              placeholder="blur"
              loading="lazy"
              priority={false}
              width={300}
              height={300}
            />
          </div>
          <figcaption>
            Lift Remote - (Mentioned in
            {' '}
            <Link href="/devblog/17#new-lift-concept" prefetch={false}><a>Devblog 17</a></Link>
            )
            <br />
            <small>
              Found and Rendered by
              {' '}
              {usernames.charging}
            </small>
          </figcaption>
        </figure>
        <br />
        <figure>
          <iframe title="Lift Remote Animation Mockup" src="https://www.youtube.com/embed/2BlEAF-f6j0" style={{ aspectRatio: '16/9', width: '100%', maxWidth: 500 }} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          <figcaption>
            Lift Remote Animation Mockup
            <br />
            <small>
              Animated and Rendered By
              {' '}
              <a href="https://www.youtube.com/channel/UCqWxNkrT4EmoL7O1pY2w3xw">Rager</a>
              {' '}
              on Youtube
            </small>
          </figcaption>
        </figure>
        <br />
        <a id="garden-shovel" href="#" style={{ visibility: 'hidden' }} aria-hidden="true" />
        <figure>
          <Image
            alt="garden-shovel-hand"
            src={GardenShovelHand}
            placeholder="blur"
            loading="lazy"
            priority={false}
            width={300}
            height={(300 / GardenShovelHand.width) * GardenShovelHand.height}
          />
          <Image
            alt="garden-shovel-color"
            src={GardenShovelColor}
            placeholder="blur"
            loading="lazy"
            priority={false}
            width={180}
            height={(180 / GardenShovelColor.width) * GardenShovelColor.height}
          />
          <figcaption>
            Garden Shovel
            <br />
            <small>
              Found by
              {' '}
              {usernames.charging}
              , Images by
              {' '}
              {usernames.rockstar}
            </small>
          </figcaption>
        </figure>
        <br />
      </div>
    </div>
  );
}
