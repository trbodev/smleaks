/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable global-require */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-danger */

// next imports
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import type { GetStaticPropsResult } from 'next';

// other imports
import moment from 'moment';
import Comments from '../../components/Comments';
import { generateURL } from '../../helpers/urls';
import config from '../../other/config';
import { devblog22 as devblogSrc } from '../../other/devblog_descriptions';

// image imports
import Title from '../../public/images/devblog/22/title.png';

export function getStaticProps():GetStaticPropsResult<{
    title:string
    id:string
    description: string
    type: string
    devblog: {
      id:string
      description:string
      url: string
      date: string
    }
    image: {
      url:string,
      large:boolean
    }
}> {
  return {
    props: {
      title: 'Devblog 22',
      id: 'devblog-22',
      type: 'article',
      description: devblogSrc.description,
      devblog: {
        id: '22',
        ...devblogSrc,
      },
      image: {
        url: generateURL(
          'http',
          config.domain.name,
          config.domain.secure,
          Title.src,
        ),
        large: true,
      },
    },
  };
}

export default function Devblog22({
  devblog,
}:{
  devblog:{
    id:string
    date:string
    url: string
  }
}) {
  return (
    <div>
      <Head>
        <meta
          property="og:article:published_time"
          content={moment(devblog.date, 'MM-DD-YYYY').format('YYYY-M-D')}
        />
      </Head>
      <div className="content">
        <h1 className="content-title">
          Devblog
          {' '}
          {devblog.id}
          {' '}
          -
          {' '}
          {moment(devblog.date, 'MM-DD-YYYY').format('MMMM Do, YYYY')}
          {' '}
          -
          {' '}
          <a href={devblog.url}>Original</a>
        </h1>
      </div>
      <div className="card">
        <article>
          <div
            className="alert"
            style={{
              backgroundColor: '#302c19',
              backgroundImage: 'none',
              borderColor: '#8c790e',
            }}
          >
            <h6 className="alert-heading">
              <b>Note:</b>
            </h6>
            This was a April Fools joke that me (
            <a href="https://trbo.sh">Turbo Biscuit</a>
            ) and
            {' '}
            <a href="https://github.com/technologicnick">Technologic Nick</a>
            {' '}
            created with the use of the domain name
            {' '}
            <a href="https://scrapmechanic.net/news/devblog-22-is-here">
              scrapmechanic.net
            </a>
            {' '}
            (that I own) and
            {' '}
            <a href="https://workers.cloudflare.com">Cloudflare Workers</a>
            {' '}
            to
            host the page.
          </div>
          <br />
          <Image
            alt="title"
            src={Title}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>Calling all Mechanics!</b>
          <br />
          New devblog, coming through! This time, we want to focus on some
          optimisations coming up in the not-too-distant future.
          <br />
          <br />
          <br />
          <a
            href="#"
            id="removed-collisions"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <video width="100%" autoPlay loop muted playsInline>
            <source src="https://i.imgur.com/fPrDJl1.mp4" type="video/mp4" />
          </video>
          <br />
          <br />
          <b>- Removed collisions</b>
          <br />
          In the last couple of weeks we&apos;ve improved our communications
          with you, the community. One of the most requested features is to
          optimise the game. This is something something we&apos;ll never stop
          working on and it&apos;s always ongoing. Today we can bring you a huge
          milestone in optimisation with the removal of collisions.
          <br />
          <br />
          Say goodbye to collisions ruining all of your tank battles and mechs.
          This bug in our physics engine has been driving mechanics crazy for
          years. Thankfully we&apos;ve finally found the source of the lag and
          have sent in some farmbots to take care of it.
          <br />
          <br />
          <br />
          <a
            href="#"
            id="cotton-madness"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <Image
            src={{
              src: 'https://i.imgur.com/7fBap4n.jpg',
              width: 1,
              height: 1,
            }}
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>- Cotton madness</b>
          <br />
          In
          {' '}
          <Link scroll href="/devblog/20" prefetch={false}>
            <a>Devblog 20</a>
          </Link>
          {' '}
          we showed off the some of our new clothing for the very first time.
          Since then we’ve had a ton of great feedback from the community,
          including many balance tweaks. We’re happy to confirm that the team
          has increased the cotton spawn rate so you can find it a lot easier.
          Does it require further increasing? Let us know what you think in the
          comments!
          <br />
          <br />
          <br />
          <a
            href="#"
            id="raid-performance"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <Image
            src={{
              src: 'https://i.imgur.com/MKMSSLG.png',
              width: 1,
              height: 1,
            }}
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>- Raid performance</b>
          <br />
          The next in-development tech is something we’re especially excited to
          share: lag free raids. The community has shown us performance is very
          important. We&apos;ve reduced the raid size to a single totebot for
          maximum performance. In the old raid system performance would often
          drop to an unplayable level. The new raid system is able to distribute
          system resources to other systems, which we hope will give Survival a
          much more smooth feel. We can’t wait for you to try it out yourself!
          <br />
          <br />
          <br />
          <a
            href="#"
            id="offline-play"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <a
            href="#"
            id="multiplayer"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <Image
            src={{
              src: 'https://i.imgur.com/76uEf0K.jpg',
              width: 1,
              height: 1,
            }}
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>- Offline play &gt; multiplayer</b>
          <br />
          Mechanics from everywhere around the world like to play our game.
          Recently we&apos;ve talked with some of our community members about
          what they think could be improved. Offline play was a feature that got
          requested a lot. The reason this hasn&apos;t been added yet is because
          multiplayer requires you to be connected to the Steam servers.
          <br />
          <br />
          Therefore we&apos;re happy to confirm multiplayer will be removed in
          favor of offline play! This also means there will be less input lag,
          further increasing performance of the game. To not feel lonely in your
          world you can spawn friends using the /spawn command!
          <br />
          <br />
          <br />
          We have an awesome team that is making amazing progress every day,
          working hard to create a unique gaming experience that you will
          hopefully love for many years to come. Thanks for your support – and
          for playing!
          <br />
          <br />
          <b>Until next time, Mechanics! Keep on scrapping!</b>
        </article>
      </div>
      <Comments />
    </div>
  );
}
