import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./reset.css";
import "./index.css";
import Accueil from "./Pages/Accueil";
import Header from "./Components/Header/Header";
import Products from "./Pages/Products";
import Details from "./Pages/Details";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/products" element={<Products />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
