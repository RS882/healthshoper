import { Box } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import React from 'react';
import ChooseForm from './ChooseForm/ChooseForm';
import { cityArr } from './cityList';

const ChooseICity = () => {
	return (
		<Box sx={{
			// border: 1,
			display: 'flex', height: 1, alignItems: 'center'
		}}>
			<LocationOnIcon color='warning' />
			<ChooseForm list={cityArr.city} />
		</Box>
	);
};

export default React.memo(ChooseICity);