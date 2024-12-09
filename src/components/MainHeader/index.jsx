import { Link } from "react-router-dom";
import "./index.css";
import { useState } from "react";

function MainHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header id="main-header" className="w-screen flex justify-center bg-red-500">
        <nav className="w-screen flex flex-row">
          <button onClick={() => {
            console.log("Change MenuState")
            return setIsMenuOpen(!isMenuOpen);
          }} className="md:hidden focus:outline-none">
            <div className={`w-6 bg-white mb-1 h-1 transition-transform ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></div>
            <div className={`w-6 bg-white mb-1 h-1 transition-transform ${isMenuOpen ? "opacity-0" : ""}`}></div>
            <div className={`w-6 bg-white mb-1 h-1 transition-transform ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></div>
              
          </button>
          <ul className={`flex flex-row justify-between w-screen p-3 ${isMenuOpen ? "": "hidden"}`}>
            <li className="">
              <Link to="/">Home</Link>
            </li>
            <li className="">
              <Link to="/catalog">Catálogo</Link>
            </li>
            <li>
              <Link to="/contact"> Contato</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainHeader;
