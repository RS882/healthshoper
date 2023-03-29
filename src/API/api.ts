import axios, { AxiosResponse } from "axios";
import { ICityList, IPhoneNumber, IRequestCall } from "../Types/ARITypes";

const BASE_URL = `http://localhost:4010/`;


const instance = axios.create({
	baseURL: BASE_URL,
});

export const startAPI = {
	phoneNumber: () => instance.get<IPhoneNumber>(`phone_number`)
		.then(res => {


			return res.data
		})

	,
	cityList: () => instance.get<ICityList>(`citys_list`)
		.then(res => res.data),
};

export const requestCallAPI = {
	requestCall: (data: IRequestCall) => instance.post<IRequestCall>(`request_call`, data)
		.then(response => response.status),
};