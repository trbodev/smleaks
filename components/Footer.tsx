/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDiscord,
  faGithub,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import HideMobile from '../styles/HideMobile.module.css';

export default function Footer() {
  return (
    <nav className="navbar navbar-fixed-bottom">
      <ul className={`navbar-nav ${HideMobile['mobile-ml-auto-in']}`}>
        <li className={`nav-item ${HideMobile.mobile}`}>
          <a className="nav-link" href="https://github.com/TurboBiscuit/smleaks/issues/new?assignees=&labels=new+leaks&template=submit-leaked-content.md&title=">
            <FontAwesomeIcon icon={faCloudUploadAlt} className="mr-5" fixedWidth />
            Submit Leaks
          </a>
        </li>
        <li className={`nav-item ${HideMobile['mobile-start-icon-spacing']}`}>
          <Link href="/github" passHref>
            <a className="nav-link">
              <FontAwesomeIcon icon={faGithub} className={HideMobile['mobile-icon-spacing']} fixedWidth />
              <span className={HideMobile.mobile}>Github</span>
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/discord" passHref>
            <a className="nav-link">
              <FontAwesomeIcon icon={faDiscord} className={HideMobile['mobile-icon-spacing']} fixedWidth />
              <span className={HideMobile.mobile}>Discord</span>
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/twitter" passHref>
            <a className="nav-link">
              <FontAwesomeIcon icon={faTwitter} className={HideMobile['mobile-icon-spacing']} fixedWidth />
              <span className={HideMobile.mobile}>Twitter</span>
            </a>
          </Link>
        </li>
      </ul>
      <div className={HideMobile['mobile-ml-auto']} />
      <span className="navbar-text">
        &copy; Copyright
        {' '}
        {new Date().getFullYear()}
        , SMLeaks
      </span>
    </nav>
  );
}
