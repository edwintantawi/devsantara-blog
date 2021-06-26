import { useEffect, useState } from 'react';
import useAuthContext from '../../hooks/useAuthContext';
import { auth } from '../../lib/firebase';
import ACTION_TYPES from '../../context/actionTypes';
import AppLoading from './AppLoading';

const AppAuthLayer = () => {
  const [, dispatchAuth] = useAuthContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((result) => {
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
        setIsLoading(false);
      }
      setIsLoading(false);
    });
  }, [dispatchAuth]);

  return isLoading ? <AppLoading /> : null;
};

export default AppAuthLayer;
