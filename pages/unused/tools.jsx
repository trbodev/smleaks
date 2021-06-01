/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Link from 'next/link';
import usernames from '../../other/usernames';

export const getStaticProps = () => ({
  props: {
    title: 'Unused Tools',
    id: 'unused-tools',
  },
});

export default function UnusedTools() {
  return (
    <div>
      <div className="content">
        <h1 className="content-title">Unused Tools</h1>
      </div>
      <div className="card">
        <a id="lift-remote" href="#" style={{ visibility: 'hidden' }} aria-hidden="true" />
        <figure>
          <a href="/images/tools/liftremote.png">
            <LazyLoadImage
              alt="lift-remote"
              src={require('../../public/images/tools/liftremote.png?webp&width=300&url')}
              placeholderSrc={require('../../public/images/tools/liftremote.png?webp&lqip')}
              style={{ maxWidth: 300, width: '100%' }}
            />
          </a>
          <figcaption>
            Lift Remote - (Mentioned in
            {' '}
            <Link href="/devblog/17#new-lift-concept"><a href="/devblog/17#new-lift-concept">Devblog 17</a></Link>
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
          <iframe title="Lift Remote Animation Mockup" src="https://www.youtube.com/embed/2BlEAF-f6j0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
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
          <a href="/images/tools/garden-shovel-hand.png">
            <LazyLoadImage
              alt="garden-shovel"
              src={require('../../public/images/tools/garden-shovel-hand.png?webp&width=300&url')}
              placeholderSrc={require('../../public/images/tools/garden-shovel-hand.png?webp&lqip')}
              style={{ maxWidth: 300, width: '100%' }}
            />
          </a>
          <a href="/images/tools/garden-shovel-color.png">
            <LazyLoadImage
              alt="garden-shovel"
              src={require('../../public/images/tools/garden-shovel-color.png?webp&width=300&url')}
              placeholderSrc={require('../../public/images/tools/garden-shovel-color.png?webp&lqip')}
              style={{ maxWidth: 180, width: '100%', marginLeft: 20 }}
            />
          </a>
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
