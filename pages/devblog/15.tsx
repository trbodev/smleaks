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
import { devblog15 as devblogSrc } from '../../other/devblog_descriptions';

// image imports
import Title from '../../public/images/devblog/15/title.png';

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
      title: 'Devblog 15',
      id: 'devblog-15',
      type: 'article',
      description: devblogSrc.description,
      devblog: {
        id: '15',
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

export default function Devblog15({
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
          <b>Greetings, Mechanics!</b>
          <br />
          The chime of your doorbell announces the arrival of our latest,
          delicious Scrap Mechanic devblog, hot and spicy from our development
          oven.
          <br />
          Our expert chefs have prepared this one with extra special care, and
          we think you’ll agree we’ve supplied some tasty toppings indeed!
          <br />
          <br />
          <br />
          <a
            href="#"
            id="sawblade"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <Image
            src={{
              src: 'https://i.imgur.com/4Lh5rFD.png',
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
              src: 'https://i.imgur.com/TUEFJb1.gif',
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
              src: 'https://i.imgur.com/xibbZFA.gif',
              width: 1,
              height: 1,
            }}
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>- The Saw Blade</b>
          <br />
          Let’s kick things off with a cutting-edge announcement: One of our
          original goals for Scrap Mechanic was to make tree and rock gathering
          fun and satisfying - which proved just as difficult as that sounds -
          while also encouraging creative thinking from players.
          <br />
          For example, how best can mechanics prevent the tree they’ve just
          chopped down from smashing onto their fancy new creation? How do you
          then transport that tree to the refinery without the need for a
          gigantic truck?
          <br />
          These are just some of the things Mechanics will have to keep in mind
          when building your resource gathering vehicle. But none of these
          vehicles will be complete without the new interactive part, the Saw
          Blade!
          <br />
          Place the Saw Blade on a bearing, crank the engine up to max and aim
          for a tree or rock to slice it like a pepperoni pizza. It will look a
          lot better when it&#039;s completely done.
          <br />
          We also hear that Farmbots are not big fans of these blades… But more
          on that later!
          <br />
          <br />
          <br />
          <a
            href="#"
            id="explosives"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <Image
            src={{
              src: 'https://i.imgur.com/rlwXrUF.png',
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
              src: 'https://i.imgur.com/sjdfPeo.gif',
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
              src: 'https://i.imgur.com/xJc9HmG.gif',
              width: 1,
              height: 1,
            }}
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>- Shake the Room</b>
          <br />
          With the first breed of Spud guns in the wild, with their
          awesome-but-limited ability to annihilate single blocks, it’s time to
          introduce you to something a bit more… explosive. Say hello to the
          ultra-destructive Explosive Canisters!
          <br />
          Freshly transferred from Survival to Creative Mode, these fragile
          boom-tanks make destruction even more fun and satisfying.
          <br />
          The Canisters come in two different sizes, with each dealing a
          different amount of damage. They explode from either being hit by a
          spud gun or by being thrown or dropped from different heights.
          <br />
          Another interesting feature to note is how the Explosive Canisters
          deal different amounts of damage to different blocks. For example, a
          metal block will not receive as much damage as a wooden block. This is
          our first introduction of material damage.
          <br />
          Important note: Please make sure you save your creations before
          playing with these dangerous toys! There won’t be much left if they go
          off near your lovely new toy… especially if they’re chained!
          <br />
          We hope to add these to Creative mode in the next update. Boom!
          <br />
          <br />
          <br />
          <a
            href="#"
            id="challenge-mode"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <Image
            src={{
              src: 'https://i.imgur.com/RGYaXzO.png',
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
              src: 'https://i.imgur.com/6MjTCr2.png',
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
              src: 'https://i.imgur.com/n9iPmkt.png',
              width: 1,
              height: 1,
            }}
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>- Challenge mode</b>
          <br />
          Yep, that’s right! We’re delighted to announce the introduction of a
          brand new mode for
          <br />
          Scrap Mechanic: Challenge mode!
          <br />
          Sometimes when the team is tinkering away with the ambitious
          mothership that is Survival, we often discover that parts of its code
          are good enough to be used in more ways than one, creating entirely
          different game modes from mostly the same amount of work.
          <br />
          One such discovery recently resulted in the creation of Challenge
          Mode, a series of bite-size trials for players to test their skill and
          creativity.
          <br />
          Each challenge starts by giving the player a few parts from a chest.
          You’ll then be tasked with building something with said parts to
          overcome an obstacle, such as pushing a large ball through a maze
          without losing it. These challenges will separate the mechanics from
          the… erm, non-mechanics.
          <br />
          It will also be possible for modders to create and upload their own
          Challenges for other players to try, or even entirely new gameplay
          modes. It’s an exciting addition that we think demonstrates the smart
          approach we’re trying to take with the development of Scrap Mechanic…
          and it’s a lot of fun too!
          <br />
          <br />
          <br />
          <a
            href="#"
            id="open-world-terrain"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <Image
            src={{
              src: 'https://i.imgur.com/2Z27w0H.png',
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
              src: 'https://i.imgur.com/ze8EGgI.gif',
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
              src: 'https://i.imgur.com/XGQmw2m.gif',
              width: 1,
              height: 1,
            }}
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>- Open World Roads</b>
          <br />
          Here at Scrap Mechanic HQ, we’re not afraid of taking on a difficult
          and often impossible challenge and our latest impossible mission has
          resulted in one of our proudest features yet.
          <br />
          After much toil and moil, our team of engineers have managed to create
          a system that creates totally randomly generated roads in Survival
          terrain, seamlessly integrated with the existing world tiles and
          hills!
          <br />
          We’re very proud of how this new road and terrain technology turned
          out. It’s a genuinely unique system that results in interesting
          scenarios and tons of fun highways that will have you speeding through
          forests, valleys and points of interest.
          <br />
          Keep in mind that the images are from our test and do not represent
          the look of the final Survival mode terrain.
          <br />
          <br />
          <br />
          <a
            href="#"
            id="hideout"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <a
            href="#"
            id="farmers"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <Image
            src={{
              src: 'https://i.imgur.com/khmfP72.png',
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
              src: 'https://i.imgur.com/9AcT58b.png',
              width: 1,
              height: 1,
            }}
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>- Frigid Farmers</b>
          <br />
          What would you do if a bunch of murderous Farmbots suddenly ran wild
          on your patch? Yes, that’s right: we’d all lock the barn door and hide
          under our haystacks like big, scared-y cowards. Just like the farmers
          set to appear in Survival mode.
          <br />
          Those cowedly farm folk didn’t manage to escape the planet after the
          robo-uprising, and so now they cower inside their hideouts built from
          scraps and makeshift barricades.
          <br />
          Luckily, there are plenty of heroic mechanics like you, ready to show
          up and supply them with food and other items in exchange for rare
          parts and trinkets. Just be prepared: they sometimes request the most
          ridiculous things!
          <br />
          <br />
          <br />
          <a
            href="#"
            id="woc"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <Image
            src={{
              src: 'https://i.imgur.com/jHecD4W.png',
              width: 1,
              height: 1,
            }}
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>- Woc’s Up</b>
          <br />
          Recently we’ve been having a fun old time adding new animals to the
          Scrap Mechanic world. Our latest farmyard creation is this chap below,
          the fantastical Woc! (That’s right: Woc.) These bizarre space cows
          were originally the source of the milk production in the Scrap
          Mechanic world… before the Farmbots went Chicken Oriental and sent the
          Wocs scattering across the wild.
          <br />
          We suspect the kind-natured Wocs will inevitably be bullied by the
          more masochistic Mechanics among you when Survival Mode comes out.
          Luckily, we’ve given them appropriate AI so they can run for their
          lives.
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
            src={{
              src: 'https://i.imgur.com/k1RxZy3.png',
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
              src: 'https://i.imgur.com/6IqZz3f.png',
              width: 1,
              height: 1,
            }}
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>- Be-Ware</b>
          <br />
          And here’s another thing we’ve been tinkering with in the secret Scrap
          Mechanic development bunker: Warehouses.
          <br />
          The team has invested a large amount of effort to make sure that
          Warehouses will offer a lot more variation once players finally
          gathers the guts and resources required to explore them. Over the last
          few months we’ve made over a 100 different rooms and we are still
          adding more! That’s a lot of storage space.
          <br />
          These warehouses are extremely dangerous and only the most well
          prepared and skilled Mechanics will survive and gather the awesome
          rewards that can be found. You’ve been warned!
          <br />
          the scenes we’ve been quietly creating a completely new warehouse
          robot that will lead to more than a few heated moments when you
          stumble upon it. We will introduce him on our Twitter as soon as he’s
          done, so make sure to follow us there!
          <br />
          And while we’re on the subject of robots…
          <br />
          <br />
          <br />
          <a
            href="#"
            id="updated-textures"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <Image
            src={{
              src: 'https://i.imgur.com/6Srfe1f.jpg',
              width: 1,
              height: 1,
            }}
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>- Paint Job</b>
          <br />
          Since we’ve recently been updating the visuals in Survival Mode we’ve
          also gone back to give the farmbots some visual love... even if they
          don’t deserve it! You’ll notice that we’ve changed some elements
          completely and given them much nicer texture work.
          <br />
          <br />
          <br />
          <a
            href="#"
            id="welding-outfit"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <a
            href="#"
            id="new-outfits"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <Image
            src={{
              src: 'https://i.imgur.com/vK8GtTm.png',
              width: 1,
              height: 1,
            }}
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>- Weldin’ Time</b>
          <br />
          And finally, it wouldn’t be a devblog post without a
          brand-spanking-new Mecahnic outfit, would it?
          <br />
          In our last post we offered a glimpse at the painter outfit. This time
          we’re delighted to give you your first look at the welder outfit!
          Gloves, jacket, pants, shoes and so on can be mixed with other
          outfits, giving the player a lot of ways to customize their mechanic.
          <br />
          ….Hot.
          <br />
          <br />
          <br />
          <br />
          That’s it for this time! There are now more people working on Scrap
          Mechanic today than ever before!
          <br />
          We are making fantastic progress every week and we can’t wait for you
          to try out our latest and greatest work. Thanks to all our mechanics
          for showing your support!
        </article>
      </div>
      <Comments />
    </div>
  );
}
