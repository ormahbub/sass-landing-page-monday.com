import NavLink from "./NavLink";

const NavMenu = () => {
  return (
    <nav className="nav-menu">
      <ul className="primary-menu flex gap-5 text-sm text-[var(--text-color)]">
        <li className="menu-item">
          <NavLink text={"Products"} url={"#"} dropdown={true} />
        </li>
        <li className="menu-item">
          <NavLink text={"AI"} url={"#"} dropdown={true} />
        </li>
        <li className="menu-item">
          <NavLink text={"Solutions"} url={"#"} dropdown={true} />
        </li>
        <li className="menu-item">
          <NavLink text={"Resources"} url={"#"} dropdown={true} />
        </li>
        <li className="menu-item">
          <NavLink text={"Enterprise"} url={"#"} dropdown={false} />
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
