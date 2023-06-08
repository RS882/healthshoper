
import { authAPI } from '../../API/Service/authAPIService';
import { getUsersAPI } from '../../API/Service/getUsersService';

import { APIUserLoginModel } from '../../Models/ILoginUserModel';

import { createAppAsyncThunk } from './ThunkFunction';

export const regUser = createAppAsyncThunk(
	'authorization/regUser',
	async (data: APIUserLoginModel, { rejectWithValue }) => {
		const res = await authAPI.registration(data)
			.then(respons => {
				localStorage.setItem(`token`, respons.accessToken);
				return respons.user;
			})
			.catch(reject => {

				return rejectWithValue(reject.message && reject.response?.data?.message)
			});//выводим ошибку

		// console.log(res);

		return res;
	}
);

export const login = createAppAsyncThunk(
	'authorization/login',
	async (data: APIUserLoginModel, { rejectWithValue }) => {
		const res = await authAPI.login(data)
			.then(respons => {
				localStorage.setItem(`token`, respons.accessToken);
				return respons.user;
			})
			.catch(reject => {

				return rejectWithValue(reject.message && reject.response?.data?.message)
			});//выводим ошибку

		// console.log(res);

		return res;
	}
);

export const logout = createAppAsyncThunk(
	'authorization/logout',
	async (data, { rejectWithValue }) => {
		const res = await authAPI.logout()
			.then(respons => {
				localStorage.removeItem(`token`);
				if (respons !== 200) throw new Error('Something went wrong...')
				return respons;
			})
			.catch(reject => {
				console.log(reject);
				return rejectWithValue(reject.message && reject.response?.data?.message)
			});//выводим ошибку

		// console.log(res);

		return res;
	}
);

export const refresh = createAppAsyncThunk(
	'authorization/checkAuth',
	async (_, { rejectWithValue }) => {
		const res = await authAPI.refresh()
			.then(respons => {
				localStorage.setItem(`token`, respons.accessToken);
				return respons.user;
			})
			.catch(reject => {
				console.log(reject);
				return rejectWithValue(reject.message && reject.response?.data?.message)
			});//выводим ошибку

		// console.log(res);

		return res;
	}
);

export const getUsers = createAppAsyncThunk(
	'authorization/users',
	async (_, { rejectWithValue }) => {
		const res = await getUsersAPI.getUsers()
			.then(respons => {

				return respons;
			})
			.catch(reject => {
				//console.log(reject);
				return rejectWithValue(reject.message && reject.response?.data?.message)
			});//выводим ошибку

		console.log(res);

		return res;
	}
);