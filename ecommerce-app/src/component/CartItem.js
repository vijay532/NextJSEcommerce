// components/CartItem.js
import React from "react";

const CartItem = ({ item, quantity, onQuantityChange }) => {
  return (
    <div className="cart-item">
      <div className="product-details">
        <p>{item.name}</p>
        <p>{item.description}</p>
      </div>
      <div className="quantity-dropdown">
        <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
        <select
          id={`quantity-${item.id}`}
          value={quantity}
          onChange={(e) => onQuantityChange(item.id, parseInt(e.target.value))}
        >
          {[1, 2, 3, 4, 5].map((qty) => (
            <option key={qty} value={qty}>
              {qty}
            </option>
          ))}
        </select>
      </div>
      <div className="subtotal">
        <p>${(item.price * quantity).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartItem;
