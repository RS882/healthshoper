import React from 'react';
import { Box } from '@mui/material';
import { styleMain } from '../MainPage/Main';
import Container from '@mui/material/Container';

const Footer = () => {
	return (
		<Box component='footer' sx={{
			...styleMain,
			backgroundColor: '#fff',
			position: 'absolute',
			bottom: 0,
			left: 0,
			width: 1,
		}}>
			<Container maxWidth={'maxWidth'} >
				FOOTER
			</Container>
		</Box>
	);
};

export default React.memo(Footer);