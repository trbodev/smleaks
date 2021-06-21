/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

// next imports
import Image from 'next/image';
import type { GetStaticPropsResult } from 'next';

// other imports
import usernames from '../../other/usernames';

// image imports
import EncryptorBlast from '../../public/images/other/encryptorblast.png';

export function getStaticProps():GetStaticPropsResult<{
  title:string
  id:string
}> {
  return {
    props: {
      title: 'Unused Particles',
      id: 'unused-particles',
    },
  };
}

export default function UnusedParticles() {
  return (
    <div>
      <div className="content">
        <h1 className="content-title">Unused Particles</h1>
      </div>
      <div className="card">
        <a
          id="encryptor-turn-on"
          href="#"
          style={{ visibility: 'hidden' }}
          aria-hidden="true"
        />
        <figure>
          <Image
            alt="encryptor-turn-on"
            src={EncryptorBlast}
            placeholder="blur"
            loading="lazy"
            priority={false}
            width={300}
            height={(300 / EncryptorBlast.width) * EncryptorBlast.height}
          />
          <figcaption>
            Encryptor Turn On
            <br />
            <small>
              Found by
              {' '}
              {usernames.turbo}
            </small>
          </figcaption>
        </figure>
        <a
          id="encryptor-particle"
          href="#"
          style={{ visibility: 'hidden' }}
          aria-hidden="true"
        />
        <figure>
          <video
            src="/videos/encryptorparticle.mp4"
            controls
            style={{ maxWidth: 600, width: '100%' }}
          />
          <figcaption>
            Encryptor Particle Showcase
            <br />
            <small>
              By
              {' '}
              {usernames.tomatech}
            </small>
          </figcaption>
        </figure>
        <a
          id="audio-log-particles"
          href="#"
          style={{ visibility: 'hidden' }}
          aria-hidden="true"
        />
        <figure>
          <video
            src="/videos/audio-log-particle.mp4"
            controls
            style={{ maxWidth: 600, width: '100%' }}
          />
          <figcaption>
            Audio Log Particle
            <br />
            <small>
              Found by
              {' '}
              {usernames.questionMark}
            </small>
          </figcaption>
        </figure>
        <figure>
          <video
            src="/videos/audio-log-pickup-particle.mp4"
            controls
            style={{ maxWidth: 600, width: '100%' }}
          />
          <figcaption>
            Audio Log Pickup Particle
            <br />
            <small>
              Found by
              {' '}
              {usernames.questionMark}
            </small>
          </figcaption>
        </figure>
        <figure>
          <iframe title="More unused particles showcase" src="https://www.youtube.com/embed/dqVTn9LYx2M" style={{ aspectRatio: '16/9', width: '100%', maxWidth: 500 }} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          <figcaption>
            More unused particles showcase
            <br />
            <code><small>Names (in order of apperance): Orientation, Placeholder 1-3</small></code>
            <br />
            <small>
              Found by
              {' '}
              {usernames.shrooToo}
            </small>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
