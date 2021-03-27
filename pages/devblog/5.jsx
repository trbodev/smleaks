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

import { devblog5 as devblog } from '../../other/devblog_descriptions';

import Title from '../../public/images/devblog/5/title.png?webp&url';
import TitleLQ from '../../public/images/devblog/5/title.png?webp&lqip';

export const getStaticProps = () => ({
  props: {
    title: 'Devblog 5',
    id: 'devblog-5',
    type: 'article',
    description: devblog.description,
    devblog: {
      id: '5',
      ...devblog,
    },
    image: {
      url: devblog.image_url || Title.toString(),
      large: true,
    },
  },
});

export default function Devblog5(page) {
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
                    <b>Hi Mechanics!</b>
                    <br />
                    Another fantastic month has passed!
                    Feels like we’ve been working 25 hours a day this last month
                    and the coffee machine at Scrap Mechanic HQ has been put
                    through the ultimate stress test. Bugs have been squashed and
                    awesome has been added. Highlights? Highlights:
                    <br />
                    <br />
                    <br />
                    <a href="#" id="new-textures" style={{ display: 'block' }} aria-hidden="true" />
                    <LazyLoadImage
                      src={require('../../public/images/devblog/5/textures.jpg?webp&url')}
                      placeholderSrc={require('../../public/images/devblog/5/textures.jpg?webp&lqip')}
                    />
                    <br />
                    <br />
                    <b>- Build a Great-looking Hideout. Fast!</b>
                    <br />
                    Our base blocks have really been improved with new textures!
                    They’ve gone from basic, plain colors to now looking like
                    different materials. Best of all, they’ve all got different
                    weights, so keep that in mind when you build vehicles. These
                    blocks can be scaled to build big structures in no time at
                    all!
                    <br />
                    <br />
                    <br />
                    <a href="#" id="new-clouds" style={{ display: 'block' }} aria-hidden="true" />
                    <LazyLoadImage
                      src={require('../../public/images/devblog/5/sky.jpg?webp&url')}
                      placeholderSrc={require('../../public/images/devblog/5/sky.jpg?webp&lqip')}
                    />
                    <br />
                    <br />
                    <b>- Fluffy New Clouds</b>
                    <br />
                    Since we started work on the game we’ve badly needed a neat
                    skybox - we just never got round to making one. Something
                    wonderful happened the other day though, when our talented
                    artist created a flying machine and took to the sky with his
                    mighty pencil. The result is nice: stylized, but not childish.
                    Just the way we wanted them. Unfortunately our artist crashed
                    somewhere and got stuck in a giant pine tree. We hope for his
                    speedy return with fingers and talent intact.
                    <br />
                    <br />
                    <br />
                    <a href="#" id="steam" style={{ display: 'block' }} aria-hidden="true" />
                    <LazyLoadImage
                      src={require('../../public/images/devblog/5/scrapsteam.png?webp&url')}
                      placeholderSrc={require('../../public/images/devblog/5/scrapsteam.png?webp&lqip')}
                    />
                    <br />
                    <br />
                    <b>- Scrap Mechanic on Steam!</b>
                    <br />
                    Hold on Mechanics! Calm down! This doesn’t mean the game is
                    out yet, but it does mean we’re currently implementing the
                    game with Steam. We’re still making daily changes and testing
                    it all out, and we’ll be in that phase just a little longer.
                    All this means that we’re getting closer, so it’s still great
                    news!
                    <br />
                    <br />
                    <br />
                    <a href="#" id="creative-terrain" style={{ display: 'block' }} aria-hidden="true" />
                    <LazyLoadImage
                      src={require('../../public/images/devblog/5/more-terrain-parts.jpg?webp&url')}
                      placeholderSrc={require('../../public/images/devblog/5/more-terrain-parts.jpg?webp&lqip')}
                    />
                    <br />
                    <br />
                    <b>- Terrain in Creative Mode</b>
                    <br />
                    We’ve added more vegetation, grass types and rocks! The
                    Creative Mode terrain is starting to look nice and lush. It’s
                    gonna be a great place to test out your machines, and we’ve
                    even added a few sweet jump ramps here and there for all you
                    daredevils!
                    <br />
                    <br />
                    <br />
                    <a href="#" id="new-building-parts" style={{ display: 'block' }} aria-hidden="true" />
                    <LazyLoadImage
                      src={require('../../public/images/devblog/5/new-building-parts.jpg?webp&url')}
                      placeholderSrc={require('../../public/images/devblog/5/new-building-parts.jpg?webp&lqip')}
                    />
                    <br />
                    <br />
                    <b>- New, Exciting Building Parts!</b>
                    <br />
                    We’ve added lots of new building parts for you to use in your
                    creations. The game now has over 100 building parts, all
                    lovingly modeled and designed from the ground up. We won’t be
                    showing you all of them until you get your hands on the game,
                    but some of them are straight up silly. Like this toilet paper
                    roll… Yes, you can actually make a house or vehicle out of
                    toilet paper.
                    <br />
                    <br />
                    <a href="#" id="general-fixes" style={{ display: 'block' }} aria-hidden="true" />
                    <b>- General Fixes, Improvements</b>
                    <br />
                    Maybe not the most fun to read about, but a lot of our time
                    has gone into actually cleaning things up. Adjusting and
                    improving. We aim to make sure that the game maintains a good
                    experience for the players throughout Early Access, and for
                    that we need to make sure the framework is as neat and stable
                    as possible.
                    <br />
                    <br />
                    <br />
                    <a href="#" id="release-date" style={{ display: 'block' }} aria-hidden="true" />
                    <LazyLoadImage
                      src={require('../../public/images/devblog/5/coming-soon.jpg?webp&url')}
                      placeholderSrc={require('../../public/images/devblog/5/coming-soon.jpg?webp&lqip')}
                    />
                    <br />
                    <br />
                    <b>- Release Date Coming Soon!</b>
                    <br />
                    We’re really excited to let you know that we’ll be releasing
                    Scrap Mechanic to early access pretty soon. We’ve finally
                    reached the point where we feel the game can offer a lot of
                    fun playtime in its current state. The first early access
                    release comes with a creative mode filled with over 100 parts
                    that will allow you to build some truly amazing machines. It
                    also comes with an easy to use in game handbook explaining how
                    all the tools and items work. The creative mode world is not
                    endless, but is more than big enough to build just about
                    anything you want. Oh, and it comes with multiplayer support
                    so you and your mechanic friends can be creative together.
                    Stay tuned for a release date and price in the coming weeks!
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
