import React from 'react';
import { ThemeProvider } from '@mui/system';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../styles/theme';
import GlobalStyle from '../styles/global';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    {/* 
    Why are you looking here? (we know your a nerd now...)
    |
    |
    or pretending to hack, if so, SHAME ON YOU!
*/}
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
