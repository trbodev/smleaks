/* eslint-disable global-require */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-danger */
import moment from 'moment';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Head from 'next/head';
import Comments from '../components/Comments';
import Title from '../public/images/other/developer-qna-title.png?webp&url';
import TitleLQ from '../public/images/other/developer-qna-title.png?webp&lqip';

export const getStaticProps = () => ({
  props: {
    title: 'Developer Q&A',
    id: 'developer-qna',
    type: 'article',
    description: 'We have collected and answered a lot of your Scrap Mechanic questions!',
    date: '6/12/2021',
    url: 'https://steamcommunity.com/games/387990/announcements/detail/4975895695804617040',
    image: {
      url: Title.toString(),
      large: true,
    },
  },
});

export default function DeveloperQandA(page) {
  return (
    <div>
      <Head>
        <meta
          property="og:article:published_time"
          content={moment(page.date, 'MM-DD-YYYY').format('YYYY-M-D')}
        />
      </Head>
      <div className="content">
        <h1 className="content-title">
          Developer Q&amp;A
          -
          {' '}
          {moment(page.date, 'MM-DD-YYYY').format(
            'MMMM Do, YYYY',
          )}
          {' '}
          -
          {' '}
          <a href={page.url}>Original</a>
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
          <b>Hi Mechanics!</b>
          <br />
          <br />

          We have collected and answered a lot of your questions!
          The idea of this Q&amp;A is to be informative and to not leave you hanging,
          while we are working on the next chapter.
          We have focused on your most commonly asked questions, as well as a few fun ones.
          Let us know if you would like us to do these Q&amp;As
          from time to time in the comments below.
          <br />
          <br />
          {
            [
              [
                'Story & Next Chapter',
                [
                  [
                    'When is the next chapter update coming?',
                    'The honest answer is that we don\'t know yet. The next chapter is a big, ambitious update with a lot of new locations. New bots to fight. New interactive parts to craft with and new game mechanics. We don\'t want to commit to a release date just yet. If we did, we would be forced to cut corners later on. It would also stop us from adding new ideas that would make it better if they came up. We will make sure that the update is really fun to play and that it offers a lot of hours of playtime before we release it. It could be later this year or next year. But we are working on it as fast as we can, without cutting back on quality. A rough guess would be that we are 50% done. We will keep making dev blogs to keep you updated on our progress.',
                  ],
                  [
                    'Will the scrapyard biome shown in some screenshots and concept art be added in a future update, or is it scrapped?',
                    'The scrapyard biome shown in dev blog 13 is not really scrapped, but it is put on hold for now. The reason is that we took the story in a more interesting direction and the scrapyard didn\'t really fit as the next location. However, it might be included in a later update. We still have a lot of really great ideas for the scrapyard setting.',
                  ],
                  [
                    'Will the next chapter bring an "end goal"?',
                    'The next chapter will, for the first time, introduce a lot more story elements to Survival. The end of chapter will definitely answer a lot of questions. So yes, there is an end goal.',
                  ],
                  [
                    'How many chapters are you planning on releasing and is there going to be a Scrap Mechanic 2?',
                    'We don\'t think there will be a Scrap Mechanic 2. Mainly because there is still so much we can add to Scrap Mechanic now, when it comes to chapters. As long as a lot of players are playing Scrap Mechanic, we will keep adding to it.',
                  ],
                ],
              ],
              [
                'Upcoming Mechanics, Features & Fixes',
                [
                  [
                    'Why is Scrap Mechanic lagging sometimes? Are you planning on fixing the lag when 2 large creations touch?',
                    'We had an issue answering this question since it\'s pretty complex and hard to explain in depth without getting too technical. So we are glad it was brought up here, so we can try and give a longer and more in-depth response. First, it\'s important to say that Scrap Mechanic is a very difficult game to make. There are no limits to what you can do. At the same time, the game has physics and multiplayer as well. So it\'s a game that can always be improved and optimized. But since the beginning, we have been determined to grab the bull by the horns and stick to this path to create something unique and interesting. Scrap Mechanic is a game that runs on our own game engine. This is great since it gives us full control over a lot of things. But physics is running on a physics engine called Bullet Physics. Bullet Physics is an external, open-source physics engine that does all the physics calculations in Scrap Mechanic. The main issue right now is calculating the responses from constraints like the bearings and suspensions as well as from collisions. At the moment, all of these are taken into account at the same level of quality as when calculating the responses for each rigid composition of parts. This makes collision checks expensive, especially on complex creations with a lot of bearings and suspensions. When a complex creation merges with another complex creation through a collision, that’s when the lag can kick in. The way we could fix this as we move forward would be by digging into bullet physics and seeing if we could make less important physics calculations run less expensive calculations instead of having them all running on the same level as it is now. This is, however, a process that would take a lot of time to implement and would most likely slow down other content updates. Our priority now is to finish the next chapter. After that, we will most likely dig into this and see what we can do to push back the lag. The good news is that there are things we can still do to make it better! The bad news is that it will slow down development on other parts of the game. We know that many players would love us to dig into this and we hear you loud and clear.',
                  ],
                  [
                    'When are you going to make the size of the creative mode map the same as the Survival one?',
                    'This is something that we can do. We just have to make it happen. It has not been a priority, but we have gotten a lot of requests for this so we might have to find the time.',
                  ],
                  [
                    'In the future, will there be a weather system? Storm, rain (maybe faster-growing crops when raining), waves on the sea, etc.',
                    'Yes! We actually were planning to add a new cloud system and weather with the Survival update. Unfortunately, we never got time to include it. It\'s very much possible that weather will be included in the next chapter since we already started doing some work on it.',
                  ],
                  [
                    'Will the mod support be extended to allow stuff like new tools, guns, character models, clothes, etc.?',
                    'Yes, there is a lot more we want to do with the mod support. All the things you ask for are included in our wish list as well.',
                  ],
                  [
                    'Will we have a daylight sensor? So the lights could be turned on automatically at night.',
                    'We don\'t have any plans for a daylight sensor right now. But we have an alarm clock in the works that will let you set a time when you want it to activate a creation! It will also include different alarm sound choices.',
                  ],
                  [
                    'Will you improve the multiplayer more? It\'s very poor in performance at times?',
                    'Yes, absolutely. We are aware of the multiplayer issues and we are working on improvements.',
                  ],
                  [
                    'Do you think the suspension glitch will ever be patched, or add a different type of suspension that will not have the glitched effect? I would like to be able to make complicated suspension mechanisms without having to worry about my creation flying away.',
                    'Most likely not as it\'s an issue with the physics engine. However, we did add new steering settings to the level 5 Driver\'s seat with Survival, where if you press E on bearings connected to it, you can change the steering radius. Here, you can tweak and see if you can find a sweet spot where the glitch is not triggered. Maybe that could help a little.',
                  ],
                  [
                    'Can we get bigger wheels, please? We have diameter 3 and diameter 5, a diameter 7 wheel would be very nice too!',
                    'When wheels get too large, they tend to wiggle around sometimes. However, we plan to add more wheels with different properties in general. We want to expand the wheel selection more in Scrap Mechanic.',
                  ],
                  [
                    'Are you guys gonna bring Scrap Mechanic to consoles?',
                    'We are doing some prep work for that right now so most likely we will port it to consoles around the time that we leave early access on Steam.',
                  ],
                  [
                    'Are we going to eventually get aerial and aquatic-specific parts? Thrusters work but they\'re not the best for flying smoothly.',
                    'We want to dedicate a future chapter for aerial and aquatic adventures. So we are saving aerodynamics and better water physics for that. That\'s mainly the reason why it\'s not in the game yet.',
                  ],
                  [
                    'Is it possible to drop some of the restrictions around the modding API? So that modders have more possibilities to create content ',
                    'The restrictions are there to ensure that things work together and for the players\' safety. But there is room to open it up a bit more. We will look into it.',
                  ],
                  [
                    'When do you roughly plan to improve the workshop mod support? I would love to make mods that can work with survival and challenge mode without game file editing, and some improvements to creative mods as well as to include the new features introduced in survival, such as animals.',
                    'Honestly. we just have to get around to including it. We also want mod makers to be able to do these things. We will try and find some time to give them some love. ',
                  ],
                  [
                    'Will there be Scrap Mechanic merch?',
                    'We might look into merch in the future. Let us know in the comments below what kind of merch you would like to see. We’d be happy to get some of your requests in the comments below.',
                  ],
                ],
              ],
            ].map((group) => (
              <>
                <b style={{ textDecoration: 'underline' }}>{group[0]}</b>
                {
                  group[1].map(([q, a]) => (
                    <>
                      <br />
                      <br />
                      <b>Q</b>
                      :
                      {' '}
                      {q}
                      <br />
                      <b>A</b>
                      :
                      {' '}
                      {a}
                    </>
                  ))
                }
              </>
            ))
          }
        </article>
      </div>
      <Comments />
    </div>
  );
}
