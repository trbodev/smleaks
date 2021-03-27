/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable global-require */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-danger */
import { useState } from 'react';
import { isMobile } from 'react-device-detect';
import moment from 'moment';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Head from 'next/head';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import SidebarOverlay from '../../components/SidebarOverlay';
import Comments from '../../components/Comments';

import { devblog13 as devblog } from '../../other/devblog_descriptions';

import Title from '../../public/images/devblog/13/title.png?webp&url';
import TitleLQ from '../../public/images/devblog/13/title.png?webp&lqip';

export const getStaticProps = () => ({
  props: {
    title: 'Devblog 13',
    id: 'devblog-13',
    type: 'article',
    description: devblog.description,
    devblog: {
      id: '13',
      ...devblog,
    },
    image: {
      url: devblog.image_url || Title.toString(),
      large: true,
    },
  },
});

export default function Devblog13(page) {
  const [sidebar, toggleSidebar] = useState(isMobile ? { 'data-sidebar-hidden': 'hidden' } : {});
  return (
    <div>
      <Header {...page} />
      <Head>
        {page.devblog.date_manual ? null : (
          <meta
            property="og:article:published_time"
            content={moment(page.devblog.date,
              'MM-DD-YYYY').format('YYYY-M-D')}
          />
        )}
      </Head>
      <div
        id="page-wrapper"
        className="dark-mode page-wrapper with-transitions with-navbar with-sidebar with-navbar-fixed-bottom with-custom-webkit-scrollbars with-custom-css-scrollbars"
        data-sidebar-type="overlayed-sm-and-down"
        {...sidebar}
      >
        <Navbar {...{
          toggleSidebar, sidebar,
        }}
        />
        <SidebarOverlay {...{
          toggleSidebar, sidebar,
        }}
        />
        <Sidebar {...page} />
        <div className="content-wrapper">
          <div className="container-fluid">
            <div className="row row-eq-spacing-lg">
              <div className="col-lg-9">
                <div className="content">
                  <h1 className="content-title">
                    Devblog
                    {' '}
                    {page.devblog.id}
                    {' '}
                    -
                    {' '}
                    { page.devblog.date_manual || moment(page.devblog.date,
                      'MM-DD-YYYY').format('MMMM Do, YYYY') }
                    {' '}
                    -
                    {' '}
                    <a href={page.devblog.url}>Original</a>
                  </h1>
                </div>
                <div className="card">
                  <style dangerouslySetInnerHTML={{
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
                    <b>
                      Greetings Mechanics!
                    </b>
                    <br />
                    It’s been a little while since we last parked our
                    construction diggers to publish a dev blog, but we intend to
                    step things up a gear in future starting with this, the first
                    in a revamped and polution-free series of updates, intended to
                    keep you even more up to date with developments and community
                    trends in the world of Scrap Mechanic!
                    <br />
                    Today’s update
                    includes exciting new details on Survival Mode, reworked guns
                    and how terrain will work in future versions. Read on for the
                    details – and thanks for playing!
                    <br />
                    <br />
                    <br />
                    <a href="#" id="scrapyard" style={{ display: 'block' }} aria-hidden="true" />
                    <LazyLoadImage
                      src="https://i.imgur.com/zD6GQWY.png"
                      placeholderSrc="https://i.imgur.com/zD6GQWYs.png"
                      effect="blur"
                    />
                    <br />
                    <LazyLoadImage
                      src="https://i.imgur.com/Z6w7uL2.png"
                      placeholderSrc="https://i.imgur.com/Z6w7uL2s.png"
                      effect="blur"
                    />
                    <br />
                    <LazyLoadImage
                      src="https://i.imgur.com/44Iqgrt.png"
                      placeholderSrc="https://i.imgur.com/44Iqgrts.png"
                      effect="blur"
                    />
                    <br />
                    <br />
                    <b>
                      - Enter the Scrapyard
                    </b>
                    <br />
                    Say hello to the massive Scrapyard biome we’ve been
                    building for Survival Mode!
                    <br />
                    Once the largest farming
                    settlement on the entire planet, the Scrapyard has since been
                    choked by untold tons of scrap and garbage that has
                    accumulated. With enormous bots pushing rubble around and
                    stacking scrap in sky high pillars of junk, the Scrapyard will
                    be a great place for scavenging parts and resources. But be
                    alert… It’s also not very safe!
                    <br />
                    <br />
                    <br />
                    <a href="#" id="weapons" style={{ display: 'block' }} aria-hidden="true" />
                    <LazyLoadImage
                      src="https://i.imgur.com/hAEWFt4.png"
                      placeholderSrc="https://i.imgur.com/hAEWFt4s.png"
                      effect="blur"
                    />
                    <br />
                    <LazyLoadImage
                      src="https://i.imgur.com/X9a1lnB.gif"
                      placeholderSrc="https://i.imgur.com/X9a1lnBs.gif"
                      effect="blur"
                    />
                    <br />
                    <br />
                    <b>
                      - Adjust Your Arsenal
                    </b>
                    <br />
                    In our last dev blog we showed off the Spud Gun for the
                    very first time. Since then we’ve had a ton of great feedback
                    from the community, including many requests for our latest
                    firepower feature; modular weapons!
                    <br />
                    We’re happy to
                    confirm that the team is currently reworking spud guns so that
                    players can personalize and improve them from many different
                    parts (see a few below!) We are also tweaking the trajectory
                    of potatoes based on your feedback. Should they have a range
                    limit? How much falloff should they have? Let us know what you
                    think in the comments!
                    <br />
                    <br />
                    <br />
                    <a href="#" id="survival-terrain" style={{ display: 'block' }} aria-hidden="true" />
                    <LazyLoadImage
                      src="https://i.imgur.com/ReJklaP.png"
                      placeholderSrc="https://i.imgur.com/ReJklaPs.png"
                      effect="blur"
                    />
                    <LazyLoadImage
                      src="https://i.imgur.com/2sbhrC2.gif"
                      placeholderSrc="https://i.imgur.com/2sbhrC2s.gif"
                      effect="blur"
                    />
                    <br />
                    <LazyLoadImage
                      src="https://i.imgur.com/sMJQ0QQ.gif"
                      placeholderSrc="https://i.imgur.com/sMJQ0QQs.gif"
                      effect="blur"
                    />
                    <br />
                    <br />
                    <b>- Survival mode terrain</b>
                    <br />
                    The next
                    in-development tech is something we’re especially excited to
                    share: randomly generated terrain for Survival Mode!
                    <br />
                    In
                    Survival Mode, the entire terrain will be built from tiles
                    made in our terrain editor, similar to Creative Mode. However,
                    we’ve improved the system further to give more shape and curve
                    to tiles, which we hope will give Survival a much more epic
                    feel, with rolling and natural-looking environments.
                    <br />
                    Thanks
                    to randomly generated terrain, in Survival Mode players will
                    explore beautiful worlds unique to their experience. We can’t
                    wait for you to explore them yourself!
                    <br />
                    Keep in mind that
                    this is just a tech demo and not how the actual final terrain
                    will look. It will have a lot more variation and cool places
                    to explore.
                    <br />
                    <br />
                    <br />
                    <a href="#" id="custom-tiles" style={{ display: 'block' }} aria-hidden="true" />
                    <LazyLoadImage
                      src="https://i.imgur.com/HphDMLG.png"
                      placeholderSrc="https://i.imgur.com/HphDMLGs.png"
                      effect="blur"
                    />
                    <br />
                    <br />
                    <b>- Tile Styles</b>
                    <br />
                    Recently we had to take a
                    short break from working on the game’s Terrain Editor, but
                    we’re happy to confirm that the team is back to work on a new
                    version that you mechanics will be able to use to create your
                    own world tiles!
                    <br />
                    When the new Terrain Editor is released,
                    players will be able to place trees, rocks, roads and shape
                    the ground itself! We’re also planning to include a feature
                    that will allow you to select placement of your tiles when you
                    start a new world. Finally, mechanics will be able to share
                    their world tiles via Steam Workshop. We hope to have all of
                    these features out in time for the new year!
                    <br />
                    <br />
                    <a href="#" id="lods" style={{ display: 'block' }} aria-hidden="true" />
                    <b>
                      - LODs Better
                    </b>
                    <br />
                    In visual spit ‘n’ polish news, we finally got around
                    to improving our level of detail system to make it run a lot
                    smoother. In the current game you might have noticed that
                    trees and rocks can pop as you get closer to them - this is
                    because more detailed models are getting spawned in. In future
                    versions, we’ve made the transition between models nearly
                    unnoticeable, making walking and driving a much nicer
                    experience.
                    <br />
                    <br />
                    <br />
                    <a href="#" id="new-outfits" style={{ display: 'block' }} aria-hidden="true" />
                    <LazyLoadImage
                      src="https://i.imgur.com/ECGnUas.png"
                      placeholderSrc="https://i.imgur.com/ECGnUass.png"
                      effect="blur"
                    />
                    <br />
                    <br />
                    <b>- Tee-riffic</b>
                    <br />
                    Finally, it’s always a
                    pleasure to share some of the outfits our digital tailors have
                    been busily sowing together. This one is the new golfer
                    outfit: very fitting for when you and your friends are
                    swinging sledgehammers at loose objects.
                    <br />
                    <br />
                    <a href="#" id="survival" style={{ display: 'block' }} aria-hidden="true" />
                    <b>
                      -So, Survival Mode… When?
                    </b>
                    <br />
                    The Scrap Mechanic team is working tirelessly to
                    deliver a game mode that lives up to our quality standards –
                    and your expectations! Until we’re able to hit those goals, we
                    appreciate the patience and support of the community. It will
                    be worth it in the end!
                    <br />
                    Because the game is built using
                    our own game engine, it means we have to work a little bit
                    harder to get the features we want working in-game, compared
                    to a pre-made engine which comes with functions already in
                    place. However, this also means we have full control over
                    everything we do, which is very important for a complex game
                    like Scrap Mechanic. We are able to build a lot of complex and
                    unique functions that we believe fans will really appreciate.
                    Survival Mode, for example, will be fully moddable, on top of
                    the deep physics and multiplayer elements you can already see
                    at work today.
                    <br />
                    <br />
                    We have an awesome team that is
                    making amazing progress every day, working hard to create a
                    unique gaming experience that you will hopefully love for many
                    years to come. Thanks for your support mechanics!
                    <br />
                    <br />
                    <b>Until next time! Keep on scrapping!</b>
                  </article>
                </div>
                <Comments />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
