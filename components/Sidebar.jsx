/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMusic,
  faTools,
  faShapes,
  faImages,
  faCubes,
  faHandSparkles,
  faCode,
  faUserPlus,
  faLink,
  faBook,
} from '@fortawesome/free-solid-svg-icons';

export default function Home({ id }) {
  return (
    <div className="sidebar">
      <div className="sidebar-menu">
        <h5 className="sidebar-title">Unused Content</h5>
        <div className="sidebar-divider" />
        <Link prefetch={false} href="/unused/audio">
          <a
            className={`sidebar-link sidebar-link-with-icon ${id === 'unused-audio' ? ' active' : ''}`}
          >
            <span className="sidebar-icon">
              <FontAwesomeIcon icon={faMusic} fixedWidth />
            </span>
            Audio
          </a>
        </Link>
        <Link prefetch={false} href="/unused/tools">
          <a
            rel="noreferrer"
            className={`sidebar-link sidebar-link-with-icon${id === 'unused-tools' ? ' active' : ''}`}
          >
            <span className="sidebar-icon">
              <FontAwesomeIcon icon={faTools} fixedWidth />
            </span>
            Tools
          </a>
        </Link>
        <Link prefetch={false} href="/unused/parts">
          <a
            rel="noreferrer"
            className={`sidebar-link sidebar-link-with-icon${id === 'unused-parts' ? ' active' : ''}`}
          >
            <span className="sidebar-icon">
              <FontAwesomeIcon icon={faShapes} fixedWidth />
            </span>
            Parts
          </a>
        </Link>
        <Link prefetch={false} href="/unused/textures">
          <a
            rel="noreferrer"
            className={`sidebar-link sidebar-link-with-icon${id === 'unused-textures' ? ' active' : ''}`}
          >
            <span className="sidebar-icon">
              <FontAwesomeIcon icon={faImages} fixedWidth />
            </span>
            Textures
          </a>
        </Link>
        <Link prefetch={false} href="/unused/tiles">
          <a
            rel="noreferrer"
            className={`sidebar-link sidebar-link-with-icon${id === 'unused-tiles' ? ' active' : ''}`}
          >
            <span className="sidebar-icon">
              <FontAwesomeIcon icon={faCubes} fixedWidth />
            </span>
            Tiles
          </a>
        </Link>
        <Link prefetch={false} href="/unused/particles">
          <a
            rel="noreferrer"
            className={`sidebar-link sidebar-link-with-icon${id === 'unused-particles' ? ' active' : ''}`}
          >
            <span className="sidebar-icon">
              <FontAwesomeIcon icon={faHandSparkles} fixedWidth />
            </span>
            Particles
          </a>
        </Link>
        <h5 className="sidebar-title">Logbook</h5>
        <div className="sidebar-divider" />
        <Link prefetch={false} href="/logbook/audio">
          <a
            rel="noreferrer"
            className={`sidebar-link sidebar-link-with-icon${id === 'logbook-audio' ? ' active' : ''}`}
          >
            <span className="sidebar-icon">
              <FontAwesomeIcon icon={faMusic} fixedWidth />
            </span>
            Audio
          </a>
        </Link>
        <Link prefetch={false} href="/logbook/items">
          <a
            rel="noreferrer"
            className={`sidebar-link sidebar-link-with-icon${id === 'logbook-items' ? ' active' : ''}`}
          >
            <span className="sidebar-icon">
              <FontAwesomeIcon icon={faCubes} fixedWidth />
            </span>
            Items
          </a>
        </Link>
        <Link prefetch={false} href="/logbook/guis">
          <a
            rel="noreferrer"
            className={`sidebar-link sidebar-link-with-icon${id === 'logbook-guis' ? ' active' : ''}`}
          >
            <span className="sidebar-icon">
              <FontAwesomeIcon icon={faCode} fixedWidth />
            </span>
            GUIs
          </a>
        </Link>
        <h5 className="sidebar-title">Other</h5>
        <div className="sidebar-divider" />
        <Link prefetch={false} href="/credits">
          <a
            rel="noreferrer"
            className={`sidebar-link sidebar-link-with-icon${id === 'credits' ? ' active' : ''}`}
          >
            <span className="sidebar-icon">
              <FontAwesomeIcon icon={faUserPlus} fixedWidth />
            </span>
            Credits
          </a>
        </Link>
        <Link prefetch={false} href="/links">
          <a
            rel="noreferrer"
            className={`sidebar-link sidebar-link-with-icon${id === 'links' ? ' active' : ''}`}
          >
            <span className="sidebar-icon">
              <FontAwesomeIcon icon={faLink} fixedWidth />
            </span>
            Links
          </a>
        </Link>
        <Link prefetch={false} href="/devblogs">
          <a
            rel="noreferrer"
            className={`sidebar-link sidebar-link-with-icon${id === 'devblogs' ? ' active' : ''}`}
          >
            <span className="sidebar-icon">
              <FontAwesomeIcon icon={faBook} fixedWidth />
            </span>
            Devblogs
          </a>
        </Link>
      </div>
    </div>
  );
}
