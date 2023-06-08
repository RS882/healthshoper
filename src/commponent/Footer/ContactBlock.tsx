import React from 'react';
import Link from '@mui/material/Link';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';


import CallUsLink from '../Header/TopBar/TelNumber/CallUsLink';
import { useAppDispatch, useAppSelector } from '../../Redux/store';
import { getFormatedTelNumber } from '../../Utilits/functions';
import { selPhoneNummberForCall } from '../../Redux/StartSlice';
import { Button, Box, Typography } from '@mui/material';


import { setRequsetCallFormOpen } from '../../Redux/RequesrCallSlice';
import SocialIcon from './SocialIcon';


const ContactBlock = () => {

	const dispatch = useAppDispatch();
	const telNumber = useAppSelector(selPhoneNummberForCall);

	const [textNum, digNum] = getFormatedTelNumber(telNumber!);

	const EMAIL = 'exemp@mail.com';

	const onClickRequestCall = () => {
		dispatch(setRequsetCallFormOpen())

	};

	return (
		<>
			<CallUsLink
				digNum={digNum}
				mobileStyle={{ display: 'block' }}
				destopStyle={{ display: 'block' }}
			>{textNum}
			</CallUsLink>
			<Box sx={{ textAlign: 'center' }}>
				<Button
					onClick={onClickRequestCall}
					size='large'
					variant='outlined'
				>REQUEST A CALL</Button>
			</Box>

			<Box sx={[{ display: 'grid', rowGap: 1, textAlign: 'center' }]}>
				<Typography>Mon-Fri: 10:00 - 20:00</Typography>
				<Typography>Sat: 10:00 - 18:00</Typography>
			</Box>



			<Box sx={[{ textAlign: 'center' }]}	>
				<SocialIcon icon={WhatsAppIcon} tooltipTitle='WhatApp' onClickBtn={() => { }} />
				<SocialIcon icon={InstagramIcon} tooltipTitle='Instagram' onClickBtn={() => { }} />
				<SocialIcon icon={TelegramIcon} tooltipTitle='Telegram' onClickBtn={() => { }} />

			</Box>

			<Box sx={{ textAlign: 'center' }}>
				<Link href={`mailto:${EMAIL}`} >{EMAIL}</Link>
			</Box>
		</>
	);
};

export default ContactBlock;