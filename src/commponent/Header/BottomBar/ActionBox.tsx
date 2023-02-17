import React from 'react';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import ActionIconBtn from './ActionIconBtn';

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

			<ActionIconBtn
				tooltipTitle='Login'
				onClickBtn={onClickLogin}
				ActionIcon={PersonOutlineIcon}
			/>
			<ActionIconBtn
				tooltipTitle='Favorites'
				onClickBtn={showFavorins}
				ActionIcon={FavoriteBorderIcon}
				badgeCounter={4}
			/>
			<ActionIconBtn
				tooltipTitle='Shopping Cart'
				onClickBtn={showCart}
				ActionIcon={ShoppingCartIcon}
				badgeCounter={49}
				marRigth={0}
			/>

		</ActionBoxWrapper>
	);
};

export default React.memo(ActionBox);