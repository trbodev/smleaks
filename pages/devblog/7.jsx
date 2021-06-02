/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable global-require */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-danger */
import moment from 'moment';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Head from 'next/head';
import Comments from '../../components/Comments';

import { devblog7 as devblog } from '../../other/devblog_descriptions';

import Title from '../../public/images/devblog/7/title.png?webp&url';
import TitleLQ from '../../public/images/devblog/7/title.png?webp&lqip';

export const getStaticProps = () => ({
  props: {
    title: 'Devblog 7',
    id: 'devblog-7',
    type: 'article',
    description: devblog.description,
    devblog: {
      id: '7',
      ...devblog,
    },
    image: {
      url: devblog.image_url || Title.toString(),
      large: true,
    },
  },
});

export default function Devblog7(page) {
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
          <br />
          We’re back with another exciting devblog! We’ve got some cool new
          stuff to share with you, but first of all we’d like to let you all
          know how blown away we are by the incredible support we’re getting
          from all you Mechanics out there. There’s nothing that boosts our
          motivation more then seeing all the awesome creations being made.
          We’re crazy grateful, and you’re all amazing! Thanks! It’s been a
          great month here at Scrap Mechanic HQ, not to mention busy! We started
          out as a four-man band but as of April, our team has doubled in size
          to eight with plans for even more growth! Great news for us because
          who doesn’t love new colleagues, and sweet news for you because it
          means much faster development.
          <br />
          <br />
          Here comes a bunch of stuff we’ve been working on.
          {' '}
          <b>Not everything though</b>
          , because there’s no fun in giving everything away and not having a
          few secret projects to save for later…
          <br />
          <br />
          <br />
          <a
            href="#"
            id="weld-tool"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <LazyLoadImage
            src={require('../../public/images/devblog/7/welding-tool.png?webp&url')}
            placeholderSrc={require('../../public/images/devblog/7/welding-tool.png?webp&lqip')}
            effect="blur"
          />
          <br />
          <br />
          <b>- Welding Tool: in the Works!</b>
          <br />
          Here’s your first look at the welding tool! This is quite possibly the
          most requested tool from our darling community, and with good reason!
          Some of us were clumsy enough to slice our creations in half by
          mistake, and shed a tiny mechanic’s tear. Well cry no more! The
          welding tool is in development right now. But why is it taking so long
          you might ask? Well, there are a range of different situations where
          the welding tool has to work differently, which means that it needs to
          have more than just one feature. So making sure the tool works well
          across all these situations and being certain that it meets the
          Mechanic’s needs is a touch on the time-consuming side. We don’t
          settle for quick and shaky solutions, so when it’s done, it’ll be
          awesome!
          <br />
          <br />
          <br />
          <a
            href="#"
            id="totebot-music"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <LazyLoadImage
            src={require('../../public/images/devblog/7/totebot-heads.jpg?webp&url')}
            placeholderSrc={require('../../public/images/devblog/7/totebot-heads.jpg?webp&lqip')}
            effect="blur"
          />
          <br />
          <br />
          <b>- Let’s Make Music! Totebot Heads Coming Soon!</b>
          <br />
          Look out! Four creepy Totebot heads incoming! Don’t despair though,
          they’re perfectly harmless. For now. In all honesty, they&#039;re
          actually broken, but we&#039;ve heard them making noise which must
          mean their internal sound generators are still working! Obviously the
          only thing to do here is turn their mechanical skulls into musical
          instruments. Obviously. Whilst they’re not the most useful thing in
          the world, these heads neatly close the creative circle in Scrap
          Mechanic by allowing you to make music. It’s a ton of fun to mess
          around with and seeing what beats and jams you can come up with. How
          about a little musical challenge or two amongst your fellow mechanics?
          We’re looking forward to hearing your hit-making skills!
          <br />
          <br />
          <br />
          <a
            href="#"
            id="storage"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <LazyLoadImage
            src={require('../../public/images/devblog/7/crates.jpg?webp&url')}
            placeholderSrc={require('../../public/images/devblog/7/crates.jpg?webp&lqip')}
            effect="blur"
          />
          <br />
          <br />
          <b>- This New Feature is Really Crate!</b>
          <br />
          Since you’ll have limited space in your backpack in Survival Mode,
          you’ll of course need extra storage for all the things that you gather
          out in the world. These handsome new crates are the storage solution
          of your dreams! They come in two sizes and can be attached to any
          vehicle. These crates won’t be added to creative mode, but we thought
          you might like a sneak peek.
          <br />
          <br />
          <br />
          <a
            href="#"
            id="survival-cars"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <LazyLoadImage
            src={require('../../public/images/devblog/7/car1.png?webp&url')}
            placeholderSrc={require('../../public/images/devblog/7/car1.png?webp&lqip')}
            effect="blur"
          />
          <br />
          <LazyLoadImage
            src={require('../../public/images/devblog/7/car2.png?webp&url')}
            placeholderSrc={require('../../public/images/devblog/7/car2.png?webp&lqip')}
            effect="blur"
          />
          <br />
          <br />
          <b>- Cars in Survival Mode</b>
          <br />
          We’re working on vehicles that were left behind by the farmers who
          used to populate the planet. You’ll eventually be able to find them
          spread out on the survival map, ready to be used as they are, but also
          a prime source for scrap and parts! Perfect for beginners, or just
          lazy mechanics on the run! It’s not hard to build better, more stable
          vehicles than these, though. One neat little detail is that they’ve
          got detachable rims so you can change the look of your wheels! As you
          can see, we sketch a lot when we’re in the design phase, just to be
          sure things are thought out and neat!
          <br />
          <br />
          <br />
          <a
            href="#"
            id="crashed-ship"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <LazyLoadImage
            src={require('../../public/images/devblog/7/shipwreck.png?webp&url')}
            placeholderSrc={require('../../public/images/devblog/7/shipwreck.png?webp&lqip')}
            effect="blur"
          />
          <br />
          <br />
          <b>- Mystery Spaceship Interior</b>
          <br />
          We’ve been hard at work on the crashed spaceship that gets our
          Mechanic stranded. There’s been heaps of work to do with the custom
          pieces for the craft’s interior, but we think it’s starting to look
          really great! By great, we mean that you can’t really tell that it’s
          all made out of building pieces inside, but you’ll just have to take
          our word for it. Some stuff we wanna leave as a surprise for you when
          you get to explore Survival Mode for yourself!
          <br />
          <br />
          <br />
          <a
            href="#"
            id="new-drivers-seat"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <LazyLoadImage
            src={require('../../public/images/devblog/7/3x5-steering.png?webp&url')}
            placeholderSrc={require('../../public/images/devblog/7/3x5-steering.png?webp&lqip')}
            effect="blur"
          />
          <br />
          <br />
          <b>- New Driver&#039;s Seat!</b>
          <br />
          Many Mechanics have been asking for a steering wheel that’s three
          blocks wide, so we’re making one! It’s really turned out way cooler
          than we expected, so all you symmetry-loving Mechanics can get your
          hands on the new Driver&#039;s Seat in the coming weeks.
          <br />
          <br />
          <br />
          <a
            href="#"
            id="survival-update"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <b>- What’s Happening with Survival Mode?</b>
          <br />
          We’re putting most of our time into Survival mode right now. Our goal
          is to make sure that it’s really bringing something new to the genre,
          and making something we’d love to release takes time. Don’t go
          expecting Survival Mode to show up very soon, because we’ve got some
          road left up ahead. The good news is that we’ll always be keeping you
          posted in these DevBlogs so that you’re always up to date with the
          latest progress from Scrap Mechanic HQ! Not only that, but we’re
          working hard on updating the game as often as we can with improvements
          and new content, so stick around because we’re not going anywhere!
          Thanks so much for your patience as we work to produce something we’re
          proud of and that you’ll hopefully love.
        </article>
      </div>
      <Comments />
    </div>
  );
}
