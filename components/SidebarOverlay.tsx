/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
export default function SidebarOverlay({
  sidebar,
  setSidebar,
}:{
  sidebar:boolean
  setSidebar: Function
}) {
  return (
    <div
      className="sidebar-overlay"
      role="sidebar-close-on-mobile"
      aria-hidden="true"
      onClick={() => setSidebar(!sidebar)}
    />
  );
}
