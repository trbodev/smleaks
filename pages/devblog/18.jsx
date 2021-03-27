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

import { devblog18 as devblog } from '../../other/devblog_descriptions';

import Title from '../../public/images/devblog/18/title.png?webp&url';
import TitleLQ from '../../public/images/devblog/18/title.png?webp&lqip';

export const getStaticProps = () => ({
  props: {
    title: 'Devblog 18',
    id: 'devblog-18',
    type: 'article',
    description: devblog.description,
    devblog: {
      id: '18',
      ...devblog,
    },
    image: {
      url: devblog.image_url || Title.toString(),
      large: true,
    },
  },
});

export default function Devblog18(page) {
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
                    <br />
                    It’s that time again! when we take you on a trip
                    down development lane to show you some of the new exciting
                    things that we’ve been working on at the Scrap Mechanic HQ.
                    All our time is dedicated to survival mode at the moment with
                    a lot of new things getting added daily. We’ve also been
                    collecting a lot of optimization requests and feedback from
                    the community. There is still a lot we can do to make your
                    crazy and more complex creations run even better. We plan to
                    do a proper optimization update later when we can free up some
                    more time. Just a small update on that. With that said, let’s
                    move on to what you mechanics are here for: A nice big update
                    on survival development!
                    <br />
                    <br />
                    <br />
                    <a href="#" id="haybots" style={{ display: 'block' }} aria-hidden="true" />
                    <LazyLoadImage
                      src="https://i.imgur.com/NC5qnTz.png"
                      placeholderSrc="https://i.imgur.com/NC5qnTzs.png"
                      effect="blur"
                    />
                    <br />
                    <LazyLoadImage
                      src="https://i.imgur.com/i1EPEqb.png"
                      placeholderSrc="https://i.imgur.com/i1EPEqbs.png"
                      effect="blur"
                    />
                    <br />
                    <LazyLoadImage
                      src="https://i.imgur.com/Kru4c81.png"
                      placeholderSrc="https://i.imgur.com/Kru4c81s.png"
                      effect="blur"
                    />
                    <br />
                    <LazyLoadImage
                      src="https://i.imgur.com/d1H2maK.png"
                      placeholderSrc="https://i.imgur.com/d1H2maKs.png"
                      effect="blur"
                    />
                    <br />
                    <LazyLoadImage
                      src="https://i.imgur.com/QHdjyzc.png"
                      placeholderSrc="https://i.imgur.com/QHdjyzcs.png"
                      effect="blur"
                    />
                    <br />
                    <br />
                    <b>
                      - Haybots gone haywire!
                    </b>
                    <br />
                    You might recognize parts of this new farmbot from our
                    teaser tweet last week. We are super excited to introduce you
                    to the Haybot for the first time! But don’t get too close
                    unprepared since they are very unreliable and dangerous.
                    Originally made to make haystacks and package them in plastic
                    wrap, these Haybots have gone out of control. Now they’re
                    often found doing nonsensical things in ruins, like tearing
                    them down and filling them with hay. The Haybot would best be
                    described as the “Zombie” of Farmbots.
                    <br />
                    <br />
                    <a href="#" id="survival-music" style={{ display: 'block' }} aria-hidden="true" />
                    <b>- New survival music</b>
                    <br />
                    Our
                    amazing musician Zhea has been working on a lot of new tracks
                    for survival. Since the game has a lot of exploration and
                    building, A lot of the music is beautiful, moody and
                    atmospheric. However, today we like to share a snippet from
                    when things intensify in Survival. Potatoes fired! Take
                    cover!
                    <br />
                    Check it out
                    {' '}
                    <a href="https://soundcloud.com/axolotgames/spud-fight-teaser">HERE</a>
                    <br />
                    <br />
                    <br />
                    <a href="#" id="menu-redesign" style={{ display: 'block' }} aria-hidden="true" />
                    <LazyLoadImage
                      src="https://i.imgur.com/ILH3Slt.png"
                      placeholderSrc="https://i.imgur.com/ILH3Slts.png"
                      effect="blur"
                    />
                    <br />
                    <LazyLoadImage
                      src="https://i.imgur.com/QmECiEP.png"
                      placeholderSrc="https://i.imgur.com/QmECiEPs.png"
                      effect="blur"
                    />
                    <br />
                    <LazyLoadImage
                      src="https://i.imgur.com/biyonHV.png"
                      placeholderSrc="https://i.imgur.com/biyonHVs.png"
                      effect="blur"
                    />
                    <br />
                    <LazyLoadImage
                      src="https://i.imgur.com/ClacFEx.png"
                      placeholderSrc="https://i.imgur.com/ClacFExs.png"
                      effect="blur"
                    />
                    <br />
                    <br />
                    <b>
                      - Big menu redesign!
                    </b>
                    <br />
                    We did a little tease of the inventory redesign
                    previously.
                    <br />
                    The feedback that we received from you was
                    fantastic and helped us direct the redesign more to the
                    communities liking. Here is an update on some of the new
                    changes. Please keep in mind that this is still not set in
                    stone and we are still trying out new things. But please let
                    us know what you think of this redesign above.
                    <br />
                    <br />
                    <br />
                    <a href="#" id="multitool" style={{ display: 'block' }} aria-hidden="true" />
                    <LazyLoadImage
                      src="https://i.imgur.com/42V3bNB.png"
                      placeholderSrc="https://i.imgur.com/42V3bNBs.png"
                      effect="blur"
                    />
                    <br />
                    <LazyLoadImage
                      src="https://i.imgur.com/u8WlY77.gif"
                      placeholderSrc="https://i.imgur.com/u8WlY77s.gif"
                      effect="blur"
                    />
                    <br />
                    <br />
                    <b>
                      - Multitool
                    </b>
                    <br />
                    Introducing the new multitool! Or maybe more accurately
                    described as the refinery handtool. it’s lucky that all
                    mechanics came equipped with one. Very handy in survival
                    situations if your maintenance ship crashes and you’re
                    stranded. A lifesaver when it comes to refining wood, farmbot
                    legs and stone into blocks. However, it’s a bit slow. So
                    upgrading to a Refinebot would be more efficient for sure.
                    <br />
                    <br />
                    <br />
                    <a href="#" id="crashsite" style={{ display: 'block' }} aria-hidden="true" />
                    <a href="#" id="the-crash" style={{ display: 'block' }} aria-hidden="true" />
                    <LazyLoadImage
                      src="https://i.imgur.com/ZUHX1FO.png"
                      placeholderSrc="https://i.imgur.com/ZUHX1FOs.png"
                      effect="blur"
                    />
                    <br />
                    <LazyLoadImage
                      src="https://i.imgur.com/wJ3wMmH.png"
                      placeholderSrc="https://i.imgur.com/wJ3wMmHs.png"
                      effect="blur"
                    />
                    <br />
                    <LazyLoadImage
                      src="https://i.imgur.com/iJ48kvL.png"
                      placeholderSrc="https://i.imgur.com/iJ48kvLs.png"
                      effect="blur"
                    />
                    <br />
                    <br />
                    <b>
                      - The crash!
                    </b>
                    <br />
                    We were not sure whether we should keep this crash site
                    a secret for its release...
                    <br />
                    After all, it’s where you
                    start in Survival mode. But we changed our mind. You mechanics
                    need to see more of the cool things we’ve been working on so
                    here goes! Including some early concepts. We don’t want to
                    spoil too much, so let’s leave it at that.
                    <br />
                    <br />
                    <br />
                    <a href="#" id="lootcrates" style={{ display: 'block' }} aria-hidden="true" />
                    <a href="#" id="loot-crates" style={{ display: 'block' }} aria-hidden="true" />
                    <a href="#" id="crates" style={{ display: 'block' }} aria-hidden="true" />
                    <LazyLoadImage
                      src="https://i.imgur.com/3FKatQV.png"
                      placeholderSrc="https://i.imgur.com/3FKatQVs.png"
                      effect="blur"
                    />
                    <br />
                    <br />
                    <b>- Crates with loot</b>
                    <br />
                    Scattered around the map,
                    mechanics will find these smash-able crates!
                    <br />
                    We are still
                    not sure who scattered them around the planet. They might have
                    fallen from a cargo ship? It’s still a mystery to be resolved.
                    However! They do contain some good items at times so they are
                    totally worth to smash and have a look inside. Who knows! you
                    could be lucky!
                    <br />
                    <br />
                    <br />
                    <a href="#" id="cookbot" style={{ display: 'block' }} aria-hidden="true" />
                    <LazyLoadImage
                      src="https://i.imgur.com/tH7e7qR.png"
                      placeholderSrc="https://i.imgur.com/tH7e7qRs.png"
                      effect="blur"
                    />
                    <br />
                    <br />
                    <b>- Cookbot concept!</b>
                    <br />
                    The Cookbot is a new
                    addition to the helping bots that the Mechanic can craft. This
                    master chef will take your ingredients and make the most
                    delicious dishes! Just absolutely yummy! Some are even so good
                    that they can revive a fallen mechanic in multiplayer. But it
                    will cost you some adventuring and harvesting to help the
                    Cookbot put it all together.
                    <br />
                    <br />
                    <a href="#" id="random-stuff" style={{ display: 'block' }} aria-hidden="true" />
                    <b>
                      - Random fun stuff!
                    </b>
                    <br />
                    Let’s close it off with some smaller but fun random
                    things that you might enjoy.
                    <br />
                    <br />
                    <LazyLoadImage
                      src="https://i.imgur.com/OIqlLBX.gif"
                      placeholderSrc="https://i.imgur.com/OIqlLBXs.gif"
                      effect="blur"
                    />
                    <br />
                    <LazyLoadImage
                      src="https://i.imgur.com/M7p9uhH.gif"
                      placeholderSrc="https://i.imgur.com/M7p9uhHs.gif"
                      effect="blur"
                    />
                    <br />
                    Our
                    crazy Totebots now have a final animation in place. Do they
                    look scary enough?
                    <br />
                    <br />
                    <LazyLoadImage
                      src="https://i.imgur.com/JOr7F1W.png"
                      placeholderSrc="https://i.imgur.com/JOr7F1Ws.png"
                      effect="blur"
                    />
                    <br />
                    We also did some updates to our engine and added a
                    nice translucency when the sun hits the trees and bushes.
                    <br />
                    <br />
                    <LazyLoadImage
                      src="https://i.imgur.com/kneVg4B.gif"
                      placeholderSrc="https://i.imgur.com/kneVg4Bs.gif"
                      effect="blur"
                    />
                    <br />
                    Also! more work has been done on the dynamic lights
                    and shadow casting. Here is an updated gif.
                    <br />
                    <br />
                    <br />
                    Lastly,
                    we want to say a big thanks to all the amazing support and
                    patience from you mechanics.
                    <br />
                    We are speeding the
                    survival development up as much as we can without compromising
                    on quality. We hope you agree that it’s the right decision.
                    <br />
                    <br />
                    We will be back soon with more news!
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
