/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children, initialState, reducer }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={[state, dispatch]}>
      {children}
    </DataContext.Provider>
  );
};
