/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDiscord,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { isMobile } from 'react-device-detect';

export default function Home() {
  return (
    <nav className="navbar navbar-fixed-bottom">
      <ul className={`navbar-nav ${isMobile ? '' : 'ml-auto'}`}>
        <li className="nav-item">
          <Link href="/discord">
            <a className="nav-link">
              <FontAwesomeIcon icon={faDiscord} className={isMobile ? 'mr-2 ml-5' : 'mr-5'} fixedWidth />
              {isMobile ? '' : 'Discord'}
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/twitter">
            <a className="nav-link">
              <FontAwesomeIcon icon={faTwitter} className={isMobile ? 'mr-2' : 'mr-5'} fixedWidth />
              {isMobile ? '' : 'Twitter'}
            </a>
          </Link>
        </li>
      </ul>
      <div className={isMobile ? 'ml-auto' : ''} />
      <span className="navbar-text">
        &copy; Copyright
        {' '}
        {new Date().getFullYear()}
        , SMLeaks
      </span>
    </nav>
  );
}
