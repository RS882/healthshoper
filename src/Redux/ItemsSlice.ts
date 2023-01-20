import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CityListType } from '../commponent/Header/TopBar/cityList';
import { RootState } from './store';


interface IItemsData {
	usersCity: CityListType | null;
};

const initialState: IItemsData = {
	usersCity: null,
};



export const itemsSlice = createSlice({
	name: 'items',
	initialState,
	reducers: {
		changeUsersCity: (state, action: PayloadAction<CityListType>) => {
			state.usersCity = action.payload;
		}
	},
});


export const { changeUsersCity, } = itemsSlice.actions;

export const sUsersCity = (state: RootState) => state.items.usersCity;


export default itemsSlice.reducer;