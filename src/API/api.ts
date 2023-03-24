import axios from "axios";
import { IRequestCall } from "../commponent/RequestCall/RequestCall";

const BASE_URL = `http://localhost:4010/`;


const instance = axios.create({
	baseURL: BASE_URL,
});

export const startAPI = {
	phoneNumber: () => instance.get(`phone_number`),
	cityList: () => instance.get(`citys_list`),
};

export const requestCallAPI = {
	requestCall: (data: IRequestCall) => instance.post(`request_call`, data),
};