import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import { Box, css, ThemeProvider } from '@mui/material';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { themeDate } from './Theme/theme';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Main, { styleMain } from './commponent/MainPage/Main';
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

        }, (theme) => ({
          backgroundColor: theme.bgColors.darkBlue,
          [theme.breakpoints.up('mobile')]: { height: 170, },
          [theme.breakpoints.up('tablet')]: { height: 370, },
        })]
        } />
        <Header />
        <Routes>
          <Route index element={<Main />} />
          < Route path='*' element={<Box sx={{ mt: 60, mb: 30, fontSize: 50, zIndex: 'appBar', }}> 404 NOT FOUND</Box>} />
        </Routes>
        <Footer />
      </Container>
    </Box>

  );
}



const AppContainer = () => {

  const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400;500;600;700&family=Inter&family=Montserrat:wght@400;500;600;700&family=Nunito&family=Source+Sans+Pro&display=swap');
  html, body{
    height: 100%;
  };
  #root{
    min-height:100%;
    }
  `;

  return (
    <React.StrictMode >
      <BrowserRouter >
        <ThemeProvider theme={themeDate}>
          <CssBaseline />
          <GlobalStyles styles={globalStyles} />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default React.memo(AppContainer);