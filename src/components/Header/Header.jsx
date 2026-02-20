import "./Header.css";
import mondayLogo from "../../assets/images/monday-logo.png";
import productSwitcherIcon from "../../assets/images/product-switcher-icon.png";

const Header = () => {
  return (
    <header id="header" className="site-header py-4">
      <div className="container flex justify-between items-center">
        <div className="header-left flex items-center gap-5">
          <div className="site-logo max-w-[168px]">
            <img className="max-w-full" src={mondayLogo} alt="Monday Logo" />
          </div>
          <nav className="nav-menu">
            <ul className="primary-menu flex gap-5 text-sm text-[var(--text-color)]">
              <li className="menu-item">
                <a href="#">Products</a>
              </li>
              <li className="menu-item">
                <a href="#">AI</a>
              </li>
              <li className="menu-item">
                <a href="#">Solutions</a>
              </li>
              <li className="menu-item">
                <a href="#">Resources</a>
              </li>
              <li className="menu-item">
                <a href="#">Enterprise</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header-right flex items-center gap-5">
          <nav className="nav-menu">
            <ul className="secondary-menu flex gap-5 text-sm text-[var(--text-color)]">
              <li className="menu-item">
                <a href="#">Pricing</a>
              </li>
              <li className="menu-item">
                <a href="#">Log in</a>
              </li>
              <li className="menu-item">
                <a
                  className="btn header-btn-1 border border-[var(--primary-color)] text-[var(--primary-color)] py-2 px-4 rounded-4xl"
                  href="#"
                >
                  Contact sales
                </a>
              </li>
              <li className="menu-item">
                <a className="btn header-btn-2 py-2 px-4 border border-[var(--primary-color)] bg-[var(--primary-color)] text-white rounded-4xl" href="#">
                  Get Started
                </a>
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
