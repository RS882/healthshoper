import { styled } from '@mui/material/styles';
import React, { FC } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';


const SocialIcon: FC<{ icon: typeof FavoriteBorderIcon, tooltipTitle: string, onClickBtn: () => void }> =
	({ icon, tooltipTitle, onClickBtn }) => {

		const StyledSocialIcon = styled(icon)((props) => ({
			[props.theme.breakpoints.up('mobile')]: { fontSize: '30px', },
			[props.theme.breakpoints.up('laptop')]: { fontSize: '40px', },
			color: props.theme.colors.blue3,
		}));
		return (
			<Tooltip title={tooltipTitle}>
				<IconButton onClick={onClickBtn}>

					<StyledSocialIcon />

				</IconButton>
			</Tooltip>

		);
	};

export default SocialIcon;