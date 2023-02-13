import React, { FC } from 'react';
import Grid from '@mui/material/Grid';

import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';


const NavMenu: FC<{ menuItem: string[] }> = ({ menuItem }) => {

	const navigate = useNavigate();
	const navElem = menuItem.map((e, i) =>
		<Grid display='flex' justifyContent='flex-end' key={e + i}>
			<Button onClick={() => navigate(`/${e}`)} sx={{ textTransform: 'none', }}>{e}</Button>
		</Grid>)
	return (
		<Grid container component={'nav'} justifyContent='flex-end'  >
			{navElem}
		</Grid>
	);
};

export default React.memo(NavMenu);