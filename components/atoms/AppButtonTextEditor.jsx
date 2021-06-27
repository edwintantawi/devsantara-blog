import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../../styles/colors';

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
  width: 3.1rem;
  height: 3.1rem;
  cursor: pointer;
  border: 1px solid ${Colors.mediumGray};
  border-radius: 6px;
  background-color: ${({ active }) =>
    active ? Colors.mediumGray : Colors.lightGray};
  margin-right: 0.4rem;
  margin-bottom: 0.4rem;
  font-weight: 700;
  font-size: 1.07rem;
`;

export default AppButtonTextEditor;
