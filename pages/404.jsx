import Link from 'next/link';

export const getStaticProps = () => ({
  props: {
    title: 'Page Not Found',
    id: 'not-found',
    description: 'Page Not Found',
  },
});

export default function FourOhFour() {
  return (
    <div>
      <div className="content">
        <h1 className="content-title">Page Not Found</h1>
      </div>
      <div className="card">
        <h2 className="card-title">Seems like you&apos;re a bit lost!</h2>
        <Link scroll prefetch={false} href="/">
          <a href="/">
            <button className="btn btn-primary btn-sm" type="button">
              Go Home
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
}
