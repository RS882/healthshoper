

import { createAppAsyncThunk } from "./ThunkFunction";
import { startAPI } from "../../API/Service/startAPIservice";




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