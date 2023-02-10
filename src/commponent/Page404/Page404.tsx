import React from 'react';
import { Box } from '@mui/material';
import Container from '@mui/material/Container';

const Page404 = () => {
	return (

		<Box component='main' sx={{ zIndex: 'appBar', }}>
			<Container maxWidth={'maxWidth'} sx={{ mt: 20, fontSize: 50, border: 1 }}>
				404 NOT FOUND
			</Container>
		</Box>
	);
};

export default Page404;