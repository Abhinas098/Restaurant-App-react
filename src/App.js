import React, { useState, Fragment } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";

function App() {
  const [cartShow, setCartShow] = useState(false);

  const onOpenCart = () => {
    setCartShow(true);
  };

  const onCloseCart = () => {
    setCartShow(false);
  };

  return (
    <Fragment>
      {cartShow && <Cart onClose={onCloseCart} />}
      <Header onOpen={onOpenCart} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
