import { createAction, createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

import { RootState } from './store';
import { login, regUser } from './Thunk/thunkAuth';
import { IUser } from '../Models/IUser';



export interface IAuthorization {
	userData: IUser;
	isLoginFormOpen: boolean;
	isAuth: boolean;
}

const initialState: IAuthorization = {
	userData: {
		id: '',
		email: '',
		isActivate: false,
	},
	isLoginFormOpen: false,
	isAuth: false,
};

const registration = createAction<IUser>(regUser.fulfilled.type);
const loginUser = createAction<IUser>(login.fulfilled.type);

const AuthorizationSlice = createSlice({
	name: 'authorization',
	initialState,
	reducers: {

		setIsLoginFormOpen: (state, action: PayloadAction<boolean>) => {
			state.isLoginFormOpen = action.payload;
		},
		setIsAuthn: (state, action: PayloadAction<boolean>) => {
			state.isAuth = action.payload;
		},
	},

	extraReducers: (builder) => {
		builder
			.addCase(registration, (state, action) => {
				state.userData = action.payload;
				state.isAuth = true;
			})
			.addCase(loginUser, (state, action) => {
				state.userData = action.payload;
				state.isAuth = true;
			})
	}


});

export const { setIsLoginFormOpen } = AuthorizationSlice.actions;


export const selIsLoginFormOpen = (state: RootState) => state.authorization.isLoginFormOpen;
export const selIsAuth = (state: RootState) => state.authorization.isAuth;

export default AuthorizationSlice.reducer
