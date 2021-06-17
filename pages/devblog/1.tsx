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
import { devblog1 as devblogSrc } from '../../other/devblog_descriptions';

// image imports
import Title from '../../public/images/devblog/1/title.png';

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
      title: 'Devblog 1',
      id: 'devblog-1',
      type: 'article',
      description: devblogSrc.description,
      devblog: {
        id: '1',
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

export default function Devblog1({
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
          As busy as we are with developing
          the game, we still really want to keep you up to date on all
          our progress. So here’s the first edition of our Devblog that
          we’ll post from time to time. Let’s start off with the
          graphics.
          <br />
          <br />
          <a href="#" id="character-improvements" style={{ display: 'block' }} aria-hidden="true" />
          <b>- Character improvements</b>
          <br />
          Our talented artist Adrian has been giving the character a
          little bit of well-needed grooming, making sure he’s looking
          nice and tidy. There were a few things that weren’t looking
          that great on him, one of which being his yellow knee patches,
          which are now all fixed up and looking way better. Heck, we
          even added buttons to his backpack and normal maps. No doubt
          we’ll see to it that he gets a few more improvements as we go
          along…
          <br />
          <br />
          <br />
          <a href="#" id="texture-love" style={{ display: 'block' }} aria-hidden="true" />
          <Image
            src={require('../../public/images/devblog/1/2.png')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>
            - Key items have been getting some texture love
          </b>
          <br />
          We’ve also made some sweet visual improvements to the
          Lift and the Gas Engine. They were looking nice and clean
          before, but maybe a tiny bit bland. After adding some spec and
          tearing they now feel like they have some weight.
          <br />
          <br />
          <br />
          <a href="#" id="tall-trees" style={{ display: 'block' }} aria-hidden="true" />
          <Image
            src={require('../../public/images/devblog/1/3.png')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>- Beautiful new tall trees added!</b>
          <br />
          We’ve also added
          two new types of tree. Firstly the tall Pine trees that you
          might have already seen if you follow us on Facebook and
          Twitter. But we also added our own Galactic Birch Trees. We
          felt we really needed something that broke off from all the
          green and made things pop a bit in different colors, which is
          exactly what we believe our new birch trees achieve. We also
          added a few new bushes, logs and flowers.
          <br />
          <br />
          <a href="#" id="terrain-painting" style={{ display: 'block' }} aria-hidden="true" />
          <b>- Terrain painting</b>
          <br />
          We also added vertex color
          support to our terrain editor, meaning we can now paint ground
          textures in different colors, giving the terrain more color
          variation. This also means we’re able to change the color of
          any tree and grass: no more single color textures! Now the
          game will look even better! This’ll also be a great feature to
          have once we release the terrain editor for you guys to use
          and play around with!
          <br />
          <br />
          <a href="#" id="new-lods" style={{ display: 'block' }} aria-hidden="true" />
          <b>- New, fresh lods</b>
          <br />
          Better lods were something we
          needed. We weren’t really happy with how they were previously,
          so decided to redo them. The trick is to avoid clear popping
          when a tree changes from a low poly to a high poly model as
          you walk towards it. Also, some rocks were missing lods so we
          added those in as well.
          <br />
          <br />
          <br />
          <a href="#" id="facial-expressions" style={{ display: 'block' }} aria-hidden="true" />
          <Image
            src={require('../../public/images/devblog/1/4.png')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>- Facial expression</b>
          <br />
          Our hero doesn’t currently
          have an expression, but we’ve been working on a face rig so we
          can animate expressions for him. We reckon it’d be pretty cool
          if you could see the fear on his face if you drove too
          quickly, or check out how he focuses when he’s building; this
          might soon be a reality! We reckon it adds loads more
          personality and makes the character so much more likeable.
          <br />
          <br />
          <a href="#" id="multiplayer-progress" style={{ display: 'block' }} aria-hidden="true" />
          <b>- Progress on multiplayer</b>
          <br />
          Multiplayer development
          has been going smoothly; there’s a bit of work left, but it’s
          slowly getting where it’s supposed to be.
          <br />
          <br />
          <a href="#" id="introduction-videos" style={{ display: 'block' }} aria-hidden="true" />
          <b>- Introduction videos</b>
          <br />
          We’ve started work on a
          series of videos that will introduce you all to some very
          useful items you can find in Scrap Mechanic. “How does the
          Lift work?” and “how do I build a car with a gas engine and a
          driver’s seat?” are questions these videos will answer for
          you! Check out the first video introducing the Lift here. The
          next one is coming soon!
          <br />
          <br />
          <br />
          <iframe
            title="How does the Lift work?"
            src="https://www.youtube.com/embed/OifCVmm5Yi4"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ aspectRatio: '16/9', width: '100%' }}
          />
          <br />
          <br />
          <a href="#" id="secret" style={{ display: 'block' }} aria-hidden="true" />
          <b>- Secret</b>
          <br />
          We’re also working on something secret.
          We can’t wait to reveal it!
          <br />
          If you have any requests or
          suggestions, feel free to contact us via Facebook or Twitter
          We love hearing from all you future Mechanics!
          <br />
          <br />

        </article>
      </div>
      <Comments />
    </div>
  );
}
