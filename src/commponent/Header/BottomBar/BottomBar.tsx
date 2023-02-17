
import Toolbar from '@mui/material/Toolbar';
import React from 'react';

import ToolBarSearch from './ToolBarSearch';
import ActionBox from './ActionBox';
import BottomBarButton from './BottomBarButton';
import { themeDate } from './../../../Theme/theme';
import { Box, styled } from '@mui/material';


const BottomBox = styled(Box)((props) => ({
	[props.theme.breakpoints.up('mobile')]: { display: 'none', },
	[props.theme.breakpoints.up('laptop')]: { display: 'flex', },
}));


const BottomBar = () => {



	return (
		<Toolbar disableGutters sx={[{ display: 'flex', height: '65px' }, (theme) => ({ backgroundColor: theme.bgColors.blueHeaderBg, })]} >
			<BottomBox>
				<BottomBarButton url='/catalog'
					bgColor={themeDate.colors.blue1!}
					bgColorHover={themeDate.colors.blue3!}
					isMenuIcon={true}>
					catalog
				</BottomBarButton>
				<BottomBarButton url='/offers'
					bgColor={themeDate.colors.blue2!}
					bgColorHover={themeDate.colors.blue2!}>
					offers
				</BottomBarButton>
				<BottomBarButton url='/brands'
					bgColor={themeDate.colors.blue3!}
					bgColorHover={themeDate.colors.blue1!}>
					BRANDS
				</BottomBarButton>
			</BottomBox>
			<ToolBarSearch />

			<ActionBox />
		</Toolbar>
	);
};

export default React.memo(BottomBar);