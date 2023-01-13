import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import { Box, ThemeProvider } from '@mui/material';

import Container from '@mui/material/Container';
import { themeDate } from './Theme/theme';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Main from './commponent/MainPage/Main';
import Header from './commponent/Header/Header';
import Footer from './commponent/Footer/Footer';


const App = () => {



  return (

    <Box sx={[{
      position: 'relative',
      height: 1,
    }, (theme) => ({ backgroundColor: theme.bgColors.lichtBlue, })]
    } >
      <Container maxWidth={'maxWidth'} sx={{
        height: 1,
        display: 'flex',
        flexDirection: 'column',
      }}>
        <Box sx={[{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 1,
          height: 170,
        }, (theme) => ({
          backgroundColor: theme.bgColors.darkBlue,
          [theme.breakpoints.up('tablet')]: { height: 370, },
        })]
        } />
        <Header />
        <Routes>
          <Route index element={<Main />} />
        </Routes>
        <Footer />
      </Container>
    </Box>

  );
}



const AppContainer = () => {

  return (
    <React.StrictMode >
      <BrowserRouter >
        <ThemeProvider theme={themeDate}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default React.memo(AppContainer);