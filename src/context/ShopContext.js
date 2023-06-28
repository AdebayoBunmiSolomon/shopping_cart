import React, { createContext, useState } from "react";
import { PRODUCTS } from "../Products";
import "react-toastify/dist/ReactToastify.css";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  let [countOfCartItems, setCountOfCartItem] = useState(0);
  let newCountOfCartItems = 0;

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    setCountOfCartItem((countOfCartItems = countOfCartItems + 1));
    console.log(countOfCartItems);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    setCountOfCartItem((countOfCartItems = countOfCartItems - 1));
    console.log(countOfCartItems);
  };

  const updateCartItemCount = (newAmount, itemId) => {
    newCountOfCartItems = countOfCartItems - 1;
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
    setCountOfCartItem(newCountOfCartItems + newAmount);
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount = totalAmount + cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    countOfCartItems,
    updateCartItemCount,
    getTotalCartAmount,
  };
  // console.log(cartItems);
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
