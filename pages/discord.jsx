import Head from 'next/head';
import Header from '../components/Header';

export const getStaticProps = () => ({
  props: {
    title: 'Discord',
    id: 'discord',
    description: 'Join the SMLeaks and News Discord!',
  },
});

export default function Discord(page) {
  return (
    <div>
      <Header {...page} />
      <Head>
        <meta httpEquiv="refresh" content="0; url=https://discord.com/invite/AsPKp9r/" />
      </Head>
      <a href="https://discord.com/invite/AsPKp9r/">Redirecting...</a>
    </div>
  );
}
