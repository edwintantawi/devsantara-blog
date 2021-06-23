import GlobalStyle from '../styles/globalStyle';
import DataContextProvider from '../context/dataContext/store';
import AppContextProvider from '../context/appContext/store';

const MyApp = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    <DataContextProvider>
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </DataContextProvider>
  </>
);

export default MyApp;
