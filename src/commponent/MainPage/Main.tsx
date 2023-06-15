import { Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import Item from './Item/Item';





export const styleMain = {
	mt: 30,

	zIndex: 'appBar',
	border: 1,

} as const;




const Main = () => {




	return (

		<Box component='main' sx={{ zIndex: 'appBar', }}>
			<Container maxWidth={'maxWidth'} sx={{ ...styleMain, }}>

				<Item />

			</Container>
		</Box>

	);
};

export default React.memo(Main);