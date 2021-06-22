import styled from 'styled-components';

const AppWrapper = ({ children }) => <Wrapper>{children}</Wrapper>;

const Wrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export default AppWrapper;
