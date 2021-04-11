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
  faUserPlus,
  faLink,
  faBook,
  faWindowRestore,
  faLayerGroup,
  faTerminal,
  faHistory,
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
                ['/unused/tiles', 'unused-tiles', faLayerGroup, 'Tiles'],
                ['/unused/particles', 'unused-particles', faHandSparkles, 'Particles'],
                ['/unused/pre-survival', 'unused-pre-survival', faHistory, 'Pre-Survival', <div className="badge badge-primary" style={{ marginLeft: 8, color: 'rgba(255,255,255,.8)' }}>New!</div>],
              ],
            ],
            [
              'Logbook',
              [
                ['/logbook/audio', 'logbook-audio', faMusic, 'Audio'],
                ['/logbook/items', 'logbook-items', faCubes, 'Items'],
                ['/logbook/guis', 'logbook-guis', faWindowRestore, 'GUIs'],
              ],
            ],
            [
              'Other',
              [
                ['/credits', 'credits', faUserPlus, 'Credits'],
                ['/links', 'links', faLink, 'Links'],
                ['/devblogs', 'devblogs', faBook, 'Devblogs'],
                ['/technical-info', 'technical-info', faTerminal, 'Technical Info', <div className="badge badge-primary" style={{ marginLeft: 8, color: 'rgba(255,255,255,.8)' }}>New!</div>],
              ],
            ],
          ].map((group) => (
            <div>
              <h5 className="sidebar-title">{group[0]}</h5>
              <div className="sidebar-divider" />
              {
              group[1].map((link) => (
                <Link prefetch={false} href={link[0]}>
                  <a
                    className={`sidebar-link sidebar-link-with-icon ${id === link[1] ? ' active' : ''}`}
                  >
                    <span className="sidebar-icon">
                      <FontAwesomeIcon icon={link[2]} fixedWidth />
                    </span>
                    {link[3]}
                    {link[4] ? link[4] : null}
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
