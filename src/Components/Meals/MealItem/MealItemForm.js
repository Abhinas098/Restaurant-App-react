import React, { useContext } from "react";
import CartContext from "../../../store/cartContext";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const cartCtx = useContext(CartContext);

  const addItemToCart = (event) => {
    event.preventDefault();
    const quantity = document.getElementById("ammount_" + props.id).value;
    cartCtx.addItem({ ...props.item, quantity: quantity });
  };
  
  return (
    <form className={classes.form}>
      <Input
        lable="Ammount"
        input={{
          id: "ammount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={addItemToCart}>+Add</button>
    </form>
  );
};

export default MealItemForm;
