// import MainHeader from "./components/mainHeader/index.jsx";
import "./App.css";
import NavigationMenu from "./components/NavigationMenu/NavigationMenuComponent.jsx";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./routes/HomePage/HomePage.jsx";
import ContactPage from "./routes/ContactPage/ContactPage.jsx";
import CatalogPage from "./routes/CatalogPage/CatalogPage.jsx";
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
