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

import { devblog20 as devblog } from '../../other/devblog_descriptions';

import Title from '../../public/images/devblog/20/title.png?webp&url';
import TitleLQ from '../../public/images/devblog/20/title.png?webp&lqip';

export const getStaticProps = () => ({
  props: {
    title: 'Devblog 20',
    id: 'devblog-20',
    type: 'article',
    description: devblog.description,
    devblog: {
      id: '20',
      ...devblog,
    },
    image: {
      url: devblog.image_url || Title.toString(),
      large: true,
    },
  },
});

export default function Devblog20(page) {
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
                      Calling all Mechanics!
                    </b>
                    <br />
                    2020 is coming to a close and we’re here to end it on a
                    good note with a special devblog! Here are some of the things
                    we’ve been working on since the release of Scrap Mechanic’s
                    Survival Mode earlier this year.
                    <br />
                    <br />
                    To start, we have
                    been hard at work on the next chapter and we will be
                    announcing its official name at a later date. But until then,
                    here are some of the things we managed to liberate from the
                    Scrap HQ’s secret drawing board!
                    <br />
                    <br />
                    <br />
                    <a href="#" id="underground" style={{ display: 'block' }} aria-hidden="true" />
                    <LazyLoadImage
                      effect="blur"
                      src="https://i.imgur.com/fOicyRd.png"
                      placeholderSrc="https://i.imgur.com/fOicyRds.png"
                    />
                    <br />
                    <LazyLoadImage
                      effect="blur"
                      src="https://i.imgur.com/d6EKxCH.png"
                      placeholderSrc="https://i.imgur.com/d6EKxCHs.png"
                    />
                    <br />
                    <LazyLoadImage
                      effect="blur"
                      src="https://i.imgur.com/YrGSNdu.png"
                      placeholderSrc="https://i.imgur.com/YrGSNdus.png"
                    />
                    <br />
                    <LazyLoadImage
                      effect="blur"
                      src="https://i.imgur.com/YJqsZPQ.png"
                      placeholderSrc="https://i.imgur.com/YJqsZPQs.png"
                    />
                    <br />
                    <LazyLoadImage
                      effect="blur"
                      src="https://i.imgur.com/VzYRYd5.jpg"
                      placeholderSrc="https://i.imgur.com/VzYRYd5s.jpg"
                    />
                    <br />
                    <LazyLoadImage
                      effect="blur"
                      src="https://i.imgur.com/31Y52y6.png"
                      placeholderSrc="https://i.imgur.com/31Y52y6s.png"
                    />
                    <br />
                    <br />
                    <b>
                      - Going underground
                    </b>
                    <br />
                    This new location includes new adventures and gameplay
                    options that we can’t wait to share with you! This new chapter
                    of Survival Mode adds new quests and NPCs that will take you
                    to the next stop in your journey: the mining island. For the
                    first time in Scrap Mechanic history, you will be delving deep
                    into the planet’s mines, to uncover new, big secrets!
                    <br />
                    Here’s
                    a sneak peek into some features and concepts of the
                    underground that are currently in progress.
                    <br />
                    <br />
                    <br />
                    <a href="#" id="trash-bot" style={{ display: 'block' }} aria-hidden="true" />
                    <LazyLoadImage
                      effect="blur"
                      src="https://i.imgur.com/ZmdtuOU.jpg"
                      placeholderSrc="https://i.imgur.com/ZmdtuOUs.jpg"
                    />
                    <br />
                    <LazyLoadImage
                      effect="blur"
                      src="https://i.imgur.com/m2BjClw.png"
                      placeholderSrc="https://i.imgur.com/m2BjClws.png"
                    />
                    <br />
                    <LazyLoadImage
                      effect="blur"
                      src="https://i.imgur.com/kImsEkt.png"
                      placeholderSrc="https://i.imgur.com/kImsEkts.png"
                    />
                    <br />
                    <LazyLoadImage
                      effect="blur"
                      src="https://i.imgur.com/E3R6oCa.png"
                      placeholderSrc="https://i.imgur.com/E3R6oCas.png"
                    />
                    <br />
                    <LazyLoadImage
                      effect="blur"
                      src="https://i.imgur.com/gJH16iS.png"
                      placeholderSrc="https://i.imgur.com/gJH16iSs.png"
                    />
                    <br />
                    <LazyLoadImage
                      effect="blur"
                      src="https://i.imgur.com/8jytLvN.png"
                      placeholderSrc="https://i.imgur.com/8jytLvNs.png"
                    />
                    <br />
                    <LazyLoadImage
                      effect="blur"
                      src="https://i.imgur.com/IfhNZ5w.png"
                      placeholderSrc="https://i.imgur.com/IfhNZ5ws.png"
                    />
                    <br />
                    <br />
                    <b>
                      - Trash Bot
                    </b>
                    <br />
                    It’s a good thing Scrap Mechanic doesn’t come with
                    Smell-O-Vision! Introducing the biggest bot we’ve made so far:
                    the Trash Bot.
                    <br />
                    This smelly clanker is the very first
                    boss of the game! Rumour has it that you can find it on the
                    Warehouse rooftop, collecting junk.
                    <br />
                    If you do run into
                    him, you’d best have your spudgun at hand or you will end up
                    in the trash with the rest of the smelly produce!
                    <br />
                    <br />
                    <br />
                    <a href="#" id="sticky-wheels" style={{ display: 'block' }} aria-hidden="true" />
                    <LazyLoadImage
                      effect="blur"
                      src="https://i.imgur.com/SMi4k0l.png"
                      placeholderSrc="https://i.imgur.com/SMi4k0ls.png"
                    />
                    <br />
                    <LazyLoadImage
                      effect="blur"
                      src="https://i.imgur.com/HpqafLv.png"
                      placeholderSrc="https://i.imgur.com/HpqafLvs.png"
                    />
                    <br />
                    <LazyLoadImage
                      effect="blur"
                      src="https://i.imgur.com/nqoW7cf.png"
                      placeholderSrc="https://i.imgur.com/nqoW7cfs.png"
                    />
                    <br />
                    <br />
                    <b>
                      - Sticky wheels
                    </b>
                    <br />
                    New update, new parts. And these wheels will be a lot
                    of fun!
                    <br />
                    With the help of the new Sticky Wheels, you’ll be
                    putting together vehicles that can dig and drive in every
                    direction, so you can go deeper than any mechanic has ever
                    gone before.
                    <br />
                    <br />
                    <br />
                    <a href="#" id="red-guy" style={{ display: 'block' }} aria-hidden="true" />
                    <LazyLoadImage
                      effect="blur"
                      src="https://i.imgur.com/D1Kq6ov.png"
                      placeholderSrc="https://i.imgur.com/D1Kq6ovs.png"
                    />
                    <br />
                    <br />
                    <b>- Red Guy</b>
                    <br />
                    A new challenger explodes into the
                    scene!
                    <br />
                    It’s the latest addition to the Totebot family,
                    the Red Totebot: those canisters on its head explode on
                    contact, so make sure you keep this one at a distance.
                    <br />
                    Pro
                    Tip: Try getting it with a few well-placed spud shots before
                    it gets too close for comfort.
                    <br />
                    <br />
                    <br />
                    <a href="#" id="hot-chilis" style={{ display: 'block' }} aria-hidden="true" />
                    <LazyLoadImage
                      effect="blur"
                      src="https://i.imgur.com/dsdHeO3.png"
                      placeholderSrc="https://i.imgur.com/dsdHeO3s.png"
                    />
                    <br />
                    <LazyLoadImage
                      effect="blur"
                      src="https://i.imgur.com/UnpWa4W.png"
                      placeholderSrc="https://i.imgur.com/UnpWa4Ws.png"
                    />
                    <br />
                    <br />
                    <b>
                      - Hot Chilis
                    </b>
                    <br />
                    With great chili, comes great responsibility. This
                    plant is definitely going to bring the heat on you and your
                    farm! So make sure to give your base&#039;s defenses a boost
                    because those chilis sound like trouble! Just watch out for
                    the kind of bot it attracts. It sure looks like a handful.
                    <br />
                    <br />
                    <br />
                    <a href="#" id="plasma-drill" style={{ display: 'block' }} aria-hidden="true" />
                    <LazyLoadImage
                      effect="blur"
                      src="https://i.imgur.com/Cg91tU8.png"
                      placeholderSrc="https://i.imgur.com/Cg91tU8s.png"
                    />
                    <br />
                    <LazyLoadImage
                      effect="blur"
                      src="https://i.imgur.com/KaBtpeU.png"
                      placeholderSrc="https://i.imgur.com/KaBtpeUs.png"
                    />
                    <br />
                    <LazyLoadImage
                      effect="blur"
                      src="https://i.imgur.com/3z2zMGO.png"
                      placeholderSrc="https://i.imgur.com/3z2zMGOs.png"
                    />
                    <br />
                    <br />
                    <b>
                      - Plasma Drill
                    </b>
                    <br />
                    The basic drill is a great tool to attach to your
                    vehicle for digging, but it can’t break through some of the
                    tough layers of rock in the underground.
                    <br />
                    Thankfully, it
                    looks like the devs have got you covered: introducing the
                    plasma drill; a new part for your vehicle! With its added
                    power and improved reach, you can bore through the pesky
                    underground bedrock. Did we forget to mention that it’s more
                    comfortable to use than the basic drill too?
                    <br />
                    <br />
                    <br />
                    <a href="#" id="warehouse-changes" style={{ display: 'block' }} aria-hidden="true" />
                    <LazyLoadImage
                      effect="blur"
                      src="https://i.imgur.com/hEM71OE.gif"
                      placeholderSrc="https://i.imgur.com/hEM71OEs.gif"
                    />
                    <br />
                    <br />
                    <b>- Warehouse changes!</b>
                    <br />
                    It looks like the devs
                    are planning to update the Warehouse.
                    <br />
                    They’ll be giving
                    it a bit of a rework, by changing a few things around and
                    adding some new elements. For example, parts that mechanics
                    find inside are not removable at this moment. However, they
                    will be after this update!
                    <br />
                    But that’s not all: the new
                    Warehouse will be including additional quests and story
                    elements. Best watch out, because things are going to get
                    dangerous.
                    <br />
                    A WARNING FROM THE DEVS: the new update might
                    cause the old warehouse key to turn into a circuit board. We
                    will be introducing a new warehouse key in its place when the
                    next chapter is out.
                    <br />
                    <br />
                    <br />
                    <a href="#" id="wardrobe" style={{ display: 'block' }} aria-hidden="true" />
                    <LazyLoadImage
                      effect="blur"
                      src="https://i.imgur.com/qyXH9fp.png"
                      placeholderSrc="https://i.imgur.com/qyXH9fps.png"
                    />
                    <br />
                    <br />
                    <b>- Wardrobe</b>
                    <br />
                    What’s an update without some
                    brand new threads for your Mechanic?
                    <br />
                    The next chapter
                    will be introducing a lot of funny shirt designs, along with
                    some special rare outfits. For example, take a look at the
                    welder outfit that will be included in the next chapter:
                    <br />
                    <br />
                    <br />
                    That’s
                    all we’ve managed to slip under the devs’ noses so far,
                    Mechanics but remember: this is a just a sneak peek into the
                    mother load of content that the next chapter is going to
                    contain. The devs have a lot more irons in the fire and
                    they’ll be bringing them out in the following devblog, so
                    stick around for more awesome news.
                    <br />
                    <br />
                    <br />
                    <a href="#" id="happy-holidays" style={{ display: 'block' }} aria-hidden="true" />
                    <LazyLoadImage
                      effect="blur"
                      src="https://i.imgur.com/qlceQvY.png"
                      placeholderSrc="https://i.imgur.com/qlceQvYs.png"
                    />
                    <br />
                    <br />
                    Happy Holidays Mechanics! We hope you have a creative
                    2021!
                    <br />
                    See you next year!
                    <br />
                    <br />
                    We love you!
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
