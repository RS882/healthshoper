
import Toolbar from '@mui/material/Toolbar';
import React, { useState } from 'react';

import ToolBarSearch from './ToolBarSearch';
import ActionBox from './ActionBox';
import BottomBarButton from './BottomBarButton';
import { themeDate } from './../../../Theme/theme';
import { Box, styled, Button, Drawer, List, ListItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';

const BottomBox = styled(Box)((props) => ({
	[props.theme.breakpoints.up('mobile')]: { display: 'none', },
	[props.theme.breakpoints.up('laptop')]: { display: 'flex', },
}));

const MoreVertBtn = styled(Button)((props) => ({
	[props.theme.breakpoints.up('mobile')]: { display: 'flex', },
	[props.theme.breakpoints.up('laptop')]: { display: 'none', },
	height: '100%',
	justifyContent: 'center',
	alignItems: 'center',
}));


const BottomBar = () => {
	const [openCatalogMenu, setCatalogMenu] = useState(false);
	const navigate = useNavigate();

	const gotoUrlAndCloseDrawer = (url: string): void => {
		setCatalogMenu(false);
		navigate(url);
	};

	return (
		<Toolbar disableGutters sx={[{ display: 'flex', height: '65px' }, (theme) => ({ backgroundColor: theme.bgColors.blueHeaderBg, })]} >
			<MoreVertBtn onClick={() => setCatalogMenu(true)}>
				<MoreVertIcon />
			</MoreVertBtn>

			<BottomBox>
				<BottomBarButton url='/catalog'
					bgColor={themeDate.colors.blue1!}
					bgColorHover={themeDate.colors.blue3!}
					isMenuIcon={true}>
					catalog
				</BottomBarButton>
				<BottomBarButton url='/offers'
					bgColor={themeDate.colors.blue2!}
					bgColorHover={themeDate.colors.blue1!}>
					offers
				</BottomBarButton>
				<BottomBarButton url='/brands'
					bgColor={themeDate.colors.blue3!}
					bgColorHover={themeDate.colors.blue1!}>
					BRANDS
				</BottomBarButton>
			</BottomBox>
			<Drawer
				anchor='left'
				open={openCatalogMenu}
				onClose={() => setCatalogMenu(false)}
				sx={[
					(theme) => ({ [theme.breakpoints.up('mobile')]: { display: 'block', }, [theme.breakpoints.up('laptop')]: { display: 'none', }, })
				]}>
				<List >

					<ListItem>
						<BottomBarButton onClickBtn={() => gotoUrlAndCloseDrawer('/catalog')} >
							catalog
						</BottomBarButton>
					</ListItem>
					<ListItem>
						<BottomBarButton onClickBtn={() => gotoUrlAndCloseDrawer('/offers')} >
							offers
						</BottomBarButton>
					</ListItem>
					<ListItem>
						<BottomBarButton onClickBtn={() => gotoUrlAndCloseDrawer('/brands')} >
							BRANDS
						</BottomBarButton>
					</ListItem>


				</List>

			</Drawer>
			<ToolBarSearch />

			<ActionBox />
		</Toolbar>
	);
};

export default React.memo(BottomBar);