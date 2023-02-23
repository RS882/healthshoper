import { createAsyncThunk } from "@reduxjs/toolkit";

import { startAPI } from './../../API/api';

export const getPhoneNumber = createAsyncThunk(
	`start/getPhoneNumber`,
	async (anyData, thunkAPI) => {
		const res = await startAPI.phoneNumber()
			.then(respons => {

				return respons.data
			})
			.catch(reject => thunkAPI.rejectWithValue(reject.message));//выводим ошибку
		return res;
	}
)