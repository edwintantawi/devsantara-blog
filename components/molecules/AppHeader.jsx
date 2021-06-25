import styled from 'styled-components';
import Image from 'next/image';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import AppLogo from '../atoms/AppLogo';
import AppButton from '../atoms/AppButton';
import AppWrapper from '../atoms/AppWrapper';
import Colors from '../../styles/colors';
import minWidth from '../../styles/mediaQuery';
import useAuthContext from '../../hooks/useAuthContext';
import useAppContext from '../../hooks/useAppContext';
import APP_ACTION_TYPES from '../../context/appContext/actionTypes';
import AUTH_ACTION_TYPES from '../../context/authContext/actionTypes';
import googleLogo from '../../public/assets/google.svg';
import { auth, googleAuthProvider, localPersistence } from '../../lib/firebase';

const AppHeader = () => {
  const [{ user }, dispatchAuth] = useAuthContext();
  const [{ isActiveNavDrawer }, dispatch] = useAppContext();
  const handleToggleNav = () => {
    dispatch({
      type: APP_ACTION_TYPES.SET_NAV_DRAWER,
    });
  };

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
          type: AUTH_ACTION_TYPES.SET_ACTIVE_USER,
          payload: userAuthData,
        });
      });
    });
  };

  return (
    <Header>
      <AppWrapper>
        <HeaderWrapper>
          <AppLogo />
          <HeaderAction>
            {!user && (
              <AppButton type="button" white onClick={handleGoogleAuth}>
                <Image src={googleLogo} alt="" />
                <span>Login with google</span>
              </AppButton>
            )}
            {user && (
              <IconButton>
                <Avatar />
              </IconButton>
            )}
            <MenuButton type="button" onClick={handleToggleNav}>
              {isActiveNavDrawer ? <CloseIcon /> : <MenuIcon />}
            </MenuButton>
          </HeaderAction>
        </HeaderWrapper>
      </AppWrapper>
    </Header>
  );
};

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: ${Colors.darkBlue};
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 0;
`;

const HeaderAction = styled.div`
  display: flex;
  align-items: center;

  .MuiAvatar-root,
  & > .MuiSvgIcon-root {
    display: flex;
  }

  .MuiButtonBase-root {
    padding: 0;
  }

  .MuiButtonBase-root {
    margin-left: 1rem;
  }
  .MuiAvatar-root {
    border: 2px solid ${Colors.white};
  }

  .MuiAvatar-root {
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;
  }
`;

const MenuButton = styled.button`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  background: none;

  .MuiSvgIcon-root {
    color: ${Colors.white};
    font-size: 30px;
  }

  @media ${minWidth('md')} {
    display: none;
  }
`;

export default AppHeader;
