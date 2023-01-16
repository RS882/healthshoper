import Box from '@mui/material/Box';
import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const YellowDotWithArrowDown = () => {
	return (
		<Box sx={[theme => ({ bgcolor: theme.colors.yellow, color: theme.colors.blue3 }),
		{ minWidth: 16, minHeight: 16, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', mr: 1, }]}>
			<KeyboardArrowDownIcon />
		</Box>
	);
};

export default React.memo(YellowDotWithArrowDown);