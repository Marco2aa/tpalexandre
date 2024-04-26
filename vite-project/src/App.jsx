import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./reset.css";
import "./index.css";
import Accueil from "./Pages/Accueil";
import Header from "./Components/Header/Header";
import Products from "./Pages/Products";
import Details from "./Pages/Details";
import Category from "./Pages/Category";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/products" element={<Products />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/category/:slug" element={<Category />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
