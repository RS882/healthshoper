

import { requestCallAPI } from '../../API/Service/requestCallAPIService';
import { IRequestCall } from '../../Types/ARITypes';
import { createAppAsyncThunk } from './ThunkFunction';

export const setRequestCall = createAppAsyncThunk(
	'requestCall/setRequestCall',
	async (data: IRequestCall, { rejectWithValue }) => {
		const res = await requestCallAPI.requestCall(data)
			.catch(reject => rejectWithValue(reject.message));//выводим ошибку
		return res;
	}
);