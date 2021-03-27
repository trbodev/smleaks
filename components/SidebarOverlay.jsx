/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
export default function Home({ toggleSidebar, sidebar }) {
  return (
    <div
      className="sidebar-overlay"
      role="sidebar-close-on-mobile"
      aria-hidden="true"
      onClick={() => toggleSidebar(sidebar['data-sidebar-hidden'] ? {} : { 'data-sidebar-hidden': 'hidden' })}
    />
  );
}
