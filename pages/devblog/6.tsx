/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable global-require */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-danger */
// next imports
import Image from 'next/image';
import Head from 'next/head';
import type { GetStaticPropsResult } from 'next';

// other imports
import moment from 'moment';
import Comments from '../../components/Comments';
import { generateURL } from '../../helpers/urls';
import config from '../../other/config';
import { devblog6 as devblogSrc } from '../../other/devblog_descriptions';

// image imports
import Title from '../../public/images/devblog/6/title.png';

export function getStaticProps():GetStaticPropsResult<{
    title:string
    id:string
    description: string
    type: string
    devblog: {
      id:string
      description:string
      url: string
      date: string
    }
    image: {
      url:string,
      large:boolean,
      enabled:boolean
    }
}> {
  return {
    props: {
      title: 'Devblog 6',
      id: 'devblog-6',
      type: 'article',
      description: devblogSrc.description,
      devblog: {
        id: '6',
        ...devblogSrc,
      },
      image: {
        url: generateURL(
          'http',
          config.domain.name,
          config.domain.secure,
          Title.src,
        ),
        large: true,
        enabled: true,
      },
    },
  };
}

export default function Devblog6({
  devblog,
}:{
  devblog:{
    id:string
    date:string
    url: string
  }
}) {
  return (
    <div>
      <Head>
        <meta
          property="og:article:published_time"
          content={moment(devblog.date, 'MM-DD-YYYY').format('YYYY-M-D')}
        />
      </Head>

      <div className="content">
        <h1 className="content-title">
          Devblog
          {' '}
          {devblog.id}
          {' '}
          -
          {' '}
          {moment(devblog.date, 'MM-DD-YYYY').format('MMMM Do, YYYY')}
          {' '}
          -
          {' '}
          <a href={devblog.url}>Original</a>
        </h1>
      </div>
      <div className="card">
        <article>
          <Image
            alt="title"
            src={Title}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>Hi Mechanics!</b>
          <br />
          So, Scrap Mechanic is finally available to play on Steam Early Access!
          It’s been almost two weeks since release, and we’ve been totally blown
          away by the response from you guys. Seeing so many of you making all
          of the most incredible machines and vehicles has been completely
          mind-blowing, and the creativity on display is beyond impressive.
          <br />
          <br />
          Honestly, Mechanics, you guys have got serious game!
          <br />
          <br />
          You’ve really been putting the game through its paces! In reading all
          your feedback and watching your gameplay videos, we’re being provided
          with this immense learning experience, and the total tonnage of what
          we’ve learned from you all since release could stop even the most
          aggressive of oncoming Farmbots in its tracks!
          <br />
          <br />
          Obviously all of these learnings for us come from your occasional
          moments of frustration with bugs and lag, but we swear your grey hairs
          are worth it because together we’re gonna build something incredibly,
          well, incredible. For real though, thanks so much for your patience.
          <br />
          <br />
          By the way, we’re about to expand! Scrap Mechanic HQ is a really small
          place, so we’re on the hunt for a bigger pad and faster, better
          progress will be coming along in the form of a few new additions to
          the team. We’re crazy excited about both of these things, and we’ll
          keep you posted when we learn more!
          <br />
          <br />
          Here are some of the things we’ve been busy with since launch!
          <br />
          <br />
          <a
            href="#"
            id="bug-fixes"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <b>- Bug Fixes &amp; Optimization!</b>
          <br />
          With all of the information flooding in from videos, forums and by
          email, all of our time is being spent on improvements based on your
          feedback. Squashing bugs and optimizing the game is a crucial focus
          for us right now because getting these fundamentals right for you guys
          is the best way for us to ensure your best possible Scrap Mechanic
          experience. Like we’ve already said, the sheer volume of info we’re
          getting is amazing, so we’re expecting to spend a few solid weeks on
          all of this stuff, but we’re confident it’ll be worth it for everyone!
          As soon as we’re done with bug-hunting and optimization, we’ll be
          right back to working on Survival mode as well as other content.
          <br />
          <br />
          <br />
          <a
            href="#"
            id="horn"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <Image
            src={require('../../public/images/devblog/6/horn.png')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}

          />
          <br />
          <Image
            src={require('../../public/images/devblog/6/horn2.png')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>- Beep, Beep!</b>
          <br />
          With so many vehicles being built, there’s something decidedly wrong
          of us to have not provided you with a horn. We realize what a
          despicable travesty this is, and have started work on a delightful
          horn that you can attach to your rides and give your mechanic friends
          a honk or two. Or three. Four on weekends and holidays. You could even
          use it as a doorbell! Your horn possibilities will be endless,
          especially since we’re even giving some thought to adding a pitch
          slider so you can create your own perfect, personal honk! We’ll keep
          you posted on how it’s turning out!
          <br />
          <br />
          <br />
          <a
            href="#"
            id="paint"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <Image
            src={require('../../public/images/devblog/6/paint-tool.png')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>- Paint Stuff!</b>
          <br />
          We’ve been hard at work on a new tool for quite some time now, and
          it’s been pretty difficult to stay quiet about it. We’re stoked to be
          able to show it to you today for the first time: introducing the paint
          tool! Loaded with tons of beautiful colors for you to choose from, the
          paint tool allows you to add your style to any part in the game. Paint
          your drivers’ seat pink, or why not make a pixel art masterpiece for
          your garage wall? Further personalization of your creations is the
          name of the game with this new tool, and once you’ve got your mitts on
          it, you’ll never want to build without it! We are still working on it.
          <br />
          <br />
          <br />
          <a
            href="#"
            id="new-building-parts"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <Image
            src={require('../../public/images/devblog/6/new-props.png')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>- New Building Parts</b>
          <br />
          We’ve constantly got a pan of delicious new parts on the stove,
          bubbling away waiting to be served up to you Mechanics! Take a look at
          this comfy mattress or this functional yet chic toilet seat! Who
          wouldn’t want a vehicle built with some of these new parts? New parts
          coming to a Creative mode near you in a later update.
          <br />
          <br />
          <br />
          <a
            href="#"
            id="robot-concepts"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
          <Image
            src={require('../../public/images/devblog/6/robot1.png')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <Image
            src={require('../../public/images/devblog/6/robot2.png')}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
          <br />
          <br />
          <b>- Robot Concepts</b>
          <br />
          We’ve been toying with a bunch of new Farmbot concepts for Survival
          mode. Exploring different designs and thinking about their unique
          abilities and parts is a ton of fun, and we’re pleased to present to
          you an early glimpse at some of our ideas!
          <br />
          <br />
          Just wanna close up by saying a massive thanks to all you Mechanics
          who’ve been supporting us! We’re so pumped to really throw all we’ve
          got at making Scrap Mechanic the best game we possibly can! We’re
          sticking around, and hope you guys are ready to stick with us on this
          journey we call Scrap Mechanic!
          <br />
          <br />
          Peace &amp; machinery from SMHQ
          <br />
        </article>
      </div>
      <Comments />
    </div>
  );
}
