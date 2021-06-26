import Link from 'next/link';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
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
        <ArrowRightIcon />
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
  background-color: ${({ active }) =>
    active ? Colors.darkBlue : Colors.white};
  color: ${({ active }) => (active ? Colors.white : Colors.darkBlue)};
  /* border-left: 0.35rem solid ${Colors.darkBlue}; */

  &:hover {
    background-color: ${({ active }) =>
      active ? Colors.darkBlue : 'rgba(0, 18, 39,0.05)'};
  }

  @media ${minWidth('md')} {
    padding: 0.8rem 1rem;
  }

  .MuiSvgIcon-root {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

const LinkContent = styled.span`
  display: flex;
`;

const TitleLayout = styled.div`
  margin-left: 0.4rem;
  font-size: 0.9rem;
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
