import Image from 'next/image';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ACTION_TYPES from '../../context/actionTypes';
import useAuthContext from '../../hooks/useAuthContext';
import { auth, googleAuthProvider, localPersistence } from '../../lib/firebase';
import AppButton from '../atoms/AppButton';
import googleLogo from '../../public/assets/google.svg';

const AppAuthButton = () => {
  const [{ user }, dispatchAuth] = useAuthContext();

  const userDataHandler = () => {
    auth.currentUser.getIdToken(true).then(async (token) => {
      const options = {
        method: 'POST',
        headers: {
          token,
        },
      };
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DOMAIN}/api/user/create`,
        options
      );
      const responseJson = await response.json();
      if (response.status !== 401) {
        const userAuthData = responseJson.result;

        dispatchAuth({
          type: ACTION_TYPES.SET_AUTH,
          payload: userAuthData,
        });
      }
    });
  };

  const handleGoogleAuth = () => {
    auth.setPersistence(localPersistence).then(() => {
      auth.signInWithPopup(googleAuthProvider).then(() => {
        userDataHandler();
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
