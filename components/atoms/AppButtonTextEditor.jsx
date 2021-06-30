import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../../styles/colors';
import minWidth from '../../styles/mediaQuery';

const AppButtonTextEditor = ({ children, active, onClick }) => (
  <ButtonLayout type="button" active={active} onClick={onClick}>
    {children}
  </ButtonLayout>
);

AppButtonTextEditor.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

const ButtonLayout = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  cursor: pointer;
  border: 1px solid ${Colors.mediumGray};
  border-radius: 6px;
  background-color: ${({ active }) =>
    active ? Colors.mediumGray : Colors.lightGray};
  margin: 2px;
  font-weight: 700;
  font-size: 14px;

  .MuiSvgIcon-root {
    font-size: 18px;
  }

  ${minWidth('md')} {
    width: 48px;
    height: 48px;
    margin: 3px;
    font-size: 16px;

    .MuiSvgIcon-root {
      font-size: 24px;
    }
  }
`;

export default AppButtonTextEditor;
