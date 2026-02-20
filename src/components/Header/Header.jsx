import "./Header.css";
import mondayLogo from "../../assets/images/monday-logo.png";
import productSwitcherIcon from "../../assets/images/product-switcher-icon.png";
import Button from "../Elements/Button";
import NavLink from "../Elements/NavLink";
import NavMenu from "../Elements/NavMenu";

const Header = () => {
  return (
    <header id="header" className="site-header py-4">
      <div className="container flex justify-between items-center">
        <div className="header-left flex items-center gap-5">
          <div className="site-logo max-w-[168px]">
            <img className="max-w-full" src={mondayLogo} alt="Monday Logo" />
          </div>
       <NavMenu />
        </div>
        <div className="header-right flex items-center gap-5">
          <nav className="nav-menu">
            <ul className="secondary-menu flex gap-5 text-sm text-[var(--text-color)]">
              <li className="menu-item">
                <NavLink text={"Pricing"} url={"#"} dropdown={false} />
              </li>
              <li className="menu-item">
                <NavLink text={"Login"} url={"#"} dropdown={false} />
              </li>
              <li className="menu-item">
                <Button
                  text={"Contact sales"}
                  url={"#"}
                  style={"btn-outline"}
                  icon={false}
                />
              </li>
              <li className="menu-item">
                <Button
                  text={"Get Started"}
                  url={"#"}
                  style={"btn-solid"}
                  icon={true}
                />
              </li>
            </ul>
          </nav>
          <button className="product-switcher-btn max-w-[40px]">
            <img
              className="max-w-full"
              src={productSwitcherIcon}
              alt="Product Switcher Button"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
