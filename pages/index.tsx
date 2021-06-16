// next imports
import Link from 'next/link';
import type { GetStaticPropsResult } from 'next';

export function getStaticProps():GetStaticPropsResult<{
    title:string
    id:string
}> {
  return {
    props: {
      title: 'Home',
      id: 'home',
    },
  };
}

export default function Home() {
  return (
    <>
      <div className="content">
        <h1 className="content-title">Home</h1>
      </div>
      <div className="card">
        <h2 className="card-title">Welcome to SMLeaks!</h2>
        <article>
          The community run leaking website for
          {' '}
          <a href="https://store.steampowered.com/app/387990/">
            Scrap Mechanic
          </a>
          .
          <br />
          This is currently being run and maintained by
          {' '}
          <a href="https://trbo.sh">Turbo Biscuit</a>
          .
          <br />
          You can also check out our
          {' '}
          <Link href="/discord">
            <a href="/discord">Discord</a>
          </Link>
          !
          <br />
        </article>
      </div>
    </>
  );
}
