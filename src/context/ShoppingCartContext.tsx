import { ReactNode, createContext, useContext, useState } from 'react';

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
};

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export const useShoppingCart = () => useContext(ShoppingCartContext);

export const ShoppingCartProvider = ({ children }: ShoppingCartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const getItemQuantity = (id: number) => cartItems.find((item) => item.id === id)?.quantity || 0;

  const increaseCartQuantity = (id: number) =>
    setCartItems((currItems) => {
      const foundItem = currItems.find((item) => item.id === id);
      if (!foundItem) return [...currItems, { id, quantity: 1 }];
      return currItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity++ } : item
      );
    });

  const decreaseCartQuantity = (id: number) =>
    setCartItems((currItems) => {
      const foundItem = currItems.find((item) => item.id === id);
      if (!foundItem) return [...currItems];
      if (foundItem.quantity <= 1) return currItems.filter((item) => item.id !== foundItem.id);
      return currItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity-- } : item
      );
    });

  const removeFromCart = (id: number) =>
    setCartItems((currItems) => currItems.filter((item) => item.id !== id));

  return (
    <ShoppingCartContext.Provider
      value={{ getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
