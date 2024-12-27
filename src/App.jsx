// import MainHeader from "./components/mainHeader/index.jsx";
import "./App.css";
import NavigationMenu from "./components/NavigationMenu/index.jsx";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./routes/HomePage";
import ContactPage from "./routes/ContactPage/contactPageComponent";
import CatalogPage from "./routes/CatalogPage/CatalogPageComponent";
import ROUTES from './routes/routes.js'


const App = () => {
  return (
      <Router basename="/catalog">
        <NavigationMenu />
        <div id="routesComponent">
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage/>}/>
          <Route path={ROUTES.CATALOG} element={<CatalogPage/>}/>
          <Route path={ROUTES.CONTACT} element={<ContactPage/>}/>
        </Routes>
        </div>
        
      </Router>
  );
};

export default App;
