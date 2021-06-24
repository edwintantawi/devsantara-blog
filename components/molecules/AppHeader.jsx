import styled from 'styled-components';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import AppLogo from '../atoms/AppLogo';
import AppButton from '../atoms/AppButton';
import AppWrapper from '../atoms/AppWrapper';
import Colors from '../../styles/colors';
import minWidth from '../../styles/mediaQuery';
import useDataContext from '../../hooks/useDataContext';
import useAppContext from '../../hooks/useAppContext';
import ACTION_TYPES from '../../context/appContext/actionTypes';

const AppHeader = () => {
  const [{ user }] = useDataContext();
  const [{ isActiveNavDrawer }, dispatch] = useAppContext();
  const handleToggleNav = () => {
    dispatch({
      type: ACTION_TYPES.SET_NAV_DRAWER,
    });
  };

  return (
    <Header>
      <AppWrapper>
        <HeaderWrapper>
          <AppLogo />
          <HeaderAction>
            {!user && (
              <>
                <AppButton type="button">Sign in</AppButton>
                <AppButton type="button" white>
                  Create account
                </AppButton>
              </>
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
    margin-left: 1rem;
    display: flex;
  }

  .MuiButtonBase-root {
    padding: 0;
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
