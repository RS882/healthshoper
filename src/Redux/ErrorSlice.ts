import { createAction, createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { addItemToArrayOneDublicat } from '../Utilits/functions';
import { RootState } from './store';
import { getPhoneNumber } from './Thunk/thunkStart';


export interface IErrorSlice {
	errorMessage: string[];
};

const initialState: IErrorSlice = {
	errorMessage: [],
};

const addErrorGetTelNumber = createAction<string>(getPhoneNumber.rejected.type);

// Reducer of error processing
const ErrorSlice = createSlice({
	name: 'error',
	initialState,
	reducers: {
		setErrorMessage: (state, action: PayloadAction<string>) => {
			state.errorMessage = addItemToArrayOneDublicat(state.errorMessage, action.payload);
		},
		delErrorMessage: (state) => {
			state.errorMessage = [];
		},
	},

	extraReducers: (builder) => {
		builder
			.addCase(addErrorGetTelNumber, (state, action) => {
				state.errorMessage = addItemToArrayOneDublicat(state.errorMessage, action.payload);
			})
	},
	// extraReducers: {
	// 	[getItem.rejected.type]: addErrorMessage,
	// 	[loginUser.rejected.type]: addErrorMessage,
	// 	[regNewUser.rejected.type]: addErrorMessage,
	// 	[changeUserData.rejected.type]: addErrorMessage,
	// 	[setOrder.rejected.type]: addErrorMessage,
	// }
});

export const { setErrorMessage, delErrorMessage } = ErrorSlice.actions;

export const selErrorMessage = (state: RootState) => state.error.errorMessage;

export default ErrorSlice.reducer