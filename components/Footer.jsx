/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDiscord,
  faGithub,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { isMobile } from 'react-device-detect';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <nav className="navbar navbar-fixed-bottom">
      <ul className={`navbar-nav ${isMobile ? '' : 'ml-auto'}`}>
        {
          isMobile
            ? <></> : (
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/TurboBiscuit/smleaks/issues/new?assignees=&labels=new+leaks&template=submit-leaked-content.md&title=">
                  <FontAwesomeIcon icon={faCloudUploadAlt} className={isMobile ? 'mr-2' : 'mr-5'} fixedWidth />
                  {isMobile ? '' : 'Submit Leaks'}
                </a>
              </li>
            )
        }

        <li className="nav-item">
          <Link scroll href="/github">
            <a className="nav-link">
              <FontAwesomeIcon icon={faGithub} className={isMobile ? 'mr-2' : 'mr-5'} fixedWidth />
              {isMobile ? '' : 'Github'}
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link scroll href="/discord">
            <a className="nav-link">
              <FontAwesomeIcon icon={faDiscord} className={isMobile ? 'mr-2 ml-5' : 'mr-5'} fixedWidth />
              {isMobile ? '' : 'Discord'}
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link scroll href="/twitter">
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
