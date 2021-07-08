import styled from 'styled-components';
import PropTypes from 'prop-types';
import Colors from '../../styles/colors';
import minWidth from '../../styles/mediaQuery';

const AppButton = ({ children, type, className, onClick, style }) => (
  <Button type={type} className={className} onClick={onClick} style={style}>
    {children}
  </Button>
);

// styled
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  height: 40px;
  width: max-content;
  border-radius: 4px;
  text-decoration: none;
  letter-spacing: 1px;
  cursor: pointer;
  background-color: ${Colors.darkBlue};
  color: ${Colors.white};

  ${minWidth('md')} {
    padding: 0 32px;
  }

  span {
    margin-left: 8px;
    font-weight: inherit;
    font-size: 12px;

    ${minWidth('md')} {
      font-size: 14px;
    }
  }

  img,
  .MuiSvgIcon-root {
    width: 16px;
    height: 16px;
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
  className: PropTypes.string,
  onClick: PropTypes.func,
};

AppButton.defaultProps = {
  className: '',
  onClick: null,
};

export default AppButton;
