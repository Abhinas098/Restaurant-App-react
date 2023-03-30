import React, { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartShow, setCartShow] = useState(false);

  const onOpenCart = () => {
    setCartShow(true);
  };

  const onCloseCart = () => {
    setCartShow(false);
  };

  return (
    <CartProvider>
      {cartShow && <Cart onClose={onCloseCart} />}
      <Header onOpen={onOpenCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
