import { useEffect } from 'react';
import useAuthContext from '../../hooks/useAuthContext';
import { auth } from '../../lib/firebase';
import ACTION_TYPES from '../../context/actionTypes';

const AppAuthLayer = () => {
  const [, dispatchAuth] = useAuthContext();
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
      }
    });
  }, [dispatchAuth]);

  return null;
};

export default AppAuthLayer;
