import styled from '@emotion/styled';
import { ButtonBase, Typography } from '@mui/material';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { themeDate } from '../../../Theme/theme';

interface IBottomBarButton {
	url?: string;
	bgColor?: string;
	bgColorHover?: string;
	isMenuIcon?: boolean;
	children: React.ReactNode;
	onClickBtn?: () => void;
};

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
	width: 100%;
`;

const BottomBarButton: FC<IBottomBarButton> = ({ url = '/', bgColor = themeDate.colors.blue1!,
	bgColorHover = themeDate.colors.blue3!, children, isMenuIcon = false, onClickBtn }) => {
	const navigate = useNavigate();
	return (
		<StyledButton
			onClick={onClickBtn ? onClickBtn : () => navigate(url)}
			sx={(theme) => ({ color: theme.colors.white, backgroundColor: bgColor, '&:hover': { backgroundColor: bgColorHover } })}>
			{isMenuIcon ? <MenuIcon sx={{ mr: 2, }} /> : null}
			<StyledText>{children}</StyledText>
		</StyledButton>
	);
};

export default React.memo(BottomBarButton);