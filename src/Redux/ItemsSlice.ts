import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CityListType } from '../Types/cityList';
import { RootState } from './store';
import { IItem } from '../Models/item/itemModel';
import { ICategories } from '../Models/item/categoieModel';
import { getCategoies, getItemsWithLimit } from './Thunk/thunkItems';



const initialState = {
	usersCity: null as string | null,
	items: [] as IItem[],
	categories: [] as ICategories,
};

export type IItemsData = typeof initialState;

const getItems = createAction<IItem[]>(getItemsWithLimit.fulfilled.type);
const getAllCategorie = createAction<ICategories>(getCategoies.fulfilled.type);

export const itemsSlice = createSlice({
	name: 'items',
	initialState,
	reducers: {
		changeUsersCity: (state, action: PayloadAction<string>) => {
			state.usersCity = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(getItems, (state, action) => {
				state.items = action.payload;
				state.items.map(e => {

					//==========================================
					const randomMax = (max: number): number => Math.round(Math.random() * max);

					switch (randomMax(3)) {
						case 1:
							e.banners = ['hit'];
							break;
						case 2:
							e.banners = ['promotion'];
							break;
						case 3:
							e.banners = ['hit', 'promotion'];
							break;
						default:
					};
					const salePrice: string = (e.price - randomMax(30) * e.price / 100).toFixed(2);


					if (+salePrice > 20) e.oldPreise = +salePrice;
					//=================================
				})
			})
			.addCase(getAllCategorie, (state, action) => {
				state.categories = action.payload;
			})
	}


});


export const { changeUsersCity, } = itemsSlice.actions;

export const selUsersCity = (state: RootState) => state.items.usersCity;
export const selItems = (state: RootState) => state.items.items;
export const selCategorie = (state: RootState) => state.items.categories;

export default itemsSlice.reducer;