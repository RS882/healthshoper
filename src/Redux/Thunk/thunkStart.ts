import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";

import { startAPI } from './../../API/api';

export const getPhoneNumber = createAsyncThunk(
	`start/getPhoneNumber`,
	async (anyData, thunkAPI) => {
		const res = await startAPI.phoneNumber()
			.then(respons => respons.data)
			.catch(reject => thunkAPI.rejectWithValue(reject.message));//выводим ошибку
		return res;
	}
)