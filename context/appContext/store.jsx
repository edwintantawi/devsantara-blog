import { createContext, useReducer } from 'react';
import appInitialState from './initialState';
import appReducer from './reducer';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => (
  <AppContext.Provider value={useReducer(appReducer, appInitialState)}>
    {children}
  </AppContext.Provider>
);

export default AppContextProvider;
