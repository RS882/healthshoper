import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import { useNavigate } from 'react-router-dom';
import ToolBarSearch from './ToolBarSearch';

const StyledText = styled(Typography)`
	font-weight: 600;
	font-size: 16px;
	line-height: 20px;
	letter-spacing: 0.15em;

`;

const StyledButton = styled(ButtonBase)`
	display: flex;
	min-height:100%;
	padding: 20px 24px ;
	text-transform:uppercase;
`;



const BottomBar = () => {
	const navigate = useNavigate();


	return (
		<Toolbar disableGutters sx={[{ display: 'flex', height: '65px' }, (theme) => ({ backgroundColor: theme.colors.greenBlue, })]} >


			<StyledButton
				onClick={() => navigate('/catalog')}
				sx={(theme) => ({ color: theme.colors.white, backgroundColor: theme.colors.blue1, '&:hover': { backgroundColor: theme.colors.blue3 } })}>
				<MenuIcon sx={{ mr: 2, }} />
				<StyledText>catalog</StyledText>
			</StyledButton>
			<StyledButton
				onClick={() => navigate('/offers')}
				sx={(theme) => ({ color: theme.colors.white, backgroundColor: theme.colors.blue2, '&:hover': { backgroundColor: theme.colors.blue1 } })}>
				<StyledText>offers</StyledText>
			</StyledButton>
			<StyledButton
				onClick={() => navigate('/brands')}
				sx={(theme) => ({ color: theme.colors.white, backgroundColor: theme.colors.blue3, '&:hover': { backgroundColor: theme.colors.blue1 } })}>
				<StyledText>BRANDS</StyledText>
			</StyledButton>

			<ToolBarSearch />
		</Toolbar>
	);
};

export default BottomBar;