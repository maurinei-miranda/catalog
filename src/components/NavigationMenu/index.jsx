import { Link } from "react-router-dom";
import "./index.css";
import { useState } from "react";
import { ArchiveBoxIcon, HomeIcon, LinkIcon } from "@heroicons/react/16/solid";
import ROUTES from '../../routes/routes.js'

function NavigationMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMenuOpenHandle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    {
      key: "home",
      textProp: "Página Inicial",
      toProp: ROUTES.HOME,
      icon: HomeIcon,
    },
    {
      key: "catalog",
      textProp: "Catálogo de Jogos",
      toProp: ROUTES.CATALOG,
      icon: HomeIcon,
    },
    {
      key: "contact",
      textProp: "Contatos",
      toProp: ROUTES.CONTACT,
      icon: HomeIcon,
    },
  ];

  const mobileMenuMapper = function () {
    return menuItems.map((menuItem) => {
      return (
        <Link
          key={menuItem.key}
          to={menuItem.toProp}
          onClick={isMenuOpenHandle}
        >
          {menuItem.textProp}
        </Link>
      );
    });
  };

  return (
    <>
      <header id="main-header" className="w-screen flex">
        <nav className="flex w-screen justify-end p-0.5">
          <button id="burgerButton"
            onClick={isMenuOpenHandle}
            className="fixed z-30 sm:hidden focus:outline-none h-10"
          >
            <div
              className={`w-6 bg-white mb-1 h-1 transition-transform ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></div>
            <div
              className={`w-6 bg-white mb-1 h-1 transition-transform ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-6 bg-white mb-1 h-1 transition-transform ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></div>
          </button>
          {/* Mobile menu */}
          <div className={`${isMenuOpen ? "mobile-show" : "mobile-hide"} z-20`}>
            {mobileMenuMapper()}
          </div>
          {/* Desktop menu */}
          <ul className={`desktop-menu`}>
            <li>
              <HomeIcon className="menu-icons" />
              <Link to={ROUTES.HOME}>Home</Link>
            </li>
            <li>
              <ArchiveBoxIcon className="menu-icons" />
              <Link to={ROUTES.CATALOG}>Catálogo de Jogos</Link>
            </li>
            <li>
              <LinkIcon className="menu-icons" />
              <Link to={ROUTES.CONTACT}>Contato</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default NavigationMenu;
