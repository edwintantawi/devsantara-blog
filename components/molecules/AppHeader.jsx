import styled from 'styled-components';
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
import AppAuthButton from './AppAuthButton';

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
          <MenuButton type="button" onClick={handleToggleNav}>
            {isActiveNavDrawer ? <CloseIcon /> : <MenuIcon />}
          </MenuButton>
          <AppLogo />
          <HeaderAction>
            <HideOnMobile>
              {/* TODO 2 : Add create post button in desktop */}
              <AppAuthButton />
            </HideOnMobile>
            <Avatar src={user?.photoURL} />
          </HeaderAction>
        </HeaderWrapper>
      </AppWrapper>
    </Header>
  );
};

// styled
const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  height: 60px;
  background-color: ${Colors.darkBlue};
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
`;

const HeaderAction = styled.div`
  display: flex;
  align-items: center;

  .MuiAvatar-root {
    margin-left: 16px;
    border: 2px solid ${Colors.white};
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
`;

const HideOnMobile = styled.div`
  display: none;
  ${minWidth('md')} {
    display: block;
  }
`;

const MenuButton = styled.button`
  display: flex;
  align-items: center;
  margin-right: 8px;
  background: none;

  .MuiSvgIcon-root {
    color: ${Colors.white};
    font-size: 40px;
  }

  ${minWidth('md')} {
    display: none;
  }
`;

export default AppHeader;
