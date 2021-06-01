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

import { devblog14 as devblog } from '../../other/devblog_descriptions';

import Title from '../../public/images/devblog/14/title.png?webp&url';
import TitleLQ from '../../public/images/devblog/14/title.png?webp&lqip';

export const getStaticProps = () => ({
  props: {
    title: 'Devblog 14',
    id: 'devblog-14',
    type: 'article',
    description: devblog.description,
    devblog: {
      id: '14',
      ...devblog,
    },
    image: {
      url: devblog.image_url || Title.toString(),
      large: true,
    },
  },
});

export default function Devblog14(page) {
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
                      Grettings Mechanics!
                    </b>
                    <br />
                    Hear that rumbling noise? Nope, the washing
                    machine isn’t on the blink again, it’s an all-new,
                    all-pulsating Scrap Mechanic Devblog – and it’s coming right
                    for you!
                    <br />
                    First – putting this runaway train in to park
                    for a moment - we’d like to commend the astonishing Mechanic
                    community for what you’ve been up to with the
                    recently-released World and Tile Editors. In such a short
                    amount of time you’ve shared over 2,500 tiles on Steam
                    Workshop, and most of them are a treat to look at.
                    <br />
                    While
                    these editing tools took a demonstrable amount of time for us
                    to put together (initially for the purpose of building the
                    upcoming Survival World), you’ve proven that the extra time we
                    took to ensure they were accessible for normal players was
                    definitely worth it.
                    <br />
                    Oh, and before you ask: Survival
                    Mode is coming along fine. A lot of progress has been made
                    since our last update and the Scrap Mechanic development team
                    has grown to match its pace. We have a new technical artist as
                    well as a level designer who are hard at work putting the
                    Survival World together!
                    <br />
                    Right, let’s flip this update
                    into gear and deliver some more red-hot newsbits…
                    <br />
                    <br />
                    <br />
                    <a href="#" id="craftbot" style={{ display: 'block' }} aria-hidden="true" />
                    <LazyLoadImage
                      src="https://i.imgur.com/wBY8ewY.png"
                      placeholderSrc="https://i.imgur.com/wBY8ewYs.png"
                      effect="blur"
                    />
                    <br />
                    <LazyLoadImage
                      src="https://i.imgur.com/gMocHh1.png"
                      placeholderSrc="https://i.imgur.com/gMocHh1s.png"
                      effect="blur"
                    />
                    <br />
                    <br />
                    <b>
                      - Hold on to your Bots
                    </b>
                    <br />
                    Meet your new metal best mate, the all-new Craftbot!
                    This mechanical critter will play a huge part in Survival Mode
                    when it comes to crafting various parts and blocks.
                    <br />
                    The
                    Craftbot is the latest child of our ever-evolving crafting
                    system, which we’re determined to tweak until it’s as perfect
                    as it can possibly be. That might mean some delays due to the
                    sheer amount of original ideas we’re cramming into the
                    bodywork, but we’d much rather experiment and fail than end up
                    with something unremarkable in the final product.
                    <br />
                    Our
                    crafting system will encourage building and creativity. It
                    will make players feel like they are crafting all the parts
                    from start to finish - No cutting corners with a basic loading
                    bar and a simple hand gesture like some games do. As we
                    mentioned before, the crafting must work well if the player
                    wants to craft a single item or if it’s a crafting chain
                    between different Craftbots and refineries.
                    <br />
                    We usually
                    avoid showing things without final graphics since it could
                    give the wrong impression. But we are making an exception this
                    time to show the code at work. Here’s a test with placeholder
                    graphics in action:
                    <br />
                    <LazyLoadImage
                      src="https://i.imgur.com/xTq6ytE.gif"
                      placeholderSrc="https://i.imgur.com/xTq6ytEs.gif"
                      effect="blur"
                    />
                    <br />
                    <LazyLoadImage
                      src="https://i.imgur.com/nZXogce.gif"
                      placeholderSrc="https://i.imgur.com/nZXogces.gif"
                      effect="blur"
                    />
                    <br />
                    This is a fully working craft chain that was built in
                    the game. Next up we will be adding the models and animation
                    so everything looks nice and neat.
                    <br />
                    <br />
                    <br />
                    <a href="#" id="refinebot" style={{ display: 'block' }} aria-hidden="true" />
                    <LazyLoadImage
                      src="https://i.imgur.com/y4fykix.png"
                      placeholderSrc="https://i.imgur.com/y4fykixs.png"
                      effect="blur"
                    />
                    <br />
                    <LazyLoadImage
                      src="https://i.imgur.com/lUr9rbu.png"
                      placeholderSrc="https://i.imgur.com/lUr9rbus.png"
                      effect="blur"
                    />
                    <br />
                    <br />
                    <b>
                      - Refinement
                    </b>
                    <br />
                    Together with the Craftbot we also want to give you a
                    first look at the refinery that can go hand in hand with the
                    steel sidekick.
                    <br />
                    In Survival Mode, players start their
                    adventure by cutting down trees, collecting their loggy
                    remains and then transporting them to a Refinery. The Refinery
                    grinds down the resource materials in to lovely, perfect
                    blocks that can either be stared at lustfully for fans of
                    flawless, angular artefacts or even better, used for building
                    or crafting other items to assist your fight for Survival.
                    <br />
                    The
                    Refinery is pretty much done and just needs animation and some
                    extra polish.
                    <br />
                    <br />
                    <br />
                    <a href="#" id="weapons" style={{ display: 'block' }} aria-hidden="true" />
                    <LazyLoadImage
                      src="https://i.imgur.com/j3ULhxs.png"
                      placeholderSrc="https://i.imgur.com/j3ULhxss.png"
                      effect="blur"
                    />
                    <br />
                    <LazyLoadImage
                      src="https://i.imgur.com/RiQfplX.png"
                      placeholderSrc="https://i.imgur.com/RiQfplXs.png"
                      effect="blur"
                    />
                    <br />
                    <LazyLoadImage
                      src="https://i.imgur.com/jpC02Sw.gif"
                      placeholderSrc="https://i.imgur.com/jpC02Sws.gif"
                      effect="blur"
                    />
                    <br />
                    <br />
                    <b>
                      - No Small Fry
                    </b>
                    <br />
                    In an earlier post we said we were pretty much done
                    with the Spudgun, but then (ahem) suddenly, we changed our
                    minds…
                    <br />
                    We’ve been thinking a lot about the Spud Gun and
                    its place within Scrap Mechanic. Initially, our design was
                    similar to what most shooters do with hitscan, however we’ve
                    now decided to take it back to the garage for tweaking. We
                    want to come up with something better, more creative and fun
                    for players and modders alike. Something as fun to use as
                    ‘Spudgun’ sounds.
                    <br />
                    The result is our own new projectile
                    system that isn’t physics based, but within which projectiles
                    can affect physics, and at the same time making sure spudding
                    things over a network is as fair as spudding things over a
                    network should be.
                    <br />
                    The great news is that the new system
                    can be adjusted to different types of gun barrel attachments
                    like shotgun and sniper and behave differently. Since you
                    shoot rather large potatoes in Scrap Mechanic Survival Mode,
                    we want players to see the traveling potato and also make sure
                    that it behaves like one (we’ve spent a lot of time studying
                    potatoes).
                    <br />
                    For example, if a Mechanic shoots straight up
                    in the air, we want the potato to fall back down. We’ve also
                    created conditions so that if the player shoots a moving
                    object, it will give it a solid push. Both these features open
                    a lot of interesting creative combat tactics. We even looked
                    in to having the traveling potato trigger sensors.
                    <br />
                    So,
                    we hope you agree with our decision on reworking the shooting
                    to something more solid and interesting even though these
                    decision delays things a bit more.
                    <br />
                    Now that the Spudgun
                    mechanics are mostly done except some minor tweaks, we’ve
                    started working on the aim system and camera. Also, as you
                    might have noticed, we have a new run animation that works
                    with the Spudgun.
                    <br />
                    On the same note, check out our new
                    French Fries shotgun barrel, complete with deep frier! That’s
                    not a joke. Let us know if we’re going too crazy with these
                    things…
                    <br />
                    <br />
                    <br />
                    <a href="#" id="bot-ai" style={{ display: 'block' }} aria-hidden="true" />
                    <LazyLoadImage
                      src="https://i.imgur.com/wlSK92d.png"
                      placeholderSrc="https://i.imgur.com/wlSK92ds.png"
                      effect="blur"
                    />
                    <br />
                    <LazyLoadImage
                      src="https://i.imgur.com/6j8rXvJ.png"
                      placeholderSrc="https://i.imgur.com/6j8rXvJs.png"
                      effect="blur"
                    />
                    <br />
                    <LazyLoadImage
                      src="https://i.imgur.com/G69uGnA.gif"
                      placeholderSrc="https://i.imgur.com/G69uGnAs.gif"
                      effect="blur"
                    />
                    <br />
                    <br />
                    <b>
                      - Farmbot AI
                    </b>
                    <br />
                    Thanks to the huge amount of gameplay possibilities
                    available to players, developing AI for a game like ours
                    requires programmers with very large brains – and even bigger
                    schedules. And their first task in creating Farmbots with
                    enough environmental nous to chase Mechanics through their
                    creations.
                    <br />
                    The new AI is fully working now with an attack
                    in place. Here’s a look at one of our tests where we use the
                    mechanic model. But they will be replaced with farmbots once
                    the new animations are added. It works surprisingly well. But
                    there are still times where they get stuck in a corner or in a
                    loop.
                    <br />
                    Oh, and while we’re on the subject of Farmbots, we
                    have given them a needed graphical upgrade to fit the new
                    visuals better.
                    <br />
                    <br />
                    <br />
                    <a href="#" id="terrain-assets" style={{ display: 'block' }} aria-hidden="true" />
                    <LazyLoadImage
                      src="https://i.imgur.com/peuzqG7.png"
                      placeholderSrc="https://i.imgur.com/peuzqG7s.png"
                      effect="blur"
                    />
                    <br />
                    <br />
                    <b>
                      -Terraining Day is Here
                    </b>
                    <br />
                    It’s never too late in the day to discuss terrain
                    assets. Which is useful, because you’re about to see a
                    jumbo-wheelbarrow-load of ‘em come your way.
                    <br />
                    Following on
                    from modder support for adding custom blocks and parts, there
                    are now a gazillion amazing parts available to download, all
                    made by the Scrap Mechanic community.
                    <br />
                    Since we added
                    world building to Scrap Mechanic we also wanted to support
                    mods that added terrain assets to the tile editor. And guess
                    what? We’re delighted to say that this will soon be possible
                    via the next update.
                    <br />
                    We are guessing that the Scrap
                    Mechanic world will never look the same again once modders
                    start adding trees, train tracks and all manner of gubbins…
                    <br />
                    <br />
                    <a href="#" id="network-work" style={{ display: 'block' }} aria-hidden="true" />
                    <b>
                      - Network Work
                    </b>
                    <br />
                    There’s a little known secret about Scrap Mechanic
                    multiplayer (whisper it quietly): sometimes it can be a little
                    bit wonky for players who are not hosting the game. Luckily,
                    we attend to smash this issue with a well-placed hammer
                    blow.
                    <br />
                    We are currently working on improvements to game
                    networking and we’re looking forward to releasing this fix in
                    advance of Survival Mode. That means a much smoother
                    multiplayer experience without random teleportation or other
                    such nastiness. Huzzah!
                    <br />
                    <br />
                    <br />
                    <a href="#" id="new-outfits" style={{ display: 'block' }} aria-hidden="true" />
                    <LazyLoadImage
                      src="https://i.imgur.com/W1Uuwo0.png"
                      placeholderSrc="https://i.imgur.com/W1Uuwo0s.png"
                      effect="blur"
                    />
                    <br />
                    <br />
                    <b>- Wardrobe Upgrade</b>
                    <br />
                    Pretty new outfits sir?
                    Premium stock? Right this way…
                    <br />
                    Over a long period we’ve
                    been secretly tailoring a fashion show-worth of new outfits
                    and customization options for Survival Mode. Finally, we feel
                    like we have enough to give the community a myriad of ways to
                    dress and personalize their mechanic.
                    <br />
                    Our awesome art
                    team spent a lot of time texturing and polishing this last
                    month to make the new updated wardrobe ready for
                    implementation. We hope you agree these customization options
                    really turned out amazing. Some will be more rare than
                    others!
                    <br />
                    In addition, we picked up on redesigning the main
                    menu for Survival to make it more fun and better looking, with
                    extra room for character customization. We’ll unclassify some
                    images as soon as we leave the wireframe stage.
                    <br />
                    … Oh, go
                    on then.  We can’t do a devblog without showing at least one
                    of our latest outfits, can we?
                    <br />
                    This is the Painter
                    outfit.
                    <br />
                    <br />
                    <i>
                      <b>
                        - SURVIVAL MODE. WHEN.
                      </b>
                    </i>
                    <br />
                    We hear you. And we’re still working hard – promise!
                    <br />
                    We
                    can’t stress enough that working on Survival is basically like
                    working on Scrap Mechanic 2, a brand new game. Committing to a
                    final release date is something very hard for us to do right
                    now, since we’re determined to finetune and tweak everything
                    to perfection, in addition to adding new options and
                    features.
                    <br />
                    This is the way we want to work on Scrap
                    Mechanic since it’s the direction that will guarantee a better
                    Survival Mode for players in the end. We’re fully aware of
                    Early Access games that rush features out and end up
                    disappointing their players or stop updating, but rest
                    assured, that is not going to be the case with Scrap Mechanic!
                    <br />
                    We are not going anywhere. But we are making a very
                    technically complex game with physics and multiplayer and a
                    lot of complicated functions in our own engine. We must make
                    sure that everything is fun and working well. It’s also tricky
                    to share our progress on the world sometimes without spoiling
                    to much since there is a lot of exploration in survival.
                    <br />
                    We
                    hope this explains our philosophy on development. We have an
                    awesome team that is making amazing progress every day,
                    working hard to create a unique gaming experience that you
                    will hopefully love for many years to come.
                    <br />
                    <br />
                    Thanks
                    for your support – and for playing!
                    <br />
                    We will be back
                    soon!
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
