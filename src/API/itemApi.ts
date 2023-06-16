import axios from "axios";

const BASE_URL = `https://fakestoreapi.com/products`;

export const instanceItem = axios.create({
	baseURL: BASE_URL,

});