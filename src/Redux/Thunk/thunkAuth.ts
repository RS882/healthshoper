
import { authAPI } from '../../API/Service/authAPIService';

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