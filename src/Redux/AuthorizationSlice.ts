import { createAction, createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

import { RootState } from './store';
import { getUsers, login, logout, refresh, regUser } from './Thunk/thunkAuth';
import { IUser } from '../Models/IUser';
import { log } from 'console';




export interface IAuthorization {
	userData: IUser;
	isLoginFormOpen: boolean;
	isAuth: boolean;
	users: IUser[];

}

const initialState: IAuthorization = {
	userData: {} as IUser,
	isLoginFormOpen: false,
	isAuth: false,
	users: [],
};

const registration = createAction<IUser>(regUser.fulfilled.type);



const loginUser = createAction<IUser>(login.fulfilled.type);
const logoutUser = createAction<number>(logout.fulfilled.type);
const checkAuth = createAction<IUser>(refresh.fulfilled.type);
const getAllUsers = createAction<IUser[]>(getUsers.fulfilled.type);
const errorGetAllUsers = createAction<string>(getUsers.rejected.type);

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
			.addCase(logoutUser, (state, action) => {
				state.userData = {} as IUser;
				state.isAuth = false;
			})
			.addCase(checkAuth, (state, action) => {
				state.userData = action.payload;
				state.isAuth = true;
			})
			.addCase(getAllUsers, (state, action) => {
				state.users = action.payload;
			})
			.addCase(errorGetAllUsers, (state, action) => {
				state.isAuth = false;
			})
	}


});

export const { setIsLoginFormOpen } = AuthorizationSlice.actions;


export const selIsLoginFormOpen = (state: RootState) => state.authorization.isLoginFormOpen;
export const selIsAuth = (state: RootState) => state.authorization.isAuth;
export const selAuthUser = (state: RootState) => state.authorization.userData;
export const selUsers = (state: RootState) => state.authorization.users;

export default AuthorizationSlice.reducer
