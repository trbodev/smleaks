/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable global-require */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-danger */
import moment from 'moment';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Head from 'next/head';
import Comments from '../../components/Comments';

import { devblog3 as devblog } from '../../other/devblog_descriptions';

import Title from '../../public/images/devblog/3/title.png?webp&url';
import TitleLQ from '../../public/images/devblog/3/title.png?webp&lqip';

export const getStaticProps = () => ({
  props: {
    title: 'Devblog 3',
    id: 'devblog-3',
    type: 'article',
    description: devblog.description,
    devblog: {
      id: '3',
      ...devblog,
    },
    image: {
      url: devblog.image_url || Title.toString(),
      large: true,
    },
  },
});

export default function Devblog3(page) {
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
          As with so many of the best things life has to offer, we at Scrap
          Mechanic HQ find ourselves tired and satisfied after a prolonged
          period of some considerable exertion. By that, we of course mean we’ve
          had an incredibly busy month where we totally took care of business –
          and we’ve got about four hundred metric tons of awesome to share with
          you!
          <br />
          <br />
          <br />
          <a
            href="#"
            id="multiplayer-physics"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <LazyLoadImage
            effect="blur"
            src={require('../../public/images/devblog/3/scrapmechanic04032015_162738601.png?webp&url')}
            placeholderSrc={require('../../public/images/devblog/3/scrapmechanic04032015_162738601.png?webp&lqip')}
            alt="multiplayer"
          />
          <br />
          <br />
          <b>- Multiplayer and Physics</b>
          <br />
          Time for an update on the multiplayer! It’s now possible to build
          things with physics, and it actually runs just great. We’ve just spent
          the whole day building vehicles and we’re seriously chuffed to bits
          over how fun it is to play now.
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
            effect="blur"
            src={require('../../public/images/devblog/3/female-mechanic.png?webp&url')}
            placeholderSrc={require('../../public/images/devblog/3/female-mechanic.png?webp&lqip')}
            alt="female-mechanic"
          />
          <br />
          <br />
          <b>- Female Mechanic</b>
          <br />
          Remember in our first devblog when we said we were working on a
          secret? Time to uncover the mystery! For a while now, we’ve been
          working on modeling a female mechanic! We’re happy to announce that
          you’re now able to play as a male or female. We’re a little bit stuck
          on a name for our new Mechanic Maiden – maybe you have some
          suggestions for us? Let us know on Facebook or Twitter! We also
          started working on her animation.
          <br />
          <br />
          <br />
          <a
            href="#"
            id="radio"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <LazyLoadImage
            effect="blur"
            src={require('../../public/images/devblog/3/radio.png?webp&url')}
            placeholderSrc={require('../../public/images/devblog/3/radio.png?webp&lqip')}
            alt="radio"
          />
          <br />
          <br />
          <b>- Tune In to Agribot FM!</b>
          <br />
          Oh no! Those beastly agribots have hijacked the radio station and are
          now transmitting classic selections from their deeply unusual taste in
          music. Sadly there’s not much we can do about it, but we did add a
          radio to the game so you can at least have a listen. The speakers
          aren’t that great but it’s better then nothing. You can install the
          radio on your vehicle or just have it beside you as you build. If you
          don’t like the music, don’t come crying to us… Maybe you’re brave
          enough to go ask the agribots if they do requests?
          <br />
          <br />
          <br />
          <a
            href="#"
            id="collision-sounds"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <LazyLoadImage
            effect="blur"
            src={require('../../public/images/devblog/3/collision.png?webp&url')}
            placeholderSrc={require('../../public/images/devblog/3/collision.png?webp&lqip')}
            alt="collision"
          />
          <br />
          <br />
          <b>- Collision Sounds</b>
          <br />
          Hey. What’s that sound? Did you hear that? Why, it’s just the sound of
          all the scrap colliding with awesome new custom noises, that’s all!
          We’ve added a whole bunch of sounds to every item in the game so that
          when it collides with a certain surface (wood, plastic, stone etc.),
          it makes a satisfying noise. Not only do your creations act with
          physics, but now they also act with sound. Now, who’s gonna be the
          first mechanic to build a drum machine on wheels?
          <br />
          <br />
          <br />
          <a
            href="#"
            id="buttons"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <LazyLoadImage
            effect="blur"
            src={require('../../public/images/devblog/3/buttons-final.png?webp&url')}
            placeholderSrc={require('../../public/images/devblog/3/buttons-final.png?webp&lqip')}
            alt="buttons-mockup"
          />
          <br />
          <br />
          <b>- Punchable Buttons</b>
          <br />
          For centuries, man has pursued power, wealth, happiness, and – of
          course – the perfect button. The pursuit of the perfect button began
          with simple questions… Questions such as “what material should make up
          the button?” and “what kind of paint should adorn the button’s sweet,
          sweet face?” Then Robin happened. Robin is a button manufacturer
          extraordinaire and he answered those questions with the grace and
          confidence of a terrific eagle of some kind. He made the button
          irresistibly round and a joy to punch, and gave it the near-mythical
          capability of turning stuff on. And/or off. We’ve also fixed it so
          that when you have something connected to buttons on your vehicle,
          you’re able to access all the buttons on the hotbar while driving.
          This makes it incredibly easy to dazzle and excite your friend or
          friends with the sweet convertible ride you just built.
          <br />
          <br />
          <br />
          <a
            href="#"
            id="gigantic-trees"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <LazyLoadImage
            effect="blur"
            src={require('../../public/images/devblog/3/scrapmechanic03252015_143550552.png?webp&url')}
            placeholderSrc={require('../../public/images/devblog/3/scrapmechanic03252015_143550552.png?webp&lqip')}
            alt="trees"
          />
          <br />
          <br />
          <b>- Gigantic Trees</b>
          <br />
          The team here at Scrap Mechanic HQ loves endless, dense, lush forests
          to explore and get lost in. If you don’t share our arboreal
          enthusiasm, you’ll be horrified to learn that we’ve added some brand
          new humungous trees to the game. Inspired by the majesty of the Giant
          Redwood, you’ll be feeling like one humble little mechanic standing
          next to these bad boys, but don’t worry! You can just compensate by
          building something massive and robust to make you feel less like
          you’re having a bit of an existential crisis.
          <br />
          <br />
          <br />
          <a
            href="#"
            id="pistons"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <LazyLoadImage
            effect="blur"
            src={require('../../public/images/devblog/3/k-wn4am-w-awg_-vdxjc-zkizl1dh0qjlgrwca1lrkc.png?webp&url')}
            placeholderSrc={require('../../public/images/devblog/3/k-wn4am-w-awg_-vdxjc-zkizl1dh0qjlgrwca1lrkc.png?webp&lqip')}
            alt="pistons"
          />
          <br />
          <br />
          <b>- Pistons!</b>
          <br />
          We’ve been working on creating a usable piston in a couple of handy
          varieties: one with a shorter extension and one a little longer. This
          is going to make it easy to make nifty sliding doors and fully
          functional elevators, but also unlocks the magic of a cruel and
          unusual super-sport: Stuff Poking. Attach the piston to your vehicle
          and – from a convenient distance and at a mere keystroke – poke stuff
          off cliffs. Stuff that has been made by your friend or friends. Just
          poke it. Poke it right off a cliff and gleefully observe the ensuing
          dismay.
          <br />
          <br />
          <a
            href="#"
            id="release-timing"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <b>
            - Yeah guys, this all sounds great but when can I play the game?!
          </b>
          <br />
          Lots of you future mechanics have been in touch by mail, on Facebook
          and through Twitter to ask us about a our early access release date
          (…keep that stuff up by the way, we love to hear from you and your
          enthusiasm is making grown developers weep tears of the purest joy.
          Thanks!).
          <br />
          The best answer we’ve got for you right now is we’re aiming for later
          in 2015. We believe that unless good value can be guaranteed to the
          player, a developer should not yet release on early access. Even
          though Scrap Mechanic is a whole heap of fun to play in creative mode
          right now, there are a few things we want to add that we think are
          going to make it even better. Be sure to follow us on Facebook and
          Twitter to stay ahead of the game and get all our updates and release
          plans first! In the meantime, Robin has unleashed another of his
          talents and presents you with this expertly baked Scrap Mechanic
          muffin to reward you for your patience as we work to produce something
          we’re proud of and that you’ll hopefully love.
          <br />
          <br />
          <br />
          <LazyLoadImage
            effect="blur"
            src={require('../../public/images/devblog/3/muffin-final.png?webp&url')}
            placeholderSrc={require('../../public/images/devblog/3/muffin-final.png?webp&lqip')}
            alt="hammer-muffin"
          />
          <br />
          <br />
          If you have any requests or suggestions, feel free to contact us via
          Facebook or Twitter We love hearing from all you future Mechanics!
          <br />
          <br />
        </article>
      </div>
      <Comments />
    </div>
  );
}
