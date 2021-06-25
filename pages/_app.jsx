import GlobalStyle from '../styles/globalStyle';
import AuthContextProvider from '../context/authContext/store';
import AppContextProvider from '../context/appContext/store';

const MyApp = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    <AuthContextProvider>
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </AuthContextProvider>
  </>
);

export default MyApp;
