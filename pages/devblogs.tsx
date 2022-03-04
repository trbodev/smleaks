/* eslint-disable jsx-a11y/anchor-is-valid */
import moment from 'moment';
import Link from 'next/link';
import type { GetStaticPropsResult } from 'next';
import devblogs from '../other/devblog_descriptions';

export function getStaticProps():GetStaticPropsResult<{
    title:string
    id:string
    description: string
}> {
  return {
    props: {
      title: 'Devblogs',
      id: 'devblogs',
      description: 'All the Scrap Mechanic devblogs in one convenient place!',
    },
  };
}

export default function Devblogs() {
  return (
    <div>
      <div className="content">
        <h1 className="content-title">Devblogs</h1>
      </div>
      <div className="card">
        <ul>
          {devblogs
            .map((devblog:{
              description:string,
              date?:string,
              url:string,
              // eslint-disable-next-line camelcase
              date_manual?:string
            }, i) => (
              <li id={`devblog-${i + 1}`} key={`devblog-${i + 1}`}>
                <Link prefetch={false} href={`/devblog/${i + 1}`}>
                  <a id={`devblog-${i + 1}`}>
                    Devblog
                    {' '}
                    {i + 1}
                  </a>
                </Link>
                <small>
                  {' '}
                  -
                  {' '}
                  {
                    devblog.date_manual
                    || moment(devblog.date, 'MM/DD/YYYY').format(
                      'MMMM Do, YYYY',
                    )
                  }
                </small>
                <br />
                <small>
                  -
                  {' '}
                  {devblog.description || ''}
                </small>
              </li>
            )).reverse()}
        </ul>
      </div>
    </div>
  );
}
