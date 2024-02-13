// pages/cart.js
import React, { useState, useEffect } from "react";
import { useCart } from "../context/cartContext";
import Cart from "../component/Cart";
import "../styles/cart.module.scss";
const CartPage = () => {
  const { cart, addToCart } = useCart();
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const initialQuantities = {};
    cart.forEach((item) => {
      initialQuantities[item.id] = item.quantity;
    });
    setQuantities(initialQuantities);
  }, [cart]);

  const handleQuantityChange = (productId, quantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: quantity,
    }));
  };

  return (
    <div>
      <Cart cart={cart} onQuantityChange={handleQuantityChange} />
    </div>
  );
};

export default CartPage;
