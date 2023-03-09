import { createSlice } from '@reduxjs/toolkit';

import { RootState } from './store';


interface IModal {
	isModalOpen: boolean;
};

const initialState: IModal = {
	isModalOpen: false,
};



export const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		setModalOpen: (state) => {
			state.isModalOpen = true;
		},
		setModalClose: (state) => {
			state.isModalOpen = false;
		},
	},
});


export const { setModalOpen, setModalClose } = modalSlice.actions;

export const selIsModal = (state: RootState) => state.modal.isModalOpen;


export default modalSlice.reducer;