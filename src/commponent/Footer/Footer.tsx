import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import SocialIcon from './menuNav/SocialIcon';
import { useNavigate } from 'react-router-dom';

import MenuNav from './menuNav/menuNav';
import { navMenuItem } from '../../Models/navMenuModel.ts/navMenu';
import { CatalogModel } from '../../Models/catalog/catalogModel';
import { useAppDispatch, useAppSelector } from '../../Redux/store';
import { selPhoneNummberForCall } from '../../Redux/StartSlice';
import { getFormatedTelNumber } from '../../Utilits/functions';
import CallUsLink from '../Header/TopBar/TelNumber/CallUsLink';
import { setRequsetCallFormOpen } from '../../Redux/RequesrCallSlice';

import Logo from '../Logo/logo';


const Footer = () => {

	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const telNumber = useAppSelector(selPhoneNummberForCall);

	const [textNum, digNum] = getFormatedTelNumber(telNumber!);

	const EMAIL = 'exemp@mail.com'

	const onClickRequestCall = () => {
		dispatch(setRequsetCallFormOpen())

	};


	return (
		<Box component='footer' sx={[
			{ zIndex: 'appBar', }, (thema) => ({ backgroundColor: thema.colors.white, })]}>
			<Container maxWidth={'maxWidth'} >
				<Box sx={[{ display: 'grid', rowGap: 3, p: 3 }]}>
					<MenuNav btnText='Menu' menuItemText={navMenuItem} />
					<MenuNav btnText='Catalog' menuItemText={CatalogModel} />

					<CallUsLink
						digNum={digNum}
						mobileStyle={{ display: 'block' }}
						destopStyle={{ display: 'block' }}
					>{textNum}
					</CallUsLink>

					<Button
						onClick={onClickRequestCall}
						size='large'
						variant='outlined'>REQUEST A CALL</Button>

					<Box sx={[{ display: 'grid', rowGap: 1, textAlign: 'center' }]}>
						<Typography>Mon-Fri: 10:00 - 20:00</Typography>
						<Typography>Sat: 10:00 - 18:00</Typography>
					</Box>

					<Box sx={{ textAlign: 'center' }}>
						<Link href={`mailto:${EMAIL}`} >{EMAIL}</Link>
					</Box>

					<Box sx={[{ textAlign: 'center' }]}	>
						<SocialIcon icon={WhatsAppIcon} tooltipTitle='WhatApp' onClickBtn={() => { }} />
						<SocialIcon icon={InstagramIcon} tooltipTitle='Instagram' onClickBtn={() => { }} />
						<SocialIcon icon={TelegramIcon} tooltipTitle='Telegram' onClickBtn={() => { }} />

					</Box>

					<Box sx={[{ textAlign: 'center' }]}>
						<Logo />
					</Box>

					<Box sx={[{ textAlign: 'center' }]}>
						<Typography sx={(thema) => ({ color: thema.colors.grayBlue1 })}>© 2023 rs.com</Typography>
					</Box>
				</Box>


			</Container>
			<Box sx={[{ p: 2 }, (thema) => ({ backgroundColor: thema.bgColors.lichtBlue, })]} >
				<Typography sx={(thema) => ({ color: thema.colors.grayBlue1 })}>
					Copying of all constituent parts of the site in any form without the written permission of the copyright holders is prohibited.
					The site uses cookie technology. By using the site, you agree to the terms of the use of cookies, and also consent to the processing of personal data
				</Typography>
			</Box >
		</Box >
	);
};

export default React.memo(Footer);