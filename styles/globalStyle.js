import { createGlobalStyle } from 'styled-components';
import minWidth from './mediaQuery';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after{
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    font-size: 100%;
    font-weight: normal;
    font-family: 'Poppins', sans-serif;
  }
`;

export default GlobalStyle;
