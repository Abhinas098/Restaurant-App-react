import React,{useState} from "react";
import CartContext from "./cartContext";

const CartProvider = (props) => {
    const [updateItems,setUpdateItems] = useState([])
  const addItemToCart = (item) => {
    setUpdateItems([...updateItems,item])
  };
  const removeItemFromCart = (id) => {};

  const cartContext = {
    items: updateItems,
    totalAmmount: 0,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
