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
        {
          [
            [
              'Unused Content',
              [
                ['/unused/audio', 'unused-audio', faMusic, 'Audio'],
                ['/unused/tools', 'unused-tools', faTools, 'Tools'],
                ['/unused/parts', 'unused-parts', faShapes, 'Parts'],
                ['/unused/textures', 'unused-textures', faImages, 'Textures'],
                ['/unused/tiles', 'unused-tiles', faCubes, 'Tiles'],
                ['/unused/particles', 'unused-particles', faHandSparkles, 'Particles'],
              ],
            ],
            [
              'Logbook',
              [
                ['/logbook/audio', 'logbook-audio', faMusic, 'Audio'],
                ['/logbook/items', 'logbook-items', faCubes, 'Items'],
                ['/logbook/guis', 'logbook-guis', faCode, 'GUIs'],
              ],
            ],
            [
              'Other',
              [
                ['/credits', 'credits', faUserPlus, 'Credits'],
                ['/links', 'links', faLink, 'Links'],
                ['/devblogs', 'devblogs', faBook, 'Devblogs'],
              ],
            ],
          ].map((__) => (
            <div>
              <h5 className="sidebar-title">{__[0]}</h5>
              <div className="sidebar-divider" />
              {
              __[1].map((_) => (
                <Link prefetch={false} href={_[0]}>
                  <a
                    className={`sidebar-link sidebar-link-with-icon ${id === _[1] ? ' active' : ''}`}
                  >
                    <span className="sidebar-icon">
                      <FontAwesomeIcon icon={_[2]} fixedWidth />
                    </span>
                    {_[3]}
                  </a>
                </Link>
              ))
            }
            </div>
          ))
        }
      </div>
    </div>
  );
}
