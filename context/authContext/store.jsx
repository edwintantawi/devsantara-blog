import { createContext, useReducer } from 'react';
import dataInitialState from './initialState';
import dataReducer from './reducer';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => (
  <AuthContext.Provider value={useReducer(dataReducer, dataInitialState)}>
    {children}
  </AuthContext.Provider>
);

export default AuthContextProvider;
