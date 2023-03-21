import { createSlice } from '@reduxjs/toolkit';

import { RootState } from './store';


interface IRCall {
	isRequsetCallFormOpen: boolean;
};

const initialState: IRCall = {
	isRequsetCallFormOpen: false,
};



export const requesrCallSlice = createSlice({
	name: 'requestCall',
	initialState,
	reducers: {
		setRequsetCallFormOpen: (state) => {
			state.isRequsetCallFormOpen = true;
		},
		setRequsetCallFormClose: (state) => {
			state.isRequsetCallFormOpen = false;
		},
	},
});


export const { setRequsetCallFormOpen, setRequsetCallFormClose } = requesrCallSlice.actions;

export const selIsRequsetCallForm = (state: RootState) => state.requesrCall.isRequsetCallFormOpen;


export default requesrCallSlice.reducer;