const routeLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Tickets",
    path: "/tickets",
  },
  {
    name: "Lineup",
    path: "/lineup",
  },
  {
    name: "Info",
    path: "/info",
  },
  // {
  //   name: "Merch",
  //   path: "/merch",
  // },
];

const SideMenu = (props) => {
  const { currentPath, isMenuOpen, setIsMenuOpen } = props;
  return (
    <div id="sideMenu">
      <div
        className={`overlay ${!isMenuOpen ? "hidden" : undefined}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>
      <nav className={!isMenuOpen ? "hidden" : undefined}>
        <ul>
          {routeLinks.map((route) => {
            const isCurrentPath = currentPath === route.path;
            return (
              <li
                className={isCurrentPath ? "selectedPath" : undefined}
                key={route.name}
              >
                <a href={route.path}>
                  <h3>{route.name}</h3>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default SideMenu;
