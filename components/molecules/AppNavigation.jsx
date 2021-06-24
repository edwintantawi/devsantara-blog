import styled from 'styled-components';
import HomeIcon from '@material-ui/icons/Home';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';
import GroupIcon from '@material-ui/icons/Group';
import AppLink from '../atoms/AppLink';
import minWidth from '../../styles/mediaQuery';
import Colors from '../../styles/colors';
import useAppContext from '../../hooks/useAppContext';

const AppNavigation = () => {
  const [{ isActiveNavDrawer }] = useAppContext();
  return (
    <NavLayout active={isActiveNavDrawer}>
      <AppLink href="/" title="Home" Icon={HomeIcon} />
      <AppLink href="/guide" title="Guide" Icon={GpsFixedIcon} />
      <AppLink href="/about" title="About" Icon={GroupIcon} />
    </NavLayout>
  );
};

const NavLayout = styled.nav`
  position: fixed;
  left: 0;
  right: 0;
  top: 51px;
  background-color: ${Colors.white};
  padding: 1rem 1rem 0.2rem;
  border-bottom: 3px solid ${Colors.darkBlue};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transform: ${({ active }) =>
    active ? 'tranlateY(0)' : 'translateY(-100vh)'};
  opacity: ${({ active }) => (active ? '1' : '0')};
  visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
  transition: 300ms ease-in-out;

  @media ${minWidth('md')} {
    position: initial;
    width: 17.5rem;
    padding: 0;
    border: none;
    box-shadow: none;
    transform: none;
    opacity: 1;
    visibility: visible;
  }
`;

export default AppNavigation;