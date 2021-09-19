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
      src:string,
      large:boolean,
      enabled:boolean
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
          <b>Hi Mechanics!</b>
          <br />
          It’s that special time again when we open up and show off some
          of the content we’ve been working on at the Scrap Mechanic HQ.
          This is probably one of the most exciting devblogs we’ve done
          in a while, as we will be showing off our new digging system!
          We’re sorry for the long wait, but the features in this devblog
          have been in the making for a while. We’ve also been working
          on a lot of story-related things that we don’t want to spoil
          for you, so we won&apos;t reveal everything just yet!
          <br />
          <br />
          So let’s crack open a sunshake and dig in!
          <br />
          <br />
          <br />
          <a
            href="#"
            id="underground"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <Image
            src={require('../../public/images/imgur/C2mi8al.gif')}
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <Image
            src={require('../../public/images/imgur/KpuBNJJ.gif')}
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <Image
            src={require('../../public/images/imgur/vbfBCMR.gif')}
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <Image
            src={require('../../public/images/imgur/A6EU5Uj.gif')}
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <Image
            src={require('../../public/images/imgur/c5Qeg5r.gif')}
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <Image
            src={require('../../public/images/imgur/NYi1lY7.png')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <Image
            src={require('../../public/images/imgur/U5SCBdc.png')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <Image
            src={require('../../public/images/imgur/UU4sWzm.png')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <Image
            src={require('../../public/images/imgur/QAFLi1V.png')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <Image
            src={require('../../public/images/imgur/nuUrJfM.png')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <Image
            src={require('../../public/images/imgur/goRaYL8.png')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>- Underground digging and exploration</b>
          <br />
          The new chapter will come with a brand new island,
          housing a huge, collapsed mine and a massive mystery.
          The new location that you will get to explore will
          contain a lot of new content and underground biomes.
          Once in it, you will have to create a mining vehicle
          and start digging for resources while uncovering small and large cave systems.
          Some parts of the mines will require special types of
          drills to get past. In some cases, explosives will be
          needed. We put a lot of work into making vehicle
          digging into a fun and creative experience!
          Here are a few shots showing underground digging and exploration
          in action for the first time.
          You can also get a first glimpse of a very dangerous place: the underground station.
          Keep in mind that these shots don’t have the correct lighting and particles yet;
          everything will look better in the final version.
          <br />
          <br />
          <br />
          <a
            href="#"
            id="sticky-wheels"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <Image
            src={require('../../public/images/imgur/UxjU5iY.gif')}
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <Image
            src={require('../../public/images/imgur/eMUpYto.gif')}
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <Image
            src={require('../../public/images/imgur/UBG6Sdr.gif')}
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <Image
            src={require('../../public/images/imgur/oKynkvM.gif')}
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <Image
            src={require('../../public/images/imgur/pUeaqyC.gif')}
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>- Sticky Wheels Update</b>
          <br />
          Here is a little update on the Sticky Wheels we’ve shown previously.
          We really love how they turned out!
          They work really well and have a nice,
          gooey look when you drive. You will definitely need these when digging in the mine.
          They will most likely have a pink/purple-colored goo
          by default instead of the yellow/green shown in the GIFs.
          We are also looking into letting you paint them in other colors.
          Currently, the Sticky Wheels are using chemicals as a resource,
          but we are still testing them out, so we can get the
          perfect balance between consumption and use-time.
          <br />
          <br />
          <br />
          <a
            href="#"
            id="cablebot"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <Image
            src={require('../../public/images/imgur/X4j4VaZ.gif')}
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <Image
            src={require('../../public/images/imgur/Keg99vJ.gif')}
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <Image
            src={require('../../public/images/imgur/c7pNN33.gif')}
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <Image
            src={require('../../public/images/imgur/9fenvzQ.gif')}
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <Image
            src={require('../../public/images/imgur/3SlhSzK.png')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <Image
            src={require('../../public/images/imgur/CxfDTme.png')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>- Cablebot Update</b>
          <br />
          The Cablebots are really starting to shape up.
          Buried deep underground in the collapsed mine,
          these clankers come in great numbers, attacking both you and your creations on sight.
          Sometimes, they might latch onto your creation and gradually eat away at it.
          Other times, they might simply leech off your battery or fuel resources.
          You’d better slap them off your creations before they start piling up;
          that’s when they’re going to do some real damage!
          <br />
          <br />
          <br />
          <a
            href="#"
            id="battery-generator"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <Image
            src={require('../../public/images/imgur/TkGHjex.png')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <Image
            src={require('../../public/images/imgur/yhTfbs9.png')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <Image
            src={require('../../public/images/imgur/UkB1nNq.png')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>- Battery Generator</b>
          <br />
          Electric engines and other things requiring batteries will be
          very useful during your time underground. And when you’re in need of batteries,
          there’s nothing more useful than a battery generator:
          simply place a battery container inside it, spin the
          red valve and the battery charger will generate new batteries!
          You can spin manually, by hitting the valve with the hammer.
          But if you’d rather save time, you can also create a gas
          engine-powered arm that will spin the valve for you.
          We plan to introduce more interactive parts in the future,
          with new, creative ways to interact with like this one.
          We can&apos;t wait to see how these types of parts will spark your creativity!
          <br />
          <br />
          <br />
          <a
            href="#"
            id="digital-signs"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <Image
            src={require('../../public/images/imgur/cUFEF6L.png')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>- Digital Signs</b>
          <br />
          We finally got around to adding digital signs. In late-game Survival,
          you often end up with a lot of chests.
          These signs will let you label things so that they are easier to find.
          Not just that, but they can also be used to leave a message
          and help decorate your creations. They come in 3 sizes, with a selection
          of customizable screen and text colors!
          <br />
          <br />
          <br />
          <a
            href="#"
            id="draggable-wedges"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <Image
            src={require('../../public/images/imgur/j4SaTNJ.gif')}
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>- Wedge Update</b>
          <br />
          Shoutout to the wedge gang!
          We’ve got a lot of requests about adding wedges and we are trying
          to find a good way of implementing them, so here’s a little update on what we have so far:
          The problem has been the wedge scaling and removal in Survival.
          It’s a different system from the simple block scaling.
          But we will keep testing things out and hopefully,
          we’ll find a good way that works in Survival.
          The wedges will be included in the next Chapter.
          <br />
          <br />
          <br />
          <a
            href="#"
            id="plasma-saw"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <Image
            src={require('../../public/images/imgur/R6nwAvN.png')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <Image
            src={require('../../public/images/imgur/8B4bMMq.png')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>- Plasma Saw</b>
          <br />
          Introducing the Plasma Saw: the saw that is sharp
          enough to go through trees like butter and even
          cut through crystal rocks!
          But why stop there? The Plasma Saw can also be used to boost
          your creations’ defenses against those pesky bots.
          <br />
          <br />
          <br />
          <a
            href="#"
            id="npcs"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <Image
            src={require('../../public/images/imgur/JHdJekr.png')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <Image
            src={require('../../public/images/imgur/VQufYwZ.png')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>- NPC&apos;s</b>
          <br />
          The next chapter will feature a few new NPCs that you will get to interact with.
          Here is a first look at two of them!
          <br />
          <br />
          <br />
          <a
            href="#"
            id="fancy-tuxedo"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <Image
            src={require('../../public/images/imgur/jJMexEg.png')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>- Fancy Tuxedo</b>
          <br />
          New outfit time!
          This time, we are taking a break from all the workwear
          and decided to make a stylish tuxedo instead;
          just the thing for mechanics who want to adventure in style.
          As usual, all parts of the tuxedo can be mixed
          and matched with other outfits, for even more awesome outfit variations!
          Are there any other types of outfits you&apos;d like
          to see more of in Scrap Mechanic? Let us know in the comments.
          <br />
          <br />
          <br />
          That’s all for now, Mechanics!
          We hope that you have enjoyed looking at all the things we’ve been working on.
          We would also like to add that we are still looking in to ways we can
          improving the physics and decrease lag more.
          <br />
          <br />
          See you in the next Devblog!
        </article>
      </div>
      <Comments />
    </div>
  );
}
