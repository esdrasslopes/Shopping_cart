import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const [total, setTotal] = useState(0);

  const handleAddItem = (newItem) => {
    const indexItem = cart.findIndex((item) => item.id === newItem.id);

    if (indexItem != -1) {
      let cartList = cart;

      cartList[indexItem].amount = cartList[indexItem].amount + 1;

      cart[indexItem].total =
        cartList[indexItem].amount * cartList[indexItem].price;

      setCart(cartList);

      totalResult(cartList);

      return;
    }

    let data = { ...newItem, amount: 1, total: newItem.price };

    setCart((products) => [...products, data]);

    totalResult([...cart, data]);
  };

  const removeItemCart = (product) => {
    const indexItem = cart.findIndex((item) => item.id === product.id);

    if (cart[indexItem]?.amount > 1) {
      let cartList = cart;

      cartList[indexItem].amount = cartList[indexItem].amount - 1;

      cartList[indexItem].total =
        cartList[indexItem].total - cartList[indexItem].price;

      setCart(cartList);

      totalResult(cartList);

      return;
    }

    const removeItem = cart.filter((item) => item.id != product.id);

    setCart(removeItem);

    totalResult(removeItem);
  };

  const totalResult = (items) => {
    const myCart = items;

    let result = myCart.reduce((acc, obj) => {
      return acc + obj.total;
    }, 0);

    setTotal(result.toFixed(2));
  };

  return (
    <CartContext.Provider
      value={{ cart, handleAddItem, removeItemCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
};
