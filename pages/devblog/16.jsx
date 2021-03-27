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

import { devblog16 as devblog } from '../../other/devblog_descriptions';

import Title from '../../public/images/devblog/16/title.png?webp&url';
import TitleLQ from '../../public/images/devblog/16/title.png?webp&lqip';

export const getStaticProps = () => ({
  props: {
    title: 'Devblog 16',
    id: 'devblog-16',
    type: 'article',
    description: devblog.description,
    devblog: {
      id: '16',
      ...devblog,
    },
    image: {
      url: devblog.image_url || Title.toString(),
      large: true,
    },
  },
});

export default function Devblog16(page) {
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
                      Hi Mechanics!
                    </b>
                    <br />
                    It’s time to sit back and relax because we have a ton
                    of new survival stuff to share with you. In this devblog we
                    want to dig deeper in to some survival mechanics and
                    consumables that we have been working on. But before we jump
                    in to all the goodness we would like to answer one of the
                    biggest questions we get the best we can. “When is survival
                    mode coming out?” Over the past months things have really been
                    moving fast at the Scrap Mechanic HQ and a lot of the core
                    features are in place. We are feeling more confident with our
                    internal release date. But we don’t want to commit to an exact
                    date just yet in case we want to add or optimize more things
                    as we move forward. We really want to have this freedom to
                    make sure that we deliver something that we are happy with.
                    But our goal is to have survival in your hands in 2019. This
                    is not a promise, just a goal. With that said, things are
                    looking very promising from where we stand.
                    <br />
                    <br />
                    Now!
                    let’s jump in to some new awesome things we have been working
                    on!
                    <br />
                    <br />
                    <br />
                    <a href="#" id="resource-containers" style={{ display: 'block' }} aria-hidden="true" />
                    <LazyLoadImage
                      src="https://i.imgur.com/eH8Cgqc.png"
                      placeholderSrc="https://i.imgur.com/eH8Cgqcs.png"
                      effect="blur"
                    />
                    <br />
                    <LazyLoadImage
                      src="https://i.imgur.com/ZZfpDfj.png"
                      placeholderSrc="https://i.imgur.com/ZZfpDfjs.png"
                      effect="blur"
                    />
                    <br />
                    <br />
                    <b>
                      - Resource containers
                    </b>
                    <br />
                    It’s finally time to introduce you to how the resource
                    consumption will work in Scrap Mechanic. Right now we have 6
                    working containers in survival mode. Gas container, Ammo
                    container, Battery container, Seed container, Fertilizer
                    container and Water container. All of these work as a chest
                    for each specific resource. Fore example, you will connect the
                    gas container to the gas engine to power your vehicle. The
                    blue dots on the side shows you how much gas is left in the
                    container. Pretty simple. Each container comes with two
                    sockets as well. More on that here below.
                    <br />
                    <br />
                    <br />
                    <a href="#" id="pipes" style={{ display: 'block' }} aria-hidden="true" />
                    <LazyLoadImage
                      src="https://i.imgur.com/2AVgRyI.png"
                      placeholderSrc="https://i.imgur.com/2AVgRyIs.png"
                      effect="blur"
                    />
                    <br />
                    <LazyLoadImage
                      src="https://i.imgur.com/XsuyhTJ.png"
                      placeholderSrc="https://i.imgur.com/XsuyhTJs.png"
                      effect="blur"
                    />
                    <br />
                    <LazyLoadImage
                      src="https://i.imgur.com/gvESCph.png"
                      placeholderSrc="https://i.imgur.com/gvESCphs.png"
                      effect="blur"
                    />
                    <br />
                    <br />
                    <b>
                      - Pipe and socket
                    </b>
                    <br />
                    We are really excited about our new connecting system
                    since it’s both visual and easy to use. These pipes allow the
                    player to transport blocks, parts and consumables from one
                    place to another. For example, from a refinery to a craftbot
                    in to a chest. This is how players will also be able to fill
                    up containers without doing it manually. Let’s say you build a
                    gas station and want to fill up the gas containers on your
                    vehicle. Then all you have to do is drive up to a pipe and
                    make sure it’s close to the socket, and it will start filling
                    up the container. What’s so cool about this feature is that it
                    opens up a lot of possibility for automated chains and open up
                    a lot of creativity.
                    <br />
                    <br />
                    <br />
                    <a href="#" id="tapebot" style={{ display: 'block' }} aria-hidden="true" />
                    <LazyLoadImage
                      src="https://i.imgur.com/VFVbUJO.png"
                      placeholderSrc="https://i.imgur.com/VFVbUJOs.png"
                      effect="blur"
                    />
                    <br />
                    <LazyLoadImage
                      src="https://i.imgur.com/Yp2S8Ip.png"
                      placeholderSrc="https://i.imgur.com/Yp2S8Ips.png"
                      effect="blur"
                    />
                    <br />
                    <LazyLoadImage
                      src="https://i.imgur.com/XXIXF7R.png"
                      placeholderSrc="https://i.imgur.com/XXIXF7Rs.png"
                      effect="blur"
                    />
                    <br />
                    <br />
                    <b>
                      - Tapebot
                    </b>
                    <br />
                    Some of you mechanics that are following us on twitter
                    have seen a sneak peek of our latest robot. The tapebot.
                    Originally doing the packaging work in the warehouses. They
                    have now gone crazy and covered large sections of the
                    warehouse with tape, similar to a spider web. Shooting tape
                    rolls at intruding mechanics. Fortunately, sharpshooter
                    mechanics with spudguns will be able to dissemble the tapebots
                    with a few well placed potatoes. The tapebots is one of the
                    main reason why mechanics really have to stack up on potatoes
                    before entering the large warehouses. You better shoot them
                    first.
                    <br />
                    <br />
                    <br />
                    <a href="#" id="part-upgrades" style={{ display: 'block' }} aria-hidden="true" />
                    <LazyLoadImage
                      src="https://i.imgur.com/KcD7mmy.png"
                      placeholderSrc="https://i.imgur.com/KcD7mmys.png"
                      effect="blur"
                    />
                    <br />
                    <br />
                    <b>- Upgrade interactive parts</b>
                    <br />
                    When testing out
                    core gameplay in survival mode. We quickly noticed that
                    <br />
                    some interactive parts are way to powerful to start with
                    and made it to easy to survive. So we started testing the idea
                    of having the interactive parts upgradeable. This was a great
                    idea since it also added a really nice progression to the
                    survival experience. For example a lvl 1 Thruster will consume
                    a lot of gas quickly, but a lvl 5 Thruster will use less gas
                    and allow the player to create flying vehicles later in their
                    adventure. The interactive parts will be upgraded by using
                    component kits found in the world. All the interactive parts
                    will also change looks with each lvl making it easy to spot
                    how upgraded they are. Of course, the higher the level the
                    better they look and sound and more features are unlocked. In
                    the next devblog we will show these in-game.
                    <br />
                    <br />
                    <br />
                    <a href="#" id="encryptor" style={{ display: 'block' }} aria-hidden="true" />
                    <a href="#" id="encrypter" style={{ display: 'block' }} aria-hidden="true" />
                    <LazyLoadImage
                      src="https://i.imgur.com/zIgN6Yv.png"
                      placeholderSrc="https://i.imgur.com/zIgN6Yvs.png"
                      effect="blur"
                    />
                    <br />
                    <br />
                    <b>- New encrypter</b>
                    <br />
                    In our past devblog we
                    presented a new part. The encrypter that hid all the
                    connection points on the creation it was attached to. We have
                    now made a new encrypter that makes creations indestructible
                    until the encryper is removed or the creation gets blown up.
                    This part will protect your creations from other players and
                    farmbot encounters. But make sure you hide it well!
                    <br />
                    <br />
                    <br />
                    <a href="#" id="challenge-mode" style={{ display: 'block' }} aria-hidden="true" />
                    <LazyLoadImage
                      src="https://i.imgur.com/ESWSULE.png"
                      placeholderSrc="https://i.imgur.com/ESWSULEs.png"
                      effect="blur"
                    />
                    <br />
                    <LazyLoadImage
                      src="https://i.imgur.com/VNUuqxf.png"
                      placeholderSrc="https://i.imgur.com/VNUuqxfs.png"
                      effect="blur"
                    />
                    <br />
                    <LazyLoadImage
                      src="https://i.imgur.com/JwfooJy.png"
                      placeholderSrc="https://i.imgur.com/JwfooJys.png"
                      effect="blur"
                    />
                    <br />
                    <LazyLoadImage
                      src="https://i.imgur.com/yNAm54B.png"
                      placeholderSrc="https://i.imgur.com/yNAm54Bs.png"
                      effect="blur"
                    />
                    <br />
                    <LazyLoadImage
                      src="https://i.imgur.com/CKHenJH.png"
                      placeholderSrc="https://i.imgur.com/CKHenJHs.png"
                      effect="blur"
                    />
                    <br />
                    <br />
                    <b>
                      - Challange mode
                    </b>
                    <br />
                    We have done some great progress on the challange mode
                    that we hope to release in time for Christmas! It comes with
                    40 challanges to beat. Modders will also be able to create
                    their own challanges and put them on the workshop. We also
                    plan to put a challange editor in the future so that every
                    player will be able to make a batch of challanges and share
                    with other players. The challange mode will really put your
                    building skills to the test. Only a true mechanics will pass
                    all 40 challanges that we have prepared.
                    <br />
                    <br />
                    <br />
                    <a href="#" id="visual-improvements" style={{ display: 'block' }} aria-hidden="true" />
                    <LazyLoadImage
                      src="https://i.imgur.com/gsOMd9Y.gif"
                      placeholderSrc="https://i.imgur.com/gsOMd9Ys.gif"
                      effect="blur"
                    />
                    <br />
                    <LazyLoadImage
                      src="https://i.imgur.com/reGMGYc.gif"
                      placeholderSrc="https://i.imgur.com/reGMGYcs.gif"
                      effect="blur"
                    />
                    <br />
                    <LazyLoadImage
                      src="https://i.imgur.com/OL0fZfS.png"
                      placeholderSrc="https://i.imgur.com/OL0fZfSs.png"
                      effect="blur"
                    />
                    <br />
                    <br />
                    <b>
                      - New visual improvements
                    </b>
                    <br />
                    While the team is working away on survival, we have put
                    one of our coders on giving the lighting and shaders some
                    proper face lift to make Scrap Mechanic look up to date and a
                    pure pleasure to look at. It’s been way to long since we did
                    any graphics improvements. We want survival to have a much
                    stronger mood and atmosphere. Something we can’t achieve with
                    the current lighting and shaders. So we have done a lot of
                    improvements that really makes the game a lot better. For
                    example, metal material now really looks like strong shiny
                    metal. We have also remade the vegetation and made much better
                    trees and rocks. All adjusted to our new resource gathering
                    mechanic. They now also sway beautifully with the wind.
                    <br />
                    Day night cycle has also been added to our survival
                    branch. We hope you enjoy the images demonstrating these new
                    changes.
                    <br />
                    We have a few more graphical improvements in
                    the works.
                    <br />
                    <br />
                    <br />
                    <br />
                    <b>
                      That’s it for this time Mechanics! We will be back soon
                      with more awesome stuff! Until next time!
                    </b>
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
