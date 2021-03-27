import Head from 'next/head';
import Header from '../components/Header';

export const getStaticProps = () => ({
  props: {
    title: 'Twitter',
    id: 'twitter',
    description: 'Follow the SMLeaks Twitter Bot!',
  },
});

export default function Twitter(page) {
  return (
    <div>
      <Header {...page} />
      <Head>
        <meta httpEquiv="refresh" content="0; url=https://twitter.com/scrapbot_" />
      </Head>
      <a href="https://twitter.com/scrapbot_">Redirecting...</a>
    </div>
  );
}
