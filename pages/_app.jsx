import GlobalStyle from '../styles/globalStyle';
import AuthContextProvider from '../context/authContext/store';
import AppContextProvider from '../context/appContext/store';
import AppAuthLayer from '../components/atoms/AppAuthLayer';

const MyApp = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    <AuthContextProvider>
      <AppContextProvider>
        <AppAuthLayer />
        <Component {...pageProps} />
      </AppContextProvider>
    </AuthContextProvider>
  </>
);

export default MyApp;
