import NavLink from "./NavLink";
import menuData from "../../data/menu.json";

const NavMenu = ({ menu }) => {
  return (
    <nav className="nav-menu">
      <ul className="primary-menu flex gap-5 text-sm text-[var(--text-color)]">
        {menuData[menu - 1].menuItems.map((menuItem, index) => {
          const { itemName, itemUrl, dropdown } = menuItem;
          return (
            <li key={index}>
              <NavLink text={itemName} url={itemUrl} dropdown={dropdown} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMenu;
