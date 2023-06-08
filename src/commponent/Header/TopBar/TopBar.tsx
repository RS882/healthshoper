import { Box, Divider, IconButton, List, Toolbar } from '@mui/material';
import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import ChooseICity from './ChooseICity';
import TelNumber from './TelNumber/TelNumber';
import NavMenu from './NavMenu/NavMenu';

import { changeFirstSimbolToUpperCase } from '../../../Utilits/functions';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import ListItemText from '@mui/material/ListItemText';
import { useAppDispatch } from './../../../Redux/store';
import { setRequsetCallFormOpen } from '../../../Redux/RequesrCallSlice';
import { navMenuItem } from '../../../Models/navMenuModel.ts/navMenu';
import Logo from '../../Logo/logo';


const StyledBox = styled(Box)((props) => ({
	[props.theme.breakpoints.up('mobile')]: { display: 'none', },
	[props.theme.breakpoints.up('laptop')]: { display: 'block', },
}));

const StyledBoxChoose = styled(Box)((props) => ({
	[props.theme.breakpoints.up('mobile')]: { display: 'none', },
	[props.theme.breakpoints.up('tablet')]: { display: 'block', flexGrow: 1, },
	[props.theme.breakpoints.up('desktop')]: { flexGrow: 0, },
}));

const TopBar = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const [openBurger, setOpenBurger] = useState(false);


	const onClickRequestCall = () => {
		dispatch(setRequsetCallFormOpen())

	};

	const listElems: JSX.Element[] = navMenuItem.map((e, i) => <ListItem key={e + i} disablePadding>
		<ListItemButton onClick={() => {
			navigate(`/${e}`);
			setOpenBurger(false);
		}}>
			<ListItemText primary={changeFirstSimbolToUpperCase(e)} />
		</ListItemButton>
	</ListItem >);




	return (
		<Toolbar disableGutters sx={[
			(theme) => ({ [theme.breakpoints.up('tablet')]: { height: 83, }, }),
			{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }]}>

			<Box >
				<Logo />
			</Box>

			<StyledBox>	<ChooseICity /></StyledBox>

			<StyledBox>
				<TelNumber onClickRequestCall={onClickRequestCall} />
			</StyledBox>

			<StyledBox>
				<NavMenu menuItem={navMenuItem.map(e => changeFirstSimbolToUpperCase(e))} />
			</StyledBox>

			<IconButton
				size="large"
				color='primary'
				onClick={() => setOpenBurger(true)}
				sx={[
					(theme) => ({ [theme.breakpoints.up('mobile')]: { display: 'block', }, [theme.breakpoints.up('laptop')]: { display: 'none', }, })
				]}>
				<MenuIcon />
			</IconButton>
			<Drawer
				anchor='right'
				open={openBurger}
				onClose={() => setOpenBurger(false)}
				sx={[
					(theme) => ({ [theme.breakpoints.up('mobile')]: { display: 'block', }, [theme.breakpoints.up('laptop')]: { display: 'none', }, })
				]}>
				<List >
					<ListItem><ChooseICity /></ListItem>
					<Divider />
					<ListItem>
						<TelNumber onClickRequestCall={onClickRequestCall} />
					</ListItem>
					<Divider />
					{listElems}
				</List>

			</Drawer>

		</Toolbar>
	);
};

export default React.memo(TopBar);