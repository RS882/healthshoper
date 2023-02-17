import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { delElemFromArray } from '../Utilits/functions';
import { RootState } from './store';


interface IStartData {
	favorites: string[];
	itemInCart: string[];
};

const initialState: IStartData = {
	favorites: ['2', '2', '2', '4', '2', '2', '2', '2', '2',],
	itemInCart: ['2', '2', '2', '2', '21', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2',],

};

export const actionSlice = createSlice({
	name: 'action',
	initialState,
	reducers: {
		addToFavoriets: (state, action: PayloadAction<string>) => {
			state.favorites = state.favorites.includes(action.payload) ? state.favorites : [...state.favorites, action.payload];
		},
		delFromFavoriets: (state, action: PayloadAction<string>) => {
			state.favorites = delElemFromArray(state.favorites, action.payload);
		},
		clearFavorites: (state) => {
			state.favorites = [];
		},
		addToCart: (state, action: PayloadAction<string>) => {
			state.itemInCart = [...state.itemInCart, action.payload];
		},
		delFromCart: (state, action: PayloadAction<string>) => {
			state.itemInCart = delElemFromArray(state.itemInCart, action.payload);
		},
		clearCart: (state) => {
			state.itemInCart = [];
		},
	},

	// extraReducers: {},
});



export const { addToFavoriets, delFromFavoriets, delFromCart, addToCart, clearFavorites } = actionSlice.actions;

export const selNumberOfItemInCart = (state: RootState) => state.action.itemInCart.length;
export const selNumberOfFarorites = (state: RootState) => state.action.favorites.length;
export const selItemInCart = (state: RootState) => state.action.itemInCart;
export const selFarorites = (state: RootState) => state.action.favorites;

export default actionSlice.reducer;