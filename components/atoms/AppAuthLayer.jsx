import { useLayoutEffect } from 'react';
import useAuthContext from '../../hooks/useAuthContext';
import { auth } from '../../lib/firebase';
import AUTH_ACTION_TYPES from '../../context/authContext/actionTypes';

const AppAuthLayer = () => {
  const [, dispatchAuth] = useAuthContext();
  useLayoutEffect(() => {
    auth.onAuthStateChanged((result) => {
      if (result) {
        const userAuthData = {
          uid: result.uid,
          displayName: result.displayName,
          email: result.email,
          photoURL: result.photoURL,
        };

        dispatchAuth({
          type: AUTH_ACTION_TYPES.SET_ACTIVE_USER,
          payload: userAuthData,
        });
      }
    });
  }, [dispatchAuth]);

  return null;
};

export default AppAuthLayer;
