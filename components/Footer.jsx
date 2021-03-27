/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDiscord,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export default function Home() {
  return (
    <nav className="navbar navbar-fixed-bottom">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link href="/discord">
            <a className="nav-link">
              <FontAwesomeIcon icon={faDiscord} className="mr-5" fixedWidth />
              Discord
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/twitter">
            <a className="nav-link">
              <FontAwesomeIcon icon={faTwitter} className="mr-5" fixedWidth />
              Twitter
            </a>
          </Link>
        </li>
      </ul>
      <span className="navbar-text">
        &copy; Copyright
        {' '}
        {new Date().getFullYear()}
        , SMLeaks
      </span>
    </nav>
  );
}
