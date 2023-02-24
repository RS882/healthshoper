import axios from "axios";

const BASE_URL = `http://localhost:4010/`;


const instance = axios.create({
	baseURL: BASE_URL,
});

export const startAPI = {
	phoneNumber: () => instance.get(`phone_number`)
};