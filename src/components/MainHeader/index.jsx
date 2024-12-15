import { Link } from "react-router-dom";
import "./index.css";
import { useState } from "react";
import { ArchiveBoxIcon, HomeIcon, LinkIcon } from "@heroicons/react/16/solid";

function MainHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // TODO talvez o useEffect
  const isMenuOpenHandle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header id="main-header" className="w-screen flex justify-start">
        <nav className="">
          <button
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
          <ul className={`${isMenuOpen ? "mobile-show" : "mobile-hide"} z-20`}>
            <li className="text-center">
              <Link onClick={isMenuOpenHandle} to="/">
                Home
              </Link>
            </li>
            <li className="text-center">
              <Link onClick={isMenuOpenHandle} to="/catalog">
                Catálogo de Jogos
              </Link>
            </li>
            <li className="text-center">
              <Link onClick={isMenuOpenHandle} to="/contact">
                Contato
              </Link>
            </li>
          </ul>
          <ul className={`desktop-menu`}>
            <li>
              <HomeIcon className="menu-icons" />
              <Link to="/">Home</Link>
            </li>
            <li>
              <ArchiveBoxIcon className="menu-icons" />
              <Link to="/catalog">Catálogo de Jogos</Link>
            </li>
            <li>
              <LinkIcon className="menu-icons" />
              <Link to="/contact">Contato</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainHeader;
