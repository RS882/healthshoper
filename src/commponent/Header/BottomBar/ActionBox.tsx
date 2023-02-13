import React from 'react';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const ActionBoxWrapper = styled(Box)`
	display:flex;
	justify-content:center;
	align-items:center;
	height:100%;
	flex: 1 0 auto;
	font-size:30px;
	
`;

const ActionBox = () => {

	const onClickLogin = () => {
		console.log('login')
	};
	const showFavorins = () => {
		console.log('favorits')
	};
	const showCart = () => {
		console.log('cart')
	};

	return (
		<ActionBoxWrapper >
			<Tooltip title='Login'>
				<IconButton sx={{ mr: 3, }} onClick={onClickLogin}>
					<PersonOutlineIcon sx={[{ fontSize: '40px', }, (theme) => ({ color: theme.colors.blue3, })]} />
				</IconButton>
			</Tooltip>
			<Tooltip title='Favorites'>
				<IconButton sx={{ mr: 3, }} onClick={showFavorins}>
					<Badge badgeContent={4} color='warning' >
						<FavoriteBorderIcon sx={[{ fontSize: '40px', }, (theme) => ({ color: theme.colors.blue3, })]} />
					</Badge>
				</IconButton>
			</Tooltip>
			<Tooltip title='Shopping Cart'>
				<IconButton onClick={showCart}>
					<Badge badgeContent={48} color='warning' >
						<ShoppingCartIcon sx={[{ fontSize: '40px', }, (theme) => ({ color: theme.colors.blue3, })]} />
					</Badge>
				</IconButton>
			</Tooltip>
		</ActionBoxWrapper>
	);
};

export default React.memo(ActionBox);