import styled from 'styled-components';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Colors from '../../styles/colors';
import minWidth from '../../styles/mediaQuery';

const AppErrorState = ({ message }) => (
  <ErrorStateLayout>
    <HighlightOffIcon />
    <span>{message[0]}</span>
    <p>{message[1]}</p>
  </ErrorStateLayout>
);

const ErrorStateLayout = styled.main`
  text-align: center;
  padding: 1rem;
  color: ${Colors.mediumGray};

  .MuiSvgIcon-root {
    font-size: 40px;
    ${minWidth('md')} {
      font-size: 48px;
    }
  }
  span {
    display: block;
    font-weight: 600;
    font-size: 18px;
    line-height: 1.2;
    margin-bottom: 8px;

    ${minWidth('md')} {
      font-size: 24px;
    }
  }
  p {
    font-size: 12px;
    ${minWidth('md')} {
      font-size: 14px;
    }
  }
`;

export default AppErrorState;
