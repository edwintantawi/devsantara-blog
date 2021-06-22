import { createContext, useReducer } from 'react';
import dataInitialState from './initialState';
import dataReducer from './reducer';

export const DataContext = createContext();

const DataContextProvider = ({ children }) => (
  <DataContext.Provider value={useReducer(dataReducer, dataInitialState)}>
    {children}
  </DataContext.Provider>
);

export default DataContextProvider;
