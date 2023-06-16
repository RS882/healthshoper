import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Badge, Box, Button, CardActionArea, IconButton, Paper, Rating, Typography, keyframes } from '@mui/material';
import { itemDate } from './itemDate';
import { IItem } from '../../../Models/item/itemModel';
import Banner from './banner';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ButtonBase from '@mui/material/ButtonBase';


const scale = keyframes`
  0% {
	transform: scale(0);
  }

  100% {
   transform: scale(1);
  }
`;


const Item = () => {
	//=====================
	const item: IItem = JSON.parse(itemDate);

	item.banners = ['hit', 'promotion'];
	item.oldPreise = 101.23
	//==================================


	const addCurrency = (item: string | number, currency = '$'): string | null => item ? `${item} ${currency}` : null;

	const banners: JSX.Element[] | null = item.banners && item.banners.length > 0 ? item.banners.map((e, i) => <Banner text={e} key={e + i} />) : null;



	const onClickImg = () => {
		console.log('img');

	};

	const onClickFavorite = () => {
		console.log('Favorite');

	};

	const onclickCount = () => {
		console.log('Count');
	};

	const onClickAddToCart = () => {
		console.log('to cart');
	};

	const onClickItemTitle = () => {
		console.log('title');
	};



	return (
		<Card >

			<CardContent className='item-card' sx={{ position: 'relative', }}>

				<CardMedia
					component="img"
					height="298"
					image={item.image}
					alt={item.title}
					sx={{ mb: 2 }}
				/>

				<Box sx={{
					position: 'absolute',
					top: '20px',
					left: '20px',
					display: 'flex'
				}}>
					{banners}
				</Box>

				<Box sx={{
					width: '100%',
					p: 1,
					position: 'absolute',
					top: '50%',
					left: '0',
					transform: 'translateY(-150%)',
				}}>
					<Button variant="contained" className='item' onClick={onClickImg}
						sx={{
							display: 'none',
							'.item-card:hover &': { display: 'block' },
							width: '100%',
							opacity: 0.6,
							animation: `${scale} 0.5s `
						}}>QUICK VIEW</Button>

				</Box>

				<IconButton onClick={onClickFavorite} sx={{
					position: 'absolute',
					top: 15,
					right: 20,
					display: 'none',
					'.item-card:hover &': { display: 'block' },
					animation: `${scale} 0.5s `
				}}>
					<FavoriteBorderIcon sx={[
						{ fontSize: 40 }, (thema) => ({ color: thema.colors.blue3, })]}
					/>
				</IconButton>

				<Box sx={{
					display: 'flex',
					alignItems: 'center',
				}}>
					<Rating name="half-rating" defaultValue={+item.rating.rate} precision={0.5} readOnly />

					<IconButton onClick={onclickCount}>
						<Badge badgeContent={item.rating.count} color='info' >
							<ChatBubbleOutlineIcon />
						</Badge>
					</IconButton>
				</Box>

				<Typography sx={[{ mb: 2 }, (thema) => ({
					color: thema.colors.black,
					'.item-card:hover &': { color: thema.colors.blue2 },
				})]}>
					<ButtonBase sx={{
						textAlign: 'left',
						fontStyle: 'normal',
						fontWeight: '500',
						fontSize: '14px',
						lineHeight: '20px',
					}} onClick={onClickItemTitle}>
						{item.title}
					</ButtonBase>
				</Typography>

				<Box sx={{
					width: '100%',
					display: 'grid',
					gridTemplateColumns: '1fr 1fr',
					gridTemplateRows: '36px 24px',
					alignItems: 'center',
					gap: '5px',
				}}>


					<Typography sx={{
						fontWeight: '700',
						fontSize: '24px',

					}}>{addCurrency(item.price)}</Typography>

					<Button variant="outlined" className='item' onClick={onClickAddToCart}
						sx={
							[(thema) => ({
								'.item-card:hover &': {
									backgroundColor: thema.colors.blue2,
									color: thema.colors.white
								},
							})]

						}>ADD TO CART</Button>

					<Typography sx={[{
						fontWeight: '700',
						fontSize: '18px',

						textDecoration: 'line-through',
					}, thema => ({ color: thema.colors.red })]}>
						{addCurrency(item.oldPreise)}</Typography>

				</Box>

			</CardContent>


		</Card>
	);
};

export default React.memo(Item);