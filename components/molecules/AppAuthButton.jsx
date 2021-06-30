import Image from 'next/image';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ACTION_TYPES from '../../context/actionTypes';
import useAuthContext from '../../hooks/useAuthContext';
import { auth, googleAuthProvider, localPersistence } from '../../lib/firebase';
import AppButton from '../atoms/AppButton';
import googleLogo from '../../public/assets/google.svg';

const AppAuthButton = () => {
  const [{ user }, dispatchAuth] = useAuthContext();

  const handleGoogleAuth = () => {
    auth.setPersistence(localPersistence).then(() => {
      auth.signInWithPopup(googleAuthProvider).then((result) => {
        const userAuthData = {
          uid: result.user.uid,
          displayName: result.user.displayName,
          email: result.user.email,
          photoURL: result.user.photoURL,
        };

        dispatchAuth({
          type: ACTION_TYPES.SET_AUTH,
          payload: userAuthData,
        });
      });
    });
  };

  const handleLogout = () => {
    auth.signOut().then(() => {
      dispatchAuth({ type: ACTION_TYPES.SET_AUTH, payload: null });
    });
  };

  if (user) {
    return (
      <AppButton type="button" className="bg-red full" onClick={handleLogout}>
        <ExitToAppIcon />
        <span>Sign out</span>
      </AppButton>
    );
  }

  return (
    <AppButton
      type="button"
      className="bg-white full border"
      onClick={handleGoogleAuth}
    >
      <Image src={googleLogo} alt="" />
      <span>Sign in</span>
    </AppButton>
  );
};

export default AppAuthButton;
