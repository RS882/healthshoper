import { AxiosResponse } from "axios";
import { instance } from "../api";
import { IUser } from "../../Models/IUser";


export const userAPI = {
	getUsers: (): Promise<AxiosResponse<IUser[]>> =>
		instance.get<IUser[]>(`'/auth/users`),

};