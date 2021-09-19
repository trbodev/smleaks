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
import { devblog18 as devblogSrc } from '../../other/devblog_descriptions';

// image imports
import Title from '../../public/images/devblog/18/title.png';

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
      large:boolean,
      enabled:boolean
    }
}> {
  return {
    props: {
      title: 'Devblog 18',
      id: 'devblog-18',
      type: 'article',
      description: devblogSrc.description,
      devblog: {
        id: '18',
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
        enabled: true,
      },
    },
  };
}

export default function Devblog18({
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
          <br />
          It’s that time again! when we take you on a trip down development lane
          to show you some of the new exciting things that we’ve been working on
          at the Scrap Mechanic HQ. All our time is dedicated to survival mode
          at the moment with a lot of new things getting added daily. We’ve also
          been collecting a lot of optimization requests and feedback from the
          community. There is still a lot we can do to make your crazy and more
          complex creations run even better. We plan to do a proper optimization
          update later when we can free up some more time. Just a small update
          on that. With that said, let’s move on to what you mechanics are here
          for: A nice big update on survival development!
          <br />
          <br />
          <br />
          <a
            href="#"
            id="haybots"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <Image
            src={require('../../public/images/imgur/NC5qnTz.png')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <Image
            src={require('../../public/images/imgur/i1EPEqb.png')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <Image
            src={require('../../public/images/imgur/Kru4c81.png')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <Image
            src={require('../../public/images/imgur/d1H2maK.png')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <Image
            src={require('../../public/images/imgur/QHdjyzc.png')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>- Haybots gone haywire!</b>
          <br />
          You might recognize parts of this new farmbot from our teaser tweet
          last week. We are super excited to introduce you to the Haybot for the
          first time! But don’t get too close unprepared since they are very
          unreliable and dangerous. Originally made to make haystacks and
          package them in plastic wrap, these Haybots have gone out of control.
          Now they’re often found doing nonsensical things in ruins, like
          tearing them down and filling them with hay. The Haybot would best be
          described as the “Zombie” of Farmbots.
          <br />
          <br />
          <a
            href="#"
            id="survival-music"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <b>- New survival music</b>
          <br />
          Our amazing musician Zhea has been working on a lot of new tracks for
          survival. Since the game has a lot of exploration and building, A lot
          of the music is beautiful, moody and atmospheric. However, today we
          like to share a snippet from when things intensify in Survival.
          Potatoes fired! Take cover!
          <br />
          Check it out
          {' '}
          <a href="https://soundcloud.com/axolotgames/spud-fight-teaser">
            HERE
          </a>
          <br />
          <br />
          <br />
          <a
            href="#"
            id="menu-redesign"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <Image
            src={require('../../public/images/imgur/ILH3Slt.png')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <Image
            src={require('../../public/images/imgur/QmECiEP.png')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <Image
            src={require('../../public/images/imgur/biyonHV.png')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <Image
            src={require('../../public/images/imgur/ClacFEx.png')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>- Big menu redesign!</b>
          <br />
          We did a little tease of the inventory redesign previously.
          <br />
          The feedback that we received from you was fantastic and helped us
          direct the redesign more to the communities liking. Here is an update
          on some of the new changes. Please keep in mind that this is still not
          set in stone and we are still trying out new things. But please let us
          know what you think of this redesign above.
          <br />
          <br />
          <br />
          <a
            href="#"
            id="multitool"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <Image
            src={require('../../public/images/imgur/42V3bNB.png')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <Image
            src={require('../../public/images/imgur/u8WlY77.gif')}
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>- Multitool</b>
          <br />
          Introducing the new multitool! Or maybe more accurately described as
          the refinery handtool. it’s lucky that all mechanics came equipped
          with one. Very handy in survival situations if your maintenance ship
          crashes and you’re stranded. A lifesaver when it comes to refining
          wood, farmbot legs and stone into blocks. However, it’s a bit slow. So
          upgrading to a Refinebot would be more efficient for sure.
          <br />
          <br />
          <br />
          <a
            href="#"
            id="crashsite"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <a
            href="#"
            id="the-crash"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <Image
            src={require('../../public/images/imgur/ZUHX1FO.png')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <Image
            src={require('../../public/images/imgur/wJ3wMmH.png')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <Image
            src={require('../../public/images/imgur/iJ48kvL.png')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>- The crash!</b>
          <br />
          We were not sure whether we should keep this crash site a secret for
          its release...
          <br />
          After all, it’s where you start in Survival mode. But we changed our
          mind. You mechanics need to see more of the cool things we’ve been
          working on so here goes! Including some early concepts. We don’t want
          to spoil too much, so let’s leave it at that.
          <br />
          <br />
          <br />
          <a
            href="#"
            id="lootcrates"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <a
            href="#"
            id="loot-crates"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <a
            href="#"
            id="crates"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <Image
            src={require('../../public/images/imgur/3FKatQV.png')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>- Crates with loot</b>
          <br />
          Scattered around the map, mechanics will find these smash-able crates!
          <br />
          We are still not sure who scattered them around the planet. They might
          have fallen from a cargo ship? It’s still a mystery to be resolved.
          However! They do contain some good items at times so they are totally
          worth to smash and have a look inside. Who knows! you could be lucky!
          <br />
          <br />
          <br />
          <a
            href="#"
            id="cookbot"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <Image
            src={require('../../public/images/imgur/tH7e7qR.png')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>- Cookbot concept!</b>
          <br />
          The Cookbot is a new addition to the helping bots that the Mechanic
          can craft. This master chef will take your ingredients and make the
          most delicious dishes! Just absolutely yummy! Some are even so good
          that they can revive a fallen mechanic in multiplayer. But it will
          cost you some adventuring and harvesting to help the Cookbot put it
          all together.
          <br />
          <br />
          <a
            href="#"
            id="random-stuff"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <b>- Random fun stuff!</b>
          <br />
          Let’s close it off with some smaller but fun random things that you
          might enjoy.
          <br />
          <br />
          <Image
            src={require('../../public/images/imgur/OIqlLBX.gif')}
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <Image
            src={require('../../public/images/imgur/M7p9uhH.gif')}
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          Our crazy Totebots now have a final animation in place. Do they look
          scary enough?
          <br />
          <br />
          <Image
            src={require('../../public/images/imgur/JOr7F1W.png')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          We also did some updates to our engine and added a nice translucency
          when the sun hits the trees and bushes.
          <br />
          <br />
          <Image
            src={require('../../public/images/imgur/kneVg4B.gif')}
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          Also! more work has been done on the dynamic lights and shadow
          casting. Here is an updated gif.
          <br />
          <br />
          <br />
          Lastly, we want to say a big thanks to all the amazing support and
          patience from you mechanics.
          <br />
          We are speeding the survival development up as much as we can without
          compromising on quality. We hope you agree that it’s the right
          decision.
          <br />
          <br />
          We will be back soon with more news!
        </article>
      </div>
      <Comments />
    </div>
  );
}
