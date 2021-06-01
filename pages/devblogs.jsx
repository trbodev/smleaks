/* eslint-disable jsx-a11y/anchor-is-valid */
// import moment from 'moment';
// import Link from 'next/link';
// import devblogs from '../other/devblog_descriptions';

export const getStaticProps = () => ({
  props: {
    title: 'Devblogs',
    id: 'devblogs',
    description: 'All the Scrap Mechanic devblogs in one convenient place!',
  },
});

export default function Devblogs() {
  return (
    <div>
      <div className="content">
        <h1 className="content-title">Devblogs</h1>
      </div>
      <div className="card">
        Disabled for redesign
        {/* <ul>
          {Object.keys(devblogs)
            .map((e) => e.replace('devblog', ''))
            .sort((a, b) => b - a)
            .map((devblogId) => {
              const devblog = devblogs[`devblog${devblogId}`];
              return (
                <li id={`devblog-${devblogId}`} key={`devblog-${devblogId}`}>
                  <Link prefetch={false} href={`/devblog/${devblogId}`}>
                    <a id={`devblog-${devblogId}`} style={{ marginLeft: -10 }}>
                      Devblog
                      {' '}
                      {devblogId}
                    </a>
                  </Link>
                  <small>
                    {' '}
                    -
                    {' '}
                    {devblog.date_manual
                      || moment(devblog.date, 'MM/DD/YYYY').format(
                        'MMMM Do, YYYY',
                      )}
                  </small>
                  <br />
                  <small>
                    -
                    {' '}
                    {devblog.description}
                  </small>
                </li>
              );
            })}
        </ul> */}
      </div>
    </div>
  );
}
