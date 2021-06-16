/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import type { GetStaticPropsResult } from 'next';
import usernames from '../other/usernames';

export function getStaticProps():GetStaticPropsResult<{
    title:string
    id:string
    description: string
}> {
  return {
    props: {
      title: 'Credits',
      id: 'credits',
      description:
      'The important people who have helped make this project possible!',
    },
  };
}

export default function Credits() {
  return (
    <div>
      <div className="content">
        <h1 className="content-title">Credits</h1>
      </div>
      <div className="card">
        <article>
          <div>
            <ul>
              <li>
                <a href="https://trbo.sh">{usernames.turbo}</a>
                {' '}
                - Creator and
                Maintainter of SMLeaks
              </li>
              <li>
                {usernames.ivan}
                {' '}
                - OG Survival Predictionist
              </li>
              <li>
                {usernames.charging}
                {' '}
                - Rendered the
                {' '}
                <Link scroll href="/logbook/items#logbook-items" prefetch={false}>
                  <a>SMLeaks Logo</a>
                </Link>
              </li>
              <li>
                <a href="https://github.com/technologicnick">
                  {usernames.nick}
                </a>
                {' '}
                - Found the files for the
                {' '}
                <Link scroll href="/unused/parts#plastic-pumpkin" prefetch={false}>
                  <a>Plastic Pumpkin</a>
                </Link>
              </li>
              <li>
                {usernames.rockstar}
                {' '}
                - Current Survial Predictionist
              </li>
              <li>{usernames.futureMapper}</li>
              <li>
                <a href="https://twitter.com/_QuestionableM_">
                  {usernames.questionMark}
                </a>
              </li>
              <li>{usernames.bananaCat}</li>
              <li>{usernames.modGamer}</li>
              <li>{usernames.dartFrog}</li>
              <li>{usernames.nothingMod}</li>
              <li>{usernames.redBoi}</li>
              <li>{usernames.vajdani}</li>
            </ul>
            <small>
              (you have contributed to SMLeaks in any way please contact me on
              discord so I can add you to this list!)
            </small>
          </div>
        </article>
      </div>
    </div>
  );
}
