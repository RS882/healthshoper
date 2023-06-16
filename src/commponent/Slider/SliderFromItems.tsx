import React, { FC } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, IconButton } from '@mui/material';
import Item from '../MainPage/Item/Item';
import styled from '@emotion/styled';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { themeDate } from '../../Theme/theme';



const ArrowBox = styled(Box)`
	position: absolute;
    top: 50%;
	 display: flex;
	 justify-content:center;
	 align-items:center;
    width: 40px;
    height: 40px;
    padding: 0;
    transform: translate(0, -50%);
	 background-color:#D5E0E5;
	 opacity:0.5;
    cursor: pointer;
	 border-radius:5px;
	 z-index:10 ;
`;

const NextArrowB0x = styled(ArrowBox)`
	 right:-16px;
	`;
const PrevArrowB0x = styled(ArrowBox)`
	left:-16px;
`;


const NextArrow: FC<{ onClick?: React.MouseEventHandler<HTMLDivElement> }> = ({ onClick }) => {
	return (
		<NextArrowB0x onClick={onClick} >
			<ArrowForwardIosIcon />
		</NextArrowB0x>
	);
};


const PrevArrow: FC<{ onClick?: React.MouseEventHandler<HTMLDivElement> }> = ({ onClick }) => {
	return (
		<PrevArrowB0x onClick={onClick} >
			<ArrowBackIosNewIcon />
		</PrevArrowB0x>
	);
};

const SliderFromItems = () => {
	const { tablet, laptop, } = themeDate.breakpoints.values;

	const settings = {

		infinite: true,
		speed: 1500,
		slidesToShow: 4,
		slidesToScroll: 4,
		cssEase: "ease",
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		responsive: [
			{
				breakpoint: laptop,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: tablet,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
		]

	};

	return (
		<Box >
			<Slider lazyLoad="anticipated" {...settings}>
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />

			</Slider>
		</Box>
	);
};

export default SliderFromItems;