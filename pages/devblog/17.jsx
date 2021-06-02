/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable global-require */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-danger */
import moment from 'moment';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Head from 'next/head';
import Comments from '../../components/Comments';

import { devblog17 as devblog } from '../../other/devblog_descriptions';

import Title from '../../public/images/devblog/17/title.png?webp&url';
import TitleLQ from '../../public/images/devblog/17/title.png?webp&lqip';

export const getStaticProps = () => ({
  props: {
    title: 'Devblog 17',
    id: 'devblog-17',
    type: 'article',
    description: devblog.description,
    devblog: {
      id: '17',
      ...devblog,
    },
    image: {
      url: devblog.image_url || Title.toString(),
      large: true,
    },
  },
});

export default function Devblog17(page) {
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
          <br />
          <b>Greetings Mechanics!</b>
          <br />
          <br />
          Set your thrusters to max, because there&#039;s a fully-armed and
          operational devblog coming your way!
          <br />
          <br />
          First, we&#039;d like to acknowledge the amazing content coming from
          the Challenge Builder community. Some of the concoctions you&#039;ve
          come up with have truly blown us away. For example, we really
          didn&#039;t expect Challenge Mode to be used to build escape rooms and
          parkour challenges: those are the sort of surprises that make the long
          hours building Challenge Mode really worthwhile for us. There are some
          impressive challenges up on the workshop right now, made by the
          awesome Scrap Mechanic community. We really encourage everyone to go
          {' '}
          <a href="https://steamcommunity.com/app/387990/workshop/">HERE</a>
          {' '}
          and
          try some of them!
          <br />
          Anyway, we know you&#039;re here for some Survival news, and we are
          ready to deliver! Onwards...
          <br />
          <br />
          <a
            href="#"
            id="survival"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <b>- Survival, piece by piece!</b>
          <br />
          Let&#039;s start with the necessary but less fun background stuff that
          we&#039;ve been working on. When developing a game, it&#039;s common
          to build features and segments separately that eventually must be
          pieced together. For Survival, we&#039;re now starting to weld these
          elements in to one.
          <br />
          For example, a seamless transition from the open world into a
          warehouse, or loading in rooms at the right time and other related
          optimizations. This has taken a lot of our time these last months and
          there is still some &quot;knitting&quot; left to do. But it&#039;s
          really exciting to see these elements finally come together for a more
          cohesive survival experience.
          <br />
          <br />
          <br />
          <a
            href="#"
            id="tapebots"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <LazyLoadImage
            src="https://i.imgur.com/EEd5wub.gif"
            placeholderSrc="https://i.imgur.com/EEd5wubs.gif"
            effect="blur"
          />
          <br />
          <LazyLoadImage
            src="https://i.imgur.com/0CK9nOC.gif"
            placeholderSrc="https://i.imgur.com/0CK9nOCs.gif"
            effect="blur"
          />
          <br />
          <LazyLoadImage
            src="https://i.imgur.com/6Bhc7Yw.gif"
            placeholderSrc="https://i.imgur.com/6Bhc7Yws.gif"
            effect="blur"
          />
          <br />
          <LazyLoadImage
            src="https://i.imgur.com/mKSrCLl.gif"
            placeholderSrc="https://i.imgur.com/mKSrCLls.gif"
            effect="blur"
          />
          <br />
          <br />
          <b>- Tapebots are Tough!</b>
          <br />
          The Tapebots are coming closer! We&#039;re currently tweaking their
          behavior to make sure they&#039;re as satisfying as possible to
          battle. We really want Mechanics to respect the enemies in Scrap
          Mechanic. The Tapebots will be very dangerous and the players will
          need to be tactical, creative and show quick reflexes in order to deal
          with them.
          <br />
          We hope that this less forgiving approach to difficulty will make
          situations more tense and exciting, as well as a lot more fun in co-op
          where you and your friends really can work together to take enemies
          down. So, don&#039;t go running into the warehouses spraying and
          praying... you&#039;ll only end up knocked out next to all the great
          loot!
          <br />
          <br />
          <br />
          <a
            href="#"
            id="upgrading"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <LazyLoadImage
            src="https://i.imgur.com/L5Wq3ol.png"
            placeholderSrc="https://i.imgur.com/L5Wq3ols.png"
            effect="blur"
          />
          <br />
          <LazyLoadImage
            src="https://i.imgur.com/3wPke3u.png"
            placeholderSrc="https://i.imgur.com/3wPke3us.png"
            effect="blur"
          />
          <br />
          <LazyLoadImage
            src="https://i.imgur.com/Zov63gb.png"
            placeholderSrc="https://i.imgur.com/Zov63gbs.png"
            effect="blur"
          />
          <br />
          <br />
          <b>- Upgrade Parts and Components!</b>
          <br />
          In the past weeks we&#039;ve been teasing some of the new upgradeable
          interactive parts on our Twitter. Now you can see them in full 3D
          glory!
          <br />
          Basically, we are working on letting Mechanics upgrade the interactive
          parts in Survival. These upgrades will allow things like more
          connections, faster speed, less gas consumption and more! The sounds
          will also change from level to level. The way you will upgrade these
          parts is with the new Component Kit found when exploring the world.
          This new consumable will be highly sought after and something a lot of
          Mechanics will look for.
          <br />
          <br />
          <br />
          <a
            href="#"
            id="new-lift-concept"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <LazyLoadImage
            src="https://i.imgur.com/UfQJDl7.png"
            placeholderSrc="https://i.imgur.com/UfQJDl7s.png"
            effect="blur"
          />
          <br />
          <LazyLoadImage
            src="https://i.imgur.com/cQQvtFv.png"
            placeholderSrc="https://i.imgur.com/cQQvtFvs.png"
            effect="blur"
          />
          <br />
          <br />
          <b>- A Big Lift</b>
          <br />
          When we started working on Scrap Mechanic, the lift was only for
          lifting stuff. But during development the lift had more functions
          added and overall became more useful, for stuff such as spawning
          blueprints and a few more new functions coming for Survival.
          <br />
          To match these new features, we&#039;ve redesigned the lift to fit its
          uses visually. But on top of that we&#039;re also adding a cool new
          lift remote that the Mechanic will pull up when using the lift. We
          also might let Mechanics put different cool charms on their remote.
          We&#039;ll see!
          <br />
          <br />
          <br />
          <a
            href="#"
            id="clothing"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <LazyLoadImage
            src="https://i.imgur.com/j9RbbEi.png"
            placeholderSrc="https://i.imgur.com/j9RbbEis.png"
            effect="blur"
          />
          <br />
          <LazyLoadImage
            src="https://i.imgur.com/9pbPZfZ.gif"
            placeholderSrc="https://i.imgur.com/9pbPZfZs.gif"
            effect="blur"
          />
          <br />
          <LazyLoadImage
            src="https://i.imgur.com/FjNBIsa.gif"
            placeholderSrc="https://i.imgur.com/FjNBIsas.gif"
            effect="blur"
          />
          <br />
          <LazyLoadImage
            src="https://i.imgur.com/QH4M62G.gif"
            placeholderSrc="https://i.imgur.com/QH4M62Gs.gif"
            effect="blur"
          />
          <br />
          <LazyLoadImage
            src="https://i.imgur.com/S6ckF2C.gif"
            placeholderSrc="https://i.imgur.com/S6ckF2Cs.gif"
            effect="blur"
          />
          <br />
          <br />
          <b>- Dress Up</b>
          <br />
          After much toil, we&#039;ve finally got character customization up and
          running the way we wanted. It really is a bit of a shock (in a good
          way) to see our Mechanic in so many different outfits suddenly,
          running around in the game.
          <br />
          We&#039;re sure you&#039;ll agree it&#039;s a lot of fun to style your
          mechanic and really make him your own. It was a lot of work, but we
          think it was worth it. Not only will you try to hunt down useful parts
          in Survival but also cosmetics to unlock that you can impress your
          Mechanic friends with. Here are some in-game shots!
          <br />
          <br />
          <br />
          <a
            href="#"
            id="packing-stations"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <LazyLoadImage
            src="https://i.imgur.com/rB2BQZM.png"
            placeholderSrc="https://i.imgur.com/rB2BQZMs.png"
            effect="blur"
          />
          <br />
          <LazyLoadImage
            src="https://i.imgur.com/h82ShcB.png"
            placeholderSrc="https://i.imgur.com/h82ShcBs.png"
            effect="blur"
          />
          <br />
          <LazyLoadImage
            src="https://i.imgur.com/nTs07xa.png"
            placeholderSrc="https://i.imgur.com/nTs07xas.png"
            effect="blur"
          />
          <br />
          <LazyLoadImage
            src="https://i.imgur.com/VID8cQ9.png"
            placeholderSrc="https://i.imgur.com/VID8cQ9s.png"
            effect="blur"
          />
          <br />
          <LazyLoadImage
            src="https://i.imgur.com/UwUkMXB.png"
            placeholderSrc="https://i.imgur.com/UwUkMXBs.png"
            effect="blur"
          />
          <br />
          <br />
          <b>- Pack Attack</b>
          <br />
          Say hello to Packing Stations! One way to accomplish farmer quests in
          Scrap Mechanic will be to load up these mobile fruit and vegetable
          houses, thus making the produce ready for delivery to the farmer
          hideouts. All Mechanics need to do is drive up to the correct socket
          and then fill it up until it spits out a packaged crate. But have your
          lifting creations ready, because they need to be stacked and
          transported!
          <br />
          <br />
          <br />
          <a
            href="#"
            id="graphics-update"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <b>- Visual Spit &#039;n&#039; Polish</b>
          <br />
          The eagle eyed among you will notice that we&#039;re really pushing
          the graphics in Scrap Mechanic these days. We want to make sure that
          by the time Survival comes out, the game as a whole will be a much
          more visually appealing and moody experience. So here are a few new
          visual details.
          <br />
          <br />
          <a
            href="#"
            id="new-dynamic-lights"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <LazyLoadImage
            src="https://imgur.com/Ubsj76U.gif"
            placeholderSrcsrc="https://imgur.com/Ubsj76Us.gif"
            effect="blur"
          />
          <br />
          <br />
          Dynamic lights will now both cast shadows and even take colour into
          account. We have to be careful with this one, since it&#039;s
          expensive. But we think we can optimize it enough to run well!
          Here&#039;s an example.
          <br />
          <br />
          <a
            href="#"
            id="old-part-textures"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <LazyLoadImage
            src="https://i.imgur.com/NRGicLK.png"
            placeholderSrc="https://i.imgur.com/NRGicLKs.png"
            effect="blur"
          />
          <br />
          <br />
          We&#039;ve also gone back and updated a lot of the old parts to make
          sure they fit the new updated Scrap Mechanic visual style. They really
          came out nicely! Let&#039;s see if you can spot the improvements...
          <br />
          <br />
          <a
            href="#"
            id="shiny-metal"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <LazyLoadImage
            src="https://i.imgur.com/UxrQkoT.gif"
            placeholderSrc="https://i.imgur.com/UxrQkoTs.gif"
            effect="blur"
          />
          <LazyLoadImage
            src="https://i.imgur.com/dquKA32.gif"
            placeholderSrc="https://i.imgur.com/dquKA32s.gif"
            effect="blur"
          />
          <br />
          <br />
          Since metal is something that we have a lot of in Scrap Mechanic,
          we&#039;ve also updated that to allow parts to have a nice shiny
          chrome effect!
          <br />
          <br />
          <br />
          Thanks for your support – and for playing!
          <br />
          We will be back soon with more Scrap Mechanic news!
        </article>
      </div>
      <Comments />
    </div>
  );
}
