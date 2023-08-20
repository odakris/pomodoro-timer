import React, { createContext, useContext, useReducer } from "react";

export const stateContext = createContext();

const StateProvider = ({ children, reducer, initialState }) => {
  return (
    <stateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </stateContext.Provider>
  );
};

export const useStateValue = () => useContext(stateContext);

export default StateProvider;
