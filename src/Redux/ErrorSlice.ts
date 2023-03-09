import { createAction, createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { addItemToArrayOneDublicat } from '../Utilits/functions';
import { RootState } from './store';
import { getCitysList, getPhoneNumber } from './Thunk/thunkStart';


export interface IErrorSlice {
	errorMessage: string[];
	isError: boolean;
};

const initialState: IErrorSlice = {
	errorMessage: [],
	isError: false,
};

const addErrorGetTelNumber = createAction<string>(getPhoneNumber.rejected.type);
const addErrorCitysList = createAction<string>(getCitysList.rejected.type);

// Reducer of error processing
const ErrorSlice = createSlice({
	name: 'error',
	initialState,
	reducers: {
		setErrorMessage: (state, action: PayloadAction<string>) => {
			state.errorMessage = addItemToArrayOneDublicat(state.errorMessage, action.payload);
			state.isError = true;
		},
		delErrorMessage: (state) => {
			state.errorMessage = [];
			state.isError = false;
		},
	},

	extraReducers: (builder) => {
		builder
			.addCase(addErrorGetTelNumber, (state, action) => {
				state.errorMessage = addItemToArrayOneDublicat(state.errorMessage, action.payload);
				state.isError = true;
			})
			.addCase(addErrorCitysList, (state, action) => {
				state.errorMessage = addItemToArrayOneDublicat(state.errorMessage, action.payload);
				state.isError = true;
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
export const selIsError = (state: RootState) => state.error.isError;

export default ErrorSlice.reducer