// FruitContext.js
import React, { createContext, useContext, useState } from 'react';

const FruitContext = createContext();

export const FruitProvider = ({ children }) => {
  const [fruitName, setFruitName] = useState('Apple');

  const setFruit = (newFruit) => {
    setFruitName(newFruit);
  };

  return (
    <FruitContext.Provider value={{ fruitName, setFruit }}>
      {children}
    </FruitContext.Provider>
  );
};

export const useFruit = () => {
  const context = useContext(FruitContext);
  if (!context) {
    throw new Error('useFruit must be used within a FruitProvider');
  }
  return context;
};