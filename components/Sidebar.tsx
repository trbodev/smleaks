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
  faUnlockAlt,
  faQuestion,
} from '@fortawesome/free-solid-svg-icons';

export default function Sidebar({
  id,
}: {
  id:string
}) {
  return (
    <div className="sidebar">
      <div className="sidebar-menu">
        {
          [
            {
              name: 'Unused Content',
              links: [

                {
                  link: '/unused/audio',
                  id: 'unused-audio',
                  icon: faMusic,
                  name: 'Audio',
                },
                {
                  link: '/unused/tools',
                  id: 'unused-tools',
                  icon: faTools,
                  name: 'Tools',
                },
                {
                  link: '/unused/parts',
                  id: 'unused-parts',
                  icon: faShapes,
                  name: 'Parts',
                },
                {
                  link: '/unused/textures',
                  id: 'unused-textures',
                  icon: faImages,
                  name: 'Textures',
                },
                {
                  link: '/unused/tiles',
                  id: 'unused-tiles',
                  icon: faLayerGroup,
                  name: 'Tiles',
                },
                {
                  link: '/unused/particles',
                  id: 'unused-particles',
                  icon: faHandSparkles,
                  name: 'Particles',
                },
                {
                  link: '/unused/pre-survival',
                  id: 'unused-pre-survival',
                  icon: faHistory,
                  name: 'Pre-Survival',
                },
                {
                  link: '/unused/pre-release',
                  id: 'unused-pre-release',
                  icon: faUnlockAlt,
                  name: 'Survival Pre-Release',
                },
              ],
            },
            {
              name: 'Logbook',
              links: [
                {
                  link: '/logbook/audio',
                  id: 'logbook-audio',
                  icon: faMusic,
                  name: 'Audio',
                },
                {
                  link: '/logbook/items',
                  id: 'logbook-items',
                  icon: faCubes,
                  name: 'Items',
                },
                {
                  link: '/logbook/guis',
                  id: 'logbook-guis',
                  icon: faWindowRestore,
                  name: 'GUIs',
                },
              ],
            },
            {
              name: 'Other',
              links: [
                {
                  link: '/developer-qna',
                  id: 'developer-qna',
                  icon: faQuestion,
                  name: 'Developer Q&A',
                  extraContent: (<div key="new_tag" className="badge badge-primary" style={{ marginLeft: 8, color: 'rgba(255,255,255,.8)', backgroundColor: '#0459a9' }}>New!</div>),
                },
                {
                  link: '/credits',
                  id: 'credits',
                  icon: faUserPlus,
                  name: 'Credits',
                },
                {
                  link: '/links',
                  id: 'links',
                  icon: faLink,
                  name: 'Links',
                },
                {
                  link: '/devblogs',
                  id: 'devblogs',
                  icon: faBook,
                  name: 'Devblogs',
                },
                {
                  link: '/technical-info',
                  id: 'technical-info',
                  icon: faTerminal,
                  name: 'Technical Info',
                },
              ],
            },
          ].map((group) => (
            <div key={group.name}>
              <h5 className="sidebar-title">{group.name}</h5>
              <div className="sidebar-divider" />
              {
              group.links.map((link) => (
                <Link key={link.id} scroll prefetch={false} href={link.link}>
                  <a
                    className={`sidebar-link sidebar-link-with-icon ${link.id === id ? ' active' : ''}`}
                  >
                    <span className="sidebar-icon">
                      <FontAwesomeIcon icon={link.icon} fixedWidth />
                    </span>
                    {link.name}
                    {link.extraContent}
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
