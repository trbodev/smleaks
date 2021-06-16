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
import { devblog4 as devblogSrc } from '../../other/devblog_descriptions';

// image imports
import Title from '../../public/images/devblog/4/title.png';

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
      title: 'Devblog 4',
      id: 'devblog-4',
      type: 'article',
      description: devblogSrc.description,
      devblog: {
        id: '4',
        ...devblogSrc,
      },
      image: {
        url: generateURL(
          'http',
          process.env.NEXT_PUBLIC_DOMAIN,
          process.env.NEXT_PUBLIC_DOMAIN_SECURE === 'true',
          Title.src,
        ),
        large: true,
      },
    },
  };
}

export default function Devblog4({
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
          <b>Hey Mechanics!</b>
          <br />
          We’ve been exceptionally productive in the last few weeks, with loads
          of good progress! Right now, we’re basically trying to wrap up
          everything we have so far, but – being the insane perfectionists we
          are - we just can’t stop ourselves from adding new things here and
          there. As always, we have some awesome stuff to share with you today!
          <br />
          <br />
          <br />
          <a
            href="#"
            id="the-handbook"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <Image
            src={require('../../public/images/devblog/4/handbook-mockup-04.jpg')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>- Mechanics’ Handbook: All the Answers!</b>
          <br />
          It’s safe to say that nobody really enjoys lengthy tutorials, and
          we’re sure you’ve all come to expect that we’re far from dull.
          Teaching all you mechanics how to operate all the powerful tools in
          one go would be a bit too much. Kind of like working towards some kind
          of horrifyingly boring qualification in how to be bored. In order to
          avoid this we needed a solution that helps the player learn at a good
          pace, and preferably without breaking immersion. We’ve spent many
          sleepless nights crying, trying to come up with the best solution, and
          when we finally got to sleep we had some serious nightmares, but now –
          and with 73.8% less hair - we think we might have found a nice
          approach. The solution is the Mechanics’ Handbook! Beautifully
          illustrated with simple step-by-step drawings, the Mechanics’ Handbook
          will teach the player how things work. Every mechanic will start the
          game with the handbook in their inventory, ready to be flipped through
          and learned from at any time. We hereby announce the tragic passing of
          boring tutorials.
          <br />
          <br />
          <br />
          <a
            href="#"
            id="multiplayer-progress"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <Image
            src={require('../../public/images/devblog/4/multiplayer.png')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <Image
            src={require('../../public/images/devblog/4/multiplayer-mix.png')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>- Cruise Around with Your Friends</b>
          <br />
          We’re thrilled to let you know that we’ve made heaps of awesome
          progress on our multiplayer features since last time. You can now
          build a car so impressive that it will make your friends green with
          envy. Well worry not, as you’ll be able to cheer them up by sharing
          the wealth and taking them along for the ride. There have been more
          than just a few intense races lately at Scrap Mechanic HQ. It’s fun to
          build vehicles and then take them for a race against friends to see
          who&apos;s vehicle is the best.
          <br />
          <br />
          <br />
          <a
            href="#"
            id="ads"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <Image
            src={require('../../public/images/devblog/4/billboard-concept-4.jpg')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>- We’re Adding Ads! But not Like That…</b>
          <br />
          Since no big company is willing to pay us a ton of money for
          advertising in the game, we decided to take it into our own hands and
          make some awesome ads that go hand in hand with the world and the
          story. What’s happened on this planet? These ads sure give a curious
          little window into the past. Check out this glorious in game ad
          passionately executed by our artist Robin. Hunt down more awesome ads
          and signs in the game!
          <br />
          <br />
          <br />
          <a
            href="#"
            id="base-materials"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <Image
            src={require('../../public/images/devblog/4/grundmaterial.png')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>- Base Materials Have Landed!</b>
          <br />
          We’ve been making some pretty significant improvements to the building
          system… Yeah, you heard! The game isn’t even out yet and we’re already
          making changes and improvements! We’ve added a whole new type of
          object: something we call ‘base materials’. These are pure materials
          like stone, wood or metal to name just a few. Instead of placing down
          a single piece, these materials can be scaled from a small block right
          through to a massive wall, which is fantastic for creating big
          structures like a building. You can now build your very own dream
          house with ease in Scrap Mechanic, just don’t forget to send us an
          invitation to the housewarming!
          <br />
          <br />
          <br />
          <a
            href="#"
            id="rock-textures"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <Image
            src={require('../../public/images/devblog/4/stones.png')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>- Rocks Revisited</b>
          <br />
          We were never too happy with how some of the rocks were looking. They
          were a bit too edgy and minimalistic for our liking, so we decided to
          give them some extra love this month. We’ve seasoned them up nicely
          with a pinch of normal maps and then baked the shadows nicely so they
          get that beautiful gradient. Our lead artist Adrian is a true
          Masterchef!
          <br />
          <br />
          <br />
          <a
            href="#"
            id="magazine"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <Image
            src={require('../../public/images/devblog/4/robot-print.jpeg')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>- Scrap Mechanic in Print!</b>
          <br />
          We’re delighted to share with you our first print magazine feature!
          The awesome guys at Swedish magazine ‘Robot’ got the chance to visit
          Scrap Mechanic HQ and play the game! (HQ sounds glamorous, but it’s
          really only a pretty small room.) One quote from the article jumped
          out at us, “the machines you can construct in this game are infinitely
          more awesome then anything we’ve built in Minecraft” …Now that’s a
          pretty big compliment! The magazine is out in Sweden and in the UK.
          Massive thanks to the Robot guys for giving Scrap Mechanic a whole
          spread.
          <br />
          <br />
          <br />
          <a
            href="#"
            id="introducing-the-thruster"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <iframe
            title="Introducing the Thruster"
            src="https://www.youtube.com/embed/GUBjeBUnwPI"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ aspectRatio: '16/9', width: '100%' }}
          />
          <br />
          <br />
          <b>- Introducing the Thruster!</b>
          <br />
          If you follow us on Facebook or Twitter you might already have seen
          our latest video introducing the Thruster. If not, check it out!
        </article>
      </div>
      <Comments />
    </div>
  );
}
