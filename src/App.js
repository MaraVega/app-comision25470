import React from "react";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartContext from "./components/CartContext";

function App() {
  return (
    <>
      <CartContext>
        <BrowserRouter>
          <Header />
          <Main />
          <Footer />
        </BrowserRouter>
      </CartContext>
    </>
  );
}

export default App;
