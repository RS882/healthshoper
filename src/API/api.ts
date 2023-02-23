import axios from "axios";

const BASE_URL = `http://localhost:4010/`;


const instance = axios.create({
	baseURL: BASE_URL,
	// withCredentials: true,
	// headers: { 'Content-Type': 'application/json' },

});

export const startAPI = {
	phoneNumber: () => instance.get(`phone_number`)
		.then(res => {

			return res

		})
		.catch(res => {
			console.log('catch');
			console.log(res);
			return res

		}),
};