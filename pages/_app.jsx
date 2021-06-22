import GlobalStyle from '../styles/globalStyle';
import DataContextProvider from '../context/dataContext/store';

const MyApp = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    <DataContextProvider>
      <Component {...pageProps} />
    </DataContextProvider>
  </>
);

export default MyApp;
