import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Badge, Box, Button, CardActionArea, IconButton, Rating, Typography, keyframes } from '@mui/material';
import { itemDate } from './itemDate';
import { IItem } from '../../../Models/item/itemModel';
import Banner from './banner';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import Grid from '@mui/material/Unstable_Grid2/Grid2';


const scale = keyframes`
  0% {
	transform: scale(0);
  }

  100% {
   transform: scale(1);
  }
`


const Item = () => {

	const date: IItem = JSON.parse(itemDate);
	date.banners = ['hit', 'promotion'];
	date.oldPreise = 101.23

	console.log(date);

	const banners = date.banners.map((e, i) => <Banner text={e} key={e + i} />);


	const onClickImg = () => {
		console.log('img');

	};

	const onClickFavorite = () => {
		console.log('Favorite');

	};

	const onclickCount = () => {
		console.log('Count');
	};





	return (
		<Card sx={{ width: 345, border: 1 }}>

			<CardContent className='item-card' sx={{ position: 'relative', }}>

				<CardMedia
					component="img"
					height="298"
					image={date.image}
					alt={date.title}
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
					transform: 'translateY(-100%)',
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
					<Rating name="half-rating" defaultValue={+date.rating.rate} precision={0.5} readOnly />

					<IconButton onClick={onclickCount}>
						<Badge badgeContent={date.rating.count} color='info' >
							<ChatBubbleOutlineIcon />
						</Badge>
					</IconButton>
				</Box>

				<Typography sx={[(thema) => ({
					color: thema.colors.black,
					'.item-card:hover &': { color: thema.colors.blue2 },
				})]}>
					{date.title}
				</Typography>
				{/* <Grid container spacing={2}>
					<Grid xs={6}>
						1
					</Grid>

					<Grid xs={6}>
						2
					</Grid>

				</Grid> */}


			</CardContent>


		</Card>
	);
};

export default React.memo(Item);