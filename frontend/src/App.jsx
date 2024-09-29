// Imports
import React from "react";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";

// Estilos
import "./App.css";

// Pages
import HomePage from "./pages/HomePage/Homepage.jsx";
import Provider from "./context/Provider.jsx";
import Cart from "./components/cart/Cart.jsx";

function AppRouter() {
  return (
    <>
      <Provider>
        <Header />
        <HomePage/>
        <Footer />
        <Cart/>
      </Provider>
      
    </>
  );
}

export default AppRouter;
