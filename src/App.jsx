// import MainHeader from "./components/mainHeader/index.jsx";
import "./App.css";
import MainHeader from "./components/mainHeader/index.jsx";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./routes/HomePage";
import ContactPage from "./routes/ContactPage/contactPageComponent";
import CatalogPage from "./routes/CatalogPage/CatalogPageComponent";


const App = () => {
  return (
      <Router>
        <MainHeader />
        <div id="routesComponent">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/catalog" element={<CatalogPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
        </Routes>
        </div>
        
      </Router>
  );
};

export default App;
