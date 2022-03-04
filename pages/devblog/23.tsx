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
import { devblog23 as devblogSrc } from '../../other/devblog_descriptions';

// image imports
import Title from '../../public/images/devblog/23/title.png';

export function getStaticProps():GetStaticPropsResult<{
    title:string
    id:string
    description: string
    type: string
    devblog: {
      id:string
      description:string
      url: string
      date?: string
      // eslint-disable-next-line camelcase
      date_manual?: string
    }
    image: {
      src:string,
      large:boolean,
      enabled:boolean
    }
}> {
  return {
    props: {
      title: 'Devblog 23',
      id: 'devblog-23',
      type: 'article',
      description: devblogSrc.description,
      devblog: {
        id: '23',
        ...devblogSrc,
      },
      image: {
        src: generateURL(
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

export default function DevblogTemplate({
  devblog,
}:{
  devblog:{
    id:string
    date?:string
    // eslint-disable-next-line camelcase
    date_manual?:string
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
          {devblog.date_manual || moment(devblog.date, 'MM-DD-YYYY').format('MMMM Do, YYYY')}
          {' '}
          -
          {' '}
          <a href={devblog.url}>Teaser Tweet</a>
        </h1>
      </div>
      <div className="card">
        <article>
          <div
            className="alert"
            style={{
              backgroundColor: '#302c19',
              backgroundImage: 'none',
              borderColor: '#8c790e',
            }}
          >
            <h6 className="alert-heading">
              <b>Note:</b>
            </h6>
            {/* eslint-disable-next-line max-len */}
            This page is a placeholder for Devblog 23 that will be releasing by the end of next week.
            <br />
            <code>(2/11-13/2022)</code>
          </div>
          <br />
          <Image
            alt="title"
            src={Title}
            placeholder="blur"
            loading="lazy"
            layout="responsive"
            priority={false}
          />
        </article>
        <Comments />
      </div>
    </div>
  );
}
