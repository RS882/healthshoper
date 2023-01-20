import { Box } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import React from 'react';
import ChooseForm from './ChooseForm/ChooseForm';
import { cityArr } from './cityList';

const ChooseICity = () => {
	return (
		<Box justifyContent='flex-end' sx={{ display: 'flex', alignItems: 'center' }}>
			<LocationOnIcon color='warning' />
			<ChooseForm list={cityArr} />
		</Box>
	);
};

export default React.memo(ChooseICity);