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

import { devblog1 as devblog } from '../../other/devblog_descriptions';

import Title from '../../public/images/devblog/1/title.png?webp&url';
import TitleLQ from '../../public/images/devblog/1/title.png?webp&lqip';

export const getStaticProps = () => ({
  props: {
    title: 'Devblog 1',
    id: 'devblog-1',
    type: 'article',
    description: devblog.description,
    devblog: {
      id: '1',
      ...devblog,
    },
    image: {
      url: devblog.image_url || Title.toString(),
      large: true,
    },
  },
});

export default function DevblogTemplate(page) {
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
