/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { LazyLoadImage } from 'react-lazy-load-image-component';
import usernames from '../../other/usernames';

export const getStaticProps = () => ({
  props: {
    title: 'Unused Particles',
    id: 'unused-particles',
  },
});

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
          <a href="/images/other/encryptorblast.png">
            <LazyLoadImage
              alt="encryptor-turn-on"
              src={require('../../public/images/other/encryptorblast.png?webp&width=300&url')}
              placeholderSrc={require('../../public/images/other/encryptorblast.png?webp&lqip')}
              style={{ maxWidth: 300, width: '100%' }}
              sizes={[300]}
            />
          </a>
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
            controls="controls"
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
            controls="controls"
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
            controls="controls"
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
      </div>
    </div>
  );
}
