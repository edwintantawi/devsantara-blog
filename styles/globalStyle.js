import { createGlobalStyle } from 'styled-components';
import minWidth from './mediaQuery';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after{
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    font-size: 12px;
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
  }

  html {
    ${minWidth('md')} {
      font-size: 16px;
    }
  }
`;

export default GlobalStyle;
