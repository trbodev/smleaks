/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import LiveViewers from './LiveViewers';

import Logo from '../public/images/logfiles/image.png';
import { flag } from '../helpers/env';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <button
          id="toggle-sidebar-btn"
          className="btn btn-action"
          type="button"
          aria-label="button"
        >
          <FontAwesomeIcon icon={faBars} fixedWidth aria-hidden="true" />
        </button>
      </div>
      <Link prefetch={false} href="/">
        <a className="navbar-brand ml-10 ml-sm-20">
          <Image src={Logo} alt="logo" width={44} height={44} />
          <span className="d-none d-sm-flex">SMLeaks</span>
          {flag(
            'DOMAIN_DEV',
            <span className="badge badge-gray" style={{ marginLeft: 6 }}>Development</span>,
          )}
        </a>
      </Link>
      {flag(
        'VIEWERS_ENABLED',
        <div className="navbar-content d-md-flex ml-auto">
          <LiveViewers />
        </div>,
      )}
    </nav>
  );
}
