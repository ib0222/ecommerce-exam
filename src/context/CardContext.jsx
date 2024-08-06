import { createContext, useEffect, useState } from "react";

export const CardContext = createContext();

export const CardContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  return (
    <CardContext.Provider value={{favorites,setFavorites,wishlist,setWishlist }}>
      {children}
    </CardContext.Provider>
  );
};
