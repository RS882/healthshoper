import React, { FC } from 'react';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Icon from '@mui/material/Icon';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


interface IActionIconBtn {
	tooltipTitle: string;
	onClickBtn: () => void;
	marRigth?: number;
	badgeCounter?: number;
	ActionIcon: typeof FavoriteBorderIcon;
};



const ActionIconBtn: FC<IActionIconBtn> = ({ tooltipTitle, onClickBtn, marRigth = 3, badgeCounter = 0, ActionIcon }) => {

	const StyledActionIcon = styled(ActionIcon)((props) => ({
		[props.theme.breakpoints.up('mobile')]: { fontSize: '30px', },
		[props.theme.breakpoints.up('laptop')]: { fontSize: '40px', },
		color: props.theme.colors.blue3,
	}));
	return (
		<Tooltip title={tooltipTitle}>
			<IconButton sx={{ mr: marRigth, }} onClick={onClickBtn}>
				<Badge badgeContent={badgeCounter} color='warning' >
					<StyledActionIcon />
				</Badge>
			</IconButton>
		</Tooltip>
	);
};

export default React.memo(ActionIconBtn);