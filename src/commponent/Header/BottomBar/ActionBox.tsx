import React from 'react';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import ActionIconBtn from './ActionIconBtn';
import { useAppDispatch, useAppSelector } from '../../../Redux/store';
import { selNumberOfFarorites, selNumberOfItemInCart } from '../../../Redux/ActionSlice';
import { selIsAuth, setIsLoginFormOpen } from '../../../Redux/AuthorizationSlice';
import { getUsers, logout } from '../../../Redux/Thunk/thunkAuth';

const ActionBoxWrapper = styled(Box)`
	display:flex;
	justify-content:center;
	align-items:center;
	height:100%;
	flex: 1 0 auto;
	font-size:30px;
	
`;

const ActionBox = () => {

	const dispatch = useAppDispatch();
	const numberOfFavorites = useAppSelector(selNumberOfFarorites);
	const numberOfItemInCart = useAppSelector(selNumberOfItemInCart);
	const isAuth = useAppSelector(selIsAuth);

	const onClickLogin = () => {
		isAuth ? dispatch(logout()) : dispatch(setIsLoginFormOpen(true));

	};
	const showFavorins = () => {
		dispatch(getUsers());
		console.log('favorits')
	};
	const showCart = () => {
		console.log('cart')
	};

	return (
		<ActionBoxWrapper >

			<ActionIconBtn
				tooltipTitle={isAuth ? 'Logout' : 'Login'}
				onClickBtn={onClickLogin}
				ActionIcon={isAuth ? AccountCircleIcon : LoginIcon}
			/>
			<ActionIconBtn
				tooltipTitle='Favorites'
				onClickBtn={showFavorins}
				ActionIcon={FavoriteBorderIcon}
				badgeCounter={numberOfFavorites}
			/>
			<ActionIconBtn
				tooltipTitle='Shopping Cart'
				onClickBtn={showCart}
				ActionIcon={ShoppingCartIcon}
				badgeCounter={numberOfItemInCart}
				marRigth={0}
			/>

		</ActionBoxWrapper>
	);
};

export default React.memo(ActionBox);