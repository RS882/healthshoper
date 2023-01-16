import { Box, Typography } from '@mui/material';
import React, { FC } from 'react';
import Link from '@mui/material/Link';
import { telNumber } from '../cityList';
import { getFormatedTelNumber } from './../../../../Utilits/functions';

import Button from '@mui/material/Button';
import YellowDotWithArrowDown from './YellowDotWithArrowDown';



const TelNumber: FC<{ onClickRequestCall: () => void }> = ({ onClickRequestCall }) => {

	const [textNum, digNum] = getFormatedTelNumber(telNumber);

	return (
		<Box justifyContent='flex-end' sx={{ display: 'flex', alignItems: 'center', }}>
			<Link href={`tel:${digNum}`} underline="none"
				sx={[{ fontSize: 21, fontWeight: 500, },
				theme => ({ color: theme.colors.black })
				]}>
				{textNum}
			</Link>
			<Button sx={{ display: 'flex', alignItems: 'center', }} onClick={onClickRequestCall}>
				<YellowDotWithArrowDown />
				<Typography textTransform='none' fontWeight='500' sx={{
					borderBottom: '1px solid rgba(0, 0, 0, 0.42)', pt: '5px', pb: '5px',
					'&:hover': { borderBottom: '2px solid black' }
				}}>Request a call</Typography>
			</Button>

		</Box>
	);
};

export default React.memo(TelNumber);