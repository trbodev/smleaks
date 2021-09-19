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
import { devblog9 as devblogSrc } from '../../other/devblog_descriptions';

// image imports
import Title from '../../public/images/devblog/9/title.png';

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
      title: 'Devblog 9',
      id: 'devblog-9',
      type: 'article',
      description: devblogSrc.description,
      devblog: {
        id: '9',
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

export default function Devblog9({
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
          <b>Greetings Mechanics!</b>
          <br />
          Whoop! it’s been another amazing month here at Scrap Mechanic HQ. Our
          team has been tinkering their way to awesomeness and we have to plenty
          to show for it. This is a extra-special update today as we have lots
          to share on the coming Survival Mode features, which we’re quite
          excited about. There’s tons to read, so screw your reading glasses on!
          But before we get down to talking shop, we’ve noticed all the amazing
          creations with the new Timer and Logic Gate and…. Wow! The volume of
          creativity within the Scrap Mechanic community is mind-blowing. Keep
          it up, Mechanics!
          <br />
          <br />
          <a
            href="#"
            id="fixes"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <b>- Priority: Fixes</b>
          <br />
          One of our main goals here at Scrap Mechanic HQ is to keep you all
          entertained with cool, fun updates. But they can be hard to enjoy when
          some of you are experiencing crashes and drops in FPS, and other bugs.
          That should always be our priority, and we want you to know that. So,
          occasionally a piece of code doesn’t work how we planned. Then we do
          have to take a look at things and do a little fix up and tweak, here
          and there. Right now, we’re popping the hood and updating the game
          engine to Scrap Mechanics, to make it purr like a warm kitten in a
          cardboard box. We’re hoping that the changes we’re planning should
          address both the FPS drops and the crash bugs. The plan is to be
          running tests on it in late September, and we’ll roll it out as soon
          as we can.
          <br />
          <br />
          <br />
          <a
            href="#"
            id="character-customization"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <Image
            src={require('../../public/images/devblog/9/char-1.png')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>- Introducing: character customization!</b>
          <br />
          Now that Survival Mode is in the works, we are stoked to announce that
          we are introducing character customization! You will *finally* be able
          to customize your mechanic’s face, hairstyle, jackets, hats, gloves,
          shoes and much more. The fashionistas out there should note that, in
          Survival Mode, you’ll be able to scavenge a wide variety of clothing.
          This will mean you can keep up with the latest trends or perhaps even
          set them yourself!
          <br />
          <br />
          <br />
          <Image
            src={require('../../public/images/devblog/9/char2.png')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          All the new customization stuff will take a while for our artists to
          make so we most likely won’t be seeing any of this in-game until
          survival mode finally comes out. Posing: The new Male Model Now, our
          original mechanic model wasn’t really designed for customization,
          mainly due to budget restrictions at the time. So while we’re looking
          at character customization, we’re also working on improving the
          overall look of the mechanic! To help you get excited we have a little
          sneaky peak of our male models, courtesy of the Farmbots. Just a word
          of note - these don&#039;t have a final fixed facial expression yet as
          we’re still working on it. Keep an eye out for our next devblog, where
          we will show you the female model!
          <br />
          <br />
          <br />
          <a
            href="#"
            id="survival-terrain"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <Image
            src={require('../../public/images/devblog/9/survivalprops.png')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>- Building: A Whole New World</b>
          <br />
          Our amazing artists, when they haven’t been crafting pixel pants, have
          been crazy-busy working on terrain assets for the new biomes that will
          be in Survival Mode. We still have a long way to go but so far the
          terrain assets are stunning. The Farmbots, in an unprogrammed moment
          of generosity, have allowed us to share a glimpse of these new looks
          with you Mechanics. Oh what?... a sunset?
          <br />
          <br />
          <a
            href="#"
            id="survival-inventory"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <b>- Constraining: the Survival Mode backpack</b>
          <br />
          Creative Mode is pretty sweet in that your backpack can carry
          unlimited items. You can cram every last hunk of junk and it swallows
          it up like a Tardis. Will it be like this in Survival Mode? Noooo. Of
          course not! It’s Survival Mode, it has to be harder! But it’s fine, as
          some items can now be stacked and have a stacking limit. We’re quite
          happy with how the work on the whole storage and stacking system is
          panning out.
          <br />
          Oh and the
          {' '}
          <i>*coolest*</i>
          {' '}
          part is that you can put a chest on your
          vehicle so you can haul extra stuff with you while you’re out
          adventuring. Leave no piece of swag untouched!
          <br />
          <br />
          <br />
          <a
            href="#"
            id="warehouses"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <Image
            src={require('../../public/images/devblog/9/packeging-area.jpg')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <Image
            src={require('../../public/images/devblog/9/corridor-concept-01.jpg')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>- Fearing: Spooky Warehouses</b>
          <br />
          Ever wondered where some of the building parts in your inventory came
          from? Huge robot warehouses! And the awesome part is that you can
          explore and scavenge them in Survival Mode. We’ve been working on the
          look and feel of them to keep them consistent, yet immersive. We’re
          super happy with how it’s starting to look at this stage and have in
          fact created over *thirty* new building parts that aren’t in Creative
          Mode yet. Images above show work in progress. Looking forward to
          exploring the new warehouses? We are! Oh and one more thing, did we
          mention that the Farmbots lurk about inside them? Mwahahaha.
          <br />
          <br />
          <a
            href="#"
            id="crafting"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <b>- Revamping: Crafting</b>
          <br />
          So when we started drawing up our crafting plan a while back, our aim
          was to truly make it a unique crafting experience that&#039;s not too
          abstract. We want something that truly allows you to be fully immersed
          in the feature. Crafting should be a fun, interactive and creative
          experience and not a boring chore!
          <br />
          We are definitely on this path but it’s too early for us to reveal its
          workings - but we’re definitely excited about it all. If the Farmbots
          leave us alone for five minutes, we hope to show off more about this.
          <br />
          <br />
          <br />
          <a
            href="#"
            id="questions"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <b>- Questions from Mechanics</b>
          <br />
          <br />
          <b>John McClane asks:</b>
          <br />
          When will Survival Mode come out?
          <br />
          Unfortunately, we’re not able to advise of a release date at this
          point in time. There is so much depth to Survival Mode and we’re
          working away tirelessly to eventually be able to give you definitive
          date. We are taking extra special care to ensuring that Survival Mode
          is superior quality and we would rather not rush an early release at
          that the expense of this. We appreciate your patience and love that
          you’re excited, it’s going to be great!
          <br />
          <br />
          <b>Arthur Curry asks:</b>
          <br />
          Can you please add water?
          <br />
          Yes! However, developing the physics of water is such a complex
          undertaking. We’re confident it will yield amazing results, so
          we&#039;re not backing down from this challenge. Adding this extra
          dimension to the game will give you Mechanics even more material to
          get creative with. But we are not sure it will be added before the
          implementation of Survival Mode. We will try!
          <br />
          <br />
          <b>Dominic Toretto asks:</b>
          <br />
          Will you ever fix the suspension glitch?
          <br />
          We don’t have any plans to fix it. If you Mechanics are enjoying
          playing with it and it doesn’t impact Survival Mode then go for it.
          However there is a welding glitch that lets you weld different parts
          into each other. That one, we’re gonna have to fix in order to balance
          out gameplay in Survival Mode.
          <br />
          <br />
          <br />
          I think that’s it from us. Don’t worry, we’ll be back soon. And,
          until then, keep scrapping!
        </article>
      </div>
      <Comments />
    </div>
  );
}
