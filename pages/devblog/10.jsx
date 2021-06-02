/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable global-require */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-danger */
import moment from 'moment';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Head from 'next/head';
import Comments from '../../components/Comments';

import { devblog10 as devblog } from '../../other/devblog_descriptions';

import Title from '../../public/images/devblog/10/title.png?webp&url';
import TitleLQ from '../../public/images/devblog/10/title.png?webp&lqip';

export const getStaticProps = () => ({
  props: {
    title: 'Devblog 10',
    id: 'devblog-10',
    type: 'article',
    description: devblog.description,
    devblog: {
      id: '10',
      ...devblog,
    },
    image: {
      url: devblog.image_url || Title.toString(),
      large: true,
    },
  },
});

export default function Devblog10(page) {
  return (
    <div>
      <Head>
        {page.devblog.date_manual ? null : (
          <meta
            property="og:article:published_time"
            content={moment(page.devblog.date, 'MM-DD-YYYY').format('YYYY-M-D')}
          />
        )}
      </Head>

      <div className="content">
        <h1 className="content-title">
          Devblog
          {' '}
          {page.devblog.id}
          {' '}
          -
          {' '}
          {page.devblog.date_manual
            || moment(page.devblog.date, 'MM-DD-YYYY').format(
              'MMMM Do, YYYY',
            )}
          {' '}
          -
          {' '}
          <a href={page.devblog.url}>Original</a>
        </h1>
      </div>
      <div className="card">
        <style
          dangerouslySetInnerHTML={{
            __html: `
                    article span.lazy-load-image-background {
                      width: 100%;
                    }
                    article img {
                      width: 100%;
                    }
                `,
          }}
        />
        <article>
          <LazyLoadImage
            alt="title"
            src={Title}
            placeholderSrc={TitleLQ}
            effect="blur"
          />
          <br />
          <b>Hi Mechanics!</b>
          <br />
          How about we open up our window and let you grab another little
          glimpse into our magical workshop of delights? That’s right friends,
          it’s time for another delicious devblog! The last month at Scrap HQ
          has been a busy one, so get comfy in your driver’s seat and let’s jump
          into one of our most epic devblogs yet!
          <br />
          Now you’re strapped in, let’s just take a quick moment to say a
          massive thank-you to all you Mechanics who’ve been helping us test our
          new game engine. Your bug reporting skills have been invaluable,
          thanks
          {' '}
          <b>so much!</b>
          <br />
          <br />
          <a
            href="#"
            id="engine-update"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <b>- Engine Update</b>
          <br />
          We’ve started testing the new engine on a public test branch, and your
          feedback has been fantastic! Heaps of Mechanics have been reporting
          improvements in their FPS and players who couldn’t start the game
          before are now all up in there, scrapping away like champions. This
          makes us very, very happy!
          <br />
          We want to make sure we&#039;re all up front and transparent with you
          about our hopes and priorities for the engine. First up, we want to
          make sure the game works for the players who&#039;ve so far been
          unable to play without issues. After that, we&#039;ll be working
          towards improving FPS and and making sure the physics run more
          smoothly which is work that we&#039;ll continue smashing away at up to
          and beyond release of the engine. We really want you to keep all of
          this in mind: just because the engine&#039;s released doesn&#039;t
          mean we&#039;re completely done with optimizations. You guys deserve
          all the tricks we&#039;ve got up our sleeve, not just one or two!
          <br />
          Some of you will have noticed that we get a sneaky weekly update out
          into the test branch with fixes and improvements, and that should
          carry on happening right up until the official release in the coming
          weeks. We’re working as quickly as we can, and aim to keep on
          improving after the release.
          <br />
          <br />
          <br />
          <a
            href="#"
            id="female-mechanic"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <LazyLoadImage
            src={require('../../public/images/devblog/10/female.png?webp&url')}
            placeholderSrc={require('../../public/images/devblog/10/female.png?webp&lqip')}
            effect="blur"
          />
          <br />
          <br />
          <b>- Female Machanic</b>
          <br />
          In the last devblog, we promised a redesign of our female Mechanic and
          here she is! We’ve made a ton of new faces and hairstyles, and here’s
          your first look at a few examples that we hope you’ll like. Really
          looking forward to getting her into the game when Survival Mode’s
          ready.
          <br />
          <br />
          <br />
          <a
            href="#"
            id="updated-textures"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <LazyLoadImage
            src={require('../../public/images/devblog/10/new-tex.png?webp&url')}
            placeholderSrc={require('../../public/images/devblog/10/new-tex.png?webp&lqip')}
            effect="blur"
          />
          <br />
          <br />
          <b>- Updated Textures!</b>
          <br />
          As we beaver away in the background, cleaning up and improving the
          code in Scrap Mechanic, we’re also working hard to improve a whole
          bunch of visuals. Since release, the block textures have been really
          small, making it tough for us to make a texture that both looks great
          and doesn’t tile too obviously. Thanks to the glory and magnificence
          of our new game engine, we can get the block textures bigger, meaning
          there’s more working room for us to make them all look incredible.
          <br />
          The new textures are also way more in line with the ambitions we have
          for the quality of visuals on offer in Survival Mode. Here is a first
          look at the new wood and concrete textures!
          <br />
          All of our block textures will be getting the nips, tucks and full-on
          facelifts they so richly deserve, so get ready to see your creations
          looking a whole lot more awesome in the near future!
          <br />
          <br />
          <br />
          <a
            href="#"
            id="encryptor"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <LazyLoadImage
            src={require('../../public/images/devblog/10/encryptor.png?webp&url')}
            placeholderSrc={require('../../public/images/devblog/10/encryptor.png?webp&lqip')}
            effect="blur"
          />
          <br />
          <br />
          <b>- Encrypt Your Connections</b>
          <br />
          While you’re exploring buildings in Survival Mode, the temptation will
          definitely be there for you to whip out your connect tool and examine
          where all the interactive parts are located so you can get your
          scavenge on. One upcoming spanner in those particular works is gonna
          be the
          {' '}
          <b>encryptor</b>
          .
          <br />
          This device will hide all of the connection wires until it’s removed
          from the structure on which it’s placed. Mechanics will of course be
          able to place and hide this device on their creations so that you can
          make life harder for any mischievous Mechanics, protecting yourself
          from those who are out to fiddle with your connections and snaffle
          your stuff.
          <br />
          <br />
          <br />
          <a
            href="#"
            id="outfits"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <LazyLoadImage
            src={require('../../public/images/devblog/10/new-outfit.png?webp&url')}
            placeholderSrc={require('../../public/images/devblog/10/new-outfit.png?webp&lqip')}
            effect="blur"
          />
          <br />
          <br />
          <b>- Survival Outfits</b>
          <br />
          Oh me, oh my! More Survival Mode goodness! Right now, we’re working on
          a range of alternate outfits that Mechanics can stumble upon in
          Survival Mode. We want to keep these sweet styles a secret until
          release, but the Farmbots have said it’s ok to give you a sneak peek
          of this one.
          <br />
          Naturally, gloves, jackets, pants and other items are all separately
          interchangeable giving all you fashion-conscious Mechanics a whole
          bunch of ways to express your style! Exciting times for
          personalization fans, right?
          <br />
          <br />
          <br />
          <a
            href="#"
            id="beards"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <a
            href="#"
            id="hairstyles"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <LazyLoadImage
            src={require('../../public/images/devblog/10/beards.png?webp&url')}
            placeholderSrc={require('../../public/images/devblog/10/beards.png?webp&lqip')}
            effect="blur"
          />
          <br />
          <br />
          <b>- More Beards &amp; Hairstyles</b>
          <br />
          As the ancient saying goes, with great beard comes great
          responsibility. You’re now gonna have the chance to choose just how
          great your beard is with the new range of beards and hairstyles for
          the male Mechanic so you can always be certain of fantastic follicles.
          Here are a few examples. Some of them are hil-hair-ious.
          <br />
          <br />
          <br />
          <a
            href="#"
            id="suspention-update"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <LazyLoadImage
            src={require('../../public/images/devblog/10/suspension.png?webp&url')}
            placeholderSrc={require('../../public/images/devblog/10/suspension.png?webp&lqip')}
            effect="blur"
          />
          <br />
          <br />
          <b>- Suspension Update: You Asked, We Deliver!</b>
          <br />
          Ahh, the new engine is making all our fixes so much smoother already,
          we can’t tell you how happy we are about all of this! This time, it’s
          freeing us up to focus a bit more on showing our beloved suspension a
          little extra love.
          <br />
          Your feedback has led us to throw in a resistance slider to the
          suspension function. Some creations are incredibly heavy, and do
          nothing but instantly squash the suspension, so now it’s possible to
          adjust the resistance to handle different weights. We’re also fixing
          up the possibility for you to be able to add color to your suspension
          using the paint tool, which wasn’t previously an option.
          <br />
          <br />
          <br />
          <a
            href="#"
            id="particle-engine"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <LazyLoadImage
            src="https://i.imgur.com/acgu0CF.gif"
            placeholderSrc="https://i.imgur.com/acgu0CFs.gif"
            effect="blur"
          />
          <br />
          <br />
          <b>- Particle Engine for the Modders!</b>
          <br />
          Our awesome programmers have put together a brand new particle engine
          with a whole load of new features, meaning we can add more particles
          as well as improve the current ones. Best of all, we’ve made it crazy
          easy to use so all you modding Mechanics can make your mods even more
          amazing!
          <br />
          <br />
          <a
            href="#"
            id="survival"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <b>-Survival Mode</b>
          <br />
          Just a quick update! As you’re reading this, we’re working hard on the
          crafting system and terrain. There’s still a long way to go on
          Survival Mode because our ambitions for this are high, and we won’t be
          releasing anything that’s half-done with a heap of cut corners. We’re
          aiming to make it great!
          <br />
          Unless it’s something we can feel proud of at the same time as knowing
          it’s something you’ll all love and enjoy, what would the point be?
          <br />
          Progress is good though, and we will of course share news as and when
          we get closer and we’ll be doing our very best in the meantime to keep
          you entertained with new fun updates to make your wait less painful.
          <br />
          <br />
          <br />
          <b>
            That’s all for this devblog, thanks so much for reading.
            <br />
            Until next time, Mechanics! Keep on scrapping!
          </b>
        </article>
      </div>
      <Comments />
    </div>
  );
}
