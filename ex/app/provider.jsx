'use client';

import { ReactNode, createContext, useContext, useState } from 'react';

const Context = createContext(undefined);

export const useCustomHook = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('error');
  }
  return context;
};

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState('hello');
  const [world, setWorld] = useState('world');

  return <Context.Provider value={{ data, setData, world }}>{children}</Context.Provider>;
};
