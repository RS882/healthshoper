
import { createAsyncThunk } from '@reduxjs/toolkit';
import { requestCallAPI } from '../../API/api';
import { IRequestCall } from '../../commponent/RequestCall/RequestCall';



export const setRequestCall = createAsyncThunk(
	'requestCall/setRequestCall',
	async (data: IRequestCall, thunkAPI) => {
		const res = await requestCallAPI.requestCall(data)
			.then(response => response.status)
			.catch(reject => thunkAPI.rejectWithValue(reject.message));//выводим ошибку
		return res;
	}
);