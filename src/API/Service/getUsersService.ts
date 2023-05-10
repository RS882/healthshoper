

import { IUser } from "../../Models/IUser";

import { instance } from "../api";



export const getUsersAPI = {
	getUsers: async (): Promise<IUser[]> => {
		const res = await instance.get<IUser[]>(`/auth/users`)
		
		return res.data
	}




};