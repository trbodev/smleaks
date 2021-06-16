import Link from 'next/link';
import type { GetStaticPropsResult } from 'next';

export function getStaticProps():GetStaticPropsResult<{
    title:string
    id:string
    description: string
}> {
  return {
    props: {
      title: 'Page Not Found',
      id: 'not-found',
      description: 'Page Not Found',
    },
  };
}

export default function FourOhFour() {
  return (
    <div>
      <div className="content">
        <h1 className="content-title">Page Not Found</h1>
      </div>
      <div className="card">
        <h2 className="card-title">Seems like you&apos;re a bit lost!</h2>
        <Link href="/" passHref>
          <button className="btn btn-primary btn-sm" type="button">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
}
