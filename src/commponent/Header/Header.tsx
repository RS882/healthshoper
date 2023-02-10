import { Box, Toolbar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import React from 'react';
import Container from '@mui/material/Container';
import TopBar from './TopBar/TopBar';
import BottomBar from './BottomBar/BottomBar';





const Header = () => {
	return (
		<AppBar component='header' position='fixed' color='transparent' elevation={0} sx={{ backdropFilter: ' blur(10px)', zIndex: 'drawer', }}>
			<Container maxWidth={'maxWidth'} >
				<Box sx={{ mt: 3, }} >
					<TopBar />
					<BottomBar />
				</Box>

			</Container>
		</AppBar >
	);
};

export default React.memo(Header);