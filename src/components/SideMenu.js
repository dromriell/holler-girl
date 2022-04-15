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
    name: "Camping",
    path: "/camping",
  },
  {
    name: "Merch",
    path: "/merch",
  },
];

const SideMenu = (props) => {
  const { currentPath, isMenuOpen, setIsMenuOpen } = props;
  return (
    <div id="sideMenu">
      <div
        className={`overlay ${!isMenuOpen && "hidden"}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>
      <nav className={!isMenuOpen && "hidden"}>
        <ul>
          {routeLinks.map((route) => {
            const isCurrentPath = currentPath === route.path;
            console.log(isCurrentPath, currentPath, route.path);
            return (
              <li className={isCurrentPath && "selectedPath"}>
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
