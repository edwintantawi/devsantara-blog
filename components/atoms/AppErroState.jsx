import styled from 'styled-components';
import Colors from '../../styles/colors';

const AppErroState = () => (
  <ErrorStateLayout>
    <h1>Ooops somethings wrong...</h1>
    <p>Try to refresh the page</p>
  </ErrorStateLayout>
);

const ErrorStateLayout = styled.main`
  text-align: center;
  padding: 1rem;
  color: ${Colors.mediumGray};
  h1 {
    font-weight: 600;
    font-size: 2rem;
    line-height: 1.2;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1rem;
  }
`;

export default AppErroState;
