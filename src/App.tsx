import CssBaseline from '@mui/material/CssBaseline';
import React, { useEffect } from 'react';
import { Box, css, ThemeProvider } from '@mui/material';
import GlobalStyles from '@mui/material/GlobalStyles';

import { themeDate } from './Theme/theme';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Main from './commponent/MainPage/Main';
import Header from './commponent/Header/Header';
import Footer from './commponent/Footer/Footer';
import store, { useAppDispatch, useAppSelector } from './Redux/store';
import { Provider } from 'react-redux';
import Page404 from './commponent/Page404/Page404';
import { getCitysList, getPhoneNumber } from './Redux/Thunk/thunkStart';
import { selIsError, setErrorMessage } from './Redux/ErrorSlice';
import { selInitializationSuccess, сhangeAppInitialized } from './Redux/StartSlice';

import ModalContainer from './commponent/Modal/ModalContainer';
import { setModalOpen } from './Redux/ModalSlice';






const App = () => {

  const dispatch = useAppDispatch();

  const isAppStart = useAppSelector(selInitializationSuccess);
  const isError = useAppSelector(selIsError);


  const catchAllError = (error: PromiseRejectionEvent) => {
    // We transmit error messages to stat
    dispatch(setErrorMessage(error.reason.message))

  };
  useEffect(() => {
    Promise.allSettled([
      dispatch(getPhoneNumber()),
      dispatch(getCitysList()),
    ])
      .then(() => dispatch(сhangeAppInitialized()))
  }, []);

  useEffect(() => {
    // Catch the rampant load errors
    window.addEventListener('unhandledrejection', catchAllError);
    return () => {
      window.removeEventListener('unhandledrejection', catchAllError);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, []);

  useEffect(() => {
    isError && dispatch(setModalOpen())
  }, [isError])

  return (<>
    {isAppStart ? <>
      <ModalContainer />
      <Box sx={[{
        position: 'relative',
        minHeight: 1,
        display: 'flex',
        flexDirection: 'column',
        '&  > main': {
          flex: '1 1 auto',
        }
      }, (theme) => ({ backgroundColor: theme.bgColors.lichtBlue, })]
      } >
        <Box sx={[{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 1,
        }, (theme) => ({
          backgroundColor: theme.bgColors.darkBlue,
          [theme.breakpoints.up('mobile')]: { height: 170, },
          [theme.breakpoints.up('tablet')]: { height: 370, },
        })]
        } />
        <Header />
        <Routes>
          <Route index element={<Main />} />
          < Route path='*' element={<Page404 />} />
        </Routes>
        <Footer />
      </Box >
    </> :
      <ModalContainer />
    }
  </>);
}



const AppContainer = () => {

  const globalStyles = css`
      @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400;500;600;700&family=Inter&family=Montserrat:wght@400;500;600;700&family=Nunito&family=Source+Sans+Pro&display=swap');
      html, body{
        height: 100%;
  };
      #root{
        height:100%;
    }
      `;
  return (
    <React.StrictMode >
      <BrowserRouter basename='/healthshoper'>
        <Provider store={store}>
          <ThemeProvider theme={themeDate}>
            <CssBaseline />
            <GlobalStyles styles={globalStyles} />
            <App />
          </ThemeProvider>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default React.memo(AppContainer);