import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CityListType } from '../Types/cityList';
import { RootState } from './store';



const initialState = {
	usersCity: null as string | null,
};

export type IItemsData = typeof initialState;

export const itemsSlice = createSlice({
	name: 'items',
	initialState,
	reducers: {
		changeUsersCity: (state, action: PayloadAction<string>) => {
			state.usersCity = action.payload;
		}
	},
});


export const { changeUsersCity, } = itemsSlice.actions;

export const selUsersCity = (state: RootState) => state.items.usersCity;


export default itemsSlice.reducer;