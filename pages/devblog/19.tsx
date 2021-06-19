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
import { devblog19 as devblogSrc } from '../../other/devblog_descriptions';

// image imports
import Title from '../../public/images/devblog/19/title.png';

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
      title: 'Devblog 19',
      id: 'devblog-19',
      type: 'article',
      description: devblogSrc.description,
      devblog: {
        id: '19',
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

export default function Devblog19({
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
          It’s been another great month at the Scrap Mechanic HQ. Our team has
          been working hard! We have plenty of awesomeness to show you!
          <br />
          <br />
          Before we get on the road and take you to some of the cool new stuff
          we’ve lined up today, we have a small update on Survival Mode’s
          release timing. We do not have a date yet.
          <br />
          Stepping back and looking at all the tremendous work our team has done
          on Survival so far, it’s clear that this mode has far outgrown our
          initial ambitions and evolved into something that itself represents a
          gigantic upgrade on the entire Scrap Mechanic game.
          <br />
          There are tons of new content and features, hundreds of new building
          parts and blocks, a completely new open world environment with enemies
          and places to explore, a big graphical upgrade as well as
          optimizations and much, much more. Sometimes we joke that this is
          basically Scrap Mechanic 2 at the office!
          <br />
          <br />
          We know you’ve been waiting very patiently for information on when
          you’ll be able to get your hands on and play Survival Mode for
          yourselves, and we promise that we are doing all we can to get there
          as soon as possible.
          <br />
          Right now, the honest assessment is that it’s still too soon for us to
          commit to a hard deadline when we’re still iterating on the final
          pieces of Survival. It’s difficult to estimate the time required to
          tweak and balance all the things that we want to get right. However,
          we hope that this Devblog gives you some reassurance that we are going
          in the right direction and things are looking good. Hang in there a
          bit more Mechanics!
          <br />
          <br />
          <br />
          <a
            href="#"
            id="dressbot"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <Image
            src={{
              src: 'https://i.imgur.com/5VfP6SH.jpg',
              width: 1,
              height: 1,
            }}
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <Image
            src={{
              src: 'https://i.imgur.com/RctCO83.jpg',
              width: 1,
              height: 1,
            }}
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <Image
            src={{
              src: 'https://i.imgur.com/yhiycRP.png',
              width: 1,
              height: 1,
            }}
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>- New Dressbot!</b>
          <br />
          Straighten your tie and prepare to meet the newest addition to the
          crafting family, the awesome Dressbot!
          <br />
          During your adventures you will come across mystery boxes with
          clothing that you can take back to the Dressbot to craft and add to
          your wardrobe. However, in order to adjust your look the metal tailor
          will require cotton from cotton plants that you will discover around
          the world. All clothing that you craft and unlock will be available to
          use across worlds and other game modes. You can even change clothing
          at any time from the main menu, as well as in game by using the
          Dressbot’s wardrobe!
          <br />
          <br />
          <br />
          <a
            href="#"
            id="base-defence"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <Image
            src={{
              src: 'https://i.imgur.com/3dMWuOr.png',
              width: 1,
              height: 1,
            }}
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <Image
            src={{
              src: 'https://i.imgur.com/3s9a4cM.png',
              width: 1,
              height: 1,
            }}
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <Image
            src={{
              src: 'https://i.imgur.com/LRJlWX6.gif',
              width: 1,
              height: 1,
            }}
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <Image
            src={{
              src: 'https://i.imgur.com/5APfEBs.gif',
              width: 1,
              height: 1,
            }}
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <Image
            src={{
              src: 'https://i.imgur.com/zBq21UN.gif',
              width: 1,
              height: 1,
            }}
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>- Base defence!</b>
          <br />
          We’ve previously shown you some brief combat gifs on our Twitter
          account, but you guys really don’t know what’s in store. What makes
          combat in Scrap Mechanic so interesting is the creative aspect and
          finding creative solutions that will help you survive. For example,
          many players will build a static or moving base to store their
          resources and items. However, when Farmbots find your hideout, you’d
          better have your traps and defensive solutions in place, otherwise
          it’s going to be a very short game.
          <br />
          Today we are showing the Haybots in action for the first time and a
          playerbase under attack!
          <br />
          <Image
            src={{
              src: 'https://i.imgur.com/Fxncgme.gif',
              width: 1,
              height: 1,
            }}
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          Oh! And if someone was thinking they will camp up on a lift. That will
          not work. Bots will pull you down.......
          <br />
          <br />
          <br />
          <a
            href="#"
            id="glow-worm"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <a
            href="#"
            id="glowworm"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <a
            href="#"
            id="glowb"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <Image
            src={{
              src: 'https://i.imgur.com/DCyymhf.png',
              width: 1,
              height: 1,
            }}
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <Image
            src={{
              src: 'https://i.imgur.com/IVM5lBk.jpg',
              width: 1,
              height: 1,
            }}
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <Image
            src={{
              src: 'https://i.imgur.com/6g4kmvI.gif',
              width: 1,
              height: 1,
            }}
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <Image
            src={{
              src: 'https://i.imgur.com/nKTfHiq.gif',
              width: 1,
              height: 1,
            }}
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <Image
            src={{
              src: 'https://i.imgur.com/0V64sz7.gif',
              width: 1,
              height: 1,
            }}
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <Image
            src={{
              src: 'https://i.imgur.com/GOsDmFG.gif',
              width: 1,
              height: 1,
            }}
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>- Glow-worm to glowstick!</b>
          <br />
          Introducing our new wildlife addition, the glow-worm!
          <br />
          This little guy is harmless and can be picked up and placed down
          anywhere in your base, making it pretty much the perfect pet. Even
          better, these guys can help you craft glowsticks, which come in
          multiple colors. You can also craft your own signature color when
          playing with other Mechanics. Oh, and they absolutely love to munch on
          cardboard blocks! We still need a name for these glow-worms so help us
          with some name suggestions below.
          <br />
          <br />
          <br />
          <a
            href="#"
            id="open-world-progress"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <a
            href="#"
            id="open-world"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <Image
            src={{
              src: 'https://i.imgur.com/I2HvwIs.png',
              width: 1,
              height: 1,
            }}
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <Image
            src={{
              src: 'https://i.imgur.com/V4Xa6hR.png',
              width: 1,
              height: 1,
            }}
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <Image
            src={{
              src: 'https://i.imgur.com/EPKxeD0.gif',
              width: 1,
              height: 1,
            }}
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>- Open world progress!</b>
          <br />
          Another aspect of Survival Mode we know you’re desperate to see more
          of is the world itself and how it works. As we’ve mentioned
          previously, the whole world is built out of premade tiles that are
          skewed, creating a seamless, varied environment that is completely
          random, but at the same time beautiful and fun to explore. We are
          really happy about how this all came together.
          <br />
          What’s also new since the last time we showed you the world is our
          system that can draw a lot of physical items on screen at the same
          time, making it possible for us to have around 3,000 trees and rocks
          visible at once. It really makes the world a lot more immersive and
          for those of you with a bit older PCs, don’t worry: we’ve spent a lot
          of extra time optimizing to ensure it runs well on all kinds of
          hardware. This world has a few new biomes that are not included in the
          gifs, but we will show them in a later Devblog for sure.
          <br />
          <br />
          <br />
          <a
            href="#"
            id="propane-station"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <Image
            src={{
              src: 'https://i.imgur.com/8iGJm9t.png',
              width: 1,
              height: 1,
            }}
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <Image
            src={{
              src: 'https://i.imgur.com/WLey67T.png',
              width: 1,
              height: 1,
            }}
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <Image
            src={{
              src: 'https://i.imgur.com/TYOYi31.png',
              width: 1,
              height: 1,
            }}
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <Image
            src={{
              src: 'https://i.imgur.com/Ue7yO2c.png',
              width: 1,
              height: 1,
            }}
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <Image
            src={{
              src: 'https://i.imgur.com/t1iknBC.gif',
              width: 1,
              height: 1,
            }}
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>- Welcome to the Propane Station!</b>
          <br />
          Well, at least it’s what we call it at the moment.
          <br />
          It’s time for us to reveal a new location… and careful, this one’s
          explosive!
          <br />
          The Propane Station is a highly volatile area previously used to
          create explosives to dig out mines on the planet. These locations are
          now abandoned and even better, house some very aggressive Totebots.
          It’s a high risk, high reward type of place, great for finding
          explosives and gasoline and other useful items. Just watch where you
          step, Mechanics…
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
            src={{
              src: 'https://i.imgur.com/ptqjI9u.jpg',
              width: 1,
              height: 1,
            }}
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <Image
            src={{
              src: 'https://i.imgur.com/wtn5BFB.jpg',
              width: 1,
              height: 1,
            }}
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <Image
            src={{
              src: 'https://i.imgur.com/g75SJBx.png',
              width: 1,
              height: 1,
            }}
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>- Cookbot and food!</b>
          <br />
          Is anyone else feeling hungry? Then you’ll enjoy our next invention…
          <br />
          In our last Devblog we showed you some early concepts of the Cookbot –
          and here he is in the game! This amazing mechanical cook will help you
          whip up tasty food in no time, which will in turn help keep your
          health up and also the health of any friends who might need a revive.
          We’re sure you can’t wait to sink your teeth into every Scrap
          Mechanic’s favorite food, a delicious pizza burger!
          <br />
          <br />
          <br />
          <a
            href="#"
            id="farming"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <Image
            src={{
              src: 'https://i.imgur.com/liWTsJa.jpg',
              width: 1,
              height: 1,
            }}
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <Image
            src={{
              src: 'https://i.imgur.com/IzRduSN.png',
              width: 1,
              height: 1,
            }}
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>- Fantastic Farming!</b>
          <br />
          Farming is one of the features that we’re still polishing up here at
          Scrap Mechanic HQ and putting a lot of attention on. When we have
          everything in place, we promise we’ll show you a detailed overview of
          where we’ve got with this feature. But for now, here are some work in
          progress images to give you some idea of how it looks!
          <br />
          <br />
          <br />
          <br />
          That’s it for this time!
          <br />
          Time for us to get back to all the iteration work. Connecting and
          balancing the survival mode.
          <br />
          There is a lot more cooking so we will be back soon with more exciting
          survival news!
          <br />
          <Image
            src={{
              src: 'https://i.imgur.com/EKzlQPY.gif',
              width: 1,
              height: 1,
            }}
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
        </article>
      </div>
      <Comments />
    </div>
  );
}
