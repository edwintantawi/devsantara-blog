import PropTypes from 'prop-types';
import styled from 'styled-components';

const AppButtonTextEditor = ({ children, active, onClick }) => (
  <ButtonLayout type="button" active={active} onClick={onClick}>
    {children}
  </ButtonLayout>
);

AppButtonTextEditor.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

const ButtonLayout = styled.button``;

export default AppButtonTextEditor;
