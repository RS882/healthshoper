import { Box, Toolbar } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import logo from '../../../assets/logo/logo.svg';
import { useNavigate } from 'react-router-dom';
import ChooseICity from './ChooseICity';

const TopBar = () => {

	const navigate = useNavigate();
	return (
		<Toolbar disableGutters sx={[(theme) => ({
			[theme.breakpoints.up('tablet')]: { height: 83, },
		}),]}>
			<Grid container sx={{ width: 1, }}>
				<Grid mobile={4}>
					<Button onClick={() => navigate('/')} sx={{ maxWidth: 296, maxHeight: 33, }}>
						<Box component='img' sx={{ width: 1, height: 1, }} src={logo} width='296' height='33' alt='logo' />
					</Button>
				</Grid>
				<Grid mobile={4}><ChooseICity /></Grid>
				<Grid mobile={4}>2LOGO</Grid>

			</Grid>

		</Toolbar>
	);
};

export default  React.memo(TopBar);