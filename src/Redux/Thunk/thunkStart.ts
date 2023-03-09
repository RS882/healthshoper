import { createAsyncThunk } from "@reduxjs/toolkit";

import { startAPI } from './../../API/api';

export const getPhoneNumber = createAsyncThunk(
	`start/getPhoneNumber`,
	async (anyData, thunkAPI) => {
		const res = await startAPI.phoneNumber()
			.then(respons => respons.data)
			.catch(reject => thunkAPI.rejectWithValue(reject.message));//выводим ошибку
		return res;
	}
);

export const getCitysList = createAsyncThunk(
	`start/getCitysList`,
	async (anyData, thunkAPI) => {
		const res = await startAPI.cityList()
			.then(respons => respons.data)
			.catch(reject => thunkAPI.rejectWithValue(reject.message));//выводим ошибку
		return res;
	}
);