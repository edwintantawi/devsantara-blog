import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Colors from '../../styles/colors';

const AppButton = ({ children, type, href, buttonType, white }) => {
  if (type === 'link') {
    return (
      <Link href={href} passHref>
        <ButtonLink white={white}>{children}</ButtonLink>
      </Link>
    );
  }

  if (type === 'button') {
    return (
      <Button type={buttonType} white={white}>
        {children}
      </Button>
    );
  }

  return null;
};

// styled
const baseStyle = `
  display: inline-block;
  width: max-content;
  padding: 0.7rem 2rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  font-size: .8rem;
  letter-spacing: 1px;
  cursor: pointer;
`;

const ButtonLink = styled.a`
  ${baseStyle}
  color: ${(props) => (props.white ? Colors.darkBlue : Colors.white)};
  background-color: ${(props) =>
    props.white ? Colors.white : Colors.darkBlue};
`;

const Button = styled.button`
  ${baseStyle}
  color: ${(props) => (props.white ? Colors.darkBlue : Colors.white)};
  background-color: ${(props) =>
    props.white ? Colors.white : Colors.darkBlue};
`;

// proptypes
AppButton.propTypes = {
  type: PropTypes.oneOf(['button', 'link']).isRequired,
  buttonType: PropTypes.oneOf(['submit', 'reset', 'button']),
  href: PropTypes.string,
  white: PropTypes.bool,
};

AppButton.defaultProps = {
  buttonType: 'button',
  href: '',
  white: false,
};

export default AppButton;
