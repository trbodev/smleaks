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
import { devblog2 as devblogSrc } from '../../other/devblog_descriptions';

// image imports
import Title from '../../public/images/devblog/2/title.png';

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
      title: 'Devblog 2',
      id: 'devblog-2',
      type: 'article',
      description: devblogSrc.description,
      devblog: {
        id: '2',
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

export default function Devblog2({
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
          It’s just about time for another update! We can report that we’ve made
          some great progress this month, with plenty of exciting stuff to share
          with you.
          <br />
          <br />
          <br />
          <a
            href="#"
            id="multiplayer-first-steps"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <Image
            src={require('../../public/images/devblog/2/scrapmechanic02062015_150600745.png')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>- First Steps in Multiplayer!</b>
          <br />
          Humans. Homo sapiens. Social animals by nature, most of us enjoy the
          joy-inducing benefits of friendship. Do you have a friend? Imagine
          that friend. Imagine gathering scrap with your friend. Then imagine
          building amazing vehicles with your friend and driving on a scrap
          hunting adventure together exploring the world with your Very! Own!
          Friend! We just had to make that happen, which is why we’ve been
          working double hard on the multiplayer feature of Scrap Mechanic. It’s
          not fully cooked yet, but we’re getting there. Here is a screenshot
          from our most recent multiplayer test session. Should really have
          called it a multiplayer troll session though. It was a lot of fun!
          <br />
          <br />
          <br />
          <a
            href="#"
            id="ai-pathing"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <Image
            src={require('../../public/images/devblog/2/imgo-1.jpeg')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>- Infecting the Enemy AI with Actual Rage…</b>
          <br />
          Gustav and Alex have been working on the enemy AI and have made some
          superb progress on their navigation. Even if you build an especially
          tricksy structure, we’re obviously twisted enough to want your enemy
          to still find a path to reach you, unsettle you and delight in
          watching you attempt to adjust your lifestyle to accommodate pain,
          confusion and moderate despair. We’re looking forward to seeing if
          you’ll be able to outsmart our AI.
          <br />
          <br />
          <br />
          <a
            href="#"
            id="connect-tool-tweaks"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <Image
            src={require('../../public/images/devblog/2/connect-tool.png')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>- Connect Tool Tweaks</b>
          <br />
          We’ve re-designed the connect tool by making it more thick and bulky
          so that it fits our art direction better. This tool is really
          important when building moving creations, letting you hook everything
          up, like engines and bearings for example.
          <br />
          <br />
          <br />
          <a
            href="#"
            id="more-plants"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <Image
            src={require('../../public/images/devblog/2/salad.png')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <Image
            src={require('../../public/images/devblog/2/corn.png')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>- Turning Over a New Leaf</b>
          <br />
          This month has been all about leaves. We’ve added so many new terrain
          props that you could easily assemble them into a truly wonderful
          salad, but in the absence of digital vinaigrette, we’ve decided to
          plant these fantastic flowers and bushes instead. Sitting pretty in
          the ground, they’re now doing a great job of making the world look
          more beautiful while we keep stepping up the hard visual work to
          include fields – home to these giant corn plants!
          <br />
          <br />
          <br />
          <a
            href="#"
            id="boxes"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <Image
            src={require('../../public/images/devblog/2/scrapmechanic02162015_143415372.png')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>- Thinking Outside the Box</b>
          <br />
          We’ve added a bunch of new fruit and veg crates that you’ll be able to
          use and build with. We’re pretty pleased with how they’re looking, and
          we feel like they really fit the world nicely. Some of the team have
          had dreams about being able to build cars out of cucumber boxes, and
          whilst we’re delighted to have made this a reality, we’re worried
          about where their thoughts are taking them at night. Don’t forget to
          build your own cucumber box car at the earliest opportunity!
          <br />
          <br />
          <a
            href="#"
            id="main-menu"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <b>- Beautiful Main Menu</b>
          <br />
          We’re entering the last phase of getting the main menu all done and
          dusted. The groundbreaking features ‘Create New Game’, and ‘Continue
          Saved Game’ are now in place, and we’re waiting for the award
          nominations in the mail. The settings are all where they should be and
          it’s now possible to quit the game without using the task manager.
          Yeah, we know. We’ll get you a picture once it’s all 100% done. Brace
          yourself for one beautiful menu!
          <br />
          <br />
          <br />
          <a
            href="#"
            id="introduction-video"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <iframe
            title="Introducing the Gas Engine and the Driver’s Seat"
            src="https://www.youtube.com/embed/TRavpZqkNcc"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ aspectRatio: '16/9', width: '100%' }}
          />
          <br />
          <br />
          <b>- Introduction Video</b>
          <br />
          If you follow us on Facebook or Twitter you might already have seen
          our latest video introducing the Gas Engine and the Driver’s Seat.
          <br />
          <br />
          If you have any requests or suggestions, feel free to contact us via
          Facebook or Twitter We love hearing from all you future Mechanics!
        </article>
      </div>
      <Comments />
    </div>
  );
}
