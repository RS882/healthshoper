import axios, { InternalAxiosRequestConfig } from "axios";

import store from "../Redux/store";

const BASE_URL = `http://localhost:4010/`;


export const instance = axios.create({
	baseURL: BASE_URL,
	// withCredentials: true,
});

instance.interceptors.request.use((config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
	if (config.url === 'auth') {
		const token: string = localStorage.getItem('token')!;
		config.headers.set('Authorization', `Bearer ${token}`);
		// console.log(config);
	}
	return config;
});







