// context/cartContext.js
import React, { createContext, useReducer, useContext } from "react";

// Define the initial state
const initialState = {
  cart: [],
};

// Create the context
const CartContext = createContext();

// Create a reducer function to handle actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    // Add more cases for other actions if needed
    default:
      return state;
  }
};

// Create a provider component to wrap your app with the context
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Define actions to dispatch
  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  // Make the context values available to the components
  const contextValues = {
    cart: state.cart,
    addToCart,
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};

// Create a custom hook to access the context values
const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export { CartProvider, useCart };
