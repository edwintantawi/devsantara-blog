import Link from 'next/link';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import styled from 'styled-components';
// import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Colors from '../../styles/colors';
import minWidth from '../../styles/mediaQuery';

const AppLink = ({ title, href, Icon, onClick }) => {
  const router = useRouter();
  const active = router.asPath === href;

  return (
    <Link href={href} passHref>
      <LinkLayout active={active} onClick={onClick}>
        <LinkContent>
          <Icon />
          <TitleLayout active={active}>{title}</TitleLayout>
        </LinkContent>
        {/* <ArrowRightIcon /> */}
      </LinkLayout>
    </Link>
  );
};

const LinkLayout = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.8rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: 6px;
  text-decoration: none;
  background-color: ${Colors.white};
  color: ${Colors.darkBlue};
  font-weight: ${({ active }) => active && 'bold'};

  &:hover {
    background-color: rgba(0, 18, 39, 0.05);
  }

  @media ${minWidth('md')} {
    padding: 0.8rem 1rem;
  }

  .MuiSvgIcon-root {
    width: 1.8rem;
    height: 1.8rem;
  }
`;

const LinkContent = styled.span`
  display: flex;
  align-items: center;
`;

const TitleLayout = styled.div`
  margin-left: 0.8rem;
  font-size: 1rem;
  font-weight: ${({ active }) => (active ? 700 : 500)};
`;

AppLink.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
  onClick: PropTypes.func,
};

AppLink.defaultProps = {
  onClick: null,
};

export default AppLink;
