

import { AxiosResponse } from "axios";
import { IUser } from "../../Models/IUser";

import { instance } from "../api";



export const getUsersAPI = {
	getUsers: async (): Promise<IUser[]> => {
		const res: AxiosResponse<IUser[], any> = await instance.get<IUser[]>(`/auth/users`)

		return res.data
	}




};