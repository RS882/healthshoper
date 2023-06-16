import axios, { InternalAxiosRequestConfig } from "axios";
import { authAPI } from "./Service/authAPIService";




const BASE_URL = `http://localhost:4010/`;

// const BASE_URL = `https://demo-server-021.herokuapp.com/`;

export const instance = axios.create({
	baseURL: BASE_URL,
	withCredentials: true,
});
export const checkAuthInstance = axios.create({
	baseURL: BASE_URL,
	withCredentials: true,
});;

instance.interceptors.request.use((config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {

	if (config.url?.startsWith(`/auth`)) {
		const token: string = localStorage.getItem('token')!;
		config.headers.set('Authorization', `Bearer ${token}`);
		// console.log(config);
	}
	return config;
});

instance.interceptors.response.use(config => config,
	async error => {

		const originslRequest = error.config;
		if (error.response.status === 401 && error.config && !error.config._isRetry) {
			originslRequest._isRetry = true;
			try {
				const response = await authAPI.refresh();
				localStorage.setItem(`token`, response.accessToken);
				return instance.request(originslRequest);
			} catch (error) {
				console.log(error);

			}
		}
		throw error;
	}

	// 	(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {

	// 	if (config.url?.startsWith(`/auth`)) {
	// 		const token: string = localStorage.getItem('token')!;
	// 		config.headers.set('Authorization', `Bearer ${token}`);
	// 		// console.log(config);
	// 	}
	// 	return config;
	// }
);






