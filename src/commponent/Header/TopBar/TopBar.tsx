import { Box, Toolbar } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import logo from '../../../assets/logo/logo.svg';
import { useNavigate } from 'react-router-dom';
import ChooseICity from './ChooseICity';
import TelNumber from './TelNumber/TelNumber';
import NavMenu from './NavMenu/NavMenu';
import { navMenuItem } from './navMenu';
import { changeFirstSimbolToUpperCase } from '../../../Utilits/functions';

const TopBar = () => {

	const navigate = useNavigate();

	const onClockRequestCall = () => {
		console.log('request');

	};
	return (
		<Toolbar disableGutters sx={[(theme) => ({
			[theme.breakpoints.up('tablet')]: { height: 83, },
		}),]}>
			<Grid container sx={{ width: 1, }} columns={10}>
				<Grid mobile={2} display='flex' alignItems='center'>
					<Button onClick={() => navigate('/')} sx={{ maxWidth: 296, maxHeight: 33, }}>
						<Box component='img' sx={{ width: 1, height: 1, }} src={logo} width='296' height='33' alt='logo' />
					</Button>
				</Grid>
				<Grid mobile={1} ><ChooseICity /></Grid>
				<Grid mobile={3}
				// sx={[{ display: 'none', },
				// (theme) => ({
				// 	[theme.breakpoints.up('tablet')]: { display: 'block', },
				// })]}
				>
					<TelNumber onClickRequestCall={onClockRequestCall} />
				</Grid>
				<Grid mobile={4}><NavMenu menuItem={navMenuItem.map(e => changeFirstSimbolToUpperCase(e))} /></Grid>
			</Grid>

		</Toolbar>
	);
};

export default React.memo(TopBar);