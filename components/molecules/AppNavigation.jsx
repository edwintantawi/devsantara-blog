import styled from 'styled-components';
import HomeIcon from '@material-ui/icons/Home';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';
import GroupIcon from '@material-ui/icons/Group';
import AppLink from '../atoms/AppLink';

const AppNavigation = () => (
  <NavLayout>
    <AppLink href="/" title="Home" Icon={HomeIcon} />
    <AppLink href="/guide" title="Guide" Icon={GpsFixedIcon} />
    <AppLink href="/about" title="About" Icon={GroupIcon} />
  </NavLayout>
);

const NavLayout = styled.nav`
  width: 17.5rem;
`;

export default AppNavigation;
