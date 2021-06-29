import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import styled from 'styled-components';
import HomeIcon from '@material-ui/icons/Home';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';
import GroupIcon from '@material-ui/icons/Group';
import AppLink from '../atoms/AppLink';
import minWidth from '../../styles/mediaQuery';
import Colors from '../../styles/colors';
import useAppContext from '../../hooks/useAppContext';
import useAuthContext from '../../hooks/useAuthContext';
import ACTION_TYPES from '../../context/actionTypes';
import AppAuthButton from './AppAuthButton';

const AppNavigation = ({ noNavigation }) => {
  const [{ user }] = useAuthContext();
  const [{ isActiveNavDrawer }, dispatchApp] = useAppContext();

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
        <div>
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
        </div>
        <HideOnDesktop>
          <HorizontalLine />
          <AppAuthButton />
        </HideOnDesktop>
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
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
  background-color: ${Colors.white};
  padding: 1.5rem 1rem 2rem;
  /* border-bottom: 3px solid ${Colors.darkBlue}; */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transform: ${({ active }) =>
    active ? 'tranlateY(0)' : 'translateX(-100vh)'};
  opacity: ${({ active }) => (active ? '1' : '0')};
  visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
  transition: 300ms ease-in-out;

  @media ${minWidth('md')} {
    position: sticky;
    top: 93px;
    width: 18rem;
    height: max-content;
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

const HideOnDesktop = styled.div`
  @media ${minWidth('md')} {
    display: none;
  }
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
