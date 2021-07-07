import { useEffect } from 'react';
import GlobalStyle from '../styles/globalStyle';
import AuthContextProvider from '../context/authContext/store';
import AppContextProvider from '../context/appContext/store';
import AppAuthLayer from '../components/atoms/AppAuthLayer';
import { analytics } from '../lib/firebase';

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      analytics();
    }
  }, []);
  return (
    <>
      <GlobalStyle />
      <AuthContextProvider>
        <AppContextProvider>
          <AppAuthLayer>
            <Component {...pageProps} />
          </AppAuthLayer>
        </AppContextProvider>
      </AuthContextProvider>
    </>
  );
};

export default MyApp;
