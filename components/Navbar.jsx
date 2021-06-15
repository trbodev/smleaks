/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import LiveViewers from './LiveViewers';

// eslint-disable-next-line import/no-unresolved
import Logo from '../public/images/logfiles/image.png?webp&width=44';

export default function Home({
  sidebar, toggleSidebar,
}) {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <button
          id="toggle-sidebar-btn"
          className="btn btn-action"
          type="button"
          aria-label="button"
          onClick={() => toggleSidebar(sidebar['data-sidebar-hidden'] ? {} : { 'data-sidebar-hidden': 'hidden' })}
        >
          <FontAwesomeIcon icon={faBars} fixedWidth aria-hidden="true" />
        </button>
      </div>
      <Link scroll prefetch={false} href="/">
        <a href="/" className="navbar-brand ml-10 ml-sm-20">
          <img src={Logo.toString()} alt="logo" />
          <span className="d-none d-sm-flex">SMLeaks</span>
          {process.env.NEXT_PUBLIC_DOMAIN_DEV === 'true' ? <span className="badge badge-gray" style={{ marginLeft: 6 }}>Development</span> : <></>}
        </a>
      </Link>
      {process.env.NEXT_PUBLIC_VIEWERS === 'true' ? (
        <div className="navbar-content d-md-flex ml-auto">
          <LiveViewers />
        </div>
      ) : <></>}
    </nav>
  );
}
