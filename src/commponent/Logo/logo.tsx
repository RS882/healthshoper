import React from 'react';
import { Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logoImg from '../../assets/logo/logo.svg';

const Logo = () => {
	const navigate = useNavigate();
	return (
		<>
			<Button onClick={() => navigate('/')} sx={{ maxWidth: 296, maxHeight: 33, }}>
				<Box component='img' sx={{ width: 1, height: 1, }} src={logoImg} width='296' height='33' alt='logo' />
			</Button>
		</>
	);
};

export default Logo;