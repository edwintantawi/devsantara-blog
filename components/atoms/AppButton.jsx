import styled from 'styled-components';
import PropTypes from 'prop-types';
import Colors from '../../styles/colors';
import minWidth from '../../styles/mediaQuery';

const AppButton = ({ children, type, full, className, onClick }) => (
  <Button type={type} full={full} className={className} onClick={onClick}>
    {children}
  </Button>
);

// styled
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.1rem 2rem;
  width: max-content;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.8rem;
  letter-spacing: 1px;
  cursor: pointer;
  background-color: ${Colors.darkBlue};
  color: ${Colors.white};

  @media ${minWidth('md')} {
    padding: 0.8rem 2rem;
  }

  span {
    margin-left: 0.3rem;
    font-weight: inherit;
    font-size: inherit;
  }

  img,
  .MuiSvgIcon-root {
    width: 1.25rem;
    height: 1.25rem;
  }

  &.bg-white {
    background-color: ${Colors.white};
    color: ${Colors.darkBlue};
  }

  &.bg-red {
    background-color: ${Colors.red};
    color: ${Colors.white};
  }

  &.full {
    width: 100%;
  }

  &.border {
    border: 1px solid ${Colors.darkBlue};
  }
`;

// proptypes
AppButton.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
  full: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

AppButton.defaultProps = {
  full: false,
  className: '',
  onClick: null,
};

export default AppButton;
