import { createGlobalStyle } from 'styled-components';
import minWidth from './mediaQuery';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after{
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    font-size: 12px;
    font-weight: normal;
    font-family: 'Poppins', sans-serif;
  }

  html {
    @media ${minWidth('md')} {
      font-size: 16px;
    }
  }
`;

export default GlobalStyle;
