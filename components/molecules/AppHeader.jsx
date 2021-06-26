import styled from 'styled-components';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import AppLogo from '../atoms/AppLogo';
import AppWrapper from '../atoms/AppWrapper';
import Colors from '../../styles/colors';
import minWidth from '../../styles/mediaQuery';
import useAuthContext from '../../hooks/useAuthContext';
import useAppContext from '../../hooks/useAppContext';
import ACTION_TYPES from '../../context/actionTypes';

const AppHeader = () => {
  const [{ user }] = useAuthContext();
  const [{ isActiveNavDrawer }, dispatch] = useAppContext();
  const handleToggleNav = () => {
    dispatch({
      type: ACTION_TYPES.TOGGLE_DRAWER,
    });
  };

  return (
    <Header>
      <AppWrapper>
        <HeaderWrapper>
          <AppLogo />
          <HeaderAction>
            {user && (
              <IconButton>
                <Avatar src={user.photoURL} />
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
    width: 2.7rem;
    height: 2.7rem;
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
