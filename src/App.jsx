import { useState } from "react";
import { Routes, BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <div className="sm:first-letterred bg-red-500 ">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/catalog">Catálogo</Link>
              </li>
              <li>
                <Link to="/contact"> Contato</Link>
              </li>
            </ul>
          </nav>
        </div>

        <Routes>
          <Route path="/catalog" Component={Catalog}></Route>
          <Route path="/contact" Component={Contact}></Route>
          <Route path="/" Component={Home}></Route>
        </Routes>
      </Router>
    </>
  );
}

function Home() {
  return <h2 className="text-5xl underline">Home</h2>;
}

function Catalog() {
  return <h2>Catalog</h2>
}

function Contact() {
  return <h2>Contact</h2>
}

export default App;
