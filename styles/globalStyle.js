import { createGlobalStyle } from 'styled-components';
import Colors from './colors';
// import minWidth from './mediaQuery';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after{
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    font-size: 100%;
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
  }
  
  body {
  //background-color: ${Colors.lightGray};
  
  }
`;

export default GlobalStyle;
