import { AxiosResponse } from "axios";
import { APIUserLoginModel } from "../../Models/ILoginUserModel";
import { UserResponsModel } from "../../Models/respons/userResponsModel";
import { instance } from "../api";



export const authAPI = {
	login: (loginData: APIUserLoginModel): Promise<UserResponsModel> =>
		instance.post<UserResponsModel>(`/auth/login`, loginData)
			.then(res => res.data),

	registration: (regData: APIUserLoginModel): Promise<UserResponsModel> =>
		instance.post<UserResponsModel>(`/auth/registration`, regData)
			.then(res => res.data),

	logout: (): Promise<void> => instance.post(`/auth/logout`),
};