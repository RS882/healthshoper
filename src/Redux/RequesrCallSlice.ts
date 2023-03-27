import { createAction, createSlice } from '@reduxjs/toolkit';

import { RootState } from './store';
import { setRequestCall } from './Thunk/thunkRequestCall';

interface IResponsRCall {
	responseMessege: string;
}

interface IRCall extends IResponsRCall {
	isRequsetCallFormOpen: boolean;

};

const initialState: IRCall = {
	isRequsetCallFormOpen: false,
	responseMessege: '',
};

const setRCall = createAction<number>(setRequestCall.fulfilled.type);

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
		clearRCallMessage: (state) => {
			state.responseMessege = '';
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(setRCall, (state, action) => {
				if (('' + action.payload).startsWith('2')) state.responseMessege = 'Thanks for the appeal! We will contact you shortly';
				else state.responseMessege = 'Your application is not accepted. Something went wrong...'
			})
	}
});


export const { setRequsetCallFormOpen, setRequsetCallFormClose, clearRCallMessage } = requesrCallSlice.actions;

export const selIsRequsetCallForm = (state: RootState) => state.requesrCall.isRequsetCallFormOpen;
export const selInfoMessage = (state: RootState) => state.requesrCall.responseMessege;

export default requesrCallSlice.reducer;