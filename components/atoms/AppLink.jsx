import Link from 'next/link';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Colors from '../../styles/colors';

const AppLink = ({ title, href, Icon }) => {
  const router = useRouter();
  const active = router.asPath === href;

  return (
    <Link href={href} passHref>
      <LinkLayout active={active}>
        <Icon />
        <TitleLayout active={active}>{title}</TitleLayout>
      </LinkLayout>
    </Link>
  );
};

const LinkLayout = styled.a`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.8rem 1rem;
  margin-bottom: 0.8rem;
  border-radius: 6px;
  text-decoration: none;
  background-color: ${({ active }) =>
    active ? Colors.darkBlue : Colors.white};
  color: ${({ active }) => (active ? Colors.white : Colors.darkBlue)};
  border-left: 0.35rem solid ${Colors.darkBlue};

  &:hover {
    background-color: ${({ active }) =>
      active ? Colors.darkBlue : 'rgba(0, 18, 39,0.05)'};
  }
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
};

export default AppLink;
