import React, { useContext } from "react";
import CartContext from "../../store/cartContext";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const ifItems = cartCtx.items.length > 0;

  const CartItemRemove = (id) => {
    cartCtx.removeItem(id);
  };

  const CartItemAdd = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const items = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={CartItemRemove.bind(null, item.id)}
          onAdd={CartItemAdd.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {items}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClose} className={classes["button--alt"]}>
          Close
        </button>
        {ifItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
