import { createContext, useState } from "react";
import toast from "react-hot-toast";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [shoppingCart, setShoppingCart] = useState([]);

  const notify = () =>
    toast.success("Successfully added product to cart", {
      position: "top-right",
    });

  const inCart = (product) =>
    shoppingCart.find((cartProduct) => cartProduct.id === product.id);

  const addToCart = (product) => {
    if (inCart(product)) {
      toast.error("already in Cart");
    } else {
      setShoppingCart((prev) => [...prev, product]);
      localStorage.setItem(product.id, JSON.stringify(product));
      notify();
    }
  };

  const removeFromCart = (id) => {
    setShoppingCart((prev) => prev.filter((prod) => prod.id !== id));
  };

  // const totalPrice = () => {
  //   shoppingCart.reduce((prev, curr) => {
  //     curr.discount ? curr.price * (curr.discount / 100) : curr.price +=
  //   });
  // };

  const totalPrice = () => {
    let total = 0;

    shoppingCart.map((prod) => {
      if (prod.discount) {
        total += prod.price - prod.price * (prod.discount / 100);
      } else {
        total += prod.price;
      }
    });
    return total;
  };
  const cartSize = () => shoppingCart.length;

  const value = {
    shoppingCart,
    addToCart,
    inCart,
    cartSize,
    removeFromCart,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
