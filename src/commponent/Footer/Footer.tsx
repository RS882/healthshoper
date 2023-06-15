import React from 'react';
import { Box, Typography } from '@mui/material';
import Container from '@mui/material/Container';



import MenuNav from './menuNav/menuNav';
import { navMenuItem } from '../../Models/navMenuModel.ts/navMenu';
import { CatalogModel } from '../../Models/catalog/catalogModel';


import Logo from '../Logo/logo';
import ContactBlock from './ContactBlock';
import { styled } from '@mui/material/styles';
import MenuNavLaptop from './menuNav/MenuNavLaptop';
import AccorNavMenu from './menuNav/AccorNavMenu';


const MobailBox = styled(Box)((props) => ({
	[props.theme.breakpoints.up('mobile')]: { display: 'grid', },
	[props.theme.breakpoints.up('laptop')]: { display: 'none', },
}));

const LaptopBox = styled(Box)((props) => ({
	[props.theme.breakpoints.up('mobile')]: { display: 'none', },
	[props.theme.breakpoints.up('laptop')]: { display: 'grid', },
}));


const Footer = () => {

	const rsElem: JSX.Element = <Typography sx={(thema) => ({ color: thema.colors.grayBlue1 })}>© 2023 rs.com</Typography>

	return (
		<Box component='footer' sx={[
			{ zIndex: 'appBar', }, (thema) => ({ backgroundColor: thema.colors.white, })]}>

			<Container maxWidth={'maxWidth'} >
				<MobailBox sx={[{ rowGap: 3, p: 3 }]}>
					<AccorNavMenu btnText='Menu' menuItemText={navMenuItem} />
					<AccorNavMenu btnText='Catalog' menuItemText={CatalogModel} />
					<ContactBlock />
					<Box sx={[{ textAlign: 'center' }]}>
						<Logo />
					</Box>
					<Box sx={[{ textAlign: 'center' }]}>
						{rsElem}
					</Box>
				</MobailBox>

				<LaptopBox sx={
					{ gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows: 'auto auto', p: 3, rowGap: 3 }
				}>
					<Box sx={{ gridColumn: '1/2', gridRow: '1/2' }}>
						<MenuNavLaptop items={CatalogModel} />
					</Box>

					<Box sx={{ gridColumn: '2/3', gridRow: '1/2' }}>
						<MenuNavLaptop items={navMenuItem} />
					</Box>

					<Box sx={{ gridColumn: '3/4', gridRow: '1/2', display: 'grid', rowGap: 3 }}>
						<ContactBlock />
					</Box>

					<Box sx={{ gridColumn: '1/4', gridRow: '2/3', display: 'grid', rowGap: 1 }}>
						<Box>
							<Logo />
						</Box>
						<Box >
							{rsElem}
						</Box>
					</Box>

				</LaptopBox>


			</Container>

			<Box sx={[{ p: 2 }, (thema) => ({ backgroundColor: thema.bgColors.lichtBlue, })]} >
				<Container maxWidth={'maxWidth'} >
					<Typography sx={(thema) => ({ color: thema.colors.grayBlue1 })}>
						Copying of all constituent parts of the site in any form without the written permission of the copyright holders is prohibited.
						The site uses cookie technology. By using the site, you agree to the terms of the use of cookies, and also consent to the processing of personal data
					</Typography>
				</Container>
			</Box >

		</Box >
	);
};

export default React.memo(Footer);