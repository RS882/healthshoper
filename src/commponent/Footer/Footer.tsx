import React from 'react';
import { Box } from '@mui/material';
import { styleMain } from '../MainPage/Main';
import Container from '@mui/material/Container';

const Footer = () => {
	return (
		<Box component='footer' sx={{
			fontSize: 50,
			fontWeight: 'fontWeightBold',
			zIndex: 'appBar',
			border: 1,
			backgroundColor: '#fff',

		}}>
			<Container maxWidth={'maxWidth'} >
				FOOTER
			</Container>
		</Box>
	);
};

export default React.memo(Footer);