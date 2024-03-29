import { Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import Item from './Item/Item';
import SliderFromItems from '../Slider/SliderFromItems';
import { useAppSelector } from '../../Redux/store';
import { selItems } from '../../Redux/ItemsSlice';
import { IItem } from '../../Models/item/itemModel';





export const styleMain = {
	mt: '130px',

	zIndex: 'appBar',
	border: 1,

} as const;




const Main = () => {


	const products: IItem[] = useAppSelector(selItems);

	return (

		<Box component='main' sx={{ zIndex: 'appBar', }}>
			<Container maxWidth={'maxWidth'} sx={{ ...styleMain, }}>


				<SliderFromItems items={products} />
			</Container>
		</Box>

	);
};

export default React.memo(Main);