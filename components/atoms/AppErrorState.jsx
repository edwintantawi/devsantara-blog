import styled from 'styled-components';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Colors from '../../styles/colors';

const AppErrorState = () => (
  <ErrorStateLayout>
    <HighlightOffIcon />
    <h1>Ooops somethings wrong...</h1>
    <p>Try to refresh the page</p>
  </ErrorStateLayout>
);

const ErrorStateLayout = styled.main`
  text-align: center;
  padding: 1rem;
  color: ${Colors.mediumGray};

  .MuiSvgIcon-root {
    font-size: 48px;
  }
  h1 {
    font-weight: 600;
    font-size: 24px;
    line-height: 1.2;
    margin-bottom: 8px;
  }
  p {
    font-size: 14px;
  }
`;

export default AppErrorState;
