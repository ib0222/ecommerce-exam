import { createContext, useEffect, useState } from "react";

export const CardContext = createContext();

export const CardContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then(shopData => setData(shopData));
  },[])

  return (
    <CardContext.Provider value={{ data }}>
      {children}
    </CardContext.Provider>
  );
};
