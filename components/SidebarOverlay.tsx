/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
export default function SidebarOverlay() {
  return (
    <div
      className="sidebar-overlay"
      role="sidebar-close-on-mobile"
      aria-hidden="true"
    />
  );
}
