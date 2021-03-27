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

import { devblog8 as devblog } from '../../other/devblog_descriptions';

import Title from '../../public/images/devblog/8/title.png?webp&url';
import TitleLQ from '../../public/images/devblog/8/title.png?webp&lqip';

export const getStaticProps = () => ({
  props: {
    title: 'Devblog 8',
    id: 'devblog-8',
    type: 'article',
    description: devblog.description,
    devblog: {
      id: '8',
      ...devblog,
    },
    image: {
      url: devblog.image_url || Title.toString(),
      large: true,
    },
  },
});

export default function Devblog8(page) {
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
                    <br />
                    <b>
                      Hey Mechanics!
                    </b>
                    <br />
                    <br />
                    First, thank you! Thank you all - the Mechanics
                    that have been sticking with us since the start and all you
                    new Mechanics. It’s pretty awesome to see how quickly the
                    Scrap Mechanic community has grown - you Mechanics are the
                    best game dev fuel ever! We especially hope that you like the
                    Weld Tool that was just recently released - all feedback on
                    that is hugely encouraged, so we can make it as good as
                    possible.
                    <br />
                    <br />
                    Anyway, another great month has gone by
                    with a lot of great progress here at the Scrap Mechanic HQ so
                    it’s finally time to give you Mechanics an update on what
                    we’ve been cooking!
                    <br />
                    <br />
                    <br />
                    <a href="#" id="creation-saving" style={{ display: 'block' }} aria-hidden="true" />
                    <LazyLoadImage
                      effect="blur"
                      src={require('../../public/images/devblog/8/workshop.png?webp&url')}
                      placeholderSrc={require('../../public/images/devblog/8/workshop.png?webp&lqip')}
                    />
                    <br />
                    <LazyLoadImage
                      effect="blur"
                      src={require('../../public/images/devblog/8/workshop-lift.png?webp&url')}
                      placeholderSrc={require('../../public/images/devblog/8/workshop-lift.png?webp&lqip')}
                    />
                    <br />
                    <br />
                    <b>- Creation Saving, Loading and Steam Workshop</b>
                    <br />
                    We are happy to see that many Mechanics have requested a
                    way of saving creations
                    <br />
                    so they can be used in different
                    worlds and shared through Steam Workshop. We thought hard
                    about this, and decided that the best way to do it was by
                    adding a feature to the lift. So, this is how it’ll work.
                    Pressing E on the lift will open a display that lets you save
                    or load a creation as well as upload it to Steam Workshop. You
                    will also be able to delete anything that is on the lift so
                    you don&#039;t have to delete a creation piece by piece.
                    Another useful trick will be that you can see the number and
                    type of pieces making up any creation, so you’ll know exactly
                    what parts you need to build your favorite vehicle in Survival
                    mode.
                    <br />
                    We are really excited about this! The lift just got
                    even better!
                    <br />
                    <br />
                    <br />
                    <a href="#" id="logic-gates" style={{ display: 'block' }} aria-hidden="true" />
                    <LazyLoadImage
                      effect="blur"
                      src={require('../../public/images/devblog/8/logic-gates.png?webp&url')}
                      placeholderSrc={require('../../public/images/devblog/8/logic-gates.png?webp&lqip')}
                    />
                    <br />
                    <br />
                    <b>- It’s Logical, Captain</b>
                    <br />
                    Are you tired of
                    not being able to close a door with two different buttons? Are
                    you bored of running the long way round to open a gate? Have
                    you got stuck in your house? Hey, we’ve all been there. No
                    worries, the Logic Gate Block is in the works and it’s
                    awesome. It will let you easily create everything from simple
                    button setups to some really advanced creations.
                    <br />
                    Here is
                    the first look at the Logic Gate. We want to make sure that it
                    is easy to learn and use before we release this mighty
                    cube.
                    <br />
                    <br />
                    <a href="#" id="multi-lingual-support" style={{ display: 'block' }} aria-hidden="true" />
                    <b>- Speaking in Tongues</b>
                    <br />
                    For
                    all you Mechanics who would love to play the game in your
                    mother tongue, we will soon be adding a few new languages to
                    the game. Some of the languages that will be added are French,
                    Spanish, German, Russian, Chinese and Japanese. If that’s not
                    one of yours, don’t be shy - let us know what language you
                    would like to see in the game (But no Farmbot language since
                    it’s impossible for our fragile human brains to
                    understand.)
                    <br />
                    <br />
                    <a href="#" id="custom-engine" style={{ display: 'block' }} aria-hidden="true" />
                    <b>- Our own engine</b>
                    <br />
                    Not
                    everything we do is fun. Sometimes you just have to fix things
                    so the game runs better. Scrap Mechanic was originally made
                    with OGRE as the rendering engine. For an open source engine,
                    it’s doing a great job. But after making us yell bad words at
                    the screen a few times we decided to make Scrap Mechanic run
                    fully on our own engine. We call this masterpiece… hmm… We
                    don&#039;t know yet. Give us some name suggestions! Our engine
                    gives us full control over the graphics optimization, which
                    will save us a lot of time. It will also let the game run on
                    Intel graphics cards like the 530 and 520, which some players
                    have had issues with.
                    <br />
                    <br />
                    <br />
                    <a href="#" id="timers" style={{ display: 'block' }} aria-hidden="true" />
                    <LazyLoadImage
                      effect="blur"
                      src={require('../../public/images/devblog/8/timer.png?webp&url')}
                      placeholderSrc={require('../../public/images/devblog/8/timer.png?webp&lqip')}
                    />
                    <br />
                    <br />
                    <b>- Timer Traps</b>
                    <br />
                    Have you ever wanted to
                    have something activate some time after a sensor has been
                    triggered? The Timer Block will let you decide when something
                    will work, making it possible to make more timed
                    transformations. The timer block will also be very handy
                    together with the logic gate. To be honest, we’re expecting
                    you guys to make some really unpleasant traps with this one
                    once Survival is out.
                    <br />
                    <br />
                    <a href="#" id="survival-mods" style={{ display: 'block' }} aria-hidden="true" />
                    <b>
                      - Modded for Survival
                    </b>
                    <br />
                    Oh! The cool stuff we are working on right now for the
                    survival mode. It’s so cool. It’s painful to not be able to
                    show anything yet. But we want it to be a surprise for later.
                    And the Farmbots won’t let us. So we are holding on to all
                    this awesomeness. We promise it will be worth the wait! Oh,
                    the Farmbots are letting us say just one thing. The survival
                    mode is being made like a mod from the ground up using Lua
                    language. This is so all you Mechanics with passion and talent
                    for creating stuff can get in there and start modding. It will
                    be awesome! We’ll let you know how to get involved with this
                    as soon as possible.
                    <br />
                    <br />
                    I think that’s it from us.
                    Don’t worry, we’ll be back soon. And, until then, keep
                    scrapping!
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
