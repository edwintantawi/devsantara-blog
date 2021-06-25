import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Colors from '../../styles/colors';
import minWidth from '../../styles/mediaQuery';

const AppButton = ({ children, type, href, buttonType, full, white, red }) => {
  if (type === 'link') {
    return (
      <Link href={href} passHref>
        <ButtonLink white={white} full={full}>
          {children}
        </ButtonLink>
      </Link>
    );
  }

  if (type === 'button') {
    return (
      <Button type={buttonType} full={full} white={white} red={red}>
        {children}
      </Button>
    );
  }

  return null;
};

// styled
const baseStyle = `
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .7rem 2rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  font-size: .8rem;
  letter-spacing: 1px;
  cursor: pointer;

  @media ${minWidth('md')} {
    padding: 0.6rem 2rem;
  }
`;

const ButtonLink = styled.a`
  ${baseStyle}
  width: ${({ full }) => (full ? '100%' : 'max-width')};
  color: ${({ white }) => (white ? Colors.darkBlue : Colors.white)};
  background-color: ${({ white }) => (white ? Colors.white : Colors.darkBlue)};
`;

const Button = styled.button`
  ${baseStyle}
  width: ${({ full }) => (full ? '100%' : 'max-width')};
  color: ${({ white }) => (white ? Colors.darkBlue : Colors.white)};
  background-color: ${({ white, red }) => {
    if (red) return Colors.red;
    if (white) return Colors.white;
    return Colors.darkBlue;
  }};

  img {
    width: 1rem;
    height: 1rem;
  }

  span {
    margin-left: 0.5rem;
    font-weight: inherit;
    font-size: inherit;
  }
`;

// proptypes
AppButton.propTypes = {
  type: PropTypes.oneOf(['button', 'link']).isRequired,
  buttonType: PropTypes.oneOf(['submit', 'reset', 'button']),
  href: PropTypes.string,
  full: PropTypes.bool,
  white: PropTypes.bool,
};

AppButton.defaultProps = {
  buttonType: 'button',
  href: '',
  full: false,
  white: false,
};

export default AppButton;
