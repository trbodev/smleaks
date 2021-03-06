/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable global-require */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-danger */

// next imports
import Image from 'next/image';
import Head from 'next/head';
import type { GetStaticPropsResult } from 'next';

// other imports
import moment from 'moment';
import Comments from '../../components/Comments';
import { generateURL } from '../../helpers/urls';
import config from '../../other/config';
import { devblog5 as devblogSrc } from '../../other/devblog_descriptions';

// image imports
import Title from '../../public/images/devblog/5/title.png';

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
      src:string,
      large:boolean,
      enabled:boolean
    }
}> {
  return {
    props: {
      title: 'Devblog 5',
      id: 'devblog-5',
      type: 'article',
      description: devblogSrc.description,
      devblog: {
        id: '5',
        ...devblogSrc,
      },
      image: {
        src: generateURL(
          'http',
          config.domain.name,
          config.domain.secure,
          Title.src,
        ),
        large: true,
        enabled: true,
      },
    },
  };
}

export default function Devblog5({
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
          {moment(devblog.date, 'MM-DD-YYYY').format('MMMM Do, YYYY') }
          {' '}
          -
          {' '}
          <a href={devblog.url}>Original</a>
        </h1>
      </div>
      <div className="card">
        <article>
          <Image
            alt="title"
            src={Title}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <b>Hi Mechanics!</b>
          <br />
          Another fantastic month has passed!
          Feels like we???ve been working 25 hours a day this last month
          and the coffee machine at Scrap Mechanic HQ has been put
          through the ultimate stress test. Bugs have been squashed and
          awesome has been added. Highlights? Highlights:
          <br />
          <br />
          <br />
          <a href="#" id="new-textures" style={{ display: 'block' }} aria-hidden="true" />
          <Image
            src={require('../../public/images/devblog/5/textures.jpg')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>- Build a Great-looking Hideout. Fast!</b>
          <br />
          Our base blocks have really been improved with new textures!
          They???ve gone from basic, plain colors to now looking like
          different materials. Best of all, they???ve all got different
          weights, so keep that in mind when you build vehicles. These
          blocks can be scaled to build big structures in no time at
          all!
          <br />
          <br />
          <br />
          <a href="#" id="new-clouds" style={{ display: 'block' }} aria-hidden="true" />
          <Image
            src={require('../../public/images/devblog/5/sky.jpg')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>- Fluffy New Clouds</b>
          <br />
          Since we started work on the game we???ve badly needed a neat
          skybox - we just never got round to making one. Something
          wonderful happened the other day though, when our talented
          artist created a flying machine and took to the sky with his
          mighty pencil. The result is nice: stylized, but not childish.
          Just the way we wanted them. Unfortunately our artist crashed
          somewhere and got stuck in a giant pine tree. We hope for his
          speedy return with fingers and talent intact.
          <br />
          <br />
          <br />
          <a href="#" id="steam" style={{ display: 'block' }} aria-hidden="true" />
          <Image
            src={require('../../public/images/devblog/5/scrapsteam.png')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>- Scrap Mechanic on Steam!</b>
          <br />
          Hold on Mechanics! Calm down! This doesn???t mean the game is
          out yet, but it does mean we???re currently implementing the
          game with Steam. We???re still making daily changes and testing
          it all out, and we???ll be in that phase just a little longer.
          All this means that we???re getting closer, so it???s still great
          news!
          <br />
          <br />
          <br />
          <a href="#" id="creative-terrain" style={{ display: 'block' }} aria-hidden="true" />
          <Image
            src={require('../../public/images/devblog/5/more-terrain-parts.jpg')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>- Terrain in Creative Mode</b>
          <br />
          We???ve added more vegetation, grass types and rocks! The
          Creative Mode terrain is starting to look nice and lush. It???s
          gonna be a great place to test out your machines, and we???ve
          even added a few sweet jump ramps here and there for all you
          daredevils!
          <br />
          <br />
          <br />
          <a href="#" id="new-building-parts" style={{ display: 'block' }} aria-hidden="true" />
          <Image
            src={require('../../public/images/devblog/5/new-building-parts.jpg')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>- New, Exciting Building Parts!</b>
          <br />
          We???ve added lots of new building parts for you to use in your
          creations. The game now has over 100 building parts, all
          lovingly modeled and designed from the ground up. We won???t be
          showing you all of them until you get your hands on the game,
          but some of them are straight up silly. Like this toilet paper
          roll??? Yes, you can actually make a house or vehicle out of
          toilet paper.
          <br />
          <br />
          <a href="#" id="general-fixes" style={{ display: 'block' }} aria-hidden="true" />
          <b>- General Fixes, Improvements</b>
          <br />
          Maybe not the most fun to read about, but a lot of our time
          has gone into actually cleaning things up. Adjusting and
          improving. We aim to make sure that the game maintains a good
          experience for the players throughout Early Access, and for
          that we need to make sure the framework is as neat and stable
          as possible.
          <br />
          <br />
          <br />
          <a href="#" id="release-date" style={{ display: 'block' }} aria-hidden="true" />
          <Image
            src={require('../../public/images/devblog/5/coming-soon.jpg')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>- Release Date Coming Soon!</b>
          <br />
          We???re really excited to let you know that we???ll be releasing
          Scrap Mechanic to early access pretty soon. We???ve finally
          reached the point where we feel the game can offer a lot of
          fun playtime in its current state. The first early access
          release comes with a creative mode filled with over 100 parts
          that will allow you to build some truly amazing machines. It
          also comes with an easy to use in game handbook explaining how
          all the tools and items work. The creative mode world is not
          endless, but is more than big enough to build just about
          anything you want. Oh, and it comes with multiplayer support
          so you and your mechanic friends can be creative together.
          Stay tuned for a release date and price in the coming weeks!
        </article>
      </div>
      <Comments />
    </div>
  );
}
