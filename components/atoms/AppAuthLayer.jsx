import { useEffect } from 'react';
import useAuthContext from '../../hooks/useAuthContext';
import { auth } from '../../lib/firebase';
import ACTION_TYPES from '../../context/actionTypes';
import AppLoading from './AppLoading';
import useAppContext from '../../hooks/useAppContext';

const AppAuthLayer = ({ children }) => {
  const [, dispatchAuth] = useAuthContext();
  const [{ isLoading }, dispatchApp] = useAppContext();

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((result) => {
      if (result) {
        const userAuthData = {
          uid: result.uid,
          displayName: result.displayName,
          email: result.email,
          photoURL: result.photoURL,
        };

        dispatchAuth({
          type: ACTION_TYPES.SET_AUTH,
          payload: userAuthData,
        });
      }

      dispatchApp({
        type: ACTION_TYPES.TOGGLE_LOADING,
      });
    });

    return () => unSubscribe();
  }, []);

  return isLoading ? <AppLoading /> : children;
};

export default AppAuthLayer;
