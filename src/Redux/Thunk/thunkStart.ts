import { createAsyncThunk } from "@reduxjs/toolkit";
import { startAPI } from './../../API/api';
import { createAppAsyncThunk } from "./ThunkFunction";




export const getPhoneNumber = createAppAsyncThunk(
	`start/getPhoneNumber`,
	async (anyData, { rejectWithValue }) => {
		const res = await startAPI.phoneNumber()
			.catch(reject => rejectWithValue(reject.message));//выводим ошибку
		return res;
	}
);

export const getCitysList = createAppAsyncThunk(
	`start/getCitysList`,
	async (anyData, { rejectWithValue }) => {
		const res = await startAPI.cityList()
			.catch(reject => rejectWithValue(reject.message));//выводим ошибку
		return res;
	}
);