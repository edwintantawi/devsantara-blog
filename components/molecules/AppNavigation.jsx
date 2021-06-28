import Image from 'next/image';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import styled from 'styled-components';
import HomeIcon from '@material-ui/icons/Home';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';
import GroupIcon from '@material-ui/icons/Group';
import googleLogo from '../../public/assets/google.svg';
import AppLink from '../atoms/AppLink';
import minWidth from '../../styles/mediaQuery';
import Colors from '../../styles/colors';
import AppButton from '../atoms/AppButton';
import useAppContext from '../../hooks/useAppContext';
import useAuthContext from '../../hooks/useAuthContext';
import { auth, googleAuthProvider, localPersistence } from '../../lib/firebase';
import ACTION_TYPES from '../../context/actionTypes';

const AppNavigation = ({ noNavigation }) => {
  const [{ user }, dispatchAuth] = useAuthContext();
  const [{ isActiveNavDrawer }, dispatchApp] = useAppContext();

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

  const handleClickNavigationLayer = () => {
    dispatchApp({
      type: ACTION_TYPES.TOGGLE_DRAWER,
    });
  };

  const handleClickLink = () => {
    dispatchApp({
      type: ACTION_TYPES.TOGGLE_DRAWER,
    });
  };

  return (
    <NavWrapper noNavigation={noNavigation}>
      <NavLayout active={isActiveNavDrawer}>
        <AppLink
          href="/"
          title="Home"
          Icon={HomeIcon}
          onClick={handleClickLink}
        />
        <AppLink
          href="/guide"
          title="Guide"
          Icon={GpsFixedIcon}
          onClick={handleClickLink}
        />
        <AppLink
          href="/about"
          title="About"
          Icon={GroupIcon}
          onClick={handleClickLink}
        />
        {user && (
          <AppLink
            href="/dashboard"
            title="Dashboard"
            Icon={DashboardIcon}
            onClick={handleClickLink}
          />
        )}
        <AppLink
          href="/settings"
          title="Settings"
          Icon={SettingsIcon}
          onClick={handleClickLink}
        />
        <HorizontalLine />
        {user ? (
          <AppButton
            type="button"
            className="bg-red full"
            onClick={handleLogout}
          >
            <ExitToAppIcon />
            <span>Logout</span>
          </AppButton>
        ) : (
          <AppButton
            type="button"
            className="bg-white full border"
            onClick={handleGoogleAuth}
          >
            <Image src={googleLogo} alt="" />
            <span>Login with google</span>
          </AppButton>
        )}
      </NavLayout>
      <NavigationLayer
        active={isActiveNavDrawer}
        onClick={handleClickNavigationLayer}
      />
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  @media ${minWidth('md')} {
    display: ${({ noNavigation }) => (noNavigation ? 'none' : 'block')};
  }
`;

const NavLayout = styled.div`
  position: fixed;
  z-index: 9;
  left: 0;
  right: 0;
  top: 51px;
  height: max-content;
  background-color: ${Colors.white};
  padding: 1.5rem 1rem 2rem;
  border-bottom: 3px solid ${Colors.darkBlue};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transform: ${({ active }) =>
    active ? 'tranlateY(0)' : 'translateY(-100vh)'};
  opacity: ${({ active }) => (active ? '1' : '0')};
  visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
  transition: 300ms ease-in-out;

  @media ${minWidth('md')} {
    position: sticky;
    top: 93px;
    width: 15rem;
    padding: 0;
    border: none;
    box-shadow: none;
    transform: none;
    opacity: 1;
    visibility: visible;
  }
`;

const HorizontalLine = styled.hr`
  width: 100%;
  border-top: 0.05rem solid ${Colors.mediumGray};
  margin: 1rem 0;
`;

const NavigationLayer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0);
  display: ${({ active }) => (active ? 'block' : 'none')};

  @media ${minWidth('md')} {
    display: none;
  }
`;

export default AppNavigation;
