// components/Cart.js
import React from "react";
import CartItem from "./CartItem";
import styles from "../styles/cart.module.scss";

const Cart = ({ cart, onQuantityChange }) => {
  return (
    <div className={styles.cartcontainer}>
      <h1>Shopping Cart</h1>
      {cart.length > 0 ? (
        cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            quantity={item.quantity}
            onQuantityChange={onQuantityChange}
          />
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
      <div className="total">
        <p>Total: ${calculateTotal(cart).toFixed(2)}</p>
      </div>
    </div>
  );
};

const calculateTotal = (cart) => {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
};

export default Cart;
