import { createContext, useReducer } from 'react';

const AppContext = createContext();

const AppContextProvider = ({ children, initialState, reducer }) => (
  <AppContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </AppContext.Provider>
);

export default AppContextProvider;
