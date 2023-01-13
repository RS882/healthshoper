import React from 'react';



import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import DeleteIcon from '@mui/icons-material/Delete';
// import AddIcon from '@mui/icons-material/Add';
// import EditIcon from '@mui/icons-material/Edit';
// import NavigationIcon from '@mui/icons-material/Navigation';
// import MenuIcon from '@mui/icons-material/Menu';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import React from 'react';
// import Fab from '@mui/material/Fab';

// import IconButton from '@mui/material/ButtonBase';

// import { ThemeProvider, Toolbar, Typography } from '@mui/material';
// import styled from '@emotion/styled';
// import Container from '@mui/material/Container';
// import AppBar from '@mui/material/AppBar';
// import { theme } from './Theme/theme';



// import { MenuIconBathroomFurniture, MenuIconPlumbing, MenuIconTechnics, MenuIconTile, MenuIconHeating, MenuIconFlooring } from './commponent/iconCommponet/menuIcon';
// import { useTheme } from '@mui/material/styles';

// declare module '@mui/material/Button' {
//   interface ButtonPropsColorOverrides {
//     greyblue: true;
//   }
// };

// const StyledAddWrapper = styled.div`
//   position: relative;
//   background-color: ${props => props.theme.bgColors.lichtBlue};
//   height:100%;
// `

// const StyledWraper = styled.div`
//   display: flex;
//   flex-direction:column;

//    color:${props => props.theme.colors.greenBlue};
//  `;


// const StyledSVG = styled.div`
//   font-size:184px;
//   background-color: #987654;
//   display: flex;
//   flex-direction:column;
//   stroke:#123456;
// `;

// const StyledFoot = styled.div`
//   position: absolute;
//   bottom:0;
//   left:0;
// width: 100%;
// background-color:#fff;
// border: 1px solid #000;
// `;
// const StyledContainer = styled(Container)`
//   height:100%;
// `

const App_testcopy = () => {
  return (
    <div>
      <Button variant="outlined" size='small'>Text</Button>
    </div>
  );
};

export default App_testcopy;


// const App = () => {


//   const themeDate = useTheme();

//   console.log(themeDate.breakpoints.values.maxWidth);
//   return (
//     <StyledAddWrapper>
//       <StyledContainer maxWidth={'maxWidth'} >
//         <StyledWraper >


//           <AppBar position="static">
//             <Toolbar variant="dense" >
//               <IconButton onClick={() => console.log('burger')}>
//                 <MenuIcon />
//               </IconButton>
//               <Typography variant="h6" color="inherit" component="div">
//                 Photos
//               </Typography>
//             </Toolbar>
//           </AppBar>


//           <div>  App</div>

 //          <Button variant="outlined" size='small'>Text</Button>
//           <Button color="info">Contained</Button>
//           <Button size='large' variant='contained'>Outlined</Button>

//           <IconButton aria-label="delete" color="primary">
//             <DeleteIcon />
//           </IconButton>
//           <StyledSVG>


//             <MenuIconTile fontSize='inherit' />
//             <MenuIconPlumbing fontSize='inherit' />
//             <MenuIconBathroomFurniture stroke="#123456" fontSize='inherit' />
//             <MenuIconTechnics fontSize='inherit' />
//             <MenuIconHeating fontSize='inherit' />
//             <MenuIconFlooring fontSize='inherit' />
//           </StyledSVG>


//           <Fab color="primary" aria-label="add">
//             <AddIcon />
//           </Fab>
//           <Fab color="secondary" aria-label="edit">
//             <EditIcon />
//           </Fab>

//           <StyledFoot>
//             <Container maxWidth={'maxWidth'} >
//               <Fab variant="extended" >
//                 <NavigationIcon sx={{ mr: 1 }} />
//                 Navigate
//               </Fab>

//               <Fab disabled aria-label="like">
//                 <FavoriteIcon />
//               </Fab>
//             </Container>
//           </StyledFoot>

//         </StyledWraper>
//       </StyledContainer>
//     </StyledAddWrapper>
//   );
// }



// const AppContainer = () => {

//   return (
//     <React.StrictMode >
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <App />
//       </ThemeProvider>
//     </React.StrictMode>
//   );
// };

// export default React.memo(AppContainer);